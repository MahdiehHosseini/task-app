import { useState } from "react"

function SubmitForm() {
    const [inputValue, setInputValue] = useState('')
    const [inputValidationMessage, setInputValidationMessage] = useState('')
    const checkValidation = () => {
      inputValue === '' ? setInputValidationMessage('لطفا یک چیزی وارد کنید') : setInputValidationMessage('')
      return (inputValue !== '')
    }
    return (
      <form className="my-10 flex flex-col items-center" onSubmit={(e) => {
        checkValidation() ? alert('متشکرم') : e.preventDefault()
      }}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-2/3 border mb-4 border-black rounded-md focus:outline-none text-right h-14 p-2" placeholder="... هرچه میخواهید وارد کنید" />
        <p className=" text-red-900 text-lg my-3">{inputValidationMessage}</p>
        <button type="submit" className="w-2/3 bg-black text-center text-lg text-white py-4 rounded-md mt-4">submit</button>
      </form>
    )
}
  
export default SubmitForm