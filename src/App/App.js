import { Form } from "./Form";
import { Clock } from "./Clock";
import { Header } from "./Header";
import { StyledApp } from "./styled";

function App() {

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
