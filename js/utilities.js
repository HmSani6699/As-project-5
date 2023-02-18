let serial = 0;

//get the card title
function getCardTitle(elementId) {
    return document.getElementById(elementId).innerText;
}

//get the input value
function getInputValue(inputId) {
    const firstInput = document.getElementById(inputId);
    const firstInputValueString = firstInput.value;
    const firstInputValue = parseFloat(firstInputValueString);
    firstInput.value = '';
    return firstInputValue
}


//get the card title an input value
function getArray(title, firstInputId, secondInputId) {
    const triangleTitle = getCardTitle(title);
    const firstInputValue = getInputValue(firstInputId);
    const secondInputValue = getInputValue(secondInputId);

    if (isNaN(firstInputValue) || isNaN(secondInputValue)) {
        return alert('please enter your number')
    }
    else if (firstInputValue < 0 || secondInputValue < 0) {
        return alert('please enter your positive number')
    }

    const array = [triangleTitle, firstInputValue, secondInputValue];
    return array
}

//show the display data
function displayData(name, area) {
    const tableContainer = document.getElementById('table-body');
    serial += 1
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}${'.'}${name}</td>
    <td>${area}cm<sup>2</sup></td>
    <td><button
    class="bg-[#3abff8] px-3 py-2 rounded-md text-white font-medium">Convert to m<sup>2</sup></button></td>
    <td><button id="delete-btn" onclick="deleteBtn()"><i class="fa-solid fa-trash-can text-red-700"></i></button></td>
    `
    tableContainer.appendChild(tr);
}

//Delete the display data
function deleteBtn(e) {
    serial -= 1
    const deleteBtn = document.getElementById('delete-btn');
    deleteBtn.parentNode.parentNode.parentNode.removeChild(deleteBtn.parentNode.parentNode);
}

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
    cards[i].addEventListener("mouseover", function () {
        cards[i].style.backgroundColor = randomColor();

    });
}