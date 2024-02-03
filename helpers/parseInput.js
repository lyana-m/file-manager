export const parseInput = (input) => {
  const [command, ...args] = input.split(' ');

  return {command, args}
}
