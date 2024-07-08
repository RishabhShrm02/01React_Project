import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpCase = () =>{
        //console.log("Upper case is clicked " +text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase","success");
    }

    const handleLowCase = () =>{
        //console.log("Upper case is clicked " +text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase","success");
    }
    const handleClearCase = () =>{
        //console.log("Upper case is clicked " +text);
        let newText='';
        setText(newText);
        props.showAlert("text cleared","success");
    }
    //handle speak functionality in textUtil
    const handleSpeakCase = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("perform speaking","success");
      }
      
    const handleOnChange = (event) =>{
       // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success");
    }

    const handleExtraSpaces = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed","success");
     }

    const [text,setText]=useState(" ");
    //text="new text";  //wrong way to set text
    //setText("enter new text here");//right way to enter text
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'rgb(36, 39, 68)'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'rgb(36, 39, 68)'}}
        id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1"onClick={handleUpCase}>convert to Uppercase</button>
        <button className="btn btn-primary mx-2"onClick={handleLowCase}>convert to Lowercase</button>
        <button className="btn btn-primary mx-2"onClick={handleClearCase}>clear text</button>
        <button className="btn btn-primary mx-2"onClick={handleSpeakCase}>Speak</button>
        <button className="btn btn-primary mx-2"onClick={handleCopy}>copy text</button>
        <button className="btn btn-primary mx-2"onClick={handleExtraSpaces}>handle extra spaces</button>

        

    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'rgb(36, 39, 68)'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} word and {text.length} charecter</p>
        <p>{0.008  * text.split(" ").length} minutes to read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textBox to preview it"}</p>
    </div>
    </>
  )
}




