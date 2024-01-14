const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let inp = document.getElementById("input").value;

    if(inp !== "" ){

    let create = document.querySelector("ul");

    let newPara = document.createElement("li");

    newPara.innerHTML = inp;

    let iconDiv = document.createElement("div");
    iconDiv.classList.add("icon");
    iconDiv.innerHTML = `  
        <i class="fa-solid fa-trash" id="delete"></i>
    `;

    newPara.appendChild(iconDiv);
    create.prepend(newPara);

    document.getElementById("input").value = "";



    document.querySelector("#delete").addEventListener("click", () => {
        newPara.remove();
    });
}
});




