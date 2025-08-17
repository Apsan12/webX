import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="w-80 mx-auto mt-4">
      {users.map(user => (
        <div key={user._id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
          <div>
            <p className="font-bold">{user.name}</p>
            <p className="text-sm">{user.email}</p>
            <p className="text-sm">{user.age}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onEdit(user)} className="bg-yellow-400 p-1 rounded">Edit</button>
            <button onClick={() => onDelete(user._id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
