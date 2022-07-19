var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");
var mode = "count";

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", increementCounter);
function increementCounter() {
  count++;
  setCounterText();
}
// TODO: Add event listener to decrement button
decrementEl.addEventListener("click", decreementCounter);
function decreementCounter() {
  if (count > 0) {
    count--;

    setCounterText();
  }
}
