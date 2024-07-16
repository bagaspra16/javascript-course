// Operasi string
console.log("---------Operasi String---------");

let dataString = "AIUEO";
let dataChar = dataString.charAt(0);
console.log(`Character pada index data ke-0 = ${dataChar}`);

dataChar = dataString.charAt(1);
console.log(`Character pada index data ke-1 = ${dataChar}`);

dataChar = dataString.charAt(2);
console.log(`Character pada index data ke-2 = ${dataChar}`);

dataChar = dataString.charAt(3);
console.log(`Character pada index data ke-3 = ${dataChar}`);

dataChar = dataString.charAt(4);
console.log(`Character pada index data ke-4 = ${dataChar}`);

console.log("\n");

// Menyambung string
console.log("---------Menyambung String---------");

let namaDepan = "Bagas";
let namaTengah = "Pratama";
let namaBelakang = "Junianika";

let namaLengkap = namaDepan.concat(' ',namaTengah,' ',namaBelakang);
console.log(namaLengkap);

console.log("\n");

// Mengambil index string
console.log("---------Mengambil Index---------");

console.log(namaLengkap.indexOf('B'));
console.log(namaLengkap.indexOf('u'));
console.log(namaLengkap.indexOf('t'));
console.log(namaLengkap.indexOf('a'));

console.log("\n");

// Mengambil index substring
console.log("---------Substring Index---------");

console.log(namaLengkap.substring(0,13));
console.log(namaLengkap.substring(13,6));
console.log(namaLengkap.substring(14,23));

console.log("\n");

// Slice index string
console.log("---------Slice Index---------");

console.log(namaLengkap.slice(13,6));
console.log(namaLengkap.slice(6,13));

console.log("\n");

// Replace index string
console.log("---------Replace Index---------");

namaLengkap = namaLengkap.replace('Bagas Pratama Junianika','Naqi Nuwairoh');
console.log(namaLengkap);

console.log("\n");

// To lower index string
console.log("---------To Lower Index---------");

console.log(namaLengkap.toLowerCase());

console.log("\n");

// Uppercase index string
console.log("---------Uppercase Index---------");

console.log(namaLengkap.toUpperCase());

console.log("\n");

// Extract data
console.log("---------Extract Data---------");

let dataString2 = '16.5';
console.log(typeof dataString2);
console.log(dataString2);

console.log("------------------------------");

let dataInteger = parseInt(dataString2);
console.log(typeof dataInteger);
console.log(dataInteger);

console.log("------------------------------");

let dataFloat = parseFloat(dataString2);
console.log(typeof dataFloat);
console.log(dataFloat);





