import { Info } from "./Info";
import { Button } from "./Button";
import { Gentleman } from "./Gentleman";

function App() {
  const title = "Pacones pointing at you";
  return (
    <>
      <Info title={title}></Info>
      <Button></Button>
      <main className="main">
        <ul className="gentlemen">
          <Gentleman></Gentleman>
        </ul>
      </main>
    </>
  );
}

export default App;
