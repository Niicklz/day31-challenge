import React from 'react'
import "./PasswordType.css"

export const PasswordType = ({id,text,onChange, setCharacters}) => {


    // const handleChange = ()=> {
    //     onChange((value)=> !value)
        

    //     const charactersSelected = [lowercase?["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","p","r","s","t","u","v","w","x","y","z"]:"",uppercase?["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]:"",number?["0","1","2","3","4","5","6","7","8","9"]:"",symbol?["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}", "~"]:""].filter(character=> character!== "").join(",")
    //     console.log(charactersSelected);
    // }


  return (
    <div className='type-container'>
        <label htmlFor={id}>{text}</label>
        <input type="checkbox" id={id} onChange={()=> onChange((value)=> !value)} />
    </div>
  )
}
