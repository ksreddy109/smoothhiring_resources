import { HtmlRegex } from 'shared/constants';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Normalize API plain text or HTML into HTML suitable for ShReactQuill. */
export function jobDescriptionToQuillHtml(raw: string): string {
  const trimmed = raw?.trim() ?? '';
  if (!trimmed) return '';
  if (HtmlRegex.test(trimmed)) return trimmed;

  const lines = trimmed.split('\n');
  const parts: string[] = [];
  let inList = false;

  const closeList = () => {
    if (inList) {
      parts.push('</ul>');
      inList = false;
    }
  };

  for (const line of lines) {
    const lineTrimmed = line.trim();
    if (!lineTrimmed) {
      closeList();
      continue;
    }

    const isBullet = /^[-•*]\s+/.test(lineTrimmed) || /^\d+\.\s+/.test(lineTrimmed);
    const isHeading =
      lineTrimmed.endsWith(':') && lineTrimmed.length < 96 && !isBullet && !lineTrimmed.includes('http');

    if (isHeading) {
      closeList();
      parts.push(`<h3><strong>${escapeHtml(lineTrimmed)}</strong></h3>`);
    } else if (isBullet) {
      if (!inList) {
        parts.push('<ul>');
        inList = true;
      }
      const itemText = lineTrimmed.replace(/^[-•*]\s+/, '').replace(/^\d+\.\s+/, '');
      parts.push(`<li>${escapeHtml(itemText)}</li>`);
    } else {
      closeList();
      parts.push(`<p>${escapeHtml(lineTrimmed)}</p>`);
    }
  }

  closeList();
  return parts.join('');
}

export function quillHtmlToPlainText(html: string): string {
  const trimmed = html?.trim() ?? '';
  if (!trimmed) return '';

  if (typeof document === 'undefined') {
    return trimmed
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  const el = document.createElement('div');
  el.innerHTML = trimmed;
  return (el.innerText || el.textContent || '').replace(/\n{3,}/g, '\n\n').trim();
}
