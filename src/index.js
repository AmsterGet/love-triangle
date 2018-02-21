module.exports = function getLoveTrianglesCount(preferences = []) {
    let trianglesCount = 0;
  preferences.forEach(function(item, index, array) {
      let thirdLoversLove = array[array[item-1]-1]-1;
      if (index===thirdLoversLove) {
          trianglesCount++;
      }
  });
  return Math.trunc(trianglesCount/3);
};
