let accounts = [];

function addAccount() {
  let name = document.getElementById("name").value.trim();
  let balanceInput = document.getElementById("balance").value;
  let balance = parseInt(balanceInput);

  if (!name || isNaN(balance) || balance < 0) {
    console.log("Please enter a valid name and a non-negative balance.");
    return;
  }

  let account = {
    name: name,
    balance: balance
  };

  accounts.push(account);
  document.getElementById("account").innerHTML += `<option value="${accounts.length - 1}">${name}</option>`;
  console.log(`Account created for ${name} with a balance of $${balance}`);

  document.getElementById("name").value = "";
  document.getElementById("balance").value = "";
}

function displayBalance() {
  let accountIndex = document.getElementById("account").value;
  if (accountIndex !== "") {
    let balance = accounts[accountIndex].balance;
    document.getElementById("balanceDisplay").innerHTML = `$${balance}`;
  } else {
    document.getElementById("balanceDisplay").innerHTML = "";
  }
}

function deposit() {
  let accountIndex = document.getElementById("account").value;
  let amount = parseInt(document.getElementById("amount").value);

  if (accountIndex === "") {
    console.log("Please select an account.");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    console.log("Invalid amount. Please enter a positive number.");
    return;
  }

  accounts[accountIndex].balance += amount;
  console.log(`$${amount} deposited into account for ${accounts[accountIndex].name}`);
  displayBalance();

  document.getElementById("amount").value = "";
}

function withdraw() {
  let accountIndex = document.getElementById("account").value;
  let amount = parseInt(document.getElementById("amount").value);

  if (accountIndex === "") {
    console.log("Please select an account.");
    return;
  }

  if (isNaN(amount) || amount <= 0 || amount > accounts[accountIndex].balance) {
    console.log("Invalid amount or insufficient funds.");
    return;
  }

  accounts[accountIndex].balance -= amount;
  console.log(`$${amount} withdrawn from account for ${accounts[accountIndex].name}`);
  displayBalance();

  document.getElementById("amount").value = "";
}
