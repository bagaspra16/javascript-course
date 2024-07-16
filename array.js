// Array

console.log("-------------Array-------------");

// Mendefinisikan data array dengan nilai yang sudah ditentukan
let namaTeman = ['tio','robby','dimas','bebi','raffi'];

// Menambah data
namaTeman.push('sabil','devan');

// Menghapus data dari depan
namaTeman.shift();

// Menghapus data dari belakang
namaTeman.pop();

// Mendefinisikan data array dengan nilai kosong
let namaTemanBaru = [];

namaTemanBaru[0] = 'gheron';
namaTemanBaru[1] = 'raza';
namaTemanBaru.pop();
namaTemanBaru.shift();
namaTemanBaru.push('bagas');

console.log(`Nama Teman Ke-1 : ${namaTeman[0]}`);
console.log(`Nama Teman Ke-2 : ${namaTeman[2]}`);
console.log(`Nama Teman Ke-3 : ${namaTeman[3]}`);
console.log(`Nama Teman Ke-4 : ${namaTeman[4]}`);
console.log(`Nama Teman Ke-5 : ${namaTeman[1]}`);

console.log("-------------------------------");

console.log(`Nama Teman Baru : ${namaTemanBaru}`);


alert(`Perkenalkan nama teman-teman saya yang pertama ada ${namaTeman[0]}, kedua ${namaTeman[3]}, ketiga ada ${namaTeman[2]}, dan terakhir ada ${namaTeman[1]}.`);
alert(namaTeman);
alert(namaTemanBaru);
