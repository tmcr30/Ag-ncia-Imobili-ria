
import { useState } from "react";

export default function Contacts(){

  const [formData, setFormData] = useState({
    firstName: "",
    email:"",
    number:"",
    comments:"",
    subject:"",
    name:"",
  });
    
  function handleChange(event){
    const {name, value, type} = event.target;
  
    if (type === "text" && name === "firstName") {
      
      const regex = /^[a-zA-Z\s]*$/;
      if (regex.test(value)) {
        setFormData(prevFormData => ({...prevFormData, [name]: value}));
      }
    } else if (type === "tel" && name === "number") {
      
      const regex = /^[0-9]*$/;
      if (regex.test(value)) {
        setFormData(prevFormData => ({...prevFormData, [name]: value}));
      }
    } else {
      setFormData(prevFormData => ({...prevFormData, [name]: value}));
    }
  }

  function handleSubmit(event){
    
    event.preventDefault();
    
    setFormData({
      firstName: "",
      email:"",
      number:"",
      comments:"",
      subject:"",
      name:"",
    });

    console.log(formData);
  }

    
  return (
    <div className="divBackground">
      <h2 className="h2Contact">Fale connosco</h2>
      <h3 className="h3Contact">Casas, Casinhas e Casarões</h3>
      <p className="pContact">Avenida da Imaginação nº3,14</p>
      <p className="pContact">1234-567 Terra dos Sonhos</p>
      <p className="pContact">Telefone: 123 456 789</p>
      <p className="pContact">Fax: 123 456 789</p> 
      <p className="pContact">Email: ccc.info@ccc.pt</p>
      <h2 className="h2Contact">Ou partilhe os seus contactos abaixo para receber todas as novidades em primeira mão!</h2>
      <form className="formContacts" onSubmit={handleSubmit }>
        <input
          type= "text"
          aria-label="Nome"
          placeholder='Nome'
          name="firstName"
          onChange={ handleChange }
          value={formData.firstName}
          required
        />
        <input
          type= "email"
          aria-label="Email"
          placeholder='Email'
          name="email"
          onChange={ handleChange }
          value={formData.email}
          required
        />
        <input
          type= "tel"
          aria-label="Telefone"
          placeholder='Telefone'
          name="number"
          pattern="[0-9]{9}"
          onChange={ handleChange }
          value={formData.number}
          required
        />
        <input
          type= "text"
          aria-label="Assunto"
          placeholder='Assunto'
          name="subject"
          onChange={ handleChange }
          value={formData.subject}
          required
        />
        <textarea
          aria-label="Comentários"
          placeholder="Comentários"
          name="comments"
          onChange={ handleChange }
          value={ formData.comments }
          required
        />
        <label className="checkbox">
          <input
            type= "checkbox"
            name="copy"
            onChange={ handleChange }
            checked={ formData.copy }
          /> 
          Enviar uma cópia para o meu endereço de e-mail.
        </label>
        <button className="buttonContact" type="submit">Submeter</button>
      </form>
    </div>
  );
}