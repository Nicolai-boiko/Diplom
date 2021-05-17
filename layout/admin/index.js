//Авторизация

let users = [{
    name: "Ne",
    password: "pon9tno"
},
{
    name: "Nichego",
    password: "Nepon9tno"
},
{
    name: "Vse",
    password: "Ploho"
},
{
    name: 'f',
    password: 'f'
}
]

document.querySelectorAll('.text-warning').forEach(t => t.style.display = 'none');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('type');
    e.preventDefault();
    let neededObj = users.find(obj => obj.name === nameInput.value && obj.password === passwordInput.value);
    if (neededObj) {
        document.cookie = `${neededObj.name}=${neededObj.password}; path=/`;
        document.location.href = 'table.html';
    } else if (users.find(obj => obj.name === nameInput.value && obj.password !== passwordInput.value)) {
        document.querySelector('.text-warning_password').style.display = 'block'
        document.querySelector('.text-warning_name').style.display = 'none'
    } else if (users.find(obj => obj.name !== nameInput.value && obj.password !== passwordInput.value)) {
        document.querySelector('.text-warning_name').style.display = 'block'
    } 
})
