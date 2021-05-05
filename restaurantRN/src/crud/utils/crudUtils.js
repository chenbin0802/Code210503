/**
 * This function combine each part of type
 * example RESTAURANT_FETCH_REQUEST / RESTAURANT_FETCH_SUCCESS
 * @param  {...any} args 
 * @returns combined type string
 */
export function makeActionType (...args) {
  return args
    .filter((arg) => arg)
    .join('_')
    .toUpperCase()
}
