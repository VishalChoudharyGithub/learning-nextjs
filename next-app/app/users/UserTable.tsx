import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";
interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortBy: string;
}
const UserTable = async ({ sortBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  let users: User[] = await res.json();
  users = sort(users).asc((u) => (sortBy === "email" ? u.email : u.name));

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href={"/users?sortOrder=name"}>Name</Link>
          </th>
          <th>
            <Link href={"/users?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
