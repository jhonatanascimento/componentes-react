import styled from "styled-components"

export const Quotes = ({quote, speaker}) => {
    return(
        <div>
        <p>{quote}</p>
        <p>- {speaker}</p>
        <button>Quote No Jutsu</button>        
        </div>

    )
}


const Quote = styled.p`
font-size: 2em;
`