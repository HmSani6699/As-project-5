let serial = 0;

function getCardTitle(elementId) {
    return document.getElementById(elementId).innerText;
}

function getInputValue(inputId) {
    const firstInput = document.getElementById(inputId);
    const firstInputValueString = firstInput.value;
    const firstInputValue = parseFloat(firstInputValueString);
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
    const secondInputValue = getInputValue('triangle-second-input')
    // convert the triangle area
    let area = 0.5 * firstInputValue * secondInputValue;
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
    // convert the rectangle  area
    const area = firstInputValue * secondInputValue;
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
    // convert the Parallelogram  area
    const area = firstInputValue * secondInputValue;
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
    // convert the Rhombus  area
    const area = 0.5 * firstInputValue * secondInputValue;
    //show the display data
    displayData(rhombusTitle, area)
})