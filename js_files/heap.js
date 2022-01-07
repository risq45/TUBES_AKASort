async function heap(arr){
    console.log('In Heap()');
    const ele = document.querySelectorAll(".bar1");
    let n = ele.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
        await heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        ele[0].style.background = 'blue';
        let temp1 = ele[0].style.height;
        ele[0].style.height = ele[i].style.height;
        ele[i].style.height = temp1;
        ele[i].style.background = 'blue';
        await waitforme(delay);

        await heapify(arr, i, 0);
        ele[i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

async function heapify(arr, n, i){

    const ele = document.querySelectorAll(".bar1");
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2; 

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        let swap1 = ele[i].style.height;
        ele[i].style.height = ele[largest].style.height;
        ele[largest].style.height = swap1;

        await waitforme(delay);
        await heapify(arr, n, largest);
    }
}

