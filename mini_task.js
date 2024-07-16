// Mini Task From Dea Afrizal Javascript Basic
// Buat penentu hari dari tanggal yang ada saat ini di pc/laptop
console.log("--------------Mini Task--------------");

let hari = new Date().getDay();

switch(hari){
    case 1:
        hari = 'senin';
        break;
    case 2:
        hari = 'selasa';  
        break;
    case 3:
        hari = 'rabu';
        break;
    case 4:
        hari = 'kamis';
        break;
    case 5:
        hari = `jum'at`;
        break;
    case 6:
        hari = 'sabtu';
        break;
    case 7:
        hari = 'minggu';
        break;
}

console.log(`Hari ini adalah hari ${hari} di pc/laptop ini!`)
alert(`Hari ini adalah hari ${hari} di pc/laptop ini!`);

// DONE!!!
