const splitStr = (str) => {
  const arr = [];
  let temp = '';
  let inQuote = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "'") {
      inQuote = !inQuote;
    } else if (char === ' ' && !inQuote) {
      arr.push(temp);
      temp = '';
    } else {
      temp += char;
    }
  }

  if (temp) {
    arr.push(temp);
  }

  return arr;
}

export const parseInput = (input) => {
  const splittedInput = splitStr(input);

  const [command, ...args] = splittedInput;
  // const [command, ...args] = input.split(/[ ]+(?=(?:(?:[^"]*"){2})*[^"]*$)/g).filter(s => Boolean(s));

  return { command, args }
}
