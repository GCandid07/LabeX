import Button from "../components/Button";
import { ContainerAFP } from "../components/Styles";
import { applyToTrip } from '../services/ApiRequest';

import { useNavigate } from "react-router-dom";
import useGetCountries from "../hooks/useGetCountries";
import useGetTrip from "../hooks/useGetTrip";
import useForm from "../hooks/useForm";

const ApplicationFormPage = () => {

  const navigate = useNavigate();
  const {data:countries} = useGetCountries();
  const {data:trips} = useGetTrip();
  const {form, handleInputChange, clear} = useForm({
    id: '',
    name: '',
    age: '',
    text: '',
    country: '',
    profession: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault() 
    applyToTrip(form.id, form, clear);
  };

  return (
    <ContainerAFP>
      <h1>Inscreva-se para uma viagem</h1>
      <Button click={() => navigate("/trips/list")} text={"Voltar"}/>
      <form onSubmit={handleSubmit}>

        <select onChange={handleInputChange} value={form.id} name="id" required>
          <option value="">Viagem</option>;
          {trips && trips.map((trip) => (
            <option key={trip.id} value={trip.id}>{trip.name}</option>
          ))};
        </select>

        <input 
          name="name" 
          placeholder="Nome" 
          onChange={handleInputChange} 
          value={form.name}
          pattern="^[A-Za-zÀ-ú ']{3,}$"
          title="Deve conter no mínimo 3 letras"
          required
        />

        <input 
          type='number'
          name="age" 
          placeholder="Idade" 
          onChange={handleInputChange} 
          value={form.age}
          min={18}
          required
        />

        <input 
          name="text" 
          placeholder="Texto de candidatura" 
          onChange={handleInputChange} 
          value={form.text} 
          pattern=".{15,}"
          title="Deve conter no mínimo 15 letras"
          required
        />

        <select onChange={handleInputChange} value={form.country} name="country" required>
          <option value="">País</option>
          {countries.map((country, index) => (
            <option key={index} value={country.nome}>{country.nome}</option>
            ))};
        </select>

        <input 
          name="profession" 
          placeholder="Profissão" 
          onChange={handleInputChange} 
          value={form.profession}
          pattern=".{5,}"
          title="Deve conter no mínimo 5 letras"
          required
        />

        <Button text="Candidatar-se"/>

      </form>
    </ContainerAFP>
  );
};

export default ApplicationFormPage;
