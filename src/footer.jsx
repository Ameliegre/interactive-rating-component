import styled from 'styled-components'

const FooterText = styled.p `
  font-size: 12px;
`

function Footer () {
    return (
      <footer>
        <FooterText>Challenge by&nbsp;
          <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by&nbsp;
          <a href="https://github.com/Ameliegre">Amélie Grenier</a>.
        </FooterText>
      </footer> 
    )
}

export default Footer