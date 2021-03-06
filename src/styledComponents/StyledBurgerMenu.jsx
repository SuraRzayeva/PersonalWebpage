import Styled from 'styled-components'
import { black, detailColor } from './GlobalStyle'

export const StyledBurgerMenu = Styled.div`
*:active, *:focus {
  outline: none;
}
z-index: 100;
position: absolute;
top: 5%;
right: 5%;
display: flex;
flex-direction: column;
cursor: pointer;
overflow: hidden;
transition: 0.5s ease all;

img {
  width: 30px;
}

.line {
  width: 100%;
  height: 6px;
  background: ${black};
  margin: 2px 0;
  border-radius: 50px;
  transition: .3s ease all;
}

.line-2 {
  width: 60%;
  align-self: flex-end;
}

:hover .line {
  background: ${detailColor};
}




@media screen and (min-width: 800px) {
  position: fixed;
}


@media screen and (max-width: 420px) {
  position: absolute;
  right: 7%;
  top: 4%;

  img {
    width: 24px;
  }

}

@media (pointer:coarse) {
  cursor: default;
}

`
