import CArray from './ArrayTestBed';

export function testAlgorithms() {

    const numElements = 10;
    const myNums = new CArray(numElements);
    myNums.setData();
    // myNums.clear();

    myNums.bubbleSort();

    window.console.log(myNums);

}