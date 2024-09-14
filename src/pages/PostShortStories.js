import React, { useState } from "react"; 
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../Data/Firebase";
import '../style/PostShortStories.css';

const PostShortStories = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [storyPDF, setStoryPDF] = useState(null);
    const [genre, setGenre] = useState('');
    const [PDFthumbnailUrl, setPDFThumbnailUrl] = useState(null);
    const [thumbnailUrl, setThumbnailUrl] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadThum, setUploadThum] = useState(
        "https://static.vecteezy.com/system/resources/previews/004/640/699/non_2x/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
    );
    const [PDFuploadThum, setPDFUploadThum] = useState(
        "https://static.vecteezy.com/system/resources/previews/004/640/699/non_2x/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
    );

    // Handle image file upload
    const handleFileChange = async (event) => {
        try {
            const file = event.target.files[0];
            setImageFile(file);

            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setThumbnailUrl(e.target.result);
                };
                reader.readAsDataURL(file);
                setUploadThum(URL.createObjectURL(file));
            } else {
                setThumbnailUrl(null);
                setUploadThum(
                    "https://static.vecteezy.com/system/resources/previews/004/640/699/non_2x/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
                );
            }

            const storageRef = ref(storage, `images/${Date.now()}${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);
                },
                (error) => {
                    console.log(error.message);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setImageFile(downloadURL); // Store the URL directly
                }
            );
        } catch (error) {
            console.error("Error handling file change:", error);
        } finally {
            setUploadProgress(0);
        }
    };

    // Handle PDF file upload
    const handlePDFFileChange = async (event) => {
        try {
            const pdfFile = event.target.files[0];
            setStoryPDF(pdfFile);

            if (pdfFile) {
                const PDFreader = new FileReader();
                PDFreader.onload = (e) => {
                    setPDFThumbnailUrl(e.target.result);
                };
                PDFreader.readAsDataURL(pdfFile);
                setPDFUploadThum(URL.createObjectURL(pdfFile));
            } else {
                setPDFThumbnailUrl(null);
                setPDFUploadThum(
                    "https://static.vecteezy.com/system/resources/previews/004/640/699/non_2x/circle-upload-icon-button-isolated-on-white-background-vector.jpg"
                );
            }

            const storageRef = ref(storage, `pdfs/${Date.now()}${pdfFile.name}`);
            const uploadTask = uploadBytesResumable(storageRef, pdfFile);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progressPDF = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progressPDF);
                },
                (error) => {
                    console.log(error.message);
                },
                async () => {
                    const PDFdownloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setStoryPDF(PDFdownloadURL); // Store the URL directly
                }
            );
        } catch (error) {
            console.error("Error handling PDF file change:", error);
        } finally {
            setUploadProgress(0);
        }
    };

    const generateMachineId = () => {
        return Math.random().toString(36).substring(6);
    };

    const handleUpload = async () => {
        try {
            const generatedMachineId = generateMachineId();
            if (imageFile && storyPDF) {
                const docRef = await addDoc(collection(db, "stories"), {
                    imageFile, // Direct URL
                    generatedMachineId,
                    storyPDF,  // Direct URL
                    title,
                    genre,
                });
                navigate("/stories");
                alert("Files uploaded successfully");
                console.log("Files uploaded successfully with ID:", docRef.id);
            }
        } catch (error) {
            console.error("Error uploading files to Firebase", error);
        }
    };

    const File = () => {
        document.getElementById("fileupload").click();
    };

    return (
        <div className="profile">
            <div className="uploadContainer">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    id="fileupload"
                    style={{ display: "none" }}
                />
                <div className="uploadImageContainer">
                    <img src={uploadThum} alt="" className="uploadThum" onClick={File} />
                    <div className="titleContainer">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="imageTitle"
                        />
                        <input
                            type="text"
                            placeholder="Genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            className="imageTitle"
                        />
                        <p>Upload story PDF file</p>
                        <input
                            type="file"
                            onChange={handlePDFFileChange}
                            accept="application/pdf"
                        />
                    </div>
                </div>
                {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
                <div className="uploadImageButton" onClick={handleUpload}>
                    <h2>Upload</h2>
                </div>
            </div>
        </div>
    );
};

export default PostShortStories;
