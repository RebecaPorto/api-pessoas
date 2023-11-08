"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    //metodo contrutor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(_cpf) {
        this.cpf = _cpf;
    }
    getdata_nascimento() {
        return this.data_nascimento;
    }
    setdata_nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    gettelefone() {
        return this.nome;
    }
    settelefone(_telefone) {
        this.telefone = _telefone;
    }
    getaltura() {
        return this.nome;
    }
    setaltura(_altura) {
        this.altura = _altura;
    }
    getpeso() {
        return this.peso;
    }
    setpeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
        CPF: ${this.nome}
        Data: ${this.data_nascimento}
        Telefone:: ${this.telefone}
        Endereço: ${this.endereco}
        Altura ${this.altura}
        Peso ${this.peso}`);
    }
    falar() {
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        console.log(`${this.nome} fala: ${_frase}`);
    }
    andar() {
        console.log(`${this.nome} está andando...`);
    }
    andarQuilometros(_quilometros) {
        setTimeout(() => {
            console.log(`${this.nome} caminhou ${_quilometros} quilometros`);
        }, 3000);
    }
    comer() {
        console.log(`${this.nome} está comendo...`);
    }
    comerPrato(_prato) {
        console.log(`${this.nome} está comendo ${_prato}`);
    }
    /** CRUD */
    cadastroPessoa(baninha) {
        //persistindo os dados
        console.log(`${baninha.nome} cadastrado com sucesso`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map