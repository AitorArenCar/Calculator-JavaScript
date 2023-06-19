var cifra = 0;
var resul = 0;
var memoria = 0;
var operacion="";
var primera=true;
var coma=false;

function display_numeros(numero) {
    if(operacion=="igual"){
        operacion="";
    }
    document.getElementById("display").value = cifra + numero;
    cifra = document.getElementById("display").value;
    
}

//esta funcion comprueba si el numero ya es decimal gracias a la varieble booleana "coma" y 
//en caso de ser "True" no hace nada, en caso de ser "False" concatena una coma.
function agregar_coma() {
    if(operacion=="igual"){
        operacion="";
    }
    if (!coma) {
        document.getElementById("display").value = cifra + ".";
        cifra = document.getElementById("display").value;
        coma = true;
    }
}

function suma() {
    if(operacion=="resta"){
        resul = resul - parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="multi"){
        resul = resul * parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="div"){
        resul = resul / parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="igual"){
        resul = parseFloat(memoria);
        document.getElementById("display").value=resul;
    }else {
        resul = resul + parseFloat(cifra);
        document.getElementById("display").value=resul;
    }
    cifra = 0;
    operacion="suma";
    primera=false;
    coma=false;
}

function resta() {
    if(operacion=="suma"){
        resul = resul + parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="multi"){
        resul = resul * parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="div"){
        resul = resul / parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="igual"){
        resul = parseFloat(memoria);
        document.getElementById("display").value=resul;
    }else {
        resul = parseFloat(cifra) - resul;
        document.getElementById("display").value=resul;
    }
    cifra = 0;
    operacion="resta";
    primera=false;
    coma=false;
}

function multi() {
    if(operacion=="suma"){
        resul = resul + parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="resta"){
        resul = resul - parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="div"){
        resul = resul / parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="igual"){
        resul = parseFloat(memoria);
        document.getElementById("display").value=resul;
    }else {
        if(primera){
            resul = parseFloat(cifra);
        document.getElementById("display").value=resul;
        } else{
            resul = parseFloat(cifra) * resul;
            document.getElementById("display").value=resul;
        } 
    }
    cifra = 0;
    operacion="multi";
    primera=false;
    coma=false;
}

function div() {
    if(operacion=="suma"){
        resul = resul + parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="resta"){
        resul = resul - parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="multi"){
        resul = parseFloat(cifra) * resul;
        document.getElementById("display").value=resul;
    }else if(operacion=="igual"){
        resul = parseFloat(memoria);
        document.getElementById("display").value=resul;
    }else {
        if(primera){
            resul = parseFloat(cifra);
            document.getElementById("display").value=resul;
        } else{
            resul = resul / parseFloat(cifra);
            document.getElementById("display").value=resul;
        }
    }
    cifra = 0;
    operacion="div"
    primera=false;
    coma=false;
}

function igual() {
    if(operacion=="suma"){
        document.getElementById("display").value = resul + parseFloat(cifra);
    }else if(operacion=="resta"){
        document.getElementById("display").value = resul - parseFloat(cifra);
    }else if(operacion=="multi"){
        document.getElementById("display").value = resul * parseFloat(cifra);
    }else if(operacion=="div"){
        document.getElementById("display").value = resul / parseFloat(cifra);
    }else if(operacion=="elevado"){
        resul = resul ** parseFloat(cifra);
        document.getElementById("display").value=resul;
    }
    cifra=0;
    memoria=parseFloat(document.getElementById("display").value);
    resul=0;
    operacion="igual";
    primera=true;
    coma=false;
}

//funcion para elevar un numero al cuadrado
function elevado(){
    if(operacion=="suma"){
        resul = resul + parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="resta"){
        resul = resul - parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="multi"){
        resul = parseFloat(cifra) * resul;
        document.getElementById("display").value=resul;
    }else if(operacion=="div"){
        resul = resul / parseFloat(cifra);
        document.getElementById("display").value=resul;
    }else if(operacion=="igual"){
        resul = parseFloat(memoria);
        document.getElementById("display").value=resul;
    }else {
        if(primera){
            resul = parseFloat(cifra);
        document.getElementById("display").value=resul;
        } else{
            resul = resul ** parseFloat(cifra) ;
            document.getElementById("display").value=resul;
        }
    }
    cifra = 0;
    operacion="elevado"
    primera=false;
    coma=false;

}

//funcion para resetear todos los datos. boton "AC"
function allclear(){
    cifra = 0;
    resul = 0;
    memoria = 0;
    operacion="";
    primera=true;
    coma=false;
    document.getElementById("display").value = cifra;
}

//funcion para borrar el ultimo caracter introducido. boton "CE"
function clearentry() {
    document.getElementById("display").value = cifra.slice(0, -1);
    cifra = document.getElementById("display").value;
    //despues de eliminar el caracter se comprueba si no hay mas caracteres. 
    //En caso de que si, hacemos que se muestre en el display "0" en vez de quedarse en blanco
    if(cifra==""){
        document.getElementById("display").value="0";
    }
}