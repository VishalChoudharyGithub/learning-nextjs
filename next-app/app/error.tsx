"use client";
import React from "react";
interface Props {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log("error", error);

  return (
    <div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
      An expected error has occured
    </div>
  );
};

export default ErrorPage;
