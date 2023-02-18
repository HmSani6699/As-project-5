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


document.getElementById('triangle-btn').addEventListener('click', function () {
    //card title
    const triangleTitle = getCardTitle('triangle-title');
    //first input value
    const firstInputValue = getInputValue('triangle-first-input');
    //second input value
    const secondInputValue = getInputValue('triangle-second-input')
    // convert the triangle area
    let area = 0.5 * firstInputValue * secondInputValue;
    //show the display data
    displayData(triangleTitle, area)
})