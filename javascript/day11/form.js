let form = document.getElementById("myform")
let msg = document.getElementById("msg")

form.addEventListener("submit", function(event){
    event.preventDefault();
    msg.textContent = `someone selected ${form.city.value}`
})


