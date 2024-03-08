import React from "react";
interface Props {
  params: {
    id: number;
    photoid: number;
  };
}
const Photo = ({ params: { id, photoid } }: Props) => {
  return <div>{photoid}</div>;
};

export default Photo;
