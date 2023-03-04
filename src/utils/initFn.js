// 给字符串添加额外的方法
String.prototype.query = function () {
  // console.log('aaaa', this.toString())
  const search = new URLSearchParams(this.toString() ?? '')
  return Object.fromEntries(search.entries())
};

// [1,2,3].aaa()

// Array.prototype.aaa = function(){
// console.log(this);
// }