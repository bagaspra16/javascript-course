let angka1, angka2, hasil;

document.getElementById("button_jumlah").onclick = function(){
    angka1 = document.getElementById("angka1").valueAsNumber;
    angka2 = document.getElementById("angka2").valueAsNumber;

    console.log(`Angka Ke-1 = ${angka1}  Tipe  =  ${typeof angka1} `);
    console.log(`Angka Ke-2 = ${angka2}  Tipe  =  ${typeof angka2} `);

    hasil = parseFloat(angka1) + parseFloat(angka2);

    console.log(`Hasil  =  ${hasil}  Tipe  =  ${typeof hasil} `);

    document.getElementById("hasil").value = hasil;

};

document.getElementById("button_reset").onclick = function(){
    document.getElementById("form_input").reset();
};
