import React from 'react'
import './CartoonForm.css'
import { useState } from 'react'

function CartoonForm( { onAddCartoon } ) {

    const [formData, setFormData] = useState({ 
        title: "",
        description: "",
        ageRange: "",
        img: "",
      })

      function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
    
        const newCartoon = {
          title: formData.title,
          description: formData.description,
          ageRange: formData.ageRange,
          img: formData.img
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
        <div className = "container">
            <h2 className = ""> Add a Cartoon to Our List!</h2>
            <form onSubmit = {handleSubmit}>
              <div className="input-group mb-3">
                <input name = "title" placeholder= "Title" value = {formData.title} onChange = {handleChange} />
              </div>
              <div className="input-group mb-3">
                <input name = "description" placeholder= "Description" value = {formData.description} onChange = {handleChange} />
              </div>
              <div className="input-group mb-3">
                <input name = "ageRange" placeholder= "Age Range" value = {formData.ageRange} onChange = {handleChange} />
              </div>
              <div className="input-group mb-3">
                <input name = "img" placeholder= "Img URL" value = {formData.img} onChange = {handleChange} />
              </div>
                <button className = "btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default CartoonForm;