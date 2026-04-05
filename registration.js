let button = document.querySelector('.btn');
button.addEventListener('click', handle);

function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    console.log(input_values);
    localStorage.setItem('userData', JSON.stringify(Date))
    window.location.href = 'index.html';
}