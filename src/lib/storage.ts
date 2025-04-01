/**
 * LocalStorage wrapper with type safety
 */
export class LocalStorage {
  /**
   * Get item from localStorage
   * @param key Storage key
   * @returns Parsed value or null if not found
   */
  static get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  /**
   * Set item in localStorage
   * @param key Storage key
   * @param value Value to store (will be stringified)
   */
  static set(key: string, value: unknown): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Remove item from localStorage
   * @param key Storage key
   */
  static remove(key: string): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  }

  /**
   * Clear all items from localStorage
   */
  static clear(): void {
    if (typeof window === 'undefined') return;
    localStorage.clear();
  }
}
