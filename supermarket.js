class Till {
	constructor() {
		this.customerTime = [];
	}
	totalTime() {
		let total = 0;
		// return sum of time required by all the customerTime
		// return 0 if array is empty
		if (this.customerTime === []) {
			return 0;
		}
		for (let i = 0; i <= this.customerTime.length; i++) {
			total = total + this.customerTime[i];
		}
		return total;
	}
	addCustomer(time) {
		this.customerTime.push(time);
	}
}

function tillWithSmallestQueue(tills) {
	// return till with lowest totalTime
}

function tillWithLargestQueue(tills) {
	// return till with highest totalTime
}

function queueTime(customers, n) {
	// Your code here
	tills = Array(n).map((t) => new Till());

	// process each customer
	customers.forEach((customer) => {
		// get till with lowest totalTime
		let smallestTill = tillWithSmallestQueue(tills);
		// add customer to that till
		smallestTill.addCustomer(customer);
	});

	// find till with larget totalTime
	let largestTill = tillWithLargestQueue(tills);
	// that's the output we need
	return largestTill.totalTime();
}
// module.exports = { queueTime };

console.log(queueTime([1, 2, 3, 4], 2))