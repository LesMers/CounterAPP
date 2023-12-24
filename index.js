let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let userName = document.getElementById("username");



let count = 0;

function increment() {
  count += + 1;
  countEl.textContent = count;
}

// click to decremental until 0 

function decrement() {
    count = Math.max(0, count - 1);
    countEl.textContent = count;

}

/* change username in h1 

let firstName = "Scivolizia";
let lastName = "Conte";

userName.innerText = lastName + " " + firstName;

*/

// save feature & reset count 

function save() {
  saveEl.textContent += count + " - ";
  count = 0;
  countEl.textContent = count;
}
