
class usuario {
    #senha;

    constructor(nome, senha) {
        this.nome = nome;
        this.#senha = senha;
    }

    // Autenticando senha
    autenticar(senha) {
        if (senha === this.#senha) {
            console.log('Acesso permitido!')
        } else {
            console.log('Senha incorreta!')
        }
    }

    // Pegando a senha privada
    get senha() {
        return this.#senha;
    }

    // Alterando senha privada
    set senha(novaSenha) {
        if (novaSenha == isNaN) {
            console.log('Campo vazio. Digte uma senha válida.')
        }

        // Espesificação de senha
        const temMinimoCaracteres = novaSenha.length >= 8;
        const temMaiuscula = /[A-Z]/.test(novaSenha);
        const temMinuscula = /[a-z]/.test(novaSenha);
        const temNumero = /[0-9]/.test(novaSenha);
        const temEspecial = /[!@#$%^&*()_+\-={}[\]|\\:;"'<>,.?/~`]/.test(novaSenha);

        if(!temMinimoCaracteres) {
            console.log('A senha deve ter no mínimo 8 caracteres.')
        } else if (!temMaiuscula) {
            console.log('A senha deve conter pelo menos um letra maiúscula.')
        } else if (!temMinuscula) {
            console.log('A senha deve conter pelo menos uma letra minúscula.')
        } else if (!temNumero) {
            console.log('A senha deve conter pelo menos um número.')
        } else if (!temEspecial) {
            console.log('A senha deve conter pelo menos um caractere espeecial.')
        } else {
            this.#senha = novaSenha
            console.log('Senha Redefinida com sucesso!')
        }
    }
}

const listaUsuarios = []

const u1 = new usuario('Beatriz', 'Abc123!@');
const u2 = new usuario('Clay', 'Senha@123');
const u3 = new usuario('Sofia', '!@Senha0123');

listaUsuarios.push(u1, u2, u3);

// Função para mostrar todos os usuários
function mostrarUsuarios(lista) {
    console.log('===== Usuários =====')
    lista.forEach(u => console.log(`Nome: ${u.nome}\n`)); //forEach é um método de arrays que percorre cada elemento da lista e executa uma função para cada elemento.
}

mostrarUsuarios(listaUsuarios);

// Testando autenticação e alteração de senha
u1.autenticar('Abc123!@');
u2.autenticar('123456');
u3.senha = 'NovaSenha@1';
u3.autenticar('NovaSenha@1');
u1.senha = '13df'