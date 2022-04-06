import { Box, Button, ImageList, ImageListItem, LinearProgress } from '@material-ui/core'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { SetS3Config } from '../utils/config';
import { Storage } from "@aws-amplify/storage";
import { v4 as uuid } from 'uuid';
import { useSnackbar } from 'notistack';


const UploadFileForm = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    useEffect(() => {
        SetS3Config(process.env.REACT_APP_BUCKET_NAME || 'protected');
    }, []);

    useEffect(() => {
        async function getImages() {
            const listImages = await Storage.list('user-images/', { level: 'protected', maxKeys: 10 });
            const imageUrls = await Promise.all(listImages.map(image => Storage.get(image.key || '')));
            setPreviewUrls(imageUrls);
        }
        getImages();
    }, [loading])

    const handleUpload = async (event: SyntheticEvent<EventTarget>) => {
        setLoading(true);
        try {
            const files = (event.target as HTMLInputElement).files || [];
            if (files?.length > 0) {
                const folderName = (new Date()).toISOString().substring(0, 10);
                const file = files[0];
                const result = await Storage.put(`user-images/${folderName}/${uuid()}`, file, {
                    contentType: file.type,
                    metadata: {
                        filename: file.name,
                        description: "Hello world",
                        price: (Math.random() * 1000).toFixed(3) + "USD"
                    }
                });
                console.log(result);
                enqueueSnackbar('Successfully upload the file', { variant: 'success' })
            }
        } catch (error) {
            console.log("error: ", error);
            enqueueSnackbar('Upload file failed: ' + error, { variant: 'error' })
        }

        setLoading(false);
    }

    return (
        <div>
            <h2>Upload file directly to S3</h2>
            <Box>
                <input
                    accept="image/*"
                    style={{
                        display: "none"
                    }}
                    id="contained-button-file"
                    type="file"
                    onChange={handleUpload}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" disabled={loading}>
                        Upload
                    </Button>
                </label>
                {loading && <LinearProgress color="secondary" style={{ marginTop: "1rem" }} />}
            </Box>
            <ImageList rowHeight={160} cols={3} gap={15} style={{
                marginTop: "1rem"
            }}>
                {previewUrls.map((imageUrl, index) => (
                    <ImageListItem key={index} cols={1} style={{
                        border: "1px solid gray",
                        borderRadius: "5px",
                    }}> <img src={imageUrl} alt={"image preview " + index} />
                    </ImageListItem>
                ))}
            </ImageList>

        </div>
    )
}

export default UploadFileForm;