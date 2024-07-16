// Pengkondisian Dasar menggunakan If/Else & Switch Case

console.log("-------------Condition-------------");

let nama = 'Bagas Junianika';
let tinggiBadan = 177.5;
let beratBadan = 64;
let pacar;

// Pengkondisian dengan If/Else
if (pacar == null) {
    pacar = 'belum punya';
}else{
    pacar = 'udah punya';
}

// Pengkondisian dengan Switch Case
switch (pacar) {
    case 1:
        pacar = 'punya 1';
        break;
    case 2:
        pacar = 'punya 2';
        break;
    case 3:
        pacar = 'banyak sekali';
        break;
    default: 
        pacar = "tak punya";
        break;
}

console.log(`Nama : ${nama}`);
console.log(`Berat Badan : ${beratBadan}`);
console.log(`Tinggi Badan : ${tinggiBadan}`);
console.log(`Pacar : ${pacar}`);

alert(`Perkenalkan nama saya ${nama}, berat badan saya ${beratBadan}, tinggi badan saya ${tinggiBadan}, saya ${pacar} pacar.`);