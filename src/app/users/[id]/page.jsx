import React from "react";
import { getData } from "../../../../utils/dataservices";

export default async function UserDetail({ params }) {
  const { id } = params;
  const user = await getData(`https://dummyjson.com/users/${id}`, {
    cache: "no-store",
  });

  return (
    <>
      <div className="card-id">
        <h4>
          User: {user.firstName} {user.lastName}
        </h4>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </>
  );
}
