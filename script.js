// add an item button and input
let addItemButton = document.getElementById("add_item_button");
let addItemInput = document.getElementById("add_item_input");

// item list
let itemList = document.getElementsByClassName("items")[0];

// amount of items added to the document
let currentItemsQty = 0;

// adds an item to the list by clicking add button
addItemButton.onclick = () => {
	// gets input
	let itemName = addItemInput.value;
	addItemInput.value = '';

	// checks if value is empty before
	if(empty(itemName)){
		addItemInput.style.border = "1px solid crimson";
		addItemInput.style.borderRadius = "5px";
	}
	else{
		addItemInput.style.border = "0.5px solid silver";
		addItemInput.style.borderRadius = "5px";

		// counting items
		currentItemsQty++;

		// constructing nodes for new item
		let txtItemNode = document.createTextNode(itemName);
		let pItemNode = document.createElement("p");
		pItemNode.appendChild(txtItemNode);

		let inputNode = document.createElement("input");
		inputNode.type = "checkbox";
		inputNode.name = "item";

		// place line through on text when selected
		inputNode.addEventListener("change", () => {
			// is checkbox checked?
			// yes
			if(inputNode.checked == 1){
				pItemNode.style.textDecoration = "line-through";
				pItemNode.style.color = "gray";
			}
			// no
			else{
				pItemNode.style.textDecoration = "none";
				pItemNode.style.color = "black";
			}
		});

		// close button
		let txtCloseButton = document.createTextNode("X");
		let aDeleteButton = document.createElement("a");
		aDeleteButton.appendChild(txtCloseButton);
		aDeleteButton.className = "delete_item";
		aDeleteButton.href = `#item${currentItemsQty}_deleted`

		// main div node
		let divNode = document.createElement("div");
		divNode.className = "item";
		divNode.id = `item${currentItemsQty}`;
		
		// appending everything
		divNode.appendChild(inputNode);
		divNode.appendChild(pItemNode);
		divNode.appendChild(aDeleteButton);

		// delete button functioning
		aDeleteButton.onclick = () => {
			itemList.removeChild(divNode);
			currentItemsQty--;
		};

		// appending to list
		itemList.appendChild(divNode);
	}
}

// sets style when onclick
addItemInput.addEventListener("click", () => {
	addItemInput.style.border = "2px solid green";
});

// and onchange
addItemInput.addEventListener("blur", () => {
	addItemInput.style.border = "1px solid silver";
})

const empty = (str) => {
	return str === ''
}