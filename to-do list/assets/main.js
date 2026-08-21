const myInput = document.querySelector('#main-input')
const myBtn = document.querySelector('#myBtn')
const mainData = document.querySelector('.main-data')
const delText = document.querySelector('.del-text')

myBtn.addEventListener("click", () => {
    const listItem = myInput.value.trim();

    if(listItem === ''){

    }else{
        const unique = "check=" + Date.now();

        const item = document.createElement('div');
        item.classList = "item";

        const toDoInput = document.createElement('input');
        toDoInput.type = 'checkbox';
        toDoInput.id = unique;
        
        const toDoLabel = document.createElement('label')
        toDoLabel.textContent = listItem;
        toDoLabel.htmlFor = unique;
        toDoLabel.style.cssText = `
            font-size: 20px;
            margin: 0 10px;
        `;

        const delBtn = document.createElement('button')
        delBtn.textContent = "X";
        delBtn.style.cssText = `
            padding: 5px 10px;
            background-color: black;
            color: white;
            border-radius: 10px;
        `;

        toDoInput.addEventListener("change", (event) => {
            if(event.target.checked){
                toDoLabel.style.textDecoration = 'line-through';
            }else{
                toDoLabel.style.textDecoration = 'none';
            }
        })

        item.appendChild(toDoInput);
        item.appendChild(toDoLabel);
        item.appendChild(delBtn)

        mainData.appendChild(item)

        myInput.value = "";
        delText.style.display = 'none';
    }
})