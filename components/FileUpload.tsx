import React, { useRef } from 'react';
import { FileUpload } from 'primereact/fileupload';


const FileUploader = ({onChange}) => {
  const toast = useRef(null);

  const customBase64Uploader = async (event) => {
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob());
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      const base64data = reader.result;
      console.log(base64data);
      onChange(base64data);
    };
  };

  return (
    <div>
      <div className="card">
        <FileUpload
          mode="basic"
          name="demo[]"
          accept="image/*"
          customUpload
          className="p-button-sm"
          uploadHandler={customBase64Uploader}
        />
      </div>
    </div>
  );
};

export default FileUploader;;