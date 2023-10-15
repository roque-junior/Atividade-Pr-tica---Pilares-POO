abstract class Ingresso {
    valor: number;
  
    constructor(valor: number) {
      this.valor = valor;
    }
    abstract imprimeValor (): void;
}

class Normal extends Ingresso {
    imprimeValor(): void {
        console.log(`valor do ingresso normal: R$ ${this.valor}`);
    }
}

class VIP extends Ingresso {
    valorAdicional: number;

    constructor(valor: number, valorAdicional: number) {
        super(valor);
        this.valorAdicional = valorAdicional;
    }

    imprimeValor(): void {
        console.log(`Valor do ingresso VIP: R$ ${this.valor + this.valorAdicional}`);
    }
}

class  Camarote extends Ingresso {
    valorAdicional: number;

    constructor(valor: number, valorAdicional: number) {
        super(valor);
        this.valorAdicional = valorAdicional;
    }

    imprimeValor(): void {
        console.log(`valor do ingresso Camarote: R$ ${this.valor + this.valorAdicional}`);
    }
}

const ingressoNormal = new Normal(50);
ingressoNormal.imprimeValor();

const ingressoVIP = new VIP (100,20);
ingressoVIP.imprimeValor();

const ingressoCamarote = new Camarote(150, 30);
ingressoCamarote.imprimeValor();