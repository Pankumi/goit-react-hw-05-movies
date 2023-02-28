import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
display: inline-block;
text-decoration: none;
border-bottom: 2px solid transparent;

padding: 15px;
transition: all .3s;
color: aliceblue;
&.active {
  color: rgb(0, 178, 178);
  // border-bottom: 2px solid #0059ff;
}
`;

