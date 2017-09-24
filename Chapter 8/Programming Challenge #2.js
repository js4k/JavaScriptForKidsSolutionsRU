var areArraysSame = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

areArraysSame([1, 2, 3], [4, 5, 6]);
// false

areArraysSame([1, 2, 3], [1, 2, 3]);
// true

areArraysSame([1, 2, 3], [1, 2, 3, 4]);
// false
