let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, carObj) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carObj.nome) {
            return i;
        }
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            if (carArr.length >= 2) {
                alert("Você só pode comparar dois veículos.");
                el.checked = false;
                return;
            }

            if (GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);
            }
        } else {
            let pos = GetCarArrPosition(carArr, carClass);
            if (pos >= 0) {
                carArr.splice(pos, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("É necessário escolher dois veículos para realizar a comparação.");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    let car1 = carArr[0];
    let car2 = carArr[1];

    document.getElementById("compare_image_0").innerHTML = `<img src="${car1.image}" width="180">`;
    document.getElementById("compare_image_1").innerHTML = `<img src="${car2.image}" width="180">`;

    document.getElementById("compare_modelo_0").innerHTML = car1.nome;
    document.getElementById("compare_modelo_1").innerHTML = car2.nome;

    document.getElementById("compare_alturacacamba_0").innerHTML = car1.alturaCacamba;
    document.getElementById("compare_alturacacamba_1").innerHTML = car2.alturaCacamba;

    document.getElementById("compare_alturaveiculo_0").innerHTML = car1.alturaVeiculo;
    document.getElementById("compare_alturaveiculo_1").innerHTML = car2.alturaVeiculo;

    document.getElementById("compare_alturasolo_0").innerHTML = car1.alturaSolo;
    document.getElementById("compare_alturasolo_1").innerHTML = car2.alturaSolo;

    document.getElementById("compare_capacidadecarga_0").innerHTML = car1.capacidadeCarga;
    document.getElementById("compare_capacidadecarga_1").innerHTML = car2.capacidadeCarga;

    document.getElementById("compare_motor_0").innerHTML = car1.motor;
    document.getElementById("compare_motor_1").innerHTML = car2.motor;

    document.getElementById("compare_potencia_0").innerHTML = car1.potencia;
    document.getElementById("compare_potencia_1").innerHTML = car2.potencia;

    document.getElementById("compare_volumecacamba_0").innerHTML = car1.volumeCacamba;
    document.getElementById("compare_volumecacamba_1").innerHTML = car2.volumeCacamba;

    document.getElementById("compare_roda_0").innerHTML = car1.roda;
    document.getElementById("compare_roda_1").innerHTML = car2.roda;

    document.getElementById("compare_preco_0").innerHTML = "R$ " + Number(car1.preco).toLocaleString("pt-BR");
    document.getElementById("compare_preco_1").innerHTML = "R$ " + Number(car2.preco).toLocaleString("pt-BR");
}