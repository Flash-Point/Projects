function calcDiagonal() {
    let sideLength = document.getElementById("square-side-length").value;
    let answer = document.getElementById("answer-one");
    let diagonal = Math.sqrt(2) * sideLength;
    answer.innerHTML = `Answer: ${diagonal}`;
}