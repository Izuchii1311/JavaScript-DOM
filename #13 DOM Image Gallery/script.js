const container = document.querySelector('.container');
const jumbo = document.querySelector('.img-jumbo');

// active
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    // cek apa yang di klik
    if(e.target.className == 'thumb'){
        // ambil src img-jumbo dan ganti dengan image yang kita click
        jumbo.src = e.target.src;

        // animasi
        jumbo.classList.add('fade');
        // menghilangkan class Fade
        setTimeout(function() {
            jumbo.classList.remove('fade');
        },500);

        // active
        thumbs.forEach(function(thumb) {
            // if(thumb.classList.contains('active')){
            //     thumb.classList.remove('active')
            // }

            thumb.className = 'thumb';
        });
        e.target.classList.add('active');
    }
})