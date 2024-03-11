"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}
const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="itachi" />
      )}
      <CldUploadWidget
        uploadPreset="g3hwmxio"
        onSuccess={(result) => {
          if (result.event !== "success") return;
          setPublicId((result.info as CloudinaryResult).public_id);
        }}
        options={{
          sources: ["local"],
          maxFiles: 5,
          multiple: false,
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
