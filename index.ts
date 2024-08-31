import { Veiculo } from "./Veiculo";
import prompt from 'prompt-sync';

const teclado = prompt();

console.log('Criação de veículos')
const carro: Veiculo = criaVeiculo();
console.table(carro);

while(true) {
    console.log('#################Menu################')
    console.log('1 - Acelerar')
    console.log('2 - frear')
    console.log('3 - Desascelerar')
    console.log('4 - Subir marcha')
    console.log("5 - Descer Marcha")
    console.log('6 - imprimir dados do veiculo')
    console.log('0 - Sair')

    console.table(carro);

    const opcao = +teclado('Escolha uma opção: ')
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            carro.acelerar();
            break;

        case 2:
            carro.frear();
            break;

        
        case 3:
            carro.desascelerar();
            break;

        case 4:
            carro.marcha();
            break;

        case 5:
            carro.desceMarcha();
            break;

        case 6:
            console.table(carro)
        
        default:
            break;
    }
}

function criaVeiculo(): Veiculo {
    
    const marca = teclado('Marca: ')
    const modelo = teclado('Modelo: ');
    const veiculo: Veiculo = new Veiculo(marca, modelo);
    veiculo.potencia = +teclado('Potência: ')
    veiculo.numeroMarchas = +teclado('Número de marchas: ')
    
    return veiculo;
}

