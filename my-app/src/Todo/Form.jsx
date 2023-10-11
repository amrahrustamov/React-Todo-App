import React from 'react'

const Form = (setListArr) => {
    const [inputValue,setInputValue]=React.useState("")
  const handleForm=React.useCallback((e)=>{
    e.preventDefault();

    setListArr((prevValue)=>[...prevValue,inputValue])
    setInputValue("")
  },[setListArr,inputValue])
  return (
    <form onSubmit={handleForm}>
        <input type="text" placeholder='text here' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button type='submit'>Select</button>
    </form>
  )
}

export default Form
