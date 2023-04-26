import React, { useState } from 'react'
import  "./Text.css"
function Text() {
    const [text, setText] = useState("")

    const handleText = async(e)=>{
        const{name,value} = e.target

        setText(value)
    }

    const handleCapital = async(e)=>{
       e.preventDefault()
       setText(text.toLocaleUpperCase())
    }
    const handleLower = async(e)=>{
        e.preventDefault()
        setText(text.toLocaleLowerCase())
    }

    const handleClear = async(e)=>{
    e.preventDefault()
    setText("")
    }
  return (
    <>
    <div className='form'>
        <h1>Enter the text</h1>
    <div className='text'>
        <textarea id='area' name='area' rows="20" cols="150" value={text} onChange={handleText}></textarea>
    </div>
        <div className='button-container'>
        <button type='submit'  onClick={handleCapital}>Change to Uppercase</button>
        <button type='submit' onClick={handleLower} >Change to lowercase</button>
        <button type='submit' onClick={handleClear} >Clear</button>
        </div>
        </div>
    </>
  )
}

export default Text