
/* 通常の関数 */
// function tax(number) {
//   return number * 1.08;
// }

// const tax = function(number) {
//   return number *1.08;
// }

/* アロー関数はfunctionが不要 */
// const tax = (number) => {
//   return number * 1.08;
// }

/* 処理が一行の場合は「{}」と「return」が不要・引数が一つの場合は「()」がいらなくなる */
// const tax = number => number * 1.08;

/* 引数がない場合は()だけ付ける */
// const tax = () => 200*1.08;


// document.getElementById('test').textContent = tax(100);

document.getElementById('test').addEventListener('click', function() {
  setTimeout(() => {
    console.log(this)
    this.textContent = 'クリックされました';
  }, 1000)
})