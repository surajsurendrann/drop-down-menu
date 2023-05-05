import MenuBar from "./components/MenuBar";
import Navbar from "./components/Navbar";
import { datas } from "./data";

function App() {
  return (
    <>
      <Navbar />
      {datas.map((item) => (
        <MenuBar key={item.id} item={item} />
      ))}
    </>
  );
}

export default App;
