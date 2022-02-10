
//  2. Red
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//3. for blue color;
const blueButton = document.getElementById("make-blue-button");

    // just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

/*
             4. for green color 
        By using anonymous function
*/

const greenButton = document.getElementById("make-green-button");
console.log(greenButton);

greenButton.onclick = function () {
  document.body.style.backgroundColor = "green";
}


//5. for goldenrod color By using listener
const goldenButton = document.getElementById("make-goldenrod");

goldenButton.addEventListener("click", makeGoldenRod);

function makeGoldenRod() {
  document.body.style.backgroundColor = "goldenrod";
}


//6. adddEventListener
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click' , function(){
    document.body.style.backgroundColor = 'hotpink';
})


//7. Direct shortcut
document.getElementById('light-blue').addEventListener('click' , function(){

    document.body.style.backgroundColor = 'lightblue'
})

