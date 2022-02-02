function crearTablero(){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightblue";
    pincel.fillRect(0,0,1200,800);
}