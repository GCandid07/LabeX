import axios from "axios";

const aluno = "gabriel-candido"
const baseURL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}`
const countriesUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/paises"

const headers = {
  headers: {
    auth: localStorage.getItem("token")
  }
}

export const getCountries = async () => {
  try {
    const { data } = await axios.get(countriesUrl)
    return data
  } catch (err) {
    alert(err.response.data.message)
  }
}

export const getTrips = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/trips`)
    return data.trips;
  } catch (err) {
    alert(err.response.data.message);
  }
}

export const applyToTrip = async (id, form, clear) => {
  const body = {
    name: form.name,
    age: form.age,
    applicationText: form.text ,
    profession: form.profession,
    country: form.country
  };
  try {
    await axios.post(`${baseURL}/trips/${id}/apply`, body)
  } catch (err) {
    alert(err.response.data.message);
  } finally {
    clear()
  }
}

export const login = async (body, clear, navigate) => {
  try {
    const { data } = await axios.post(`${baseURL}/login`, body)
    localStorage.setItem("token", data.token)
    navigate("/admin/trips/list")
  } catch (err) {
    alert(err.response.data.message);
  } finally {
    clear()
  }
}

export const deleteTrip = async (id, tripName) => {
  try {
    if(window.confirm(`${tripName} será apagada para sempre, você tem certeza?`)){
      await axios.delete(`${baseURL}/trips/${id}`, headers)
    }
  } catch (err) {
    alert(err.response.data.message);
  }
}

export const getTripDetail = async (id) => {
  try {
    const { data } = await axios.get(`${baseURL}/trip/${id}`, headers)
    return data.trip
  } catch (err) {
    alert(err.response.data.message)
  }
}

export const decideCandidate = async (choice, tripId, candidateId) => {
  const body = {
    "approve": choice
  }
  try {
    await axios.put(`${baseURL}/trips/${tripId}/candidates/${candidateId}/decide`, body, headers)
  } catch (err) {
    alert(err.response.data.message)
  }
}

export const createTrip = async (form, clear) => {
  const body = {
    name: form.name,
    planet: form.planet,
    date: form.date,
    description: form.description,
    durationInDays: form.duration
  }
  try {
    await axios.post(`${baseURL}/trips`, body, headers)
    clear()
  } catch (err) {
    alert(err.response.data.message)
  }
} 
