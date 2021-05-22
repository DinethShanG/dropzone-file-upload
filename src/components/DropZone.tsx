import React, {ReactNode, useMemo} from 'react';
import {useDropzone, FileWithPath} from "react-dropzone";
const baseStyle = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '20px',
	borderWidth: 2,
	borderRadius: 2,
	borderColor: '#eeeeee',
	borderStyle: 'dashed',
	backgroundColor: '#fafafa',
	color: '#bdbdbd',
	outline: 'none',
	transition: 'border .24s ease-in-out'
} as React.CSSProperties;

const activeStyle = {
	borderColor: '#2196f3'
};

const acceptStyle = {
	borderColor: '#00e676'
};

const rejectStyle = {
	borderColor: '#ff1744'
};

type DropZoneProps = {
	onChange: () => void,
}

const DropZone: React.FC<DropZoneProps> = (props) => {
	const {onChange} = props;
	const {acceptedFiles, getRootProps, getInputProps,isDragActive, isDragAccept, isDragReject} = useDropzone({accept: 'image/*'});
	const style = useMemo(() => ({
		...baseStyle,
		...(isDragActive ? activeStyle : {}),
		...(isDragAccept ? acceptStyle : {}),
		...(isDragReject ? rejectStyle : {})
	}), [
		isDragActive,
		isDragReject,
		isDragAccept
	]);
	const fileList = (files: FileWithPath[]): ReactNode => (
		files.map(file => (
			<div key={file.name}>
				<img
					src={URL.createObjectURL(file)}
					alt={file.name}
					style={{
						height: "200px",
					}}
				/>
			</div>
		))
	);

	return (
		<section>
			<ul>{fileList(acceptedFiles)}</ul>
			<div {...getRootProps({style})} className="container">
				<input {...getInputProps({onChange: onChange})} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
			<aside>
				<h4>Files</h4>
			</aside>
		</section>
	);

};

export default DropZone;