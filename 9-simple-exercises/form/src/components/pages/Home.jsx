import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

function Home() {
    const [ formData, setFormData ] = useState({ firstName: '', lastName: '' });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(prevFormData => {
      return { ...prevFormData, [name]: value }
    })
  }

  const submitHandler = event => {
    event.preventDefault();
    alert(`Hello ${formData.firstName} ${formData.lastName}`)
  }

  return <div>
    <div className="w-fit mx-auto flex gap-4 py-5">
      <a href="#" className="nav-link">Home</a>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, index) => <a key={index} href="#" className="nav-link">Exercise {number}</a>)}
    </div>
      <form onSubmit={submitHandler} className="w-fit mx-auto flex flex-col gap-3 mt-10">
        <Input placeholder="First name" onChange = {changeHandler} value = {formData.firstName} name='firstName' />
        <Input placeholder="Last name" onChange = {changeHandler} value = {formData.lastName} name='lastName' />
        <Button>Greet me</Button>
      </form>
  </div>
}

export default Home;