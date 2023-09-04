export function fun() {
  let array: any = [];
  for (let i = 0; i < 12; i++) {
    array.push(firstobj());
  }

  return array;
}
function firstobj() {
  let array = ['US', 'DP', 'SS', 'PU'];
  const obj: { [index: string]: number } = {};
  for (let i = 0; i < array.length; i++) {
    let randomNum = Math.floor(Math.random() * 13);
    obj[array[i]] = randomNum;
  }

  return obj;
}
