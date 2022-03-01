import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { Input, Image, notification } from 'antd';

const UploadForm: React.FC = () => {
    const [previewImage, setPreviewImage] = useState('');
    const [signedUrl, setSignedUrl] = useState(localStorage.getItem("signedUrl") || "");

    const handleFileSelect = async (event: SyntheticEvent<HTMLInputElement>) => {
        const files = (event?.target as HTMLInputElement)?.files;
        if (files && files[0]) {
            const imageBase64 = await getBase64(files[0]);
            setPreviewImage(imageBase64);
            if (signedUrl) {
                const response = await fetchUpload(signedUrl, files[0]);
                if (response) {
                    notification.success({
                        message: "Uploaded to GCS successfully"
                    })
                } else {
                    notification.error({
                        message: "Uploading to GCS failed"
                    })
                }
            } else {
                notification.error({
                    message: "Missing signedUrl"
                })
            }
        }

    }

    return (
        <div>
            <div><a href="https://cloud.google.com/storage/docs/samples/storage-generate-upload-signed-url-v4" target={"_blank"} rel="noreferrer">For creating SignedUrl on GCP</a></div>
            <label >SingedUrl: </label>
            <Input.TextArea onChange={(event) => {
                const text = event.target.value;
                localStorage.setItem("signedUrl", text);
                setSignedUrl(text);
            }} value={signedUrl} rows={5} />
            <div>UploadForm:</div>
            <Input type="file" onChange={handleFileSelect} accept="image/png, image/jpeg"></Input>
            <Image
                width={400}
                height={400}
                src={previewImage}
                fallback="/logo512.png"
            />
            <div>
                <a href='https://github.com/googleapis/nodejs-storage/issues/347' target="_blank" rel="noreferrer"> CORS issue</a>
            </div>
        </div>

    )
}


function getBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result?.toString() || '');
        reader.onerror = error => reject(error);
    });
}

async function uploadFile(signedUrl: string, file: File) {
    try {
        const response = await axios.put(signedUrl, {
            file
        }, {
            headers: {
                // BUG on axios, always set 11 for Content-Length
                'Content-Type': file.type
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchUpload(signedUrl: string, file: File) {
    return fetch(signedUrl, { method: "PUT", body: file }).then(res => res.json());
}


export default UploadForm