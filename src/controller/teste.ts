import { Pessoa } from "../model/Pessoa"

let pessoa = new Pessoa('Joao', 
'1111111111',
new Date(2000,9,15),
'000000000',
'Rua Numero 1',
170,
70);

pessoa.falar();

pessoa.falarFrase("SOU LINDA");

console.log("\n");

let pessoa2 = new Pessoa('Rebeca Porto', '33333333333', new Date(1972,8,29), '999999999', 'Rua das Corridas',165, 55);
pessoa2.andar();
pessoa2.andarQuilometros(20);

console.log("\n");

let pessoa3 = new Pessoa('Livia', '22222222222', new Date(1978,6,19), '999999999', 'Rua das Lasanhas', 40, 15);

pessoa3.comer();
pessoa3.comerPrato("lasanha");

console.log("\n");

pessoa.mostraPessoa();
pessoa2.mostraPessoa();
pessoa3.mostraPessoa();

console.log("\n");