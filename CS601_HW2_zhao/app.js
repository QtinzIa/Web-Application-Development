document.addEventListener("DOMContentLoaded", () => {
    const itemsContainer = document.getElementById("items-container");
    const fruitZone = document.getElementById("fruit-zone");
    const vegetableZone = document.getElementById("vegetable-zone");
    const fruitColors = ["#ffa0a0", "#ffb0b0", "#ffc0c0", "#ffd0d0", "#ffe0e0", "#fff0f0"];
    const vegetableColors = ["#a8ffa0", "#b8ffb0", "#c8ffc0", "#d8ffd0", "#e8ffe0", "f8fff0"];
    let fruitCounter = 0;
    let vegetableCounter = 0;
    // Fetch data from data.json and create items
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // Combine fruits and vegetables into an array
            const items = [...data.fruits, ...data.vegetables];
            
            items.forEach(item => {
                const itemElement = document.createElement("div");
                itemElement.textContent = item.name;
                itemElement.classList.add("draggable-item");
                itemElement.draggable = true;
                itemElement.dataset.category = item.category;

                // Add dragstart event listener
                itemElement.addEventListener("dragstart", (event) => {
                    event.dataTransfer.setData("text", item.name);
                    event.dataTransfer.setData("category", item.category);
                });

                itemsContainer.appendChild(itemElement);
            });
        });

    // Set up drop zones
    [fruitZone, vegetableZone].forEach(zone => {
        zone.addEventListener("dragover", (event) => event.preventDefault());
        zone.addEventListener("drop", (event) => {
            event.preventDefault();
            const itemName = event.dataTransfer.getData("text");
            const itemCategory = event.dataTransfer.getData("category");

            // Only allow items of the correct category
            if (zone.dataset.category === itemCategory) {
                const itemElement = document.createElement("div");
                itemElement.textContent = itemName;
                itemElement.classList.add("dropped-item");

                // Set background color based on category and drop order
                if (itemCategory === "fruit") {
                    const colorIndex = fruitCounter % fruitColors.length; // Cycle through fruit colors
                    itemElement.style.backgroundColor = fruitColors[colorIndex];
                    fruitCounter++; // Increment the fruit counter
                } else if (itemCategory === "vegetable") {
                    const colorIndex = vegetableCounter % vegetableColors.length; // Cycle through vegetable colors
                    itemElement.style.backgroundColor = vegetableColors[colorIndex];
                    vegetableCounter++; // Increment the vegetable counter
                }
                
                zone.appendChild(itemElement);
            } else {
                alert("Incorrect drop zone!");
            }
        });
    });
});
