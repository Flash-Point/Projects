function calcTriangleArea() {
    /*using the triangle equation 1/2(B * H) we can calculate area
    lets pick the larger number for our base
    left side not used as we take the larger number to be the base,
    and the second largest number to be the height, assuming that this
    is a right angled triangle.*/

    //let left = document.getElementById("left").value;
    let right = document.getElementById("right").value;
    let base = document.getElementById("base").value;
    let answer = document.getElementById("answer-two");
    let area = 0.5 * (base * right);
    answer.innerHTML = `Answer: ${area}`;
}