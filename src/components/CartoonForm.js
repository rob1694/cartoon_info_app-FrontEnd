import React from 'react'
import { useState } from 'react'

function CartoonForm( { onAddCartoon } ) {

    const [formData, setFormData] = useState({ 
        Title: "",
        Description: "",
        Age_range: "",
        Img: "",
      })

      function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }
    
      function handleSubmit(e) {
        e.preventDefault();
    
        const newCartoon = {
          Title: formData.Title,
          Description: formData.Description,
          Age_range: formData.Age_range,
          Img: formData.Img
        }; 
    
        const url = `http://localhost:3001/cartoons`
        fetch( url, { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCartoon),
        })
          .then((r) => r.json())
          .then(onAddCartoon);
      }

    return (
        <div>
            <h2>Add a Cartoon to Our List!</h2>
            <form onSubmit = {handleSubmit}>
                <input placeholder= "Title" value = {formData.Title} onChange = {handleChange} />
                <input placeholder= "Description" value = {formData.Description} onChange = {handleChange} />
                <input placeholder= "Age Range" value = {formData.Age_range} onChange = {handleChange} />
                <input placeholder= "Img-URL" value = {formData.Img} onChange = {handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CartoonForm;