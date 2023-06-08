// DoM Traversal
const closeCard = document.querySelectorAll('.close');

closeCard.forEach(function(el) {
    // Prevent Default = adalah sebuah method yang ada di dalam object e
    // tujuannya untuk menghentikan aksi default yang dilakukan oleh sebuah element
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        // preventDefault() untuk mencegah aksi default
        e.preventDefault();
    })
})

