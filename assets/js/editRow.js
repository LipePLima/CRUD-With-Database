const tableBody  = document.querySelector('tbody');
const btnAdd     = document.querySelector('#btnAdd');
const btnRemove  = document.querySelectorAll('#remove');
const edit       = document.querySelectorAll('#edit');
const funcRemove = removeRow(btnRemove);
const funcEdit   = editRow(edit)

btnAdd.addEventListener('click', () => {
    tableBody.innerHTML += `
    <tr class="trBody">
        <td class="row-text" id="name"></td>
        <td class="row-text" id="nick"></td>
        <td class="row-text" id="email"></td>
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
    const newRows   = document.querySelectorAll('.trBody');
    const newRemove = document.querySelectorAll('#remove');
    const newEdit   = document.querySelectorAll('#edit');
    removeRow(newRemove)
    editRow(newEdit)
    filter(newRows)
});

function editRow (element) {
    element.forEach( e => {
        e.addEventListener('click', () => {
            const listTd = [
                e.parentNode.parentNode.querySelector('#name'), 
                e.parentNode.parentNode.querySelector('#nick'), 
                e.parentNode.parentNode.querySelector('#email')
            ];
            
            const newAdd = e.parentNode.parentNode.querySelector('#add');
            newAdd.classList.remove('add');  

            listTd.forEach( el => {
                el.innerHTML = `<input type="text" class="inputTd" value="${el.textContent}">`                
            })   
            
            const inputTd = document.querySelectorAll('.inputTd');
            inputTd.forEach( input => {
                input.addEventListener('input', event => {
                    const parentInput = input.parentNode

                    newAdd.addEventListener('click', () => {
                        listTd.forEach( el => {
                            parentInput.innerHTML =  `<a>${input.value}</a>`

                            if (el.children[0].value != undefined)  {
                                el.innerHTML = el.children[0].value
                                newAdd.classList.add('add');
                            }    
                        }) 
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
