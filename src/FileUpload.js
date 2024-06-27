
import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await axios.post('https://httpbin.org/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload success:', response.data);
    } catch (error) {
      console.error('There was an error uploading the files!', error);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <div {...getRootProps({ className: 'dropzone' })} style={{ border: '2px dashed #cccccc', padding: '20px' }}>
        <input {...getInputProps()} />
        <p>click to select files</p>
      </div>
      <div>
        <h3>Files:</h3>
        <ul>
          {files.map((file) => (
            <li key={file.path}>{file.path}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
