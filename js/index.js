let serial = 0;

function getCardTitle(elementId) {
    return document.getElementById(elementId).innerText;
}

function getInputValue(inputId) {
    const firstInput = document.getElementById(inputId);
    const firstInputValueString = firstInput.value;
    const firstInputValue = parseFloat(firstInputValueString);
    firstInput.value = '';
    return firstInputValue
}

function displayData(name, area) {

    const tableContainer = document.getElementById('table-body');
    serial += 1
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}${'.'}${name}</td>
    <td>${area}cm<sup>2</sup></td>
    <td><button
    class="bg-[#3abff8] px-3 py-2 rounded-md text-white font-medium">Convert to m<sup>2</sup></button></td>
    `
    tableContainer.appendChild(tr);
}

// Triangle part
document.getElementById('triangle-btn').addEventListener('click', function () {
    //card title
    const triangleTitle = getCardTitle('triangle-title');
    // Triangle first input value
    const firstInputValue = getInputValue('triangle-first-input');
    // Triangle second input value
    const secondInputValue = getInputValue('triangle-second-input');

    if (isNaN(firstInputValue) || isNaN(secondInputValue)) {
        return alert('please enter your number')
    }
    else if (firstInputValue < 0 || secondInputValue < 0) {
        return alert('please enter your positive number')
    }
    // convert the triangle area
    const calculate = 0.5 * firstInputValue * secondInputValue;
    const area = parseFloat(calculate).toFixed(2)
    //show the display data
    displayData(triangleTitle, area)
});

// Rectangle part
document.getElementById('rectangle-btn').addEventListener('click', function () {
    //card title
    const rectangleTitle = getCardTitle('rectangle-title')
    //Rectangle first input value
    const firstInputValue = getInputValue('rectangle-first-input');
    //Rectangle second input value
    const secondInputValue = getInputValue('rectangle-second-input');

    if (isNaN(firstInputValue) || isNaN(secondInputValue)) {
        return alert('please enter your number')
    }
    else if (firstInputValue < 0 || secondInputValue < 0) {
        return alert('please enter your positive number')
    }
    // convert the rectangle  area
    const calculate = firstInputValue * secondInputValue;
    const area = parseFloat(calculate).toFixed(2)
    //show the display data
    displayData(rectangleTitle, area)
});

// Parallelogram part
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    //card title
    const parallelogramTitle = getCardTitle('parallelogram-title')
    //Parallelogram first input value
    const firstInputValue = getInputValue('parallelogram-first-input');
    //Parallelogram second input value
    const secondInputValue = getInputValue('parallelogram-second-input');

    if (isNaN(firstInputValue) || isNaN(secondInputValue)) {
        return alert('please enter your number')
    }
    else if (firstInputValue < 0 || secondInputValue < 0) {
        return alert('please enter your positive number')
    }
    // convert the Parallelogram  area
    const calculate = firstInputValue * secondInputValue;
    const area = parseFloat(calculate).toFixed(2)
    //show the display data
    displayData(parallelogramTitle, area)
})

// Rhombus part
document.getElementById('rhombus-btn').addEventListener('click', function () {
    //card title
    const rhombusTitle = getCardTitle('rhombus-title')
    //Rhombus first input value
    const firstInputValue = getInputValue('rhombus-first-input');
    //Rhombus second input value
    const secondInputValue = getInputValue('rhombus-second-input');

    if (isNaN(firstInputValue) || isNaN(secondInputValue)) {
        return alert('please enter your number')
    }
    else if (firstInputValue < 0 || secondInputValue < 0) {
        return alert('please enter your positive number')
    }
    // convert the Rhombus  area
    const calculate = 0.5 * firstInputValue * secondInputValue;
    const area = parseFloat(calculate).toFixed(2)
    //show the display data
    displayData(rhombusTitle, area)
});

// Pentagon part
document.getElementById('pentagon-btn').addEventListener('click', function () {
    //card title
    const pentagonTitle = getCardTitle('pentagon-title')
    //Pentagon first input value
    const firstInputValue = getInputValue('pentagon-first-input');
    //Pentagon second input value
    const secondInputValue = getInputValue('pentagon-second-input');

    if (isNaN(firstInputValue) || isNaN(secondInputValue)) {
        return alert('please enter your number')
    }
    else if (firstInputValue < 0 || secondInputValue < 0) {
        return alert('please enter your positive number')
    }
    // convert the Pentagon  area
    const calculate = 0.5 * firstInputValue * secondInputValue;
    const area = parseFloat(calculate).toFixed(2)
    //show the display data
    displayData(pentagonTitle, area)
});

// Ellipse part
document.getElementById('ellipse-btn').addEventListener('click', function () {
    //card title
    const ellipseTitle = getCardTitle('pentagon-title')
    //Ellipse first input value
    const firstInputValue = getInputValue('ellipse-first-input');
    //Ellipse second input value
    const secondInputValue = getInputValue('ellipse-second-input');

    if (isNaN(firstInputValue) || isNaN(secondInputValue)) {
        return alert('please enter your number')
    }
    else if (firstInputValue < 0 || secondInputValue < 0) {
        return alert('please enter your positive number')
    }
    // convert the Ellipse  area
    const calculate = 3.14 * firstInputValue * secondInputValue;
    const area = parseFloat(calculate).toFixed(2)
    //show the display data
    displayData(ellipseTitle, area)
});


//set the random background color for card
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

let cards = document.querySelectorAll('.card-box');

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);

    cards[i].addEventListener("mouseover", function () {
        cards[i].style.backgroundColor = randomColor();

    });
}

