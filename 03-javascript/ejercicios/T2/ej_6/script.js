let text = prompt("Ingresa dos valores separados por coma. El primero tendrá de 3 a 10 caracteres y el segundo solo puede ser 'Yes' o 'No'")

titul = text.substring(0,text.indexOf(","))   
titul = titul.toUpperCase()
barra = text.substring(text.indexOf(",")+1)  
barra = barra.toUpperCase()



if (titul.length >= 3 && titul.length <= 10){
    if (barra === "YES"){
        alert("se abrira w3school");
        window.open("./index_fines.html", "", "width=200,height=100");
    }else{
        alert("has entrado no");
    }
}else {alert("Ingresa un texto válido");
location.reload()}



 