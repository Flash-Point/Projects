//get rating element on second form
const dataValue = document.getElementById("rating");

//create function for event handler for clicks of each element.
//'this' is what we clicked on.
const onClick = function() {
    dataValue.innerHTML = this.innerHTML;
    this.style.backgroundColor = "hsl(216, 12%, 54%)";
    this.style.color = "hsl(0, 0%, 100%)";
}

//assign onClick function as the value of the onclick property to each element.
const data1 = document.getElementById("data1").onclick = onClick;
const data2 = document.getElementById("data2").onclick = onClick;
const data3 = document.getElementById("data3").onclick = onClick;
const data4 = document.getElementById("data4").onclick = onClick;
const data5 = document.getElementById("data5").onclick = onClick;

//get hidden forms container
const container = document.getElementById("container2");

//to display second form with edits.
document.getElementById("btn").addEventListener("click", () => {
    container.style.zIndex = "3";
})

