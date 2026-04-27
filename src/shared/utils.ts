import { TResourcesRedirectUrlKey, TToolsRedirectUrlKey } from './SharedModels';
import { EmployerResourcesRedirectUrlMap, ResourcesRedirectUrlMap, ToolsRedirectUrlMap } from './constants';

/**
 * Updates an array by adding or removing an element identified by its unique identifier.
 *
 * @template I - Type of the unique identifier.
 * @template A - Type of the array elements.
 *
 * @param {I} id - The unique identifier of the element to be added or removed.
 * @param {A[]} array - The array to be updated.
 *
 * @returns {A[]} - The updated array after adding or removing the specified element.
 */
export const updateArrayById = <I, A>(id: I, array: A[]): A[] => {
  // Create a deep copy of the array to avoid modifying the original array.
  const updatedArray = JSON.parse(JSON.stringify(array));

  // Check if the element with the given id is already present in the array.
  if (updatedArray?.includes(id)) {
    // If present, remove the element from the array.
    updatedArray.splice(
      updatedArray.findIndex((sI: I) => id === sI),
      1
    );
  } else {
    // If not present, add the element to the array.
    updatedArray.push(id);
  }

  // Return the updated array.
  return updatedArray;
};

export const areAllElementsInArrayXInArrayY = (x: (number | string)[], y: (number | string)[]) => {
  // Check if all elements in array x are in array y
  return x.every(elementX => y.includes(elementX));
};

export const areSomeElementsInArrayXInArrayY = (x: (number | string)[], y: (number | string)[]) => {
  // Check if some elements in array x are in array y
  return x.some(elementX => y.includes(elementX));
};

/**
 * Converts a given string into Title case.
 * Ex: "hello world" gets converted to "Hello World"
 * Also converts strings like 'hello_world', 'HELLO_WORLD', 'hello-world' to 'Hello World'
 */
export const toTitleCase = (string: string): string => {
  string = string.trim();
  const words = string?.split(/[\s_-]+/);
  if (words) {
    for (let i = 0; i < words?.length; i++) {
      const word = words[i];
      const firstLetterIndex = word.search(/[a-zA-Z]/);
      if (firstLetterIndex !== -1) {
        const prefix = word.substring(0, firstLetterIndex);
        const letterPart = word.substring(firstLetterIndex);
        words[i] = prefix + letterPart[0]?.toUpperCase() + letterPart?.substring(1)?.toLowerCase();
      }
    }
    return words?.join(' ');
  } else {
    return '';
  }
};

const FORMAT_ENUM_OVERRIDES: Record<string, string> = {
  mixed_assessment: 'Multi-Format',
};

export const formatEnum = (value?: string | null): string => {
  const normalized = String(value ?? '').trim().toLowerCase().replace(/-/g, '_');
  if (!normalized) return '';
  if (FORMAT_ENUM_OVERRIDES[normalized]) return FORMAT_ENUM_OVERRIDES[normalized];
  return toTitleCase(String(value ?? '').trim());
};

export const getDifficultySwatchColor = (difficulty?: string | null): string => {
  const normalized = (difficulty || '').toLowerCase();
  if (normalized === 'easy') return '#A8DDB0';
  if (normalized === 'hard') return '#E9A7A7';
  return '#FFD39A';
};

/**
 * Gets the initials from a given name string.
 *
 * @param {string} name - The name string to extract initials from.
 * @param {boolean} [noSpace=false] - Whether to exclude spaces in the returned initials.
 * @param {boolean} [excludeMiddleName=false] - Whether to exclude the middle name in the returned initials.
 * @returns {string} The initials of the given name.
 *
 * @example
 * getInitialsFromName("My Name Hello", true);
 * // returns "MNH"
 *
 * @example
 * getInitialsFromName("My Name Hello", false, true);
 * // returns "M H"
 *
 * @example
 * getInitialsFromName("My Name Hello", true, true);
 * // returns "MH"
 */
export const getInitialsFromName = (name: string, noSpace: boolean = false, excludeMiddleName: boolean = false): string => {
  // Split the name by spaces
  const nameParts = name?.split(' ');
  if (nameParts) {
    // If excludeMiddleName is true and there are more than 2 parts, filter out the middle parts
    let initials;
    if (excludeMiddleName && nameParts?.length > 2) {
      initials = [nameParts[0], nameParts[nameParts.length - 1]].map(part => part.charAt(0).toUpperCase());
    } else {
      initials = nameParts?.map(part => part.charAt(0).toUpperCase());
    }

    // Join the initials based on the noSpace parameter
    return initials?.join(noSpace ? '' : ' ');
  } else return '';
};

/**
 * Get resource redirect urls by key.
 * Redirect urls are retrieved from the constants "ResourcesRedirectUrlMap"*/
export const getResourcesRedirect = (redirectKey: TResourcesRedirectUrlKey): string => {
  return ResourcesRedirectUrlMap[redirectKey];
};

/**
 * FOR EMPLOYERS
 * Get resource redirect urls by key.
 * Redirect urls are retrieved from the constants "EmployerResourcesRedirectUrlMap"*/
export const getEmployerResourcesRedirect = (redirectKey: TResourcesRedirectUrlKey): string => {
  return EmployerResourcesRedirectUrlMap[redirectKey];
};

