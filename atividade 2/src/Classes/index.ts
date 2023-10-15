class Imovel {
    endereco: string;
    preco: number;

    constructor (endereco: string, preco: number) {
        this.endereco = endereco;
        this.preco = preco;
    }
}

class Novo extends Imovel {
    adicional: number;

    constructor(endereco: string, preco: number, adicional: number) {
        super(endereco, preco);
        this.adicional = adicional;
    }

    getAdicional(): number {
        return this.adicional;
    }

    imprimeAdicional(): void {
        console.log(`Adicional do imovel novo: R$ ${this.adicional}`);
    }
}

class Velho extends Imovel {
    desconto: number;

    constructor(endereco: string, preco: number, desconto: number) {
        super(endereco, preco)
        this.desconto = desconto;
    }

    getDesconto(): number {
        return this.desconto;
    }

    imprimeDesconto(): void {
        console.log(`desconton do imovel antige: R$ ${this.desconto}`);
    }
}


const imovelNovo = new Novo ('Rua A, 123', 200000, 30000);
imovelNovo.imprimeAdicional();

const imovelVelho = new Velho ('Rua B, 456', 180000, 20000);
imovelVelho.imprimeDesconto();