export const randomEmoji = () => {
  const allowedEmoji = [...'😊🙃🤪🙂🤑🙁😞🥶🥵😈😂😂🤣😁😀🤓🤯😴💩👻👽🤖👾👐🖖✌️🤟🤘🤙👋🐭🦕🦖🐉']
  const index = Math.floor(Math.random() * allowedEmoji.length)
  const emoji = allowedEmoji[index]

  return emoji
}
