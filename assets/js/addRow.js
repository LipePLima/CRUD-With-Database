const tableBody = document.querySelector('tbody');
const btnAdd    = document.querySelector('#btnAdd');

btnAdd.addEventListener('click', () => {
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
});

const remove = document.querySelectorAll('#remove');
remove.forEach( e => {
    console.log(e)
    e.addEventListener('click', () => {
        const parent = e.parentNode.parentNode        
        parent.remove()
        
    })
})




