import '../CSS/TextField.css';
import { useState } from "react";

const TextField = (props) => 
{
    const [textValue, setTextValue] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    function handleCut()
    {
        if(textValue === "")
        {
            setStatus("info");
            setMessage("Nothing to Cut");
            return;
        }
        navigator.clipboard.writeText(textValue).then( () =>
        {
            setMessage("Text Cut Successful");
            setTextValue("");
            setStatus("success");
        })
        .catch( () => 
        {
            setMessage("Text Cut Failed");
            setTextValue(textValue);
            setStatus("danger");
        });
    }

    function handleCopy() 
    {
        if(textValue === "")
        {
            setStatus("info");
            setMessage("Nothing to Copy");
            return;
        }

        navigator.clipboard.writeText(textValue).then( () =>
        {
            setMessage("Text Copied Successfullly");
            setStatus("success");
        })
        .catch( () => 
        {
            setMessage("Text Copy Failed");
            setTextValue(textValue);
            setStatus("danger");
        });
    }

    function handlePaste()
    {
         navigator.clipboard.readText().then( (textToPaste)=> 
        {
            if(textToPaste === "")
            {
                setStatus("info");
                setMessage("Clipboard is empty");
                return;
            }
            setTextValue(textToPaste);
            setStatus("success");
            setMessage("Text Pasted Successfully");
        })
        .catch(()=>
        {
            setStatus("danger");
            setMessage("Text Paste Failed");
        });
       
    }

    function handleClear() 
    {
        if(textValue === "")
        {
            setStatus("info");
            setMessage("Already Empty");
            return;
        }

        setTextValue("");
        setStatus("success");
        setMessage("Textarea Cleared");

    }
    return (
        <div className="container main-div d-flex flex-column align-content-center">
            <h5 className='text-center mt-2 fs-4 text-uppercase fw-bold' id='text-area-heading'>{props.heading}</h5>
            <textarea name="text-field" className='mt-2 w-100 fs-5 border-2 rounded' id="text-field"
                value={textValue}
                onChange={(event) => setTextValue(event.target.value)}
            ></textarea>
            <div className="d-flex justify-content-between mt-4">
                <button onClick={handleCut} type='button' className='btn btn-primary fw-semibold fs-6 text-uppercase'>cut</button>
                <button onClick={handleCopy} type='button' className='btn btn-primary fw-semibold fs-6 text-uppercase'>copy</button>
                <button onClick={handlePaste} type='button' className='btn btn-primary fw-semibold fs-6 text-uppercase'>paste</button>
                <button onClick={handleClear} type='button' className='btn btn-primary fw-semibold fs-6 text-uppercase'>clear</button>
            </div>
            <div className={`alert alert-${status} mt-4 fw-bold fs-5 py-2 w-25 text-center`}>{message}</div>
        </div>
    );

}

export default TextField;