const form = document.querySelector("#formulario");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector(".peso");
    const inputAltura = event.target.querySelector(".altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        return setResultado("peso inválido", false);
    }
    if (!altura){
    return setResultado("Altura inválida", false);
    } 

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `seu IMC é ${imc} e você está com ${nivelImc}`
    setResultado(msg, true);
    
    
});

function getNivelImc(imc){
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso","Obesidade grau 1","Obesidade grau 2", "Obesidade grau 3"]

    if (imc >= 39.9) {
        return nivel[5];
    } else if (imc > 35) {
        return nivel[4];
    } else if (imc  >=30){
        return nivel [3]
    } else if (imc > 24.5){
        return nivel[2]
    }else if (imc > 18.5){
        return nivel [1]
    } else {
        return nivel [0]
    }
};

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement("h4");
    return p;
    
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector("#resultado-imc");
    resultado.innerHTML= ""; 
    const p = criaP();
    
    if (isValid){
        p.classList.add("green");
    }else{
        p.classList.add("red");
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};