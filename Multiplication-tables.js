/*
Your task, is to create N×N multiplication table, of size provided in parameter.
For example, when given size is 3:
  1 2 3
  2 4 6
  3 6 9

For the given example, the return value should be:
  [[1,2,3],[2,4,6],[3,6,9]]
*/


// Solution

const multiplicationTable = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= n; j++)
      row.push(i * j);
    res.push(row);
  }
  return res;
}

// or

multiplicationTable = function(size) {
  return Array(size).fill(0).map((_,j)=> 
         Array(size).fill(0).map((_,i)=>(j+1)*(i+1)));
}