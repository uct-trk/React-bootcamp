import "./style.scss";
//import { createElement } from "react";
import Button from "./components/Button";
import "./tailwind.css";
import Tab from "./components/Tab";
import { useState, useReducer, useCallback, useMemo } from "react";
import LifeCycle from "./LifeCycle";
import reducer from "./todoReducer";
import Memoization from "./Memoization";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function App() {
  console.log("app rendered");
  const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(false);

  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
    search: "",
  });
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
  /*  const name = "Ugurcan";

  const showAlert = () => {
    alert(name);
  }; */

  /*Eğer bir componente methodu prop olarak geçiyorsak useCallback ile sarmalıyoruz gereksiz renderlerlamayı önlüyor*/

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
    },
    [state.todo]
  );

  const onChange = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(
    () =>
      state.todos.filter((todo) =>
        todo
          .toLocaleLowerCase("TR")
          .includes(state.search.toLocaleLowerCase("TR"))
      ),
    [state.todos, state.search]
  );

  /* JSX */
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Artır</button>
      <hr />
      <Memoization />
      <input
        type="text"
        value={state.search}
        placeholder="Todolarda ara"
        onChange={searchHandle}
      />
      {state.search}
      <AddTodo
        onChange={onChange}
        submitHandle={submitHandle}
        todo={state.todo}
      />
      <Todos todos={filteredTodos} />
      {/* <main id="main" className="test">
        <h1 style={{ background: "red", color: "white" }}>ugurcan.turk</h1>

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
      {show && <LifeCycle />} */}
    </>
  );
}

export default App;
