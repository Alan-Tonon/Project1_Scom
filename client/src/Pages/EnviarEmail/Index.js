import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import './styles.css';
import Navbar from "../_Cabeçario/Navbar";
import CommentIO from "../../Components/Comment/index";
import TextoAnimado from "../../Components/Text_Animation/App";


function Email() {

  const[remetente,setRemetente] = useState('');
  const[destinatario,setDestinatario] = useState('');
  const[destinatarioemail,setDestinatarioemail]=useState('');
  const[mensagem,setMensagem]=useState('');

  const handleRemetenteChange = (e) => {
    setRemetente(e.target.value);
  }

  //será executada pelo form
  const SendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      remetente: remetente,
      destinatario: destinatario,
      destinatarioemail: destinatarioemail,
      mensagem: mensagem
    };

    emailjs.send('service_jx45erl','template_hmzxj9i',templateParams, '_6-HXvapmlfoXjiIm')
    .then(function(response){
      console.log('Success!!!!', response.status, response.text);
    }, function(error){
      console.log('Failed...', error);
    });
    console.log(templateParams);
  }

  function limparInputs() {
    setDestinatarioemail('');
    setMensagem('');
    setDestinatario('');
    setRemetente('');
  }

  return (
   <>
      <Navbar/>
      <header>
        <h1>Sistema de envio de mensagens por e-mail</h1>
      </header>
      <main>
        <fieldset>
         
          <form onSubmit={SendEmail}>
            <input type="text" name="remetente" placeholder="Nome do remetente" 
              onChange={(e) => {setRemetente(e.target.value);}} value={remetente}
            />
            <br />
            <input type="text" name="destinatario" placeholder="Nome do destinatário"
              onChange={(e)=>{setDestinatario(e.target.value);}} value={destinatario}
            />
            <br />
            <input type="email" name="destinatarioemail" placeholder="E-mail do destinátario"
              onChange = {(e)=>{setDestinatarioemail(e.target.value);}} value={destinatarioemail}
            />
            <br />
            <label>
              Escolha sua mensagem:
              <br />
              <input type="text" name="mensagem" placeholder="Digite o texto aqui."
              onChange = {(e)=>{setMensagem(e.target.value);}} value={mensagem}
            />
            </label>
            <br />
            <input type="submit" value="Enviar Mensagem" />
            <input type="submit" onClick={() => limparInputs()} value="Limpar tudo" />
          </form>
        </fieldset>
      </main>
      <footer>
      </footer>
      <CommentIO/>
      <TextoAnimado/>
   </>
  );
}

export default Email;