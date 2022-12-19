const filterRow = document.querySelector('#searchInput');
const rows      = document.querySelectorAll('.trBody');

function filter (rows) {
    filterRow.addEventListener('input', event => {
        const listiner = event.target.value.trim().toLowerCase();

        rows.forEach( (e) => {
            
            if (!e.textContent.toLowerCase().includes(listiner)) {
                e.classList.add('remove')
            } else {
                e.classList.remove('remove')
            }        
        })
    })
}

filter(rows)
