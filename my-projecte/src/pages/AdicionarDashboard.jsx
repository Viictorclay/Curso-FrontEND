import { useState } from "react";
import "../assets/css/adicionarDashboard/styler.css"

function AdicionarDashboard() {
    const [imagePreview, setImagePreview] = useState(null);

    function handleImageChange(e) {
        const file = e.target.files && e.target.files[0];
        if (!file) {
            setImagePreview(null);
            return;
        }
        const url = URL.createObjectURL(file);
        setImagePreview(url);
    }

    return (
        <div className="conteudo">
            <h1> Adicionar DashBoard</h1>
            <p>Crie um novo dashboard preenchendo o formulário abaixo.</p>
            {/* Estrutura base do formulário */}
            
            <form id="formInscricao" action="#" method="post">

                <fieldset>
                    <legend>DashBoard</legend>

                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                </div>

                <div>
                    <label htmlFor="image">Imagem do DashBoard (opcional):</label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
                    {imagePreview && (
                        <div style={{marginTop:8}}>
                            <img src={imagePreview} alt="preview" style={{maxWidth: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 2px 6px rgba(0,0,0,0.15)'}} />
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="discrição">Discrição:</label>
                    <input type="text" id="discrição" name="discrição" />
                </div>

                </fieldset>

                {/* Configurações do Torneio */}
                <fieldset>
                    <legend>Configurações do Torneio</legend>

                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input 
                        type="password" 
                        id="senha" 
                        name="senha" 
                        pattern="(?=.*[A-Z])(?=.*\d).{8,}" 
                        title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula e um número." 
                        required />
                    </div>

                    <div>
                        <label htmlFor="jogo">Jogo Principal:</label>
                        <select name="jogo" id="jogo" required>
                            <option value="">Selecione...</option>
                            <option value="lol">League of Legends</option>
                            <option value="valorant">Valorant</option>
                            <option value="fortnite">Fortnite</option>
                        </select>
                    </div>
                </fieldset>

                {/* Comentários e Data de Nascimento */}
                <fieldset>
                    <legend>Informações Adicionais</legend>

                    <div>
                        <label htmlFor="comentario">Comentário/Biografia:</label>
                        <textarea 
                            id="comentario"
                            name="comentario"
                            rows="4"
                            cols="40"
                            maxLength="200"
                            placeholder="Conte um pouco sobre você ou sua equipe..."
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="dataNascimento">Data de Nascimento:</label>
                        <input type="date" id="dataNascimento" name="dataNascimento" />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Documento de Identificação</legend>

                    <div>
                        <label htmlFor="documento">Documento (CPF/CNPJ):</label>
                        <input 
                            type="text"
                            id="documento"
                            name="documento"
                            placeholder="Digite seu CPF ou CNPJ"
                            required
                        />
                        <small>
                            Este campo será validade via javaScript. A função <code>verificaDocumento()</code> usa <code>setCustomValidity()</code> para simular a verificação.
                        </small>
                    </div>
                </fieldset>

                {/* Botão de Submissão */}
                <div>
                    <button className="B-send" type="submit">Adicionar</button>
                </div>
            </form>
        </div>
    );
}

export default AdicionarDashboard;
