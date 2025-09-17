let button = document.getElementById("button");
let list = document.getElementById("list");
button.addEventListener( "click", function(){
    let li = document.createElement("li");
    li.innerText = "hello";
    list.appendChild(li);

    let delbtn = document.createElement("button")
    delbtn.innerText = "delete"

    li.appendChild(delbtn)
    delbtn.addEventListener("click", function(){
        list.removeChild(li)
    })

    let editbtn = document.createElement("button")
    editbtn.innerText = "edit"
    li.appendChild(editbtn)

    editbtn.addEventListener("click", function(){
        let new_todo = prompt("change to")

        if (new_todo !== "" && new_todo !== null){
            li.innerText = new_todo
        }
    })
})
