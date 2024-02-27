window.onload = function () {
    var welcomeMessage = document.createElement("h1");
    welcomeMessage.textContent = "Welcome! Thank you for visiting.";
    welcomeMessage.style.cssText = "position: fixed; inset-block-start: 50%; inset-inline-start: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px;";

    var exitButton = document.createElement("button");
    exitButton.textContent = "Exit";
    exitButton.style.cssText = "position: fixed; inset-block-start: calc(50% + 60px); inset-inline-start: 50%; transform: translateX(-50%); padding: 10px 20px; border: none; background-color: black; color: white; cursor: pointer;";

    exitButton.addEventListener("click", function () {
        document.body.removeChild(welcomeMessage);
        document.body.removeChild(exitButton);
    });

    document.body.appendChild(welcomeMessage);
    document.body.appendChild(exitButton);
};
