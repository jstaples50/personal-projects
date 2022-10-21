// *ISSUES*
    // when random button is selected, error occurs and color does not change 
    // **EDGE CASE** if no length is selected, no squares are rendered


// *GLOBAL VARIABLES*

var neonArray = ['neon-green', 'dark-green', 'hot-pink', 'dark-pink']
var goldArray = ['light-gold', 'yellow', 'dark-gold', 'purple'];
var aquamarineArray = ['teal', 'ocean', 'skin-tone', 'dark-tone'];
var burntOrangeArray = ['burnt-orange', 'light-orange', 'brown', 'smooth-blue'];
var nuetralColor = ['pastel-blue'];

var iterableColorArray = [neonArray, goldArray, aquamarineArray, burntOrangeArray];

var allColorsArray = createMasterColorArray(neonArray, goldArray, aquamarineArray, burntOrangeArray, nuetralColor);

var buttonsElArray = $('li');


// Event Listener for random choice of all colors

$('#random-colors').on('click', assignRandomSquareColor);

// Event Listener for choice of colors specific to button pressed

for (var i = 0; i < $(buttonsElArray).length; i++) {
    if (!$(buttonsElArray[i]).is('#random-colors')) {
        console.log($(buttonsElArray)[i])
        $(buttonsElArray[i]).on('click', assignColorArrayToSquares);
    } 
}


var squareArray = '';

var colorChoice = '';
var submitBtnEl = $('#submit-btn');
$(submitBtnEl).on('click', askUserforNumberOfRows);

var squareGrid = $('#square-grid');

var userInputRows = '';

// *FUNCTIONS*

function createMasterColorArray(...arrays) {
    var masterArray = [];
    for (var arr of arrays) {
        for (var i = 0; i < arr.length; i++) {
            masterArray.push(arr[i]);
        }
    }
    return masterArray;
}

function assignRandomSquareColor(event) {
    colorChoice = event.target.className;

    for (var i = 0; i < squareArray.length; i++) {
        $(squareArray[i]).removeClass(allColorsArray);
        var randColor = allColorsArray[Math.floor(Math.random() * allColorsArray.length)]
        $(squareArray[i]).addClass(`${randColor}`)
    }
}

function assignColorArrayToSquares(event) {
    var colorArray;
    for (var i = 0; i < iterableColorArray.length; i++) {
        if (iterableColorArray[i].includes(`${event.target.className}`)) {
            colorArray = iterableColorArray[i];
        }
    }

    for (var i = 0; i < squareArray.length; i++) {
        $(squareArray[i]).removeClass(allColorsArray);
        var randColor = colorArray[Math.floor(Math.random() * colorArray.length)]
        $(squareArray[i]).addClass(`${randColor}`)
    }

}

function askUserforNumberOfRows() {
    userInputRows = $('input').val();
    createSquareGrid();
}

function createSquareGrid() {
    var squareID = 1;
    for (var i = 0; i < userInputRows; i++) {
        var rowEl = document.createElement('div');
        $(squareGrid).append(rowEl);
        $(rowEl).addClass(['row', 'd-flex', 'justify-space-around']);
        for (var j = 0; j < 5; j++) {
            var squareEl = document.createElement('div');
            squareEl.setAttribute('id', `${squareID}`)
            $(squareEl).addClass(['col', 'd-flex', 'square', 'justify-align-center']);
            $(squareEl).text(`${squareID}`);
            $(rowEl).append(squareEl);
            squareID++
        }
    }
    squareArray = $('.square');
    removeRowSelector();
}

function removeRowSelector() {
    $('#row-selector').empty();
    $('#row-selector').detach();
}


// *TESTS*

function testEventListener() {
    console.log('test');
}

// console.log(allColorsArray);

// *EXECUTION*
