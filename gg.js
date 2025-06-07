document.querySelector(".userInput").focus();

let userName = document.querySelector(".userInput");
let submit = document.querySelector(".submitButton");

submit.addEventListener("click", function() {
    let name = userName.value.trim();
    if (name) {
        localStorage.setItem("playerName", name);
        window.location.href = "eco.html";
    } else {
        alert("يرجى إدخال اسم الطالب");
    }
});