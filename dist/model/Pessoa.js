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
    //metodo construtor
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
    setnome(_nome) {
        this.nome = _nome;
    }
    getcpf() {
        return this.cpf;
    }
    setcpf(_cpf) {
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
    cpf: ${this.cpf}
    data: ${this.data_nascimento}
    telefone: ${this.telefone}
    endereco: ${this.endereco}
    altura: ${this.altura}
    peso:${this.peso} `);
    }
    //implementar os metodos
    falar() {
        //logica de negocio
        console.log(`${this.nome} esta falando`);
    }
    falarFrase(_frase) {
        //logica de negocio
        console.log(`${this.nome} fala: ${_frase}`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map