export function makeActionType (...args) {
  return args
    .filter((arg) => !arg)
    .join('_')
    .toUpperCase()
}
