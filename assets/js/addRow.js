const tableBody = document.querySelector('tbody');
const btnAdd    = document.querySelector('#btnAdd');
const btnRemove = document.querySelectorAll('#remove');
removeRow(btnRemove)

btnAdd.addEventListener('click', () => {
    let i = 0;
    tableBody.innerHTML += `
        <tr class="trBody">
            <td id="name"></td>
            <td id="nickname"></td>
            <td id="email"></td>
            <td class="rowBtns">
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
    removeRow(newRemove)
});

function removeRow (element) {
    element.forEach( e => {
        console.log(e)
        e.addEventListener('click', () => {
            const parent = e.parentNode.parentNode        
            parent.remove()
        })
    })
}







