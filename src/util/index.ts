/**
 * Checks if the given index is within the bounds of the array.
 *
 * @param array - the array to check
 * @param index - the index to check
 */
export function isIdxInArrayRange(array: any[], index: number): boolean {
  return index >= 0 && index < array.length;
}
