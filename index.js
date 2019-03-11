function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nestedTarget){    //Nested = ID, Target = CLASS
 return document.querySelectorAll('#nested .target');
}

function deepestChild() {  //deepest node in #grand-node
  return document.querySelector(#grand-node);
}