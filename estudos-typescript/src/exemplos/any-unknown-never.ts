let anyValue: any;
anyValue = 3;
anyValue = "test";
anyValue = true;
anyValue = 5;

let stringTest: string = "verificar";
stringTest = anyValue;


let unknownValue: unknown;
unknownValue = 3;
unknownValue = "test2";
unknownValue = true;
unknownValue = "Olá"

let stringTest2: string = "verificar2";
//stringTest2 = unknownValue;           // Não pode, dá erro    

if (typeof unknownValue === "string") {
  stringTest2 = unknownValue;
};

function printErro(erro: string, codigo: number): never {
  throw {error: erro, code: codigo}
};

printErro("Código errado", 500);
