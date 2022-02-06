import { useState } from "react";
import Button from "../Button";

const Card = () => {
   
  const [valor, setValor] = useState(0)  

  function Adicionar(){
      setValor(valor + 1);
  }

  function Reduzir(){
      setValor(valor - 1);
  }

  return (
    <div className="card">
      <h5 className="card-header">My first Card</h5>
      <div className="card-body">
        {/* <button type="button" class="btn btn-danger" onClick={Reduzir}>
          Reduzir
        </button> */}
        <Button className="btn btn-danger" onClick={Adicionar}>Adicionar</Button>
        <p class="d-inline p-2 bg-primary text-white rounded ">{valor}</p>
        <Button className="btn btn-success" onClick={Reduzir}>Reduzir</Button>
        {/* <button type="button" class="btn btn-success" onClick={Adicionar}>
          Acrescentar
        </button> */}
      </div>
    </div>
  );
};

export default Card;
