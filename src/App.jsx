import { useState } from "react";
import "./App.css";
import Left from "./Left.jsx";
import Right from "./Right.jsx";

function App() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		education: "",
		location: "",
		jobTitle: "",
		company: "",
		jobLocation: "",
		jobStartDate: "",
		jobEndDate: "",
		experienceDescription: "",
		school: "",
		degree: "",
		educationLocation: "",
		educationStartDate: "",
		educationEndDate: "",
		educationDescription: "",
		projectTitle: "",
		projectSubtitle: "",
		projectDescription: "",
		skillCategory: "",
	});
	return (
		<>
			<header>
				<div className="logo"></div>CV Builder
			</header>
			<main>
				<Left formData={formData} setFormData={setFormData} />

				<Right formData={formData} />
			</main>
		</>
	);
}

export default App;
