const async = require('async');
async.parallel([
  // 첫번째 실행
  // 다음 task으로 이동하기 위해서는 callback을 실행해야하고,
  // 사용방법은 callback(에러, 결과값[, 결과값#2...]) 형태로 사용됩니다.
  // -----------------------------------------------------
  function(callback) {
    setTimeout(function() {
      console.log('--- async.parallel::ste#1 ---');
//      // 다음 task으로 이동하기 위해 callback 실행
//      // one값 전달
      callback(null, 'one');
    }, 200);
  },
  function(callback) {
    setTimeout(function(){
     console.log('--- async.parallel::ste#2 ---');
      // 다음 task으로 이동하기 위해 callback 실행
      // two값 전달
      callback(null, 'two');
    }, 100);
  },
],
// 모든 task를 끝내고, 아래 callback으로 에러와 배열인자가 전달됩니다.
// ------------------------------------------------------
function(err, results) {
  console.log('--- async parallel result #1 ---');
  console.log(arguments);
});