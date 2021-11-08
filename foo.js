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

// const myHiddenList = [55,66,77,88,99,100,101,103,105,107,109,110,111,112,113,222,223,224,225,226]

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
