import Button from "../components/Button"
import { ContainerCreateTrip } from "../components/Styles"
import { planetList } from "../services/Planets"
import { createTrip } from "../services/ApiRequest"

import useProtectedPage from "../hooks/useProtectedPage"
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom"

const CreateTripPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  
  const {form, handleInputChange, clear} = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    duration: ''
  });

  const handleCreate = async (e) => {
    e.preventDefault()
    await createTrip(form, clear)
  }

  return (
    <ContainerCreateTrip>
      <h1>Criar Viagem</h1>
      <form onSubmit={handleCreate}>
        <input 
          type="text" 
          placeholder="Nome" 
          name="name" 
          onChange={handleInputChange} 
          value={form.name}
          required
          pattern="^[A-Za-zÀ-ú0-9 ']{5,}$"
          title="Deve conter no mínimo 5 letras"
        />
        <select name="planet" onChange={handleInputChange} value={form.planet} required>
          <option value="">Escolha um planeta</option>
          {planetList && planetList.map((planet) => (
            <option key={planet.id} value={planet.nome}>{planet.nome}</option>
          ))}
        </select>
        <input 
          type="date" 
          name="date" 
          onChange={handleInputChange} 
          value={form.date}
          required 
        />
        <input 
          type="text" 
          placeholder="Descrição" 
          name="description" 
          onChange={handleInputChange} 
          value={form.description}
          required
          pattern=".{8,}"
          title="Deve conter no mínimo 8 letras"
        />
        <input 
          type="number" 
          placeholder="Duração em dias (min - 30)" 
          name="duration" 
          onChange={handleInputChange} 
          value={form.duration}
          required
          min={30}
        />
        <div>
          <Button click={() => navigate("/admin/trips/list")} type={'button'} text={"Voltar"} />
          <Button text="Criar" />
        </div>
      </form>
    </ContainerCreateTrip>
  )
}

export default CreateTripPage
