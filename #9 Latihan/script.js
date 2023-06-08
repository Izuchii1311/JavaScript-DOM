function getPilihanComputer() {
    // Menangkap pilihan com
    const com = Math.random();

    if (com < 0.34) return 'gajah';
    if (com >= 0.34 && com <0.67) return 'orang';
    return 'semut';
}

// parameter (pilihan com, pilihan player)
function getHasil(com, player) {
    if (player == com) return 'Seri!!';
    if (player == 'gajah') return (com == 'orang') ? 'Menang!!' : 'Kalah!!'; 
    if (player == 'orang') return (com == 'semut') ? 'Menang!!' : 'Kalah!!';
    if (player == 'semut') return (com == 'gajah') ? 'Menang!!' : 'Kalah!!';
}


// Animasi
function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    // i dibuat 0, karena untuk membadningkan antara i dengan gambar
    let i = 0;

    const waktuMulai = new Date().getTime();
    // fungsi untuk melakukan sesuatu secara berulang dalam kurun waktu yg sudah ditentukan
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] +'.png');

        // jika i adalah 0 dan == gambar
        // artinya i dibandingkan dengan isi array gambar [0][1][2]
        // jika i lebih besar dari gambar maka hasilnya tidak akan ada
        // namun karena i di set kembali 0 maka akan mencari lagi dengan nilai acak
        if(i == gambar.length) {
            // i = 0 agar memulai gambar dari awal
            i = 0
        }
    }, 100);
}


const pilihan = document.querySelectorAll('li img');
// melooping semua image di dalam li
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
    
    const pilihanComputer = getPilihanComputer();
    // ambil class name dari image yg di looping (img1 class gajah, img2 class orng ....)
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();
    setTimeout(function() {
        const imgCom = document.querySelector('.img-komputer');
        imgCom.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    }, 1000)
        
    })
})


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     // .className ambil nama classnya
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgCom = document.querySelector('.img-komputer');
//     imgCom.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     // .className ambil nama classnya
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgCom = document.querySelector('.img-komputer');
//     imgCom.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     // .className ambil nama classnya
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgCom = document.querySelector('.img-komputer');
//     imgCom.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

