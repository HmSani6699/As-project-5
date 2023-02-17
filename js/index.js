
document.getElementById('triangle-btn').addEventListener('click', function () {

    const firstInput = document.getElementById('triangle-first-input');
    const firstInputValueString = firstInput.value;
    const firstInputValue = parseFloat(firstInputValueString);


    const secondInput = document.getElementById('triangle-second-input');
    const secondInputValueString = secondInput.value;
    const secondInputValue = parseFloat(secondInputValueString);

    let totalArea = 0.5 * firstInputValue * secondInputValue;
    console.log(totalArea)

})