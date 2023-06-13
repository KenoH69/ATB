
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




let amounteraser = 1;
function myfunction1() {
    const x = document.getElementById("moneyTotal");
    if (amounteraser > 0) {
        amounteraser = amounteraser + 22.50;
        x.innerText = "Total: " + amounteraser.toString();
    }
}

function myfunction2() {
    const x = document.getElementById("moneyTotal");
    if (amounteraser > 0) {
        amounteraser = amounteraser + 25.50;
        x.innerText = "Total: " + amounteraser.toString();
    }
}

function myfunction3() {
    const x = document.getElementById("moneyTotal");
    if (amounteraser > 0) {
        amounteraser = amounteraser + 20.50;
        x.innerText = "Total: " + amounteraser.toString();
    }
}

function myfunction4() {
    const x = document.getElementById("moneyTotal");
    if (amounteraser > 0) {
        amounteraser = amounteraser + 22.50;
        x.innerText = "Total: " + amounteraser.toString();
    }
}

function myfunction5() {
    const x = document.getElementById("moneyTotal");
    if (amounteraser > 0) {
        amounteraser = amounteraser + 25.50;
        x.innerText = "Total: " + amounteraser.toString();
    }
}

function myfunction6() {
    const x = document.getElementById("moneyTotal");
    if (amounteraser > 0) {
        amounteraser = amounteraser + 25.50;
        x.innerText = "Total: " + amounteraser.toString();
    }
}