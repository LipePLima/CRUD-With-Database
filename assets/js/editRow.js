const tableBody = document.querySelector('tbody');
const btnAdd    = document.querySelector('#btnAdd');
const btnRemove = document.querySelectorAll('#remove');
const edit      = document.querySelectorAll('#edit');

const client    = JSON.parse(localStorage.getItem("client"));

console.log(client)
if (client != null) {
    if (client.length != 0) {
        getDb(client)
    }
}

const funcAdd    = addRowWithBtn(btnAdd);
const funcRemove = removeRow(btnRemove);
const funcEdit   = editRowWithBtn(edit);

function addRow () {
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

    const newRemove = document.querySelectorAll('#remove');
    const newEdit   = document.querySelectorAll('#edit');
    
    removeRow(newRemove)
    editRowWithBtn(newEdit)
}

function addRowWithBtn (element) {
    element.addEventListener('click', () => {
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

        const newRow    = newRows[newRows.length - 1];

        const listTd = [
            newRow.querySelector('#name'), 
            newRow.querySelector('#nick'), 
            newRow.querySelector('#email')
        ];

        listTd.forEach( el => {
            el.innerHTML = `<input type="text" class="inputTd" value="${el.textContent}">`                
        })  

        const newAdd = newRow.querySelector('#add');
   
        newAdd.classList.remove('add');  
                    
        newAdd.addEventListener('click', () => {
            const inputTd = newRow.querySelectorAll('.inputTd');

            inputTd.forEach( input => {
                const parentInput = input.parentNode

                parentInput.innerHTML = `<p>${input.value}</p>`
    
                newAdd.classList.toggle('add');  
            }) 

            if (inputTd[0].value.length > 0 && inputTd[1].value.length > 0 && inputTd[2].value.length > 0) {
                dbClient(listTd)
            }
        })

        removeRow(newRemove)
        editRowWithBtn(newEdit)
        filter(newRows)
    });
}

function editRowWithBtn (element) {
    for (let i = 0; i < element.length; i++) {
        if (localStorage.client) {
            list = JSON.parse(localStorage.getItem("client"));
        }

        const parentElement = element[i].parentNode.parentNode;
        
        const listTd = [
            parentElement.querySelector('#name'), 
            parentElement.querySelector('#nick'), 
            parentElement.querySelector('#email')
        ];

        const Add = parentElement.querySelector('#add');

        element[i].addEventListener('click', () => {           
            Add.classList.remove('add');  

            listTd.forEach( el => {
                el.innerHTML = `<input type="text" class="inputTd" value="${el.textContent}">`                
            })                     
            
            console.log(list[i])
        })     

        Add.addEventListener('click', () => {
            const inputTd = document.querySelectorAll('.inputTd');

            inputTd.forEach( input => {
                const parentInput     = input.parentNode
                parentInput.innerHTML =  `<p>${input.value}</p>`
    
                Add.classList.toggle('add');  
            }) 

            if (inputTd[0].value.length > 0 && inputTd[1].value.length > 0 && inputTd[2].value.length > 0) {
                list[i] = {
                    nome: listTd[0].textContent,
                    nick: listTd[1].textContent,
                    email: listTd[2].textContent
                }

                localStorage.setItem("client", JSON.stringify(list))
            }
        })
    }
}

function removeRow (element) {
    if (localStorage.client) {
        list = JSON.parse(localStorage.getItem("client"));
    }
    
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('click', () => {
            const locRemove = list.indexOf(list[i]);

            if (locRemove > -1) {
                list.splice(locRemove, 1);

                localStorage.setItem("client", JSON.stringify(list))
            }

            const parent = element[i].parentNode.parentNode      
            parent.remove()
        })
    }
}
