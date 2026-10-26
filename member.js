let selectButtons = document.querySelectorAll(".select-item");
let requestType = document.getElementById("requestType");
let selectedItem = document.getElementById("selectedItem");

selectButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        let itemName = button.dataset.item;
        let itemType = button.dataset.type;

        selectedItem.value = itemName;
        requestType.value = itemType;

    });
});