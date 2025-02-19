import React, { useState, useEffect } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [users, setUsers] = useState(["user1", "user2"]);

  function add() {
    setCount(count + 1);
  }

  function handleAddUser() {
    const number = users.length + 1;
    setUsers([...users, "user" + number]);
  }

  function handleRemoveUser(name: string) {
    const filterArray = users.filter((user) => user != name);
    setUsers(filterArray);
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  // always run when the component is rendered
  useEffect(() => {
    console.log("Renderizou!");
  }, [count, name]); // dependency array

  console.log("AAAA");

  return (
    <>
      <h1>Class 03 Hooks</h1>

      <p>Count: {count}</p>
      <button onClick={add}>add</button>

      <p>Name: {name}</p>
      <input type="text" onInput={handleName} />

      <h2>Users</h2>

      <button onClick={handleAddUser}>Add user</button>

      {users.map((user) => {
        return (
          <p key={user}>
            {user}
            <button onClick={() => handleRemoveUser(user)}>X</button>
          </p>
        );
      })}
    </>
  );
}
