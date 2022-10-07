// *GLOBAL VARIABLES*

var colorsArray = ['neon-green', 'dark-green', 'hot-pink', 'dark-pink']

var buttonsElArray = $('li');
$(buttonsElArray).on('click', assignRandomSquare);

var squareArray = ''

var submitBtnEl = $('#submit-btn');
$(submitBtnEl).on('click', askUserforNumberOfRows);

var squareGrid = $('#square-grid');

var userInputRows = '';

// *FUNCTIONS*

function assignRandomSquare() {
    for (var i = 0; i < squareArray.length; i++) {
        $(squareArray[i]).removeClass(colorsArray);
        var randColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]
        $(squareArray[i]).addClass(`${randColor}`)
    }
}

function askUserforNumberOfRows() {
    userInputRows = $('input').val();
    createSquareGrid();
}

function removeRowSelector() {
    $('#row-selector').empty();
    $('#row-selector').detach();
}

function createSquareGrid() {
    var squareID = 1;
    for (var i = 0; i < userInputRows; i++) {
        var rowEl = document.createElement('div');
        $(squareGrid).append(rowEl);
        $(rowEl).addClass(['row', 'd-flex', 'justify-space-around']);
        for (var j = 0; j < 5; j++) {
            var squareEl = document.createElement('div', {is: `${squareID}`});
            $(squareEl).addClass(['col', 'd-flex', 'square', 'justify-align-center']);
            $(squareEl).text(`${squareID}`);
            $(rowEl).append(squareEl);
            squareID++
        }
    }
    squareArray = $('.square');
    removeRowSelector();
}

// *TESTS*

function testEventListener() {
    console.log('test');
}


// *EXECUTION*