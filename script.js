const spans = document.querySelectorAll('span');
const buttons = document.querySelectorAll('button');
const select = document.querySelector('select');
const options = document.querySelectorAll('option');

buttons[0].addEventListener('click', (e) => {
    const int = parseInt(spans[0].textContent);
    spans[0].textContent = int + 1;
    if (checkLimit() == int+1) {
        spans[0].style.color = 'green';
        spans[1].style.color = 'red';
        buttons[0].disabled = 'true';
        buttons[1].disabled = 'true';
    }
})
buttons[1].addEventListener('click', (e) => {
    const int = parseInt(spans[1].textContent);
    spans[1].textContent = int + 1;
    if (checkLimit() == int+1) {
        spans[1].style.color = 'green';
        spans[0].style.color = 'red';
        buttons[0].disabled = 'true';
        buttons[1].disabled = 'true';
    }
})
buttons[2].addEventListener('click', (e) => {
    for (let i=0; i <2; i++)
    {
        spans[i].style.color = 'black';
        spans[i].textContent = 0;
        buttons[i].disabled = 0;
    }
})

function checkLimit () {
    const i = select.selectedIndex;
    return parseInt(options[i].value);
}