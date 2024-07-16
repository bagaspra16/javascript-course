//Type Data Numbers - 64 Bit

let dataNumber = 1150;
let dataFloat = 115.690;
let dataBigInt = 127138481348137134128n;

console.log("---------Integer---------");

console.log(dataNumber);
console.log(typeof dataNumber);

console.log("----------Float----------");

console.log(dataFloat);
console.log(typeof dataFloat);


console.log("----------BigInt----------");

console.log(dataBigInt);
console.log(typeof dataBigInt);

//Take Float Data as Int
console.log("---------Take Int---------");

let data1 = 16.69;

console.log(parseInt(data1));
console.log(typeof data1);

console.log(parseFloat(data1));
console.log(typeof data1);

console.log("----------Contoh----------");

let deposit = "100000";
let pajak = 15000;
let hitung = parseInt(deposit) + pajak;

console.log("Jumlah Deposit = " + deposit);
console.log("Jumlah Pajak = " + pajak);
console.log("Total Pembayaran = " + hitung);

