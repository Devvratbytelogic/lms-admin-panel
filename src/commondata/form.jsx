import { useDropzone } from "react-dropzone";

export function Dropimg() {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section className="dnd_field">
            <div {...getRootProps({ className: "dropzone" })} className="drops">
                <input {...getInputProps()} />
                <p className="alitext">
                    Drag and drop or
                    click here to select file
                </p>
                <ul>{files}</ul>
            </div>
        </section>
    );
}
export function Dropimg2() {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section className="dnd_field2">
            <div {...getRootProps({ className: "dropzone" })} className="drops">
                <input {...getInputProps()} />
                <p className="alitext dnd_field2_text">
                    Drag and drop or
                    click here to select file
                </p>
                <ul>{files}</ul>
            </div>
        </section>
    );
}


// export function Dropimg1() {
//     const getUploadParams = () => {
//         return { url: "https://httpbin.org/post" };
//     };

//     const handleChangeStatus = ({ meta }, status) => {
//         console.log(status, meta);
//     };

//     const handleSubmit = (files, allFiles) => {
//         console.log(files.map((f) => f.meta));
//         allFiles.forEach((f) => f.remove());
//     };
//     return (
//         <Dropzone
//             getUploadParams={getUploadParams}
//             onChangeStatus={handleChangeStatus}
//             onSubmit={handleSubmit}
//         />
//     );
// }