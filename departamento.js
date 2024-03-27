const Funcionario = require('./funcionario');

class Departamento {
  constructor(nome) {
    this.nome = nome;
    this.funcionarios = [];
    this.departamentos = [];
  }

  adicionarFuncionario(funcionario) {
    this.funcionarios.push(funcionario);
  }

  removerFuncionario(funcionario) {
    const indice = this.funcionarios.indexOf(funcionario);
    if (indice !== -1) {
      this.funcionarios.splice(indice, 1);
    }
  }

  adicionarDepartamento(departamento) {
    this.departamentos.push(departamento);
  }

  removerDepartamento(departamento) {
    const indice = this.departamentos.indexOf(departamento);
    if (indice !== -1) {
      this.departamentos.splice(indice, 1);
    }
  }

  calcularSalarioTotal() {
    let salarioTotal = 0;
    for (const funcionario of this.funcionarios) {
      salarioTotal += funcionario.salario;
    }
    for (const departamento of this.departamentos) {
      salarioTotal += departamento.calcularSalarioTotal();
    }
    return salarioTotal;
  }
}

module.exports = Departamento;
