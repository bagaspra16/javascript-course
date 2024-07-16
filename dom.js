// Mengedit title dari Javascript
document.title = "Johan Liebert";

// Menambahkan text dari Javascript
/*
const body = document.body;
body.append("Hello World");

const h1 = document.createElement('h1'); // <h1></h1>
h1.textContent = "Ini adalah H1"; // <h1>Ini adalah H1</h1>


const namaSaya = document.createElement('p');
namaSaya.innerHTML = "<marquee>BAGAS PRATAMA JUNIANIKA</marquee>";

const namaDia = document.createElement('b');
namaDia.innerText = "JOHAN LIEBERT";

body.append(h1);
body.append(namaSaya);
body.append(namaDia);
*/

// Mengedit style element dari Javascript
const btn1 = document.getElementById('btn1');
const btn2 = document.querySelector('.btn2');

const defaultText1 = 'Pencet 1';
btn1.textContent = defaultText1;

btn1.style.border = 'none';
btn1.style.padding = '5px';
btn1.style.fontSize = '20px';
btn1.style.background = 'yellow';

btn2.style.border = 'none';
btn2.style.padding = '5px';
btn2.style.fontSize = '20px';
btn2.style.background = 'blue';

// Membuat function untuk mengubah fungsi-fungsi dasar
function gantiWarna() {
    btn2.style.background = 'aqua';
}

function ubahText() {
    btn1.textContent = 'Jangan dong!';
}

function oriText() {
    btn1.textContent = defaultText1;
}

const body = document.body;
const namaSaya = document.createElement('b');
namaSaya.innerText = "JOHAN LIEBERT";
namaSaya.style.fontSize = "38px";

function munculText() {
    body.append(namaSaya);

}

function ubahWarna() {
    namaSaya.style.backgroundColor = "red";
}

// DONE!!!