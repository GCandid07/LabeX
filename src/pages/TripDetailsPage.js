import { ContainerTDP, TripDetail, ContainerCandidates, Candidates } from "../components/Styles";
import Loading from "../components/Loading";
import Button from "../components/Button";
import accept from "../assets/accept.svg";
import reject from "../assets/reject.svg";

import { useNavigate } from "react-router-dom";
import useTripDetails from "../hooks/useTripDetails"
import useProtectedPage from "../hooks/useProtectedPage";

const TripDetailsPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const { detail, loading, handleDecideCandidate } = useTripDetails()

  return (
    <ContainerTDP>
      {loading
      ? (<Loading />)
      : (
        <>
          <TripDetail>
            <h1>{detail.name}</h1>
            <p><span>Nome:</span> {detail.name}</p>
            <p><span>Descrição:</span> {detail.description}</p>
            <p><span>Planeta:</span> {detail.planet}</p>
            <p><span>Duração:</span> {detail.duration}</p>
            <p><span>Data:</span> {detail.date}</p>
          </TripDetail>
          <Button click={() => navigate("/admin/trips/list")} text={"Voltar"}/>
          <h1>Candidatos Pendentes</h1>
          <ContainerCandidates>
            {detail.candidates && detail.candidates.length === 0 
            ? (<p>Não há candidatos pendentes.</p>)
            : (detail.candidates && detail.candidates.map((candidate) => (
              <Candidates key={candidate.id}>
                <p><span>Nome: </span>{candidate.name}</p>
                <p><span>Idade: </span>{candidate.age}</p>
                <p><span>Profissão: </span>{candidate.profession}</p>
                <p><span>País: </span>{candidate.country}</p>
                <p><span>Texto de candidatura: </span>{candidate.applicationText}</p>
                <div>
                  <div>
                    <p>Aprovar</p>
                    <img onClick={() => handleDecideCandidate(true, candidate.id)} src={accept} alt="" />
                  </div>
                  <div>
                    <p>Reprovar</p>
                    <img onClick={() => handleDecideCandidate(false, candidate.id)} src={reject} alt="" />
                  </div>
                </div>
              </Candidates>
          )))}
          </ContainerCandidates>
          <h1>Candidatos Aprovados</h1>
          <ul>
            {detail.approved && detail.approved.length === 0
            ? (<p>Não há candidatos aprovados para essa viagem.</p>)
            : detail.approved && detail.approved.map((approved) => (
              <li key={approved.id}>{approved.name}</li>
            ))}
          </ul>
        </>
      )}
    </ContainerTDP>
  );
};

export default TripDetailsPage;
