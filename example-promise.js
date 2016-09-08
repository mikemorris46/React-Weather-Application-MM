// function getTempCallback (location, callback) {
//   callback(undefined, 30);
//   callback('City/Country not found');
// };
//
// getTempCallback('Perth, AU', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout( () => {
//       resolve(35);
//       reject('City/Country not found');
//     }, 1000)
//   })
// };
//
// getTempPromise('Perth, AU').then(function (temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise failed', err);
// });
//

function addPromise(a, b) {
  return new Promise( function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Both arguments must be numbers');
    }
  });
}

addPromise(13, 6).then(function (result) {
  console.log('promise success', result);
}, function(err) {
  console.log('promise failed', err);
});

addPromise(13, 'two').then(function (result) {
  console.log('promise success', result);
}, function(err) {
  console.log('promise failed', err);
});
