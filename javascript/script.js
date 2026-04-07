//alert('Belajat Java Script');

function kirim() {
//ambil value nama
let Nama = document.getElementById('Nama').value;
console.log("Nama : "+Nama);
let Saran = document.getElementById('Saran').value;
//tampilkan nama ke ul id=list-pesan
//document.getElementById('list-pesan').innerHTML = "<li>"+Nama+"</li>";

document.getElementById('list-pesan').innerHTML += `<li>${Nama} - ${Saran}</li>`;

document.getElementById('list-pesan').innerHTML += `<tr><td>${Nama}</td><td>${Saran}</td></tr>`;
}