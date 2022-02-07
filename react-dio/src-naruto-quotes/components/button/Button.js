import { string } from 'prop-types';
import styled from 'styled-components';

export const Button = styled.button`
background: #DC872C;
color:#fff;
border: none;
border-radius:10px;
font-size: 1.5em;
padding: 10px 20px;
font-family: 'New Tegomin', serif;
cursor: pointer;
box-shadow: #333 3px 3px;

&:hover{
    background: #a40000;
}
`

Button.propTypes = {
    children: string,
}

