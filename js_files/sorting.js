// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableBtn(){
    document.querySelector(".startSort").disabled = true;
    document.querySelector("#arr_sz").disabled = true;
    document.querySelector(".newArray").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableBtn(){
    document.querySelector(".startSort").disabled = false;
    document.querySelector("#arr_sz").disabled = false;
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#arr_sz');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// Default input for waitforme function (250ms)
let delay = 250;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
    console.log('delay = ',delay);
});

// Creating array to store randomly generated numbers
let array = [];
let array2 = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 50) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    array2 = array;
    console.log(array);
    console.log(array2);

    // select the div #bars element
    const bars = document.querySelector("#bars");
    const bars1 = document.querySelector("#bars1");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }

    for (let i = 0; i < noOfBars; i++) {
        const bar1 = document.createElement("div");
        bar1.style.height = `${array2[i]*2}px`;
        bar1.classList.add('bar1');
        bar1.classList.add('flex-item');
        bar1.classList.add(`barNo${i}`);
        bars1.appendChild(bar1);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    const bar1 = document.querySelector("#bars1");
    bar.innerHTML = '';
    bar1.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableBtn();
    createNewArray(arraySize.value);
});

//startsorting
const startbtn = document.querySelector(".startSort");
startbtn.addEventListener('click', async function(){
    disableBtn();
    const start = performance.now();
    await insertion();
    const duration = performance.now() - start;
    console.log('insertion = ',duration);
    enableBtn();
});
startbtn.addEventListener('click', async function(){
    disableBtn();
    const start1 = performance.now();
    await heap(array2);
    const duration1 = performance.now() - start1;
    console.log('heap = ',duration1);
});
