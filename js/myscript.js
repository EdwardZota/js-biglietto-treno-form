const myName = document.getElementById('name_surname');

const km = document.getElementById("km");

const domButton = document.querySelector('#leggi');

const age = document.querySelector('#age');

const priceKm = 0.21 ;



domButton.addEventListener('click',
    function() {
        const nameDom = myName;
        const nameMessage = nameDom.value;
        console.log(nameMessage);

        const kmDom = km;
        const kmMessage = kmDom.value;
        console.log(kmMessage);

        console.log(age.value);

        const totalPrice = priceKm * km.value;

        if (document.getElementById('age').value == "minorenne") {
            totalPrice -= totalPrice / 100 * 20;
        }else if (document.getElementById('age').value == "over65") {
            totalPrice = totalPrice - (totalPrice * 0.4);
        }



        console.log(totalPrice);

    }
)