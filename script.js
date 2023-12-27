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

	let newCell1 = newRow.insertCell(1);
	let row = table.getElementsByTagName('tr');

	let sum = 0;

	for(let i=1; i<row.length; i++)
		{
			let priceCell = row[i].getElementsByClassName('price')[0];
			if(priceCell)
			{
				let price = parseFloat(priceCell.textContent.trim());
				if(!isNaN(price))
				{
					sum+=price;
				}
			}
		}
	
	newCell1.innerHTML = sum;
	
  
};

getSumBtn.addEventListener("click", getSum);

