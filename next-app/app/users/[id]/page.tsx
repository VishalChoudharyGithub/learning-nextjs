import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>{id}</div>;
};

export default UserDetailPage;
