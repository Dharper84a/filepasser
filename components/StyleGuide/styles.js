import styled from "styled-components";

export const Styles = styled.div`
  ${({theme}) => theme.content};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  div {
    display: grid;
    grid-template-columns: 1fr;
  }
  section {
    padding: ${({theme}) => theme.layout.contentContainerPadding};
    border-radius: 0.75rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    &.bg-gradient {
      width: 100%;
      height: fit-content;
      background: ${({theme}) => theme.gradients.background};
    }
  }
  p.text-light {
    color: ${({theme}) => theme.colors.lightText};
  }
  a {
    color: ${({theme}) => theme.colors.blue};
    &.visited {
      color: ${({theme}) => theme.colors.purple};
    }
    &.hover {
      color: ${({theme}) => theme.colors.darkBlue};
      text-decoration: underline;
    }
  }
  @media ${({theme}) => theme.device.ipads} {
    grid-template-columns: 1fr;
  }
`