
function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.getElementById('map').className = '';
    document.getElementById('map').classList.add('open-'+id);
    document.body.classList.add('jw-modal-open');
}

function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.getElementById('map').className = '';
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
   
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});




let Money = 1;
function myfunction1() {
    const x = document.getElementById("moneyTotal");
    if (Money > 0) {
        Money = Money + 22.50;
        x.innerText = "Total:€ " + Money.toString();
    }
}

function myfunction2() {
    const x = document.getElementById("moneyTotal");
    if (Money > 0) {
        Money = Money + 25.50;
        x.innerText = "Total:€ " + Money.toString();
    }
}

function myfunction3() {
    const x = document.getElementById("moneyTotal");
    if (Money > 0) {
        Money = Money + 20.50;
        x.innerText = "Total:€ " + Money.toString();
    }
}

function myfunction4() {
    const x = document.getElementById("moneyTotal");
    if (Money > 0) {
        Money = Money + 22.50;
        x.innerText = "Total:€ " + Money.toString();
    }
}

function myfunction5() {
    const x = document.getElementById("moneyTotal");
    if (Money > 0) {
        Money = Money + 25.50;
        x.innerText = "Total:€ " + Money.toString();
    }
}

function myfunction6() {
    const x = document.getElementById("moneyTotal");
    if (Money > 0) {
        Money = Money + 25.50;
        x.innerText = "Total:€ " + Money.toString();
    }
}


let Ticket7 = 0;
function myfunction7() {
    const x = document.getElementById("lateTicket");
    if (Ticket7 > -1) {
        Ticket7 = Ticket7 + 1;
        x.innerText = "Late Tickets:  " + Ticket7.toString();
    }
}

function myfunction8() {
    const x = document.getElementById("finalTicket");
    if (Ticket11 > -1) {
        Ticket11 = Ticket11 + 1;
        x.innerText = "Final Tickets:  " + Ticket11.toString();
    }
}

let Ticket9 = 0;
function myfunction9() {
    const x = document.getElementById("regularTicket");
    if (Ticket9 > -1) {
        Ticket9 = Ticket9 + 1;
        x.innerText = "Regular Tickets:  " + Ticket9.toString();
    }
}


function myfunction10() {
    const x = document.getElementById("lateTicket");
    if (Ticket7 > -1) {
        Ticket7 = Ticket7 + 1;
        x.innerText = "Late Tickets:  " + Ticket7.toString();
    }
}

let Ticket11 = 0;
function myfunction11() {
    const x = document.getElementById("finalTicket");
    if (Ticket11 > -1) {
        Ticket11 = Ticket11 + 1;
        x.innerText = "Final Tickets:  " + Ticket11.toString();
    }
}

let Ticket12 = 0;
function myfunction12() {
    const x = document.getElementById("finalTicket");
    if (Ticket11 > -1) {
        Ticket11 = Ticket11 + 1;
        x.innerText = "Final Tickets:  " + Ticket11.toString();
    }
}

