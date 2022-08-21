export function selectionSort(data: number[]) {
  let minIndex;
  for(let i = 0; i < data.length; i++) {
    minIndex = i;
    for (let j = i; j < data.length; j++) {
      if (data[j] < data[minIndex]) minIndex = j;
    }
    let temp = data[minIndex];
    data[minIndex] = data[i];
    data[i] = temp;
    // console.log(data)
  }
  return data;
}