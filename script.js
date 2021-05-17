let btn = document.querySelector('#btn-add');
let itemName = document.querySelector('#item-name');
let list = document.querySelector('.list');

btn.addEventListener('click', () => addItem(itemName.value));

itemName.addEventListener('keypress', e => {
    if(e.code == 'Enter') {
        addItem(itemName.value);
        // console.log(e.code);
    }
})

function addItem(text) {

    if(text.length > 50) text = text.slice(0, 30);
    
    if(text) {
        let li = document.createElement("li");
        let div = document.createElement("div");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "item-checkbox";
        
        let p = document.createElement("p");

        let cross = document.createElement("div");
        let item = document.createTextNode(text);

        li.className = "list-items";
        cross.className = "fa fa-trash";

        div.appendChild(checkbox);
        p.appendChild(item);
        div.appendChild(p);
        li.appendChild(div);
        li.appendChild(cross);
        list.appendChild(li);
        itemName.value = "";

        //to show delete icon
        // li.addEventListener("mouseover", () => cross.style.display = "block");
        // li.addEventListener("mouseout", () => cross.style.display = "none");
        // when delete button is clicked
        cross.addEventListener("click", () =>  list.removeChild(li));
        // when paragraph is clicked
        p.addEventListener("click", () => lineThrough(p, checkbox, 1));
        checkbox.addEventListener("click", () => lineThrough(p, checkbox));
       
    } else {
        alert("Can't be empty");
    }
}

const lineThrough = (p, checkbox, flag = 0) => {
    p.classList.toggle("line-through");
    // checkbox.checked;
    if(flag) {
        checkbox.click();
        p.classList.toggle("line-through");
    }
}