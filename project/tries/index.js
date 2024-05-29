const items = [
    'nikestore','adidas','lacoste','gucchi','amazon','goldman','atcoder','codechef','codeforces'
];



const root = new makeNode('\0');

for(const i of items)
{
    add(i ,0 ,root);
}

const text = document.getElementById("in");
const list = document.getElementById('hi');

function handler(e) {
    const str = e.target.value;
    if(str ==="") 
    {
        list.innerHTML = "";
    }
    else{
        const predictions = search(str, 0, root);

        console.log(predictions);
    
        list.innerHTML = "";
        for (const prediction of predictions)
            list.innerHTML += `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${str}</b>${prediction.substring(str.length)}</li>`;
    }
   

     

}

function handleClick(e) {
    text.value = e.innerText;

    list.innerHTML = "";
}


text.addEventListener("keyup",handler);