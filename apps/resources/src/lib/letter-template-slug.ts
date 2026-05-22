export type LetterTemplateType = 'formal' | 'informal' | 'auto';

/** Map rejection/interview detail slug to editor tab type (first path segment). */
export function letterTemplateTypeFromSlug(slug: string | undefined): LetterTemplateType {
  if (!slug) return 'formal';
  const head = slug.split('-')[0];
  if (head === 'formal' || head === 'informal' || head === 'auto') return head;
  return 'formal';
}

export function letterTemplateDisplayName(slug: string | undefined): string {
  if (!slug) return '';
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
