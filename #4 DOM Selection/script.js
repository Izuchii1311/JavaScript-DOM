// // DOM Selection

// // document.querySelector() -> element
// const p4 = document.querySelector('section#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const listOrange = document.querySelector('section#b ul li:nth-child(2)');
// listOrange.style.backgroundColor = 'orange';

// // const p = document.querySelector('p');       -> hanya memilih 1 element p


// // document.querySelectorAll() -> nodeList
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i ++){
//     p[i].style.backgroundColor = 'pink';
// }



// bisa menggunakan getElementsByTagName atau querySelectorALl untuk menangkap tag p di dalam html
// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor = 'red';

// Mengubah Node Root
// const b = document.querySelector('section#b');
// const p4 = b.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'red';
