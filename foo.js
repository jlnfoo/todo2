/**
 * How can we do this - sending a task to the bottom of the list?
 * const myList = [X, X, X, X, X]; // confirm got a number 3
 *
 * 1. find the index of the one you want to remove, do we remove the item?
 *    a. find the index of the item
 *    b. take the item out
 *    c. put the item to the end
 *
 *  if (myList.indexOf())
 */

// const myList = [1,2,3,4,'abcdef', 6, 7, 8, 9];
// const myHiddenList = ["x", "y", "z", "a", "b"]; // hey, z is in index 2
const myHiddenList = [55,66,77,88,99,100,101,103,105,107,109,110,111,112,113,222,223,224,225,226]

// when you reach the number 111, console log out "hello world"
// otherwise, console log out the number

// for (let index =0; index < myHiddenList.length; index++) {
//   const theCurrentNumber = myHiddenList[index];

//   // we need to console log "even" when the number is even
//   // we need to console log "odd" when the number is odd

//   if (theCurrentNumber %2 === 0) {
//       console.log("this is an even number")
//   } else {
//       console.log("this is an odd number")
//   }

//   // if i can tell, whether the number is odd or even,
//   // can i tell, whether the number is equals to 111?

//   if (theCurrentNumber === 111) {
//       console.log("hello world")
//   }
// }

const myAlphabets = ["x", "y", "z", "a", "b"];

// can we console log out "i have found the item i want to remove" when the alphabet is "z"?
// have i found the index of "z"?
for (let index = 0; index < myAlphabets.length; index++) {
    if (myAlphabets[index] === "z") {
      console.log('the current value of index is:', index);
    } 
}

//ADD AND REMOVE TASK. RETURN UPDATED LIST

// 1. create a function to add and remove task - it should take in 2 param (original list and taskName)
// 2. in each function, declare new const that is an arr that copies the original arraylist (for e.g const newTaskList = [...taskList])
// 3. For adding : Do a push to this new arr - e.g newTaskList.push(item)

// 4. For removing : create a const called taskIndex = taskList.indexOf(taskName)
// a. then declare a const that is an arr that copies the original arraylist - e.g anotherTaskList = [...taskList]
// b. if taskIndex => 0 {anotherTaskList.splice(taskIndex,1) return anotherTaskList}

//5. Wrap all this in an onclick event that takes in id parameter
//Example:
/*
const App = () => {
  const handleOnClick = (taskId: number) => {
    // console.log('i cliked on taskId:', taskId);
  }

  return (
    <div>
      <ul>
        <li onClick={() => handleOnClick(id)}>foo</li>
        <li>bar</li>
        <li>baz</li>
        <li>foobar</li>
      </ul>
    </div>
  )
}
*/


const arr: number[] = [1, 2, 3, 4, 5];
// Argument of type 'string' is not assignable to parameter of type 'number'.
// same complaint, you are trying to pass a target of string into an array of number
const someIndex = arr.indexOf("hello");

// array.filter
// array.reduce

const target = "hello";
for (let i = 0; i < arr.length; i++) {
  const currentValue = arr[i]; // hover on currentValue -> number
  // This condition will always return 'false' since the types 'number' and 'string' have no overlap.ts(2367)
  if (currentValue === target) {
    // comparing string with number
    return i; // ignore this
  }
}