/**
 * Get Tools redirect urls by key.
 * Redirect urls are retrieved from the constants "ToolsRedirectUrlMap"*/
export const getToolsRedirect = (redirectKey: TToolsRedirectUrlKey): string => {
  return ToolsRedirectUrlMap[redirectKey];
};

/**
 * Truncates a given text to a specified maximum length, adding an ellipsis ('...') at the end if the text exceeds the maximum length.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} maxLength - The maximum length of the truncated text.
 * @returns {string} The truncated text with an ellipsis if it exceeds the specified maximum length.
 *
 * @example
 * // returns 'Hello, Wo...'
 * truncateText('Hello, World!', 10);
 *
 * @example
 * // returns 'Hello'
 * truncateText('Hello', 10);
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

/**
 * Compares two objects to determine if they are equal by their JSON string representations.
 *
 * This function converts both objects to their JSON string representations and checks if they are identical.
 *
 * @param obj1 - The first object to compare. This parameter can be of any type.
 * @param obj2 - The second object to compare. This parameter can be of any type.
 * @returns `true` if the JSON string representations of `obj1` and `obj2` are identical, indicating that the objects are equal. Returns `false` otherwise.
 *
 * @remarks
 * - This function uses `JSON.stringify` for comparison, which may not be efficient for very large objects or objects with circular references.
 * - The order of properties in the JSON string representation affects the comparison. This may be an issue if property order is not guaranteed.
 * - The function does not handle objects with circular references and will throw an error if such objects are passed.
 * - Non-enumerable properties and properties with `symbol` keys are not included in the comparison.
 * - Functions and `undefined` values are not included in JSON string representations and will be ignored.
 */
export const areBothObjectsIdentical = (obj1: unknown, obj2: unknown): boolean => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const getWelcomeText = (name?: string): string => {
  let welcomeText = 'Welcome';
  if (name) {
    welcomeText += ` back, ${name}`;
  }
  welcomeText += '!';
  return welcomeText;
};

export const stringToColor = (name: string) => {
  const letter = (name || 'A').trim().toUpperCase().charAt(0);

  const colors = [
    '#FF7272', // A - Coral Red
    '#FF965B', // B - Warm Orange
    '#FFB84D', // C - Golden Yellow
    '#7BC862', // D - Fresh Green
    '#4ECDC4', // E - Turquoise
    '#5B9FFF', // F - Sky Blue
    '#7A7AFF', // G - Indigo
    '#B47AFF', // H - Purple
    '#FF7AAA', // I - Pink
    '#FF6B6B', // J - Salmon
    '#63C7FF', // K - Light Blue
    '#59E1A1', // L - Mint
    '#FF8F59', // M - Peach
    '#5CE1E6', // N - Azure
    '#FF96B7', // O - Rose
    '#8AC926', // P - Lime
    '#6B76FF', // Q - Royal Blue
    '#FF8243', // R - Tangerine
    '#4CB944', // S - Emerald
    '#5D5FEF', // T - Periwinkle
    '#FF6B8B', // U - Watermelon
    '#47C1BF', // V - Teal
    '#FF9966', // W - Apricot
    '#6F8EE8', // X - Cornflower
    '#FF7DA3', // Y - Strawberry
    '#4EC5BB', // Z - Sea Green
  ];

  const index = letter.charCodeAt(0) - 65;
  return colors[Math.abs(index) % colors.length];
};

export const getUrlSearchParams = (key: string): string | null => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(key);
};

/**
 * Formats a website URL by ensuring it has https:// prefix
 * @param url The website URL to format
 * @returns The formatted URL with https:// prefix
 */
export const formatWebsiteUrl = (url: string): string => {
  if (!url) return '';
  return url.startsWith('http') ? url : `https://${url}`;
};

/**
 * Removes http:// or https:// prefix from a URL for display purposes
 * @param url The website URL to format
 * @returns The URL without the protocol prefix
 */
export const removeUrlProtocol = (url: string): string => {
  return url.replace(/^https?:\/\//, '');
};

/**
 * Formats a date string to a readable format.
 *
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string (e.g., "Jan 15, 2024").
 *
 * @example
 * formatDate("2024-01-15T10:30:00Z");
 * // returns "Jan 15, 2024"
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export type TimeFilterPreset = '1m' | '3m' | '6m' | '1y' | 'all';

/** Returns { startDate, endDate } for a time filter preset (e.g. SharedApplicants, list filters). */
export const getDateRangeFromTimeFilter = (timeFilter: TimeFilterPreset): { startDate: string | undefined; endDate: string } => {
  const now = new Date();
  const endDate = now.toISOString().split('T')[0];
  let startDate: string | undefined;
  switch (timeFilter) {
    case '1m':
      startDate = new Date(now.setMonth(now.getMonth() - 1)).toISOString().split('T')[0];
      break;
    case '3m':
      startDate = new Date(now.setMonth(now.getMonth() - 3)).toISOString().split('T')[0];
      break;
    case '6m':
      startDate = new Date(now.setMonth(now.getMonth() - 6)).toISOString().split('T')[0];
      break;
    case '1y':
      startDate = new Date(now.setFullYear(now.getFullYear() - 1)).toISOString().split('T')[0];
      break;
    case 'all':
    default:
      startDate = undefined;
      break;
  }
  return { startDate, endDate };
};
