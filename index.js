const cats = ["Milo", "Otis", "Garfield"]


beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });

function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat (name){
    const newCats = [...cats,"Broom"]
    return newCats
}

function prependCat (name){
    const newerCat = ["Arnold",...cats,]
    return newerCat
}

function removeLastCat(){
   const removeCat = cats.slice(0,2)
   return removeCat
}

function removeFirstCat(){
    const firstCat = cats.slice(1)
    return firstCat
}