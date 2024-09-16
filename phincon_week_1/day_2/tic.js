function Whowon() {
  let arr = [
    ["X", "O", "O"],
    ["O", "O", "X"],
    ["X", "O", "X"],
  ];

  var row = arr.length;
  for (let i = 0; i < row; i++) {
    console.log(arr[i][1].split);
  }
}

Whowon();
