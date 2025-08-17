import React, { useState, useEffect } from "react";
import { createUser, deleteUser, getUsers, updateUser } from "../api/api";
import UserForm from "./UserForm";
import UserList from "./userList";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreate = async (data) => {
    try {
      // Trim and ensure valid fields before sending
      const userData = {
        name: data.name?.trim(),
        email: data.email?.trim(),
      };
      if (data.age) userData.age = Number(data.age);

      if (!userData.name || !userData.email) {
        alert("Name and Email are required");
        return;
      }

      if (editingUser) {
        await updateUser(editingUser._id, userData);
        setEditingUser(null);
      } else {
        await createUser(userData);
      }

      fetchUsers();
    } catch (err) {
      console.error("Failed to create/update user:", err);
      alert(
        "Error: " +
          (err.response?.data?.message || err.message || "Something went wrong")
      );
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <UserForm onSubmit={handleCreate} initialData={editingUser} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
