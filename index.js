function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nestedTarget){    //Nested = ID, Target = CLASS
 return document.querySelector('#nested .target');
}

function deepestChild(){  //deepest node in #grand-node ('boo' 4 divs deep)
  return document.querySelector('#grand-node')[3];
}

function increaseRankBy(n){
  return document.querySelectorAll('.ranked-list');
  
}