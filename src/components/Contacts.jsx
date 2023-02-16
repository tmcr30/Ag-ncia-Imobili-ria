
export default function Contacts(){

  return (
  <div>
    <form>
      <input
        type= "text"
        aria-label="Nome"
        placeholder='Nome'
        name="firstName"
      />
      <input
        type= "email"
        aria-label="Email"
        placeholder='Email'
        name="email"
      />
      <input
        type= "tel"
        aria-label="Telefone"
        placeholder='Telefone'
        name="number"
      />
      <input
        type= "text"
        aria-label="Assunto"
        placeholder='Assunto'
        name="subject"
      />
      <textarea
        aria-label="Comentários"
        placeholder="Comentários"
        name="comments"
      />
      <label>
        <input
          type= "checkbox"
          name="copy"
        />
        Enviar uma cópia para o meu endereço de e-mail.
      </label>
      <button type="submit">Submeter</button>
    </form>
  </div>
 );
}