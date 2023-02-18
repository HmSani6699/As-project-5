//click the  button to new page
document.getElementById('blog-btn').addEventListener('click', function () {
    location.href = 'blog.html'
});

// Triangle part
document.getElementById('triangle-btn').addEventListener('click', function () {

    //get the card title and card input value
    const array = getArray('triangle-title', 'triangle-first-input', 'triangle-second-input');

    // convert the triangle area
    const calculate = 0.5 * array[1] * array[2];
    const area = parseFloat(calculate).toFixed(2);
    //show the display data
    displayData(array[0], area);
});

// Rectangle part
document.getElementById('rectangle-btn').addEventListener('click', function () {

    //get the card title and card input value
    const array = getArray('rectangle-title', 'rectangle-first-input', 'rectangle-second-input');

    // convert the rectangle  area
    const calculate = array[1] * array[2];
    const area = parseFloat(calculate).toFixed(2);
    //show the display data
    displayData(array[0], area)
});

// Parallelogram part
document.getElementById('parallelogram-btn').addEventListener('click', function () {

    //get the card title and card input value
    const array = getArray('parallelogram-title', 'parallelogram-first-input', 'parallelogram-second-input');

    // convert the Parallelogram  area
    const calculate = array[1] * array[2];
    const area = parseFloat(calculate).toFixed(2);
    //show the display data
    displayData(array[0], area)
})

// Rhombus part
document.getElementById('rhombus-btn').addEventListener('click', function () {

    //get the card title and card input value
    const array = getArray('rhombus-title', 'rhombus-first-input', 'rhombus-second-input');

    // convert the Rhombus  area
    const calculate = 0.5 * array[1] * array[2];
    const area = parseFloat(calculate).toFixed(2);
    //show the display data
    displayData(array[0], area)
});

// Pentagon part
document.getElementById('pentagon-btn').addEventListener('click', function () {

    //get the card title and card input value
    const array = getArray('pentagon-title', 'pentagon-first-input', 'pentagon-second-input');

    // convert the Pentagon  area
    const calculate = 0.5 * array[1] * array[2];
    const area = parseFloat(calculate).toFixed(2);
    //show the display data
    displayData(array[0], area)
});

// Ellipse part
document.getElementById('ellipse-btn').addEventListener('click', function () {

    //get the card title and card input value
    const array = getArray('ellipse-title', 'ellipse-first-input', 'ellipse-second-input');

    // convert the Ellipse  area
    const calculate = 3.14 * array[1] * array[2];
    const area = parseFloat(calculate).toFixed(2);
    //show the display data
    displayData(array[0], area)
});


