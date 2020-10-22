console.log("Iniciando JS")
function changeScreen(){
    console.log("Cambiar pantalla");
    //Oculta la pantalla de lenguaje
    document.getElementById("screenLenguaje").classList.remove("mostrar");
    document.getElementById("screenLenguaje").classList.add("ocultar");
    //Muestra la pantalla para ingresar PIN
    document.getElementById("screenPin").classList.remove("ocultar");
    document.getElementById("screenPin").classList.add("mostrar");
}
function clicBtn(dato){
    console.log("presiono el btn "+dato);
    document.getElementById("pin").innerHTML = dato;
}
