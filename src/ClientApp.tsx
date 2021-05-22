import React, {useEffect} from 'react';
import {Controller, useForm} from "react-hook-form";
import DropZone from "./components/DropZone";



const ClientApp: React.FC = () => {
	const { handleSubmit, control, register } = useForm();


	function onSubmit(data: any) {
		console.log(data)
	}

	const onChange =  (
		{
			target: {
				validity,
				files: [file]
			}
		}: any) => {
		console.log(file)
	}
	useEffect(() => {
		register('file')
	})



	return (
		<React.Fragment>
			<form onChange={onChange} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="file"
					control={control}
					render={({field:{onChange}}) => <DropZone onChange={onChange} />}
				/>
				<button type="submit">Submit</button>
			</form>
		</React.Fragment>
	);

};

export default ClientApp;