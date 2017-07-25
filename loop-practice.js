// Loop 1 
// output - 0 100 200 300 400 500
console.log('output - 0 100 200 300 400 500')
for (i=0; i < 6; i++){
    console.log(i * 100)
}
// Loop 2 
// output - 1 2 4 8 16 32 64
console.log('output - 1 2 4 8 16 32 64')
for(i = 0; i < 7; i++){
    console.log(Math.pow(2,i))
}
// Loop 3 
// output - 1 1 1 2 2 2 3 3 3
console.log('output - 1 1 1 2 2 2 3 3 3')
for (i=1; i < 4; i++){
    for (j=1; j < 4; j++){
        console.log(i)
    }
}
// Loop 4 
// output - 0 2 4 6 8 10
console.log('output - 0 2 4 6 8 10')
for (i=0; i < 6; i++){
    console.log(i+i)
}
// Loop 5
// output - 3 6 9 12 15
console.log('output - 3 6 9 12 15')
for (i=0; i < 5; i++){
    console.log((i+1)*3)
}
// Loop 6
// output - 9 8 7 6 5 4 3 2 1 0
console.log('output - 9 8 7 6 5 4 3 2 1 0')
for (i=9; i >= 0; i--){
    console.log(i)
}
// Loop 7
// output - 0 1 2 3 0 1 2 3 0 1 2 3
console.log('output - 0 1 2 3 0 1 2 3 0 1 2 3')
for (i=0; i < 3; i++){
    for (j=0; j < 4; j++){
        console.log(j)
    }
}