import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';

export function App() {
  return (
    <div>
      <p role="p">Hello</p>
      <button>Quote No Jutsu</button>
      <img src={narutoImg} alt='Naruto with a Kunai'/>
    </div>
  );
}


