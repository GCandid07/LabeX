import { StyledButton } from "./Styles"

const Button = ({type, click, text}) => {
  return (
    <StyledButton type={type} onClick={click}>{text}</StyledButton>
  )
}

export default Button
