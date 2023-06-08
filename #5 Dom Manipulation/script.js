// DOM Manipulation

// innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Judul Baru Menggunakan JavaScript';

// style.<property>
// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'pink';

// getAttribute()
// setAttribute()
// removeAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// // setAttribute
// judul.setAttribute('id', 'izuchii');        // id : Izuchii
// // getAttribute
// // judul.getAttribute('id');                   // id : Judul
// // removeAttribute
// // judul.getAttribute('id');                   // id : 

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// menambahkan agar 2 attribute -- tidak menggunakan setAttribute tapi classList
// classList.add()      > nambah class baru
// classList.remove()   > hilangkan class yang ada
// classList.toggle()   > jika belum ada class akan ditambahkan & jika sudah ada maka akan dihilangkan
// classList.item()     > mengetahui class tertentu 
// classList.contains() > mengecek dalam sebuah element punya tidak class tertentu
// classList.replace()  > mengganti class yang ada dengan yang baru
const c = document.querySelector('.p2');
