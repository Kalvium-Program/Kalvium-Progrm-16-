let fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"];

// Function to display fruits
function displayFruits(customList = fruits) {
    const fruitList = document.getElementById('fruit-list');
    fruitList.innerHTML = ''; 
    customList.forEach((fruit, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${fruit}`;
        fruitList.appendChild(li);
    });
}

// Function to add a new fruit
function addFruit() {
    const newFruitInput = document.getElementById('new-fruit');
    const newFruit = newFruitInput.value.trim();
    
    if (newFruit) {
        fruits.push(newFruit);
        newFruitInput.value = ''; 
        displayFruits();
    } 
}

// Function to remove the last fruit
function removeFruit() {
    fruits.pop();
    displayFruits();
}

// Function to display the first 3 fruits
function sliceFruits() {
    const slicedFruits = fruits.slice(0, 3);
    displayFruits(slicedFruits);
}

// Function to remove the second fruit without modifying the original array
function spliceFruits() {
    const splicedFruits = fruits.slice(0, 1).concat(fruits.slice(2));
    displayFruits(splicedFruits);
}

// Function to convert all fruit names to uppercase
function mapFruits() {
    const mappedFruits = fruits.map(fruit => fruit.toUpperCase());
    displayFruits(mappedFruits);
}

// Function to filter fruits with names longer than 5 characters
function filterFruits() {
    const filteredFruits = fruits.filter(fruit => fruit.length > 5);
    displayFruits(filteredFruits);
}
