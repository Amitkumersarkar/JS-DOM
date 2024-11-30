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

// options 4

const pinkBtn = document.getElementById('make-pink');
pinkBtn.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}


// options 4 another 

const makeRedBtn = document.getElementById('make-red');
makeRedBtn.addEventListener('click', function makeRed() {
    document.body.style.backgroundColor = 'red';
})

// options 4 final

