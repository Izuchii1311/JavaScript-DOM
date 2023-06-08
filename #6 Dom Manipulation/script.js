// Manipulation Node

// Menambah Element Baru Setelah Paragraf 3
// Buat Tagnya - Buat isinya - Pindahkan isinyake dalam tag dan simpan ke tempat yg dituju

// buat element baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Ini Paragraf Baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);

// simpan pBaru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);







// Manipulation Node 

const liBaru = document.createElement('li');
const isiLiBaru = document.createTextNode('Item a');

liBaru.appendChild(isiLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// menyimpan sebelum child ul ke 2
ul.insertBefore(liBaru, li2);








// Manupulation Node
const secA = document.getElementById('a');
const link = document.getElementsByTagName('a')[0];

// menghapus child
secA.removeChild(link);




// Manipulation Node
const sectionB = document.getElementById('b');
const p = sectionB.querySelector('p');

const h1Baru = document.createElement('h1');
const isiH1 = document.createTextNode('Ini Paragraf yang diganti jadi h1');

h1Baru.appendChild(isiH1);

sectionB.replaceChild(h1Baru, p);


h1Baru.style.backgroundColor = 'pink';
liBaru.style.backgroundColor = 'pink';
pBaru.style.backgroundColor = 'pink';