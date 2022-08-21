export function bubbleSort(data: number[]) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j+1];
        data[j+1] = data[j];
        data[j] = temp;
        // console.log(data, i)
      }
    }
  }
  return data
}