export function taskFirst() {
  const task = "I prefer const when I can.";
  return task;
}

export function getLast() {
  return " is okay";
}

export function taskNext() {
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}
export const taskFirst = () => "I prefer const when I can.";

export const getLast = () => " is okay";

export const taskNext = () => `But sometimes let${getLast()}`;
