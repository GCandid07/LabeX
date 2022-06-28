import Button from "../components/Button"
import Loading from "../components/Loading"
import { ContainerListTP } from "../components/Styles"

import { useNavigate } from "react-router-dom"
import useGetTrip from "../hooks/useGetTrip"

const ListTripsPage = () => {

  const {data:trips, loading} = useGetTrip()
  const navigate = useNavigate()

  return (
    <ContainerListTP>
      <h1>Trips List</h1>
      <div>
        <Button click={() => navigate("/")} text={"Voltar"}/>
        <Button click={() => navigate("/trips/application")} text={"Inscreva-se"}/>
      </div>
      {loading ? (<Loading />) : (trips.map((trip) => (
        <ul key={trip.id}>
          <li><strong>Nome:</strong>{trip.name}</li>
          <li><strong>Descrição:</strong>{trip.description}</li>
          <li><strong>Planeta:</strong>{trip.planet}</li>
          <li><strong>Duração:</strong>{trip.durationInDays}</li>
          <li><strong>Data:</strong>{trip.date}</li>
        </ul>
      )))}
    </ContainerListTP>
  )
}

export default ListTripsPage
