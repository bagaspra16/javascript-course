// For Loop

console.log("-------------For Loop-------------");

const namaTeman = ['tio','robby','dimas','bebi','raffi'];
console.log(`Banyak Data Array = ${namaTeman.length}`);

// Mendefinisikan for loop dasar
let n = 1;
for (let x = 0;x < namaTeman.length;x++){
    console.log("-------------Urutan Data-------------");
    console.log(`${n++}. ${namaTeman[x]}`);
}


