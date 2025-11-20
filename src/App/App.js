import { Form } from "./Form";
import { currencies, newCurrencies } from "./currencies";
import { Clock } from "./Clock";
import { Header } from "./Header";
import { StyledApp } from "./styled";

function App() {

  newCurrencies();

  return (
    <StyledApp>
      <Header
        title="Zamiana walut"
      />
      <Clock />
      <Form
      />
    </StyledApp>
  );
}

export default App;
