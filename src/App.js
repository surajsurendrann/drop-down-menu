import MenuBar from "./components/MenuBar";
import { datas } from "./data";

function App() {
  return (
    <>
      {datas.map((item) => (
        <MenuBar key={item.id} item={item} />
      ))}
    </>
  );
}

export default App;
