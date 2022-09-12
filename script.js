const array = [1,2,4,591,591,592,593,594,594,392,391,2,5,10,2,1,1,1,20,20];
const generateArray = (() => {
	if (sliceArray.length === 1){
		newArray = newArray.concat(sliceArray);
	} else {
		newArray = newArray.concat([sliceArray]);
	};
});
//sort array
const sortArray = array.sort(function(a,b) {
	return a - b;
});
console.log(sortArray);

let newArray = [];
let initialValue = sortArray[0];
let sliceArray = [];
sortArray.forEach((element, i) => {
		i++;
		if (element === initialValue) {
			sliceArray.push(element);
			if ( i === sortArray.length) {
				generateArray();
			};
		} else {
			generateArray();
			sliceArray = [];
			sliceArray.push(element);
			if ( i === sortArray.length) {
				generateArray();
			};
			initialValue = element;
		}
		
});
console.log('new Array', newArray);