//Traigo los elementos especiales.

const view = document.getElementById("viewport");
const B_AC = document.getElementById("buttonAC");
const B_Div = document.getElementById("button/");
const B_Por = document.getElementById("button*");
const B_Borrar = document.getElementById("buttonDel");
const B_Resta = document.getElementById("button-");
const B_Suma = document.getElementById("button+");
const B_Punto = document.getElementById("button.");
const B_Igual = document.getElementById("buttonIgual");

const B_Operations = document.getElementsByClassName("operationButton");

//Guardo en un Array la etiqueta de cada boton tipo numero de la calculadora

const B_Numeros = [];
for (let i = 0; i < 10; i++) {
    var num = "button" + i;
    B_Numeros.push(document.getElementById(num))
}

//Funcion para borrar el ultimo caracter del viewport

function eliminarUltimoCaracter() {view.textContent = view.textContent.substring(0, view.textContent.length -1)}

//Añado "Events Listener" para cada boton, dependiendo del boton va a pasar una cosa u otra:

//Primero los numeros, que van a concatenar al viewport su valor.

B_Numeros.forEach((num, i) => {
    num.addEventListener("click", () => {
        view.textContent += i;
    })
})

//Despues los simbolos que son iguales a su "value" en html, las operaciones:

const B_Operation = [...B_Operations] //Convierto el HTMLcollection en un array.

B_Operation.forEach(operation => operation.addEventListener("click", () => {
    var ultimoCaracter = view.textContent[view.textContent.length -1];
    var noAgregar = false;         //no no = si
    B_Operation.forEach(x => {     //Comparo el ultimo carcter, si es una operacion o un punto lo cambia por la operacion por la que se activo el "click".
        if(ultimoCaracter === x.defaultValue){
            eliminarUltimoCaracter();
        }
    })
    if(operation === B_Operation[4]){
        //un grupo de numeros no puede tener mas de un solo punto, solucionar esto despues!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!.
    }
    if (view.textContent == "") noAgregar = true;     //Si el viewport esta vacio no agrega nada.
    if (!noAgregar) view.textContent += operation.defaultValue; 
}));

//Ahora los signos para borrar en sus dos formas:

B_AC.addEventListener("click", () => view.textContent = "");

B_Borrar.addEventListener("click", eliminarUltimoCaracter);

//Y por ultimo la suma, donde se resuelven las operaciones:

B_Igual.addEventListener("click", () => {
    var ultimoC = view.textContent[view.textContent.length -1]
    for (let i = 0; i < 10; i++) {
        if(ultimoC == i){
            separar(view.textContent)
        } //caso contrario ::
    };

})




function separar(str){
    let oper = [];
    let caracteresSeparados = Array.from(str);

    //Compruebo todos los caracteres en busca de alguno de los 4 operadores matematicos, cuando se encuentra se guarda en "oper" y su index va a representar su posicion al final.

    caracteresSeparados.forEach(caracter => {
        B_Operation.forEach(operator => {
            let operation = operator.defaultValue;
            if(caracter == operation){
                oper.push(operation);
            }
        })
    });

    //Separo los numeros en un array, sacando los operadores, el index sigue siendo importante.
    
    let num = [];
    let numeroTotal = "";

    let numConSpace = str.replace("+" || "-" || "/" || "x", "");
    console.log(numConSpace)
    caracteresSeparados.forEach((caracter, i) => {
        if(!Number(caracter) || caracter === 0){
            if(i != 0){
                numeroTotal = caracter;
            }
        } else {
            numeroTotal += caracter;
        }
        num.push(caracteresSeparados)
    })
}