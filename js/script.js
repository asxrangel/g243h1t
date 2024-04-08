imprime = (msg) => console.log(msg);
const data = new Date();
function hora_atual(){
    const data = new Date();
    
    setTimeout(() =>{    
   document.getElementById("h").innerHTML = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
   hora_atual();
  }, 1000);
}
fazerSorteio = ()  => {
    let num1 = document.getElementById("inicio").value;
    let num2 = document.getElementById("fim").value;
    num2 = Number(num2) + 1;
    let sorteio = Math.floor(Math.random() * Number(num2) - Number(num1));

    document.getElementById("resultado").innerHTML = sorteio;   
}
function escolher_aba(btn){
    for(let i = 1; i <= 4; i++){
        let id_btn = "btn"+i;
        let id_aba = "ab"+i;
        document.getElementById(id_btn).style.backgroundColor = "aqua";
        document.getElementById(id_btn).disabled = false;
        document.getElementById(id_aba).style.display = "none";
    }
    if(btn == "1"){
        document.getElementById("btn1").style.backgroundColor = "aquamarine";
        document.getElementById("btn1").disabled = true;
        document.getElementById("ab1").style.display = "block";
    }
    if(btn == "2"){
        document.getElementById("btn2").style.backgroundColor = "aquamarine";
        document.getElementById("btn2").disabled = true;
        document.getElementById("ab2").style.display = "block";
    }
    if(btn == "3"){
        document.getElementById("btn3").style.backgroundColor = "aquamarine";
        document.getElementById("btn3").disabled = true;
        document.getElementById("ab3").style.display = "block";
        iniciar_despertador();
        document.getElementById("hora_d").value = hora_d;
        document.getElementById("min_d").value = min_d;
        document.getElementById("seg_d").value = seg_d;
    }
    if(btn == "4"){
        document.getElementById("btn4").style.backgroundColor = "aquamarine";
        document.getElementById("btn4").disabled = true;
        document.getElementById("ab4").style.display = "block";
    }
}

let contador = null;
let inicio = 0;
let fim = 0;
function contagem(){
    if(inicio == Number (fim) + 1) contador.clearInterval();
    else{
        document.getElementById("valor").innerHTML = inicio;
        inicio++;
    }
}
function iniciar(){
 inicio = document.getElementById("inicio").value;
 fim = document.getElementById("fim").value;
 contador = setInterval(() => {
    contagem();
 }, 1000);
}
let hora_d;
let min_d;
let seg_d;
function iniciar_despertador(){
    let d = new Date();
    hora_d = d.getHours();
    min_d = d.getMinutes();
    seg_d = d.getSeconds();
}
let despertar = null;
function ligar_despertador(){
    let d= new Date();
    if(d.getHours() == hora_d &&
        d.getMinutes() == min_d &&
        d.getSeconds() == seg_d){
            despertar.clearInterval();
            alert("Alarme.");
            escolher_aba(3);
    }
}
function ajustar(){
    hora_d = document.getElementById("hora_d").value;
    min_d = document.getElementById("min_d").value;
    seg_d = document.getElementById("seg_d").value;
    despertar = setInterval(ligar_despertador,1000);
}