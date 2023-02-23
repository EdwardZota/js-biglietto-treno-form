const myName = document.getElementById('name_surname');

const km = document.getElementById('km');

const domButton = document.querySelector('#leggi');

const age = document.querySelector('#age');

const priceKm = 0.21 ;

let totalPrice;


domButton.addEventListener('click',
    function() {
        const nameDom = myName;
        const nameMessage = nameDom.value;
        console.log(nameMessage);

        const kmDom = km;
        const kmMessage = kmDom.value;
        console.log(kmMessage);

        console.log(age.value);
        
        let totalPrice = kmDom * priceKm;
        console.log(totalPrice);

    }
)