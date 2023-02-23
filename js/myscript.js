const myName = document.getElementById('name_surname');

const km = document.getElementById("km");

const domButton = document.querySelector('#leggi');

const age = document.querySelector('#age');

const priceKm = 0.21 ;

const reset = document.querySelector('#reset')

const d_none_title = document.querySelector('.d-none-title')
const d_none = document.querySelector('.d-none')

/*parte del biglietto*/

const nameTicket = document.querySelector('#name_on_ticket');

const typeTicket = document.querySelector('#type_of_ticket');

const wagonTicket = document.querySelector('#wagon_on_ticket');

const codeTicket = document.querySelector('#code_on_ticket');

const priceTicket = document.querySelector('#price_on_ticket');



reset.addEventListener('click',
    function eraseText() {
        document.getElementById("name_surname").value = "";
        document.getElementById("km").value = "";
        
        d_none_title.classList.remove('d-block');
        d_none_title.classList.add('d-none');

        d_none.classList.remove('d-block');
        d_none.classList.add('d-none');
}
)


domButton.addEventListener('click',
    function() {
        nameTicket.innerHTML = myName.value;

        const kmMessage = km.value;

        let totalPrice = priceKm * kmMessage;
        typeTicket.innerHTML = 'Biglietto Standard';

        if  (age.value == "minorenne"){
            totalPrice -= totalPrice / 100 * 20;
            typeTicket.innerHTML = 'Biglietto con sconto minorenne';
        }else if (age.value == "over65") {
            totalPrice = totalPrice - (totalPrice * 0.4);
            typeTicket.innerHTML = 'Biglietto con sconto anziani';
        }

        priceTicket.innerHTML = totalPrice.toFixed(2);
        console.log(totalPrice);

        d_none_title.classList.remove('d-none');
        d_none_title.classList.add('d-block');

        d_none.classList.remove('d-none');
        d_none.classList.add('d-block');

        wagonTicket.innerHTML = Math.floor(Math.random() * 9 ) + 1;

        codeTicket.innerHTML = Math.floor(Math.random() * 10000 ) + 90000;

    }
)