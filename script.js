const boton = document.querySelector(".boton");
var tamGrilla = 16;
var grilla = document.querySelector(".contenedor");

function crearGrilla(tamGrilla)
{
    grilla.style.width = `${80}%`;
    console.log(grilla.style.width);
    for(let i = 0; i < tamGrilla; i++)
        {
            for(let j = 0; j < tamGrilla; j++)
            {
                var div = document.createElement("div");
                div.classList.add("bloques");
                div.style.width = `${100 / tamGrilla}%`;
                div.style.height = `${(100 / tamGrilla)}dvh`;
                grilla.appendChild(div);
            } 
        }
}

crearGrilla(tamGrilla);

boton.addEventListener("click", function()
{   //Borrar los elementos del contenedor y crear una nueva grilla
    tamGrilla = Number(prompt("Enter the grid size"));
    if(tamGrilla < 2)
    {
        tamGrilla = 2;
    }
    grilla.innerHTML = "";
    crearGrilla(tamGrilla);

});

