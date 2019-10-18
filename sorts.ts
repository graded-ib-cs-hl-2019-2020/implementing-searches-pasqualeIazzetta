export function quickSort(arr: number[], leftPos: number, rightPos: number, arrLength: number) {
    let initialLeftPos = leftPos;
    let initialRightPos = rightPos;
    let direction = true;
    let pivot = rightPos;
    while ((leftPos - rightPos) < 0) {
        if (direction) {
            if (arr[pivot] < arr[leftPos]) {
                quickSortSwap(arr, pivot, leftPos);
                pivot = leftPos;
                rightPos--;
                direction = !direction;
            } else
                leftPos++;
        } else {
            if (arr[pivot] <= arr[rightPos]) {
                rightPos--;
            } else {
                quickSortSwap(arr, pivot, rightPos);
                leftPos++;
                pivot = rightPos;
                direction = !direction;
            }
        }
    }
    if (pivot - 1 > initialLeftPos) {
        quickSort(arr, initialLeftPos, pivot - 1, arrLength);
    }
    if (pivot + 1 < initialRightPos) {
        quickSort(arr, pivot + 1, initialRightPos, arrLength);
    }
}
function quickSortSwap(arr: number[], el1: number, el2: number) {
    let swapedElem = arr[el1];
    arr[el1] = arr[el2];
    arr[el2] = swapedElem;
}

export function mergeSort(arr: number[]): number[] {
    if (arr.length < 2)
        return arr;

    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length)

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    var result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    for (; i < left.length; i++)
        result.push(left[i]);

    for (; j < right.length; j++)
        result.push(right[j]);

    return <number[]>result;
}