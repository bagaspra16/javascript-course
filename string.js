// 1. Escaping String (\' \" \\ \n \r \t \b \f)
console.log("---------Escaping String---------");

let stringSpecial1 = 'selamat datang "dunia gelap"';
console.log("Type of Data =",typeof stringSpecial1);
console.log("First Data =",stringSpecial1);

console.log("---------------------------------");

let stringSpecial2 = "selamat \tdatang \"dunia cerah\"";
console.log("Type of Data =",typeof stringSpecial2);    
console.log("Second Data =",stringSpecial2);

console.log("---------------------------------");

let stringSpecial3 = "selamat datang di dunia yang cerah \nbagasku";
console.log("Type of Data =",typeof stringSpecial3);    
console.log("Second Data =",stringSpecial3);

console.log("\n");

// 2. Literal String (Template literal string)
console.log("---------Literal String---------");
let namaDepan = "Bagas";
let namaTengah = "Pratama";
let namaBelakang = "Junianika";
let tanggalLahir = "16 Juni 2006";
let usia = 18;

let namaLengkap ="Nama Lengkap : " + namaDepan + " " + namaTengah + " " + namaBelakang + "\n" + "Usia : " + usia; 
console.log(namaLengkap);

console.log("--------------------------------");

// Model literal string yang lebih baik
let biodata = `Nama Lengkap : ${namaDepan} ${namaTengah} ${namaBelakang} \nTanggal Lahir : ${tanggalLahir} \nUsia : ${usia}`;
console.log(biodata);


