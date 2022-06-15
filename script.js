



let resultado = document.getElementById("resultadoArgamassa");
let resultado2 = document.getElementById("resultadoTijolo");

function calcularArgamassa(){
    let altura = document.getElementById("alturaArgamassa").value;
    let largura = document.getElementById("larguraArgamassa").value;
    let total = (altura * largura);
    

    resultado.innerHTML = `<p>${Math.ceil(total/2.5)}  Argamassas</p>`
}

function calcularTijolo(){
    let altura = document.getElementById("alturaTijolo").value;
    let largura = document.getElementById("larguraTijolo").value;
    let total = altura * largura;
    resultado2.innerHTML = `<p>São necessários ${Math.ceil(total/0.06)} tijolos grandes`;
}