var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    document.getElementById('currentNumber').innerHTML = currentNumber;
    if (currentNumber >= 10) {
        var obj = document.getElementById('add');
        obj.style.backgroundColor = 'green';
    }
    
    if(currentNumber == -9){
        var obj = document.getElementById('sub');
        obj.style.backgroundColor = 'black';
    } 
}

function decrement() {
    currentNumber = currentNumber - 1;
    document.getElementById('currentNumber').innerHTML = currentNumber;
    
    if (currentNumber <= -10) {
        var obj = document.getElementById('sub');
        obj.style.backgroundColor = 'red';
    }

    if(currentNumber == 9){
        var obj2 = document.getElementById('add');
        obj2.style.backgroundColor = 'black';
    }

    
}

document.getElementById('add').addEventListener('click', increment);
document.getElementById('sub').addEventListener('click', decrement);
