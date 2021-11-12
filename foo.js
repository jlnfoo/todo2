// const matchedTask = taskList.filter((task) => task.id === taskId); //array of object that matched with clicked task
// const taskMatchedObj = matchedTask.find((task) => task.id === taskId); //gets obj from array

const mockTaskList = [
  { id: 1, taskName: "hello", complete: false },
  { id: 2, taskName: "goodbye", complete: false},
  { id: 3, taskName: "hello & goodbye", complete: false },
  { id: 4, taskName: "foo" , complete: false}
];

// Array.prototype.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 

//matchedTask.find((task) => task.id === taskId);
// const myFind = (taskList, targetTaskId) => {
//   for (let i = 0; i < taskList.length; i++) {
//     const currentTask = taskList[i];
//     if (currentTask.id === targetTaskId) {
//       return currentTask;
//     }
//   }

//   return undefined;
// }

const taskId = 3;

// FILTER ANSWER:
const yourVersion = [];

for (let i=0; i <mockTaskList.length; i++) {
  const myCurrentTask = mockTaskList[i]; // 1
  if (myCurrentTask.id === taskId) { // 2
    yourVersion.push(mockTaskList[i]);
  }
}

// const filteredVersion = mockTaskList.filter((task) => task.id === taskId);
// console.log('filterVersion:', filteredVersion);
// console.log('yourVersion:', yourVersion);

// your answer:

// yourFindVersion = {}
let yourFindVersion = undefined;
for (let i = 0; i < yourVersion.length; i++) {
  const currentTask = yourVersion[i]; // 1
  if (currentTask.id === taskId) { // 2
    yourFindVersion = currentTask;
    break;
  }
}

const findVersion = yourVersion.find((task) => task.id === taskId);
console.log('findVersion', findVersion);

// yourFindVersion
const yourFindVersion = myFind(yourVersion, taskId);
console.log('yourFindVersion', yourFindVersion);