imprime = (msg) => console.log(msg);

fazerSorteio = ()  => {
    let num1 = document.getElementById("inicio").value;
    let num2 = document.getElementById("fim").value;
    num2 = Number(num2) + 1;
    let sorteio = Math.floor(Math.random() * Number(num2) - Number(num1));

    document.getElementById("resultado").innerHTML = sorteio;   
}