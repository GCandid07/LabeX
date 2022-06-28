import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`; 

const Space = keyframes`
  0%{
    transform: scale(0) translateX(0)
  }
  25%{
    transform: scale(1) 
  }
  50%{
    transform: translateX(60px)
  }
  75%{
    transform: translateX(-120px)
  }
  100%{
    transform: translateX(0px)
  }
`;

const Rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledButton = styled.button`
  padding: 1em 1.5em;
  background-color: #335863;
  border-radius: 10px;
  color: #fff;
  text-shadow: 1px 1px 3px #000;
  box-shadow: 1px 1px 1px #ddd;
  cursor: pointer;
  transition: .3s;
  &:hover{
    background-color: #1a3a43;
    box-shadow: 2px 2px 2px #ddd;
    transform: scale(1.1)
  }
`;

export const ContainerLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  padding: 10px;
  border: 10px solid black;
  border-top: 10px solid #335863;
  border-radius: 50%;
  animation: ${Rotate} 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`;

export const ContainerHP = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  div{
    display: flex;
    gap: 2em;
  }
`;

export const ContainerErrorPage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  img{
    width: 100%;
    height: 100%;
    animation: ${Space} 2s ease-in-out;
    position: relative;
  }
  p{
    animation: ${Space} 2s ease-in-out;
    position: absolute;
    padding: 1em 2em;
    margin: 1em;
    color: #aaa;
    border: 1px solid #aaa;
    border-radius: 5px;
    cursor: pointer;
    text-transform:uppercase;
    &:hover{
      background: #aaa;
      color: #fff;
    }
  }
`;

export const ContainerListTP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  margin-bottom: 5%;
  gap: 1.5em;
  h1{
    font-size: 3em;
  }
  div{
    display: flex;
    gap: 1em;
  }
  ul{
    list-style: none;
    width: 35%;
    background-color: #d8d8d9;
    padding: 1em 1.5em;
    border-radius: 10px;
    box-shadow: 1px 1px 8px 2px #999;
    transition: .3s;
    cursor: pointer;
    &:hover{
      transform: scale(1.05)
    }
    li{
      padding: .5em;
      strong{
        color: #0a2b34;
        text-shadow: 1px 1px 1px #ccc;
      }
    }
  }
  @media screen and (max-width: 800px) {
    ul{
      width: 90%;
    }
  }
`;

export const ContainerAFP = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: .5em;
    text-align: center;
  }
  form {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 1px 2px 10px #ccc;
    width: 35%;
    height: 70vh;
    margin-top: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5em;
  }
  input, select {
    width: 80%;
    border: 1px solid #000;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.15em;
    padding: .8em;
  }
  @media screen and (max-width: 800px) {
    form {
      width: 90%;
    }
  }
`;

export const ContainerLP = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-bottom: .5em;
    text-align: center;
  }
  form {
    width: 35%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    input{
      width: 80%;
      font-size: 1.2em;
      padding: .8em;
      border: 1px solid #000;
      border-radius: 10px;
      cursor: pointer;
    }
    div {
      display: flex;
      gap: 1em;
    }
  }
  @media screen and (max-width: 800px) {
    form {
      width: 90%;
    }
  }
`;

export const ContainerADMP = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  div:nth-child(2){
    button{
      margin: 0 1em 2em 1em;
    }
  }
`;

export const TripsADMP = styled.div`
  width: 50%;
  box-shadow: 1px 3px 5px 2px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    transform: scale(1.05)
  }
  p {
    width: 100%;
    padding: 2em 1em;
  }
  img {
    width: 3em;
    border-radius: 50%;
    padding: 10px;
    &:hover{
      background: #ccc;
    }
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ContainerTDP = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #335863;
    margin: 5vh 0;
    text-align: center;
  }
  ul {
    margin-bottom: 10vh;
  }
`;

export const TripDetail = styled.div`
  padding-bottom: 35px;
  margin-bottom: 1em;
  border-bottom: 1px solid black;
  h1 {
    color: #335863;
    margin: 5vh 0;
    text-align: center;
    text-transform: uppercase;
  }
  span {
    color: #335863;
    text-transform: uppercase;
    font-weight: bold;
  }
  p {
    padding: .3em;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ContainerCandidates = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
  span {
    color: #335863;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Candidates = styled.div`
  width: 30%;
  height: 35vh;
  margin: 1%;
  background: #eee;
  border-left: 10px solid #335863;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    width: calc(100% - 10px);
    height: 40vh;
  }
  p {
    padding: 2%;
    word-wrap: break-word;
  }
  p:nth-child(5){
    height: 10vh;
    overflow: auto;
    &::-webkit-scrollbar{
      width: 8px;
    }
    &::-webkit-scrollbar-track{
      background: #fff;
    }
    &::-webkit-scrollbar-thumb{
      background-color: #ccc;
      border-radius: 20px;
      border: 1px solid #335863;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    padding: 1%;
    img {
      width: 1.5em;
      cursor: pointer;
      transition: .1s linear;
    }
    img:hover{
      transform: scale(1.2)
    }
  }
`;

export const ContainerCreateTrip = styled(ContainerAFP)`
  div {
    width: 80%;
    display: flex;
    justify-content: space-around;
  }
`;
