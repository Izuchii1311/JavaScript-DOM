// event handling
// const closeCard = document.querySelector('.close');     // menangkap 1 element
// const card = document.querySelector('.card');           // menangkap 1 element

// closeCard.addEventListener('click', function() {
//     card.style.display = 'none';
// });


// DoM Traversal
const closeCard = document.querySelectorAll('.close');

// Cara 1
// for(let i = 0; i < closeCard.length; i++) {
//     closeCard[i].addEventListener('click', function(e) {
//         // ambil element close dan telusuri parentnya
//         // closeCard[i].parentElement.style.display = 'none';

//         // console.log(e)
//         e.target.parentElement.style.display = 'none';
//     })
// }

// Cara 2 -- ForEach karena berupa NodeList
closeCard.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
})


// Contoh DOM Traversal Method
const nama = document.querySelector('.nama');
// console.log(nama.parentElement);                       // Card
// console.log(nama.parentNode);                          // Card
// console.log(nama.nextSibling);                         // Enter
// console.log(nama.nextElementSibling);                  // 08123456789

