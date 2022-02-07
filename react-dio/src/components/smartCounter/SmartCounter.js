import { useEffect, useState } from "react";
import styled from "styled-components";

const Contador = styled.div`

background: blue;
display: flex;
justify-content: space-between;
align-itens: center;
width: 100px;



`

const Button = styled.button`
background:black;
color: white;
cursor: pointer;
border: solid 1px black;
border-radius: 5px;
`

const UpButton = styled(Button)`
background: green;
`
const DownButton = styled(Button)`
background: red;
`




export const SmartCounter = () => {

    
    const [quantity, setQuantity] = useState(1);

    function aumentar(){
        setQuantity(quantity + 1);
    }

    function diminuir(){
        if(quantity >= 1){
            setQuantity(quantity - 1);
        }else{
            alert("Nada de negativos!!!")
        }
    }

    useEffect(() => {
        document.getElementById("triplo").innerHTML = 3 * quantity;
    },[quantity])


    return(
        <Contador>
            <DownButton onClick={diminuir}>-</DownButton>
            <h1>{quantity}</h1>
            <UpButton onClick={aumentar}>+</UpButton>
            <Button id="triplo"></Button>
        </Contador>
    )
    
    

}