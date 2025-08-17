import React, { useState, useEffect } from "react";

const UserForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setAge(initialData.age);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, age });
    setName(""); setEmail(""); setAge("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-wh p-4 rounded shadow-md w-80 mx-auto">
      <h2 className="text-xl font-bold mb-4">{initialData ? "Edit User" : "Add User"}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        {initialData ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default UserForm;
