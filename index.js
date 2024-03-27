const Funcionario = require('./funcionario');
const Departamento = require('./departamento');
const Organizacao = require('./organizacao');

// Criando funcionários
const funcionario1 = new Funcionario('João Silva', 5000);
const funcionario2 = new Funcionario('Maria Oliveira', 6000);
const funcionario3 = new Funcionario('Pedro Souza', 4500);

// Criando departamentos
const departamentoTI = new Departamento('TI');
const departamentoVendas = new Departamento('Vendas');
const subdepartamentoDesenvolvimento = new Departamento('Desenvolvimento');

// Adicionando funcionários aos departamentos
departamentoTI.adicionarFuncionario(funcionario1);
departamentoVendas.adicionarFuncionario(funcionario2);
subdepartamentoDesenvolvimento.adicionarFuncionario(funcionario3);

// Adicionando subdepartamento ao departamentoTI
departamentoTI.adicionarDepartamento(subdepartamentoDesenvolvimento);

// Criando organização
const organizacao = new Organizacao('Empresa XYZ');

// Adicionando departamentos à organização
organizacao.adicionarDepartamento(departamentoTI);
organizacao.adicionarDepartamento(departamentoVendas);

// Calculando o salário total da organização
const salarioTotal = organizacao.calcularSalarioTotal();
console.log(`O salário total da organização ${organizacao.nome} é R$ ${salarioTotal}.`);
