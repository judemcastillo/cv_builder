import Accordion from "./Accordion";

function Education({ formData, setFormData }) {
	const handleEducationChange = (index, field, value) => {
		const updated = [...formData.education];
		updated[index][field] = value;
		setFormData((prev) => ({ ...prev, education: updated }));
	};
	const addEducation = () => {
		setFormData((prev) => ({
			...prev,
			education: [
				...prev.education,
				{
					school: "",
					degree: "",
					educationLocation: "",
					educationStartDate: "",
					educationEndDate: "",
					educationDescription: "",
				},
			],
		}));
	};
	const deleteEducation = (index) => {
		const updated = formData.education.filter((_, i) => i !== index);
		setFormData((prev) => ({ ...prev, education: updated }));
	};
	return (
		<>
			<Accordion title="Education">
				{formData.education.map((edu, index) => (
					<div className="accordionChildren" key={index}>
						<h4>School</h4>
						<input
							type="text"
							name="school"
							value={edu.school}
							onChange={(e) =>
								handleEducationChange(index, "school", e.target.value)
							}
							placeholder="Enter School"
						/>
						<h4>Degree</h4>
						<input
							type="text"
							name="degree"
							value={edu.degree}
							onChange={(e) =>
								handleEducationChange(index, "degree", e.target.value)
							}
							placeholder="Enter Degree"
						/>
						<h4>Location</h4>
						<input
							type="text"
							name="educationLocation"
							value={edu.educationLocation}
							onChange={(e) =>
								handleEducationChange(
									index,
									"educationLocation",
									e.target.value
								)
							}
							placeholder="Enter Location"
						/>
						<div className="flexRow">
							<div>
								<h4>Start Date</h4>
								<input
									type="text"
									name="educationStartDate"
									value={edu.educationStartDate}
									onChange={(e) =>
										handleEducationChange(
											index,
											"educationStartDate",
											e.target.value
										)
									}
									placeholder="e.g. Jan 2020 or Present"
								/>
							</div>
							<div>
								<h4>End Date</h4>
								<input
									type="text"
									name="educationEndDate"
									value={edu.educationEndDate}
									onChange={(e) =>
										handleEducationChange(
											index,
											"educationEndDate",
											e.target.value
										)
									}
									placeholder="e.g. Jan 2020 or Present"
								/>
							</div>
						</div>
						<h4>Description</h4>
						<textarea
							placeholder="Describe your studies and achievements"
							name="educationDescription"
							value={edu.educationDescription}
							onChange={(e) =>
								handleEducationChange(
									index,
									"educationDescription",
									e.target.value
								)
							}
						/>
						<button className="delButton">
							<div
								className="delete-icon"
								onClick={() => deleteEducation(index)}
							></div>
							Delete
						</button>
					</div>
				))}
				<div className="accordionChildren">
					<hr />
					<button className="addButton" onClick={addEducation}>
						+ Education
					</button>
				</div>
			</Accordion>
		</>
	);
}

export default Education;
