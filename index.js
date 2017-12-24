const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittnes;
}

function appendKitten(name){
  var newarray = [...kittens, name];
  return newarray;
}

function prependKitten(name){
  var newarray = [name, ...kittens];
  return newarray;
}
