function validar(){
	var u, c;
	u=document.getElementById("usuario").value;
	c=document.getElementById("pass").value;
	if(u== "Nayeli" && c=="0024"){
		alert("Usuario y contraseña validos, Bienvenido :)");
		window.open("Peso.html");
        
	}
	else{
		alert("Usuario o Contraseña incorrectos :( vuelve a intentarlo");
	}
}