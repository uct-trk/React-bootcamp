import "./style.scss";
//import { createElement } from "react";
import Button from "./components/Button";
import "./tailwind.css";
import Tab from "./components/Tab";
import { useState } from "react";
import LifeCycle from "./LifeCycle";
function App() {
  const [activeTab, setActiveTab] = useState(1);
  const todos = ["todo1", "todo2", "todo3"];
  const [show, setShow] = useState(false);
  /* create element yontemiyle eleman oluşturma
  const h1 = createElement("h1", null, "ugurcan.com");
  const ul = createElement(
    "ul",
    null,
    todos.map((todo) => createElement("li", null, todo))
  );
  return createElement(
    "main",
    {
      className: "test",
      id: "main",
    },
    h1,
    ul
  );
  */
  const name = "Ugurcan";

  const showAlert = () => {
    alert(name);
  };

  /* JSX */
  return (
    <>
      <main id="main" className="test">
        <h1 style={{ background: "red", color: "white" }}>ugurcan.turk</h1>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
        <label htmlFor="search">Arama</label>
        <input className="bg-red-500" type="text" name="search" id="search" />
        <button onClick={showAlert}>alert aç</button>
        <br />
        {name.toUpperCase()}
      </main>
      <Button variant="success">Buton Ornegi</Button>
      <Button variant="warning">Buton Ornegi</Button>
      <Button variant="danger">Buton Ornegi</Button>
      <Button variant="default">Buton Ornegi</Button>

      <div>
        <button onClick={() => setActiveTab(2)}>Aktif Tabı Değiştir</button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Profil">1. tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
        </Tab>
      </div>

      <button
        className="bg-red-500 p-3 rounded text-white"
        onClick={() => setShow(!show)}
      >
        {show ? "Gizle" : "Goster"}
      </button>
      {show && <LifeCycle />}
    </>
  );
}

export default App;
