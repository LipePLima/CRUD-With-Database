const tableBody = document.querySelector('tbody');
const btnAdd    = document.querySelector('#btnAdd');
const btnRemove = document.querySelectorAll('#remove');
const edit      = document.querySelectorAll('#edit')

removeRow(btnRemove)
editRow(edit)

btnAdd.addEventListener('click', () => {
    tableBody.innerHTML += `
        <tr class="trBody">
            <td id="name"></td>
            <td id="nickname"></td>
            <td id="email"></td>
            <td class="rowBtns">
                <button class="btnTable add" id="add">
                    <span class="material-symbols-outlined">done</span>
                </button>
                <button class="btnTable" id="edit">
                    <span class="material-symbols-outlined">edit</span>
                </button>
                <button class="btnTable" id="remove">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </td>
        </tr>
    `
    const newRemove = document.querySelectorAll('#remove');
    const newEdit   = document.querySelectorAll('#edit');
    removeRow(newRemove)
    editRow(newEdit)
});

function editRow (element) {
    element.forEach( e => {
        e.addEventListener('click', () => {
            const listTd = [
                e.parentNode.parentNode.children[0], 
                e.parentNode.parentNode.children[1], 
                e.parentNode.parentNode.children[2]
            ];

            const newAdd = e.parentNode.children[0]
            newAdd.classList.remove('add');  
        
            listTd.forEach( el => {
                el.style = 'cursor: pointer'
                el.innerHTML = `<input type="text" class="inputTd" value="${el.textContent}">`                
            })    

            const inputTd = document.querySelectorAll('.inputTd');
            inputTd.forEach( input => {
                input.addEventListener('input', event => {
                    const parentInput = input.parentNode
                    const value       = event.target.value;

                    newAdd.addEventListener('click', () => {
                        parentInput.innerHTML = value
                    })
                })                         
            })     
        })
    })
}

function removeRow (element) {
    element.forEach( e => {
        e.addEventListener('click', () => {
            const parent = e.parentNode.parentNode      
            parent.remove()
        })
    })
}



