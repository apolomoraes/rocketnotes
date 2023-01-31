import { Container } from "./styles";

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container {...rest}
      isActive={isActive}
      type="button"
    >
      {title}
    </Container>
  )
}