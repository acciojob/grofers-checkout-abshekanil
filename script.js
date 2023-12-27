const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let table = document.getElementsByTagName('table')[0];
	let newRow = table.insertRow(table.rows.length);

	let newTh = document.createElement('th');
	newTh.textContent = 'Total Price';

	newRow.appendChild(newTh);
  
};

getSumBtn.addEventListener("click", getSum);

