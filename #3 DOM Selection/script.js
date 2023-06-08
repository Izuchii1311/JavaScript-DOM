// DOM Selection
// nodeRoot(document) 

// document.getElemetById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'pink';
judul.innerHTML = 'Izuchii';


// document.getElementsByTagName() -> HTMLCollection
// [p.p1, p.p2, p.p3, p]
const p = document.getElementsByTagName('p');
// p[1].style.backgroundColor = 'aquamarine';
for(let i = 0; i < p.length; i ++) {
    p[i].style.backgroundColor = 'aquamarine';
}


// document.getElementsByClassName() -> HTMLCollection
// [p.p1]
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah oleh JavaScript';
p1.style.fontSize = '50px';