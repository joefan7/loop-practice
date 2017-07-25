var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// loop 1
// output - rat cat butterfly marmot
console.log('output - rat cat butterfly marmot')
for(var i=0; i < animals.length-1; i++) {
    console.log(animals[i])
}
// loop 2
// output - rat butterfly ocelot
console.log('output - rat butterfly ocelot')
for(var i=0; i < animals.length; i+=2) {
 console.log(animals[i])
}
// loop 3
// output - ocelot marmot butterfly cat rat
console.log('output - ocelot marmot butterfly cat rat')
for(var i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i])
}
// loop 4
// output - rat cat cat butterfly butterfly marmot marmot ocelot
console.log('output - rat cat cat butterfly butterfly marmot marmot ocelot')
for(var i = 0; i < animals.length; i++) {
    if (( i==0 ) || ( i == animals.length - 1)){
        console.log(animals[i])
    } else
        for (j=0; j < 2; j++){
            console.log(animals[i])
        }
}