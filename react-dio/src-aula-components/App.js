import Item from "./components/Item";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <h1>Minha primeira aplicação com react</h1>
      <ul>
        <Item texto='Item 1'/>
        <Item  texto='Item 2'/>
        <Item texto='Item 3'/>
      </ul>

      <Card/>
    </div>
  );
};

export default App;
