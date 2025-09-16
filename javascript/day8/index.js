// when a webpage loads, the brower creates a DOM tree of all elements

// javascript can use DOM methods to read or modify these elements.

const doc_header = document.getElementById("header");

doc_header.innerHTML = "hello world!";
doc_header.style.color = "red";
doc_header.style.fontSize = "30px";
doc_header.style.textAlign = "center";