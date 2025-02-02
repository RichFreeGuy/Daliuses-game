let dalcoins = 0;
let clicks = 0;
let playerName = "";
let modMode = false;
let autoClicker = false;

// Start Game Function
function startGame() {
    playerName = document.getElementById("nameInput").value.trim();
    if (!playerName) {
        alert("Enter a name!");
        return;
    }
    document.getElementById("playerName").innerText = playerName;
    document.getElementById("rules").style.display = "none";
    document.getElementById("game").style.display = "block";

    // Enable Mod Menu if Name is "DALIUSBOYS"
    if (playerName === "DALIUSBOYS") {
        modMode = true;
        document.getElementById("modMenu").style.display = "block";
    }
}

// Click Dalius Function
function clickDalius() {
    dalcoins += 0.2;
    clicks++;
    updateUI();
}

// Buy Upgrades
function buyUpgrade(type) {
    if (type === 1 && dalcoins >= 5) {
        dalcoins -= 5;
        alert("You bought Saul Pkenes Men!");
    } else if (type === 2 && dalcoins >= 10) {
        dalcoins -= 10;
        alert("You bought Vidja Games!");
    } else {
        alert("Not enough Dalcoins!");
    }
    updateUI();
}

// Auto Clicker Upgrade
function buyAutoClicker() {
    if (dalcoins >= 20) {
        dalcoins -= 20;
        autoClicker = true;
        alert("Auto Clicker Activated!");
        setInterval(() => {
            if (autoClicker) clickDalius();
        }, 1000); // Clicks every 1 second
    } else {
        alert("Not enough Dalcoins!");
    }
    updateUI();
}

// Update UI
function updateUI() {
    document.getElementById("dalcoins").innerText = dalcoins.toFixed(1);
}

// Reset Game
function resetGame() {
    dalcoins = 0;
    clicks = 0;
    autoClicker = false;
    document.getElementById("game").style.display = "none";
    document.getElementById("rules").style.display = "block";
    document.getElementById("modMenu").style.display = "none";
    modMode = false;
    alert("Game reset!");
}

// Rename Player
function rename() {
    let newName = prompt("Enter new name:");
    if (newName) {
        playerName = newName;
        document.getElementById("playerName").innerText = playerName;
        if (playerName === "DALIUSBOYS") {
            modMode = true;
            document.getElementById("modMenu").style.display = "block";
        } else {
            modMode = false;
            document.getElementById("modMenu").style.display = "none";
        }
    }
}

// Toggle Dropdown Menu
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// MOD MENU FUNCTIONS (For "DALIUSBOYS")
function modCoins() {
    if (modMode) {
        dalcoins = 999999;
        updateUI();
        alert("You now have infinite Dalcoins!");
    }
}

function modClicks() {
    if (modMode) {
        clicks = 999999;
        alert("You now have infinite clicks!");
    }
}

function allUpgrades() {
    if (modMode) {
        alert("All upgrades unlocked!");
    }
}

