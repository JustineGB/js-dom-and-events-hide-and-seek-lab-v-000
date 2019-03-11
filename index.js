function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nestedTarget){    //Nested = ID, Target = CLASS
 let nested = document.queryElementById('nested');
 let target = nested.querySelectorAll('target');
 return target;
}