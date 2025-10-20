class Funcionario {
    constructor(nome,cargo,salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    exibirInfo() {
        return `👤 Nome: ${this.nome} | 💼 Cargo: ${this.cargo} | 💰 Salario: ${this.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
    }
}

class Empresa {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
        console.log(`✅ ${funcionario.nome} foi adicionado(a) à empresa -- ${this.nome}! --`)
    }

    exibirFuncionarios() {
        console.log("\n══════════════════════════════════════════");
        console.log(`🏢 EMPRESA: ${this.nome} | Funcionários: ${this,this.funcionarios.length}`); 
        console.log("══════════════════════════════════════════");

        if (this.funcionarios.length === 0) {
            console.log("⚠️ Lista Vazia.\n")
        } else {
            console.log(`👥 Lista de Funcionários (${this.funcionarios.length}):\n`);
            this.funcionarios.forEach((f, i) => {
                console.log(`#${i + 1} - ${f.exibirInfo()}`);
            });
        }
    }
}

const empresa = new Empresa('Tech Info');

const f1 = new Funcionario('Clay', 'Desenvolvedor - Junior', 2500);
const f2 = new Funcionario('Sofia', 'Designer - Pleno', 3800);
const f3 = new Funcionario('Beatriz', 'Gerente - Pleno', 6000);
const f4 = new Funcionario('Josiane', 'Qa - Senior', 10000);

empresa.exibirFuncionarios();

empresa.adicionarFuncionario(f1)
empresa.adicionarFuncionario(f2)
empresa.adicionarFuncionario(f3)
empresa.adicionarFuncionario(f4)

empresa.exibirFuncionarios();