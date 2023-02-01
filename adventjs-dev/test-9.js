function checkJump(heights) {
  
  const arr = [].concat(heights);

  const asc = arr => arr.join("") === arr.sort((a, b) => a-b).join("");
  const desc = arr => arr.join("") === arr.sort((a, b) => b-a).join("");
  
  if ( (asc(heights) || desc(heights)) === true ) return false;

  else {
    const medium = arr.indexOf(Math.max.apply(Math, arr));

    const left = arr.slice(0, medium);
    const right = arr.slice(medium);
    if ((left.length < 1  || right.length < 1) ) return false;
    
    if (( (asc(left) && desc(right)) === true )) return true;
  }
  
  return false;
}

const heights = [2, 2, 1]
console.log(checkJump(heights))