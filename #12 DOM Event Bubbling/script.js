/* Card akan menampilkan alert jika di klik
dan ini malah akan berlaku ke semuanya dan fungsi x button tidak akan bekerja.

untuk mengatasinya dengan cara Event Bubbling
ketika kita mempunyai event di tombol close dan kita juga punya event di dalam cardnya.
maka ketika menjalankan event di tombol close di klik maka card akan dijalankan juga.
akan terus mengecek ke atas atas atas hingga tidak ada element pembungkusnya lagi.


*/

// const closeCard = document.querySelectorAll('.close');

// closeCard.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         // Event bubbling supaya si card tidak ikut berjalan jika kita menekan tombol close
//         e.stopPropagation();
//     })
// })

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function() {
//         alert('ok')
//     })
// })








const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    // console.log(e.target)
    if(e.target.classList.contains('close')) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
    if(e.target.classList.contains('card')) {
        alert('ok');
    }
});
