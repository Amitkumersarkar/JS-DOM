// option 1 directly set on the html element
// {/* <button onclick="console.log(17)">Click Me</button> */}
// {/* <br>
// <button onclick="console.log(77)">Click Here</button> */}
// option 2
// options two add onclick function
function makeYellow() {
    document.body.style.backgroundColor = 'Yellow'
}

// option 3

const makePurpleButton = document.getElementById('make-purple');
// console.log(makePurpleButton);
makePurpleButton.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option 3 another
const blueButton = document.getElementById('make-blue');
blueButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}