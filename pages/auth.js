let nickname = "maus";

const enterButton = document.getElementById('submitButton');
enterButton.addEventListener('click', () => {
    event.preventDefault();

    const enteredName = document.getElementById('name').value;
    const lowerCaseName = enteredName.toLowerCase();

    if (lowerCaseName == nickname) {
        window.location.href = "./greeting.html";
        console.log("Verified");
    }
    else {
        window.location.href = "./stranger.html";
        console.log("Unverified");
    }
});