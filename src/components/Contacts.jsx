import { useState } from "react";

export default function Contacts(){

    const [formData, setFormData] = useState({
        firstName: "",
        email:"",
        comments:"",
      });
    
      function handleChange(event){
        setFormData(prevFormData => {
    
          const {name, value, type, checked} = event.target;
          
          return{
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
          }
        });
      }
    
      function handleSubmit(event){
    
        event.preventDefault();
        
        console.log(formData);
      }

    
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input
                  type= "text"
                  aria-label="Nome"
                  placeholder='Nome'
                  name="firstName"
                  onChange={ handleChange }
                  value={formData.firstName}
                />
                <input
                  type= "email"
                  aria-label="Email"
                  placeholder='Email'
                  name="email"
                  onChange={ handleChange }
                  value={formData.email}
                />
                <input
                  type= "tel"
                  aria-label="Telefone"
                  placeholder='Telefone'
                  name="number"
                  onChange={ handleChange }
                  value={formData.number}
                />
                 <input
                  type= "text"
                  aria-label="Assunto"
                  placeholder='Assunto'
                  name="subject"
                  onChange={ handleChange }
                  value={formData.subject}
                />
                <textarea
                  aria-label="Comentários"
                  placeholder="Comentários"
                  name="comments"
                  onChange={ handleChange }
                  value={ formData.comments }
                />
                <label>
                  <input
                    type= "checkbox"
                    name="copy"
                    onChange={ handleChange }
                    checked={ formData.copy }
                  />
                  Enviar uma cópia para o meu endereço de e-mail.
                </label>
                <button type="submit">Submeter</button>
            </form>
        </div>
    );
}