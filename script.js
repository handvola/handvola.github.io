let accounts = [];

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (accounts.some(account => account.username === username)) {
        document.getElementById('message').textContent = 'Username already exists!';
        return;
    }

    accounts.push({ username, password });
    saveAccounts();

    document.getElementById('message').textContent = 'Registered successfully!';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (accounts.some(account => account.username === username && account.password === password)) {
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
    }
});

function saveAccounts() {
    const blob = new Blob([JSON.stringify(accounts, null, 2)], { type: 'application/json' });
    const link = document.getElementById('downloadLink');
    link.href = URL.createObjectURL(blob);
    link.download = 'account.json';
    link.click();
}

function loadAccounts() {
    const input = document.getElementById('fileInput');
    input.addEventListener('change', function() {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            accounts = JSON.parse(event.target.result);
        };
        reader.readAsText(file);
    });
    input.click();
}

// Load accounts from JSON file when the page loads
window.onload = function() {
    loadAccounts();
};
let accounts = [];

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (accounts.some(account => account.username === username)) {
        document.getElementById('message').textContent = 'Username already exists!';
        return;
    }

    accounts.push({ username, password });
    saveAccounts();

    document.getElementById('message').textContent = 'Registered successfully!';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (accounts.some(account => account.username === username && account.password === password)) {
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
    }
});

function saveAccounts() {
    const blob = new Blob([JSON.stringify(accounts, null, 2)], { type: 'application/json' });
    const link = document.getElementById('downloadLink');
    link.href = URL.createObjectURL(blob);
    link.download = 'account.json';
    link.click();
}

function loadAccounts() {
    const input = document.getElementById('fileInput');
    input.addEventListener('change', function() {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            accounts = JSON.parse(event.target.result);
        };
        reader.readAsText(file);
    });
    input.click();
}

// Load accounts from JSON file when the page loads
window.onload = function() {
    loadAccounts();
};
