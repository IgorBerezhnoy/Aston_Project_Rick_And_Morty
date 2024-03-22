export const getFallBackName = (userName: string) => {
  return userName
    .split(' ')
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase()
}
