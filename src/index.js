/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let result = 0;
  let trianginMap = new Array(preferences.length).fill(EMPTI_VALUE);;


  for (let i = 1; i < preferences.length + 1; i++) {

    if (isInsideOfNewTriang(i, preferences, trianginMap)) {
      result++;
      trianginMap = addTrianginMap(i, preferences, trianginMap, i);
    }
  }


return result;
};


const EMPTI_VALUE = 0;
const TRIANG_LENGTH = 2; 

function isInsideOfNewTriang(number, preferences, trianginMap) {

  let head = preferences[number - 1];


  if (number == head)
    return false;

  if (number == preferences[head - 1])
    return false;

  let coutStep = 0;

  while (coutStep < preferences.length) {

    if (trianginMap[head - 1] != EMPTI_VALUE)
      return false;

    if (head == number) {
      if (coutStep == TRIANG_LENGTH) {
        return true;
      }
      else
        return false;
    }

    head = preferences[head - 1];
    coutStep++;
  }

  return false;
}

function addTrianginMap(number, preferences, trianginMap, trianginMarker) {
  let head = preferences[number - 1];

  let coutStep = 0;

  while (coutStep < preferences.length) {

    trianginMap[head - 1] = trianginMarker;


    head = preferences[head - 1];
    coutStep++;
  }


  return trianginMap;
}