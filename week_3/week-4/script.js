```javascript
document.addEventListener("DOMContentLoaded", function () {

    // Get buttons
    const findButton = document.getElementById("findButton");
    const lostButton = document.getElementById("lostButton");
    const foundButton = document.getElementById("foundButton");
    const submitButton = document.getElementById("submitButton");

    // Get form elements
    const formArea = document.getElementById("form-area");
    const formTitle = document.getElementById("form-title");

    const itemName = document.getElementById("item-name");
    const itemLocation = document.getElementById("item-location");

    const result = document.getElementById("result");


    // FIND ITEM BUTTON
    findButton.addEventListener("click", function () {

        formArea.style.display = "block";

        formTitle.textContent =
            "Find a Lost or Found Item";

        itemName.placeholder =
            "Enter item you are looking for";

        itemLocation.placeholder =
            "Enter campus location";

        result.innerHTML = "";

        formArea.scrollIntoView({
            behavior: "smooth"
        });

    });


    // REPORT LOST ITEM BUTTON
    lostButton.addEventListener("click", function () {

        formArea.style.display = "block";

        formTitle.textContent =
            "Report Lost Item";

        itemName.placeholder =
            "What did you lose?";

        itemLocation.placeholder =
            "Where did you lose it?";

        result.innerHTML = "";

        formArea.scrollIntoView({
            behavior: "smooth"
        });

    });


    // REPORT FOUND ITEM BUTTON
    foundButton.addEventListener("click", function () {

        formArea.style.display = "block";

        formTitle.textContent =
            "Report Found Item";

        itemName.placeholder =
            "What did you find?";

        itemLocation.placeholder =
            "Where did you find it?";

        result.innerHTML = "";

        formArea.scrollIntoView({
            behavior: "smooth"
        });

    });


    // SUBMIT BUTTON
    submitButton.addEventListener("click", function () {

        const item = itemName.value.trim();
        const location = itemLocation.value.trim();

        // Check empty fields
        if (item === "" || location === "") {

            result.innerHTML =
                "⚠️ Please enter the item name and location.";

            result.style.color = "#d32f2f";

            return;
        }


        // Successful submission
        result.innerHTML =
            "✓ <strong>Report submitted successfully!</strong><br>" +
            "Item: " + item + "<br>" +
            "Location: " + location;

        result.style.color = "#087a50";


        // Clear fields
        itemName.value = "";
        itemLocation.value = "";

    });

});
```

