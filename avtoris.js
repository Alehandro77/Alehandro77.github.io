let button = document.querySelector('.btn');
button.addEventListener('click', handle);

function handle() {
    let inputs = document.querySelectorAll("input");
    let userData = JSON.parse(localStorage.getItem('userData') || '[]');
    if (userData[0] == inputs[0].values) {
        if (userData[2] == inputs[1].values) {
            window.location.href = 'index.html';
        }
        else {
            alert('Неверный пароль');
        }
    }
    else {
        alert('Вы не зарегистрированы');
    }
}