// console.log(document.body);
// console.log(document.URL);
// console.log(document.script);

// const hello = document.getElementById("hello");

// console.log(hello.id);
// console.log(hello.className);
// console.log(hello.tagName);
// console.log(hello.innerHTML);
// console.log(hello.innerText);
// console.log(hello.textContent);


function myfunction(){
    let example_id = document.querySelector("#example");

    let value_example = example_id.value;

    document.getElementById("display").textContent = value_example;
}

const lorem = document.getElementById("lorem");
console.log(lorem.tagName);
lorem.textContent = "<p>this is funny</p>"
