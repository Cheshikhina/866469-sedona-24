var closeningButton = document.querySelector(".user");
var openingButton = document.querySelector(".hotel-search");
var popup = document.querySelector(".user");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var dateOfDeparture = popup.querySelector("[name=date-of-departure]");
var adults = popup.querySelector("[name=adults]");

closeningButton.classList.add("user-close");

openingButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("user-open");
});

popup.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !dateOfDeparture.value || !adults.value) {
        evt.preventDefault();
        console.log("Нужно заполнить поле");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("user-open")) {
            evt.preventDefault();
            popup.classList.remove("user-open");
        }
    }
});