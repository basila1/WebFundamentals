function getPokemon(){
  var link =[];
  for (var i = 1; i < 152; i++) {
    link.push(("http://pokeapi.co/media/img/" + i + ".png"));


  }

  return link;

}

console.log(getPokemon())
