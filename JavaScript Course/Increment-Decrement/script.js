const Increase = document.getElementById("IncrementBtn")

const Reset = document.getElementById("ResetBtn")

const Decrease = document.getElementById("DecrementBtn")

const val = document.getElementById("value");

let count = 0;

Increase.onclick = function(){
    count++;
    val.textContent = count;
}

Decrease.onclick = function(){
    count--;
    val.textContent = count;
}

Reset.onclick = function(){
    count = 0;
    val.textContent = count;
}


