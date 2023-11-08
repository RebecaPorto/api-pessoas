export class Pessoa {
    private nome:string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco:string;
    private altura: number;
    private peso: number;
  
    //metodo contrutor
    public constructor(
        _nome: string,
        _cpf: string,
        _data_nascimento: Date,
        _telefone: string,
        _endereco: string,
        _altura: number,
        _peso: number) {
     
            this.nome = _nome;
            this.cpf = _cpf;
            this.data_nascimento = _data_nascimento;
            this.telefone = _telefone;
            this.endereco = _endereco;
            this.altura = _altura;
            this.peso = _peso;
 
    }

    public getNome(){
        return this.nome;
    }

    public setNome(_nome: string){
        this.nome = _nome;
    }

    public getCPF(){
        return this.cpf;
    }

    public setCPF(_cpf: string) {
        this.cpf = _cpf;
    }

    public getdata_nascimento(){
        return this.data_nascimento
    }

    public setdata_nascimento(_data_nascimento: Date) {
        this.data_nascimento = _data_nascimento;
    }

    public gettelefone(){
        return this.nome;
    }

    public settelefone(_telefone: string){
        this.telefone = _telefone;
    }

    public getaltura(){
        return this.nome;
    }

    public setaltura(_altura: number){
        this.altura = _altura;
    }

    public getpeso(){
        return this.peso;
    }

    public setpeso(_peso: number){
        this.peso = _peso;
    }

    public mostraPessoa() {
        console.log(`Nome: ${this.nome}
        CPF: ${this.nome}
        Data: ${this.data_nascimento}
        Telefone:: ${this.telefone}
        Endereço: ${this.endereco}
        Altura ${this.altura}
        Peso ${this.peso}`);
    }

    public falar():void{
        console.log(`${this.nome} está falando`);
    }

    public falarFrase(_frase:string): void {
        console.log(`${this.nome} fala: ${_frase}`);
    }


    public andar():void{
        console.log(`${this.nome} está andando...`);
    }

    public andarQuilometros(_quilometros:number): void {
        setTimeout(() => {
            console.log(`${this.nome} caminhou ${_quilometros} quilometros`);
        }, 3000);
    }

    public comer():void {
        console.log(`${this.nome} está comendo...`);
    }
    
    public comerPrato(_prato:string): void {
        console.log(`${this.nome} está comendo ${_prato}`);
    }

    /** CRUD */

    cadastroPessoa(baninha:Pessoa) { 
        //persistindo os dados
         console.log(`${baninha.nome} cadastrado com sucesso`);
    }
    
}