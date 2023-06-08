// const tUbahWarna = document.getElementById('tUbahWarna');

// tUbahWarna.addEventListener('click', function() {
//     // document.body.style.backgroundColor = 'pink';
//     // document.body.setAttribute('class', 'biru-muda');

//     document.body.classList.toggle('biru-muda');
// });

// Membuat button dengan js
const rand = document.createElement('button');
const tRand = document.createTextNode('Ubah Warna Random');
rand.appendChild(tRand);

// Set button type attribute
rand.setAttribute('type', 'button');

// Insert the button after tUbahWarna
tUbahWarna.after(rand);

// Event listener
rand.addEventListener('click', function() {
    // Generate random RGB values
    // Math.round = pembulatan (Math.random = angka acak * 255);
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    // Set the background color to the random RGB values
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});


// menangkap slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})


document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / innerWidth) * 255);
    const yPos = Math.round((event.clientY / innerWidth) * 255);
    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 150)`;
});