let list         = [];
const client     = JSON.parse(localStorage.getItem("client"));

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

function getDb (element) {
    for (let i = 1; i < element.length; i++) {
        addRow()
    }

    const rows    = document.querySelectorAll('.trBody');

    for (let i = 0; i < rows.length; i++) {
        const name  = rows[i].querySelector('#name');
        const nick  = rows[i].querySelector('#nick');
        const email = rows[i].querySelector('#email');

        name.textContent = element[i].nome;
        nick.textContent = element[i].nick;
        email.textContent = element[i].Email;
    }
}
