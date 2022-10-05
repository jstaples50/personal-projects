// *GLOBAL VARIABLES*

var colorsArray = ['neon-green', 'dark-green', 'hot-pink', 'dark-pink']

var buttonsElArray = $('li');
$(buttonsElArray).on('click', assignRandomSquare)

var squareArray = $('.square')

// *FUNCTIONS*

function assignRandomSquare() {
    for (var i = 0; i < squareArray.length; i++) {
        $(squareArray[i]).removeClass(colorsArray);
        var randColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]
        $(squareArray[i]).addClass(`${randColor}`)
    }
}


// *TESTS*
console.log(buttonsElArray)
console.log(colorsArray[0])
console.log(squareArray[1])

// *EXECUTION*