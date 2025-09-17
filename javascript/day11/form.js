let form = document.getElementById("myform")
let msg = document.getElementById("msg")
let username = document.getElementById("username")
let email = document.getElementById("email")

form.addEventListener("submit", function(event){
    event.preventDefault();
    msg.textContent = `user: ${username.value} with email: ${email.value} from city ${form.city.value}`
})


