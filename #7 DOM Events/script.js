// // const p3 = document.querySelector('.p3');

// // function ubahWarna() {
// //     // warna berubah ketika ada event
// //     p2.style.backgroundColor = 'pink';
// // }

// // const p2 = document.querySelector('.p2');
// // p2.onclick = ubahWarna;


// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const li = document.createElement('li');
//     const liText = document.createTextNode('Text Li Baru');

//     li.appendChild(liText);

//     ul.appendChild(li);
// });



// Perbedaan event handler
// const p3 = document.querySelector('.p3');
// // event yang pertama akan ditimpa
// p3.onclick = function() {
//     p3.style.backgroundColor = 'pink';
// }
// p3.onclick = function() {
//     p3.style.color = 'white';
// }


// Perbedaan addEventListener
// Keduanya dijalankan
const p3 =  document.querySelector('.p3');
// p3.addEventListener('dblclick', function() {
//     p3.style.backgroundColor = 'pink';
// });
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'pink';
});
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white';
});
// p3.addEventListener('click', function() {
//     p3.style.color = 'red   ';
// });
