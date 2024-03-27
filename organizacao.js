const Departamento = require('./departamento');

class Organizacao {
  constructor(nome) {
    this.nome = nome;
    this.departamentos = [];
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
    for (const departamento of this.departamentos) {
      salarioTotal += departamento.calcularSalarioTotal();
    }
    return salarioTotal;
  }
}

module.exports = Organizacao;
