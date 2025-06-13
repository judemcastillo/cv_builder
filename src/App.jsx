import { useRef, useState } from "react";
import "./App.css";
import Left from "./Left.jsx";
import Right from "./Right.jsx";

function App() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		location: "",
		experiences: [
			{
				jobTitle: "",
				company: "",
				jobLocation: "",
				jobStartDate: "",
				jobEndDate: "",
				experienceDescription: "",
			},
		],
		education: [
			{
				school: "",
				degree: "",
				educationLocation: "",
				educationStartDate: "",
				educationEndDate: "",
				educationDescription: "",
			},
		],
		projects: [
			{
				projectTitle: "",
				projectSubtitle: "",
				projectDescription: "",
			},
		],
		skills: [
			{
				category: "",
				items: [],
			},
		],
	});
	const previewRef = useRef();
	return (
		<>
			<header>
				<div className="logo"></div>CV Builder
			</header>
			<main>
				<Left
					formData={formData}
					setFormData={setFormData}
					previewRef={previewRef}
				/>

				<Right formData={formData} previewRef={previewRef} />
			</main>
		</>
	);
}

export default App;
