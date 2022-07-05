const input = "a whale of a deal!";
const vowels = ["a", "e","i","o","u"];
let resultArray = [];

for (let i = 0; i < input.length; i++){
  //console.log(i);
  for (let p = 0; p < vowels.length; p++){
    if (input[i] === vowels[p]){
      resultArray.push(input[i]);
    }
  }
  if (input[i] == 'e'){
    resultArray.push(input[i]);
  }
  if (input[i] == 'u'){
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join(" ").toString().toUpperCase());