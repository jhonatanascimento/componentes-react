export const Counter = () => {


    let valor = 0
    
    function acrescentar(){
        valor = valor + 1;
        console.log(valor);

        document.getElementById('resultado').textContent = valor;
        

    }

    return(
           <>
           <h1 id="resultado">{valor}</h1>
           <button onClick={acrescentar}>Acrescentar</button>      
           
           </>

    )
}
