import Button from "../components/Button"
import Loading from "../components/Loading"
import { ContainerADMP, TripsADMP } from "../components/Styles"
import { deleteTrip } from "../services/ApiRequest"
import Delete from "../assets/Delete.svg"

import { useNavigate } from "react-router-dom"
import useGetTrip from "../hooks/useGetTrip"
import useProtectedPage from "../hooks/useProtectedPage"

const AdminHomePage = () => {
  useProtectedPage()
  const { data:trips, loading, handleGetData } = useGetTrip()
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  const handleDelete = async (id, tripName) => {
    await deleteTrip(id, tripName)
    handleGetData()
  }

  return (
    <ContainerADMP>
      <h1>Painel Administrativo</h1>
      <div>
        <Button click={() => navigate("/")} text={'Voltar'} />
        <Button click={() => navigate("/admin/trips/create")} text={'Criar Viagem'} />
        <Button click={() => logout()} text={'Logout'} />
      </div>
      {loading 
        ? (<Loading />)
        : (trips && trips.map((trip) => (
        <TripsADMP key={trip.id}>
          <p onClick={() => navigate(`/admin/trips/${trip.id}`)} >{trip.name}</p>
          <img onClick={() => handleDelete(trip.id, trip.name)} src={Delete} alt={`Ícone para remoção da viagem ${trip.name}`} />
        </TripsADMP>
      )))}
    </ContainerADMP>
  )
}

export default AdminHomePage
