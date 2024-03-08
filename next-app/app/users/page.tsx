import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";
interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <button className="btn">
        <Link href={"/users/new"}>New User</Link>
      </button>
      <Suspense fallback={<>Loading</>}>
        <UserTable sortBy={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
