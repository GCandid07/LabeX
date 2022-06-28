import Button from "../components/Button"
import { ContainerLP } from "../components/Styles"
import { login } from "../services/ApiRequest"

import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm";

const LoginPage = () => {
  const navigate = useNavigate()
  const {form, handleInputChange, clear} = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    };

    login(body, clear, navigate);
  }

  return (
    <ContainerLP>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email" 
          placeholder="E-mail"
          name="email" 
          onChange={handleInputChange} 
          value={form.email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <input 
          type="password" 
          placeholder="Senha" 
          name="password" 
          onChange={handleInputChange} 
          value={form.password}
          pattern=".{5,}"
          title="Deve conter no mínimo 3 letras"
          required
        />
        <div>
          <Button type='button' click={() => navigate('/')} text={"Voltar"}/>
          <Button text={"Logar"}/>
        </div>
      </form>
    </ContainerLP>
  )
}

export default LoginPage
