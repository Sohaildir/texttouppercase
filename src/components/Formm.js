import React ,{useState} from 'react'

export default function Formm(props) {
   
    const hundelUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        
 
     }
     const hundelOnchange=(event)=>{
        setText (event.target.value)
    }
    const[text,setText]=useState("this is text" );
    // setText("this is is settext value");
    // console.log(setText);
  
   
  return (
    <div>
   <div className='container'>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1"   className="form-label" >enter text</label>
  <textarea className="form-control" value={text} onChange={hundelOnchange}  id="exampleFormControlTextarea1" rows="3"> enter text here</textarea>
  <button className='btn btn-primary' onClick={hundelUpClick}> convert to uppercace</button>
</div>
</div>
    </div>
  )
}
