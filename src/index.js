
// You should implement your task here.

module.exports = function towelSort (matrix) {
  //let matrix = []
  // matrix = typeof arr !== 'undefined' ? arr : [];
/* 
   if(Array.length === 0 ){
    return []
    }  */
    if(!matrix){
      return []
    }
  let i = 0;
  for( i ; i < matrix.length; i++)
  if(i % 2 !== 0){
    matrix[i].reverse()
  }


let arr =[]

  let unitedMatrix = arr.concat( /* matrix[0], matrix[1], matrix[2] */...matrix)
  console.log(unitedMatrix)
  if(unitedMatrix === 0){
    return []
  }
  return unitedMatrix;
 /*  if(unitedMatrix === 0){
    return []
  } */
}
