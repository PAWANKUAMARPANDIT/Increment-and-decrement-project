let count = 9;

function increment() {
    count++;
    document.getElementById('count').innerText = count;
}

function decrement() {
    count--;
    document.getElementById('count').innerText = count;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('incrementButton').addEventListener('click', increment);
    document.getElementById('decrementButton').addEventListener('click', decrement);
});
