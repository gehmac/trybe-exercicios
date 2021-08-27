/* 
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("hello");
*/

function reverse(word) {
    return word.split('').reverse().join('');
}

let mensage = reverse("meu amigo isso vai inverter")
console.log(mensage);


 //task_02

function maxInArray(chaves){
	 let maiorposition = chaves[0]

	 for (let index = 0; index < chaves.length; index += 1) {
		 if (chaves[index] > maiorposition) {
			 maiorposition = index
		 }
		}
		return maiorposition
 }
 
console.log(maxInArray([2, 3, 6, 7, 10, 1, 22]));

