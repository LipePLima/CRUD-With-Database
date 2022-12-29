const tableBody  = document.querySelector('tbody');
const btnAdd     = document.querySelector('#btnAdd');
const btnRemove  = document.querySelectorAll('#remove');
const edit       = document.querySelectorAll('#edit');

const funcAdd    = addRow(btnAdd);
const funcRemove = removeRow(btnRemove);
const funcEdit   = editRow(edit);

function addRow (element) {
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
}

function editRow (element) {
    element.forEach( e => {
        const listTd = [
            e.parentNode.parentNode.querySelector('#name'), 
            e.parentNode.parentNode.querySelector('#nick'), 
            e.parentNode.parentNode.querySelector('#email')
        ];

        const newAdd = e.parentNode.parentNode.querySelector('#add');

        e.addEventListener('click', () => {           
            newAdd.classList.remove('add');  

            listTd.forEach( el => {
                el.innerHTML = `<input type="text" class="inputTd" value="${el.textContent}">`                
            })                       
        })     

        newAdd.addEventListener('click', () => {
            const inputTd = document.querySelectorAll('.inputTd');

            inputTd.forEach( input => {
                const parentInput = input.parentNode

                parentInput.innerHTML =  `<p>${input.value}</p>`
    
                newAdd.classList.toggle('add');  
            }) 

            if (inputTd[0].value.length > 0 && inputTd[1].value.length > 0 && inputTd[2].value.length > 0) {
                dbClient(listTd)
            }
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

let list = [];

function dbClient (element) {
    if (localStorage.client) {
        list = JSON.parse(localStorage.getItem("client"));
    }

    const newItem = {
        nome: element[0].textContent,
        nick: element[1].textContent,
        Email: element[2].textContent
    }

    list.push(newItem);

    localStorage.setItem("client", JSON.stringify(list))
}
