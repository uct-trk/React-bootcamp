import "./style.scss";
import { createElement } from "react";

function Button(props) {
  return <button>{props.text}</button>;
}

function App() {
  const todos = ["todo1", "todo2", "todo3"];
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
      <Button text="Merhaba Buton" />
      <main id="main" className="test">
        <h1 style={{ background: "red", color: "white" }}>ugurcan.turk</h1>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
        <label htmlFor="search">Arama</label>
        <input type="text" name="search" id="search" />
        <button onClick={showAlert}>alert aç</button>
        <br />
        {name.toUpperCase()}
      </main>
    </>
  );
}

export default App;
