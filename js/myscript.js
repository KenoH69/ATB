
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
