import React, { useEffect, useState } from "react";
import { PostService, userService } from "./services";
function App3() {
  const [users, setUsers] = useState(false);
  const [name, setName] = useState("Ugurcan");
  const [avatar, setAvatar] = useState(false);

  const addPost = (data) => {
    const formData = new FormData();
    formData.append("userId", data.userId);
    formData.append("title", data.title);
    formData.append("body", data.body);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //servislerle calısılan alan
    PostService.getPosts().then((res) => console.log(res));
    PostService.getPostDetail(2).then((res) => console.log(res));
    PostService.newPost({
      userId: 3,
      title: "test",
      body: "test",
    });
    userService.getUsers().then((res) => console.log(res));
    // servislerle çalışılan alan

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));

    addPost({
      userId: 1,
      title: "Ornek Post",
      body: "Post İçeriği",
    });
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", avatar);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
        <button type="submit" disabled={!name || !avatar}>
          Kaydet
        </button>
      </form>
      <h1>User List</h1>
      <ul>
        {users &&
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default App3;
