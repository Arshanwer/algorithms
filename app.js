
const LinkedList = require('./LinkedList')
const {selectionSort, insertionSort, mergeSort, quickSort} = require('./sortingtest');
const HashTable = require('./hashTable');
const {slidingWindow, subMaxLength} = require('./slidingWindow');
// const {selectionSort, bubbleSort, insertionSort, mergeSort, quick_Sort, quickSort} = require('./sorting');
// const bubbleSort = require('./sorting');

// import { selectionSort, bubbleSort} from './sorting';

// const li = new LinkedList();
// li.enqueue(10);
// li.enqueue(30);
// li.enqueue(40)
// li.unshift(70);
// li.unshift(80);
// li.print();

let array = [120, 110, 20, 16, 250, 1, 6]; //16, 2, 12, 14, 16
const arr = quickSort(array);
console.log('ARRAY', arr);

// const https = require('https');

// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//   let data = '';

//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       console.log('The first promise has resolved');
//       resolve(10);
//   }, 1 * 1000);

// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       console.log('The second promise has resolved');
//       resolve(20);
//   }, 2 * 1000);
// });


// Promise.race([p1, p2])
//   .then(value => console.log(`Resolved: ${value}`))
//   .catch(reason => console.log(`Rejected: ${reason}`));

let hashTable = new HashTable();
hashTable.insert('serena', 'moon');
hashTable.insert('amy', 'mercury');
hashTable.insert('rei', 'mars');
hashTable.insert('lita', 'jupiter');
hashTable.insert('mina', 'venus');
hashTable.insert('darien', 'tuxedo mask');

console.log(hashTable);

let slidingArray = [3, 1, 2, 1, 4, 1, 3];
const max = subMaxLength(slidingArray, 4);
console.log('max', max);
