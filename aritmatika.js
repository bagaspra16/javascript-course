// Operator Aritmatika      

console.log("-------------Aritmatika-------------");

let a = 20;

// Aritmatika dasar pada Javascript
console.log(`Penjumlahan dengan tanda '+' = ${a + 5}`);
console.log(`Pengurangan dengan tanda '-' = ${a - 5}`);
console.log(`Perkalian dengan tanda '*' = ${a * 5}`);
console.log(`Pembagian dengan tanda '/' = ${a / 5}`);

// Aritmatika tambahan pada Javascript
console.log(`Modulus dengan tanda '%' = ${a % 5}`);
console.log(`Pangkat dengan tanda '**' = ${a ** 5}`);

// Perubahan nilai dengan Aritmatika
console.log("----------Perubahan Nilai----------");

console.log(`Nilai awal = ${a}`);
a = a + 10;
console.log(`Nilai terbaru = ${a}`);

// Increment nilai dengan Aritmatika
console.log("-------------Increment-------------");

console.log(`Nilai awal = ${a}`);
a++;
console.log(`Nilai terbaru = ${a}`);

// Decrement nilai dengan Aritmatika
console.log("-------------Decrement-------------");

console.log(`Nilai awal = ${a}`);
a--;
console.log(`Nilai terbaru = ${a}`);

// Studi Kasus Operasi Aritmatika dengan tipe data String
console.log("------------Studi Kasus------------");
let b = 5 + "1";
console.log(`Nilai awal = ${b}`);

b = 5 + parseInt("1");
console.log(`Nilai terbaru = ${b}`);