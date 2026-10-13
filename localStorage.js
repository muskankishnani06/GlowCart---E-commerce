const data = {
    id: "xyz",
    password: "1234"
}

// setItem

localStorage.setItem("data", JSON.stringify(data))

// getItem

const userData = JSON.parse(localStorage.getItem("data"))

console.log(userData)

// localStorage.innerHTML = userData.password;
document.getElementById("localStorage").innerHTML = userData.password;