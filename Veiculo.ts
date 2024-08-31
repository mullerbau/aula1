export class Veiculo{
    marca: string;
    modelo: string;
    potencia: number;
    numeroMarchas: number;
    marchaAtual: number;
    velocidadeAtual: number;
    velocidadeTotal: number;
    velocidadeCompativel: number;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = 0;
        this.numeroMarchas = 5;
        this.marchaAtual = 0;
        this.velocidadeAtual = 0;
        this.velocidadeTotal = 120 + this.potencia / 2;
        this.velocidadeCompativel = this.velocidadeTotal / this.numeroMarchas;
    }
    


    acelerar(): number{
        if(this.marchaAtual != 0){
            if (this.velocidadeAtual === 0) {
                this.velocidadeAtual += this.potencia*0.1;
                
            } else if (this.velocidadeAtual + this.acelerar() > this.velocidadeTotal) {
                this.velocidadeAtual = this.velocidadeTotal;
                console.log('Velocidade máxima atingida, impossível acelerar mais')
            } else if (this.marchaAtual === 1 && (this.velocidadeAtual + this.acelerar()) > this.velocidadeCompativel){
                console.log('Você deve subir uma marcha primeiro')
            }
            else {
                this.velocidadeAtual = this.velocidadeAtual * 1.75
            }  
        } else {
            console.log('Você deve sair da primeira marcha primeiro!');
        } return(this.velocidadeAtual);
    }

    marcha():void{
        if(this.marchaAtual == this.numeroMarchas) {
            console.log('Número de marchas atingido, impossível subir.');
        } else {
            this.marchaAtual++;
        }
    }
    desceMarcha():void{
        if(this.marchaAtual == 0) {
            console.log('Marcha mínima atingida, não é permitido descer.');
        } else {
            this.marchaAtual--;
        }
    }
    frear():number{
        this.velocidadeAtual = 0;
        return(this.velocidadeAtual);
    }
    desascelerar():number{
        while(this.velocidadeAtual != 0){
            for(let i = this.velocidadeAtual; this.velocidadeAtual != 0; i = i - 10);
            console.log(this.velocidadeAtual);
        }
        return(this.velocidadeAtual)
    }


}