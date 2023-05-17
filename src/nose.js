const button = document.getElementById("menu-hambur");
const options= document.getElementById("options")
console.log(button)

button.addEventListener("click", () => {
    button.classList.toggle("close");
    options.classList.toggle("show");
    console.log(options);
});

options.addEventListener("click", e =>{
    if (nose.id === "options"){
        options.classList.remove("show");
        button.classList.remove("close")

    }
})

