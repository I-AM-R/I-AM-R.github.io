var example1 = document.getElementById('example1');
	gridDemo = document.getElementById('gridDemo');

// Example 1 - Simple list
new Sortable(example1, {
	animation: 150,
	ghostClass: 'blue-background-class',
	chosenClass: 'red-background-class'
});




var example7SwapThreshold = 1;
//var example7SwapThresholdInput = document.getElementById('example7SwapThresholdInput');
var example7SwapThresholdCode = document.getElementById('example7SwapThresholdCode');
var example7SwapThresholdIndicators = [].slice.call(document.querySelectorAll('.swap-threshold-indicator'));

var example7InvertSwapInput = document.getElementById('example7InvertSwapInput');
var example7InvertSwapCode = document.getElementById('example7InvertSwapCode');
var example7InvertedSwapThresholdIndicators = [].slice.call(document.querySelectorAll('.inverted-swap-threshold-indicator'));

var example7Squares = [].slice.call(document.querySelectorAll('.square'));

var activeIndicators = example7SwapThresholdIndicators;

var example7DirectionInput = document.getElementById('example7DirectionInput');
var example7SizeProperty = 'width';


function renderThresholdWidth(evt) {
	example7SwapThreshold = Number(evt.target.value);
	example7SwapThresholdCode.innerHTML = evt.target.value.indexOf('.') > -1 ? evt.target.value.padEnd(4, '0') : evt.target.value;

	for (var i = 0; i < activeIndicators.length; i++) {
		activeIndicators[i].style[example7SizeProperty] = (evt.target.value * 100) /
			(activeIndicators == example7SwapThresholdIndicators ? 1 : 2) + '%';
	}

	example7Sortable.option('swapThreshold', example7SwapThreshold);
}

//example7SwapThresholdInput.addEventListener('input', renderThresholdWidth);


function renderDirection(evt) {
	for (var i = 0; i < example7Squares.length; i++) {
		example7Squares[i].style.display = evt.target.value === 'h' ? 'inline-block' : 'block';
	}

	for (i = 0; i < example7InvertedSwapThresholdIndicators.length; i++) {
		/* jshint expr:true */
		evt.target.value === 'h' && (example7InvertedSwapThresholdIndicators[i].style.height = '100%');
		evt.target.value === 'v' && (example7InvertedSwapThresholdIndicators[i].style.width = '100%');
	}

	for (i = 0; i < example7SwapThresholdIndicators.length; i++) {
		if (evt.target.value === 'h') {
			example7SwapThresholdIndicators[i].style.height = '100%';
			example7SwapThresholdIndicators[i].style.marginLeft = '50%';
			example7SwapThresholdIndicators[i].style.transform = 'translateX(-50%)';

			example7SwapThresholdIndicators[i].style.marginTop = '0';
		} else {
			example7SwapThresholdIndicators[i].style.width = '100%';
			example7SwapThresholdIndicators[i].style.marginTop = '50%';
			example7SwapThresholdIndicators[i].style.transform = 'translateY(-50%)';

			example7SwapThresholdIndicators[i].style.marginLeft = '0';
		}
	}

	if (evt.target.value === 'h') {
		example7SizeProperty = 'width';
		example7Sortable.option('direction', 'horizontal');
	} else {
		example7SizeProperty = 'height';
		example7Sortable.option('direction', 'vertical');
	}

	renderThresholdWidth({
		target: example7SwapThresholdInput
	});
}



// Grid demo
new Sortable(gridDemo, {
	animation: 150,
	ghostClass: 'blue-background-class',
	onEnd:'kjfdksajfhsafk'
});

// Nested demo
var nestedSortables = [].slice.call(document.querySelectorAll('.nested-sortable'));

for (var i = 0; i < nestedSortables.length; i++) {
	new Sortable(nestedSortables[i], {
		group: 'nested',
		animation: 150
	});
}
