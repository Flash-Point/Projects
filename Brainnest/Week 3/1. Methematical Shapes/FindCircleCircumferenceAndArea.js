function findCircumferenceAndArea() {
    let radius = document.getElementById("circle-radius").value;
    let circumferenceAnswer = document.getElementById("circumference");
    let surfaceAreaAnswer = document.getElementById("surface-area");
    let diameter = 2 * radius;
    circumferenceAnswer.innerHTML = `Circumference: ${Math.PI * diameter}`;
    surfaceAreaAnswer.innerHTML = `Surface Area: ${Math.PI * (radius * radius)}`;
}