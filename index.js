function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(target){    //Nested = ID, Target = CLASS
 return document.querySelectorAll(target); 
}