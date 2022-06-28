import Button from "../components/Button"
import { ContainerHP } from "../components/Styles"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <ContainerHP>
      <h1>LabeX</h1>
      <div>
        <Button text="Ver Viagens" click={() => navigate("/trips/list")}/>
        <Button text="Área de Admin" click={() => navigate("/admin/trips/list")}/>
      </div>
    </ContainerHP>
  )
}

export default HomePage
