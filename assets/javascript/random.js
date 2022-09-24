export const getRandom = (n, m) => {
  return Math.floor(Math.random() * (m + 1 - n)) + n
}
