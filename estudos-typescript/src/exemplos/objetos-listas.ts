const person = {
  name: "Mariana B.",
  age: 28,
  profession: "desenvolvedora"
};

person.age = 25;

const person2: {name: string, age: number, profession: string} = {
  name: "Carlos M.",
  age: 25,
  profession: "Policial"
};

const person3: {name: string, age: number, profession: string} = {
  name: "Paula C.",
  age: 26,
  profession: "Desenvolvedora"
};

enum Profession {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol
};

interface Person {
  name: string;
  age: number;
  profession?: Profession
};

interface Estudant extends Person {
  materias: string[]
};

const person4: Person = {
  name: "Vanessa .T",
  age: 23,
  profession: Profession.Desenvolvedora
};

const person5: Person = {
  name: "Maria A.",
  age: 42,
  profession: Profession.Professora
};

const person6: Estudant = {
  name: "Juliana N.",
  age: 19, 
  materias: ["Matemática", "Geografia", "História"]
};

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("- ", item)
  };
};

listar(person6.materias);