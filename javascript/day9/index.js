
function display(){
    let input = document.getElementById("username")
    let username = input.value
    let display = document.getElementById("display")

    let li = document.createElement("li")
    li.innerText = username
    display.appendChild(li)
}