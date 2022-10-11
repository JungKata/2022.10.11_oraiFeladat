
const randomTomb = Array(20).fill().map(() => Math.floor(30 * Math.random() + 1));
let tomb = [];
function tombkiir(array){
tomb.push(array.filter(array => array % 5 == 0))
return tomb;

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('gomb').addEventListener('click', () => {
        console.log(tombkiir(randomTomb));
    });
    document.getElementById('Hozzaad').addEventListener('click', () => {
        let bemenoSzam = parseInt(document.getElementById('bekertSzam').value)
        tomb.push(bemenoSzam);
        console.log(tomb);
    })
   
});
//console.log(tombkiir(randomTomb));