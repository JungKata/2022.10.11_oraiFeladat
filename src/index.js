
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
   
});
//console.log(tombkiir(randomTomb));