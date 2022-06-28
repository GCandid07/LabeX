import ImgErrorPage from "../assets/ImgErrorPage.svg"
import {ContainerErrorPage} from "../components/Styles"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <ContainerErrorPage>
      <img src={ImgErrorPage} alt="Página não encontrada" />
      <p onClick={() => navigate("/")}>Home</p>
    </ContainerErrorPage>
  )
}

export default ErrorPage
