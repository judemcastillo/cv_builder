import Accordion from "./Accordion";

function Experience({ formData, setFormData }) {
	const handleExperienceChange = (index, field, value) => {
		const updated = [...formData.experiences];
		updated[index][field] = value;
		setFormData((prev) => ({ ...prev, experiences: updated }));
	};
	const addExperience = () => {
		setFormData((prev) => ({
			...prev,
			experiences: [
				...prev.experiences,
				{
					jobTitle: "",
					company: "",
					jobLocation: "",
					jobStartDate: "",
					jobEndDate: "",
					experienceDescription: "",
				},
			],
		}));
	};
	const deleteExperience = (index) => {
		const updated = formData.experiences.filter((_, i) => i !== index);
		setFormData((prev) => ({ ...prev, experiences: updated }));
	};

	return (
		<Accordion title="Experience">
			{formData.experiences.map((exp, index) => (
				<div className="accordionChildren" key={index}>
					<h4>Job Title</h4>
					<input
						type="text"
						placeholder="Enter Job Title"
						name="jobTitle"
						value={exp.jobTitle}
						onChange={(e) =>
							handleExperienceChange(index, "jobTitle", e.target.value)
						}
					/>
					<h4>Company</h4>
					<input
						type="text"
						placeholder="Enter Company"
						name="company"
						value={exp.company}
						onChange={(e) =>
							handleExperienceChange(index, "company", e.target.value)
						}
					/>
					<h4>
						Location <span className="optional">optional</span>
					</h4>
					<input
						type="text"
						placeholder="Enter Location"
						name="jobLocation"
						value={exp.jobLocation}
						onChange={(e) =>
							handleExperienceChange(index, "jobLocation", e.target.value)
						}
					/>
					<div className="flexRow">
						<div>
							<h4>Start Date</h4>
							<input
								type="text"
								name="jobStartDate"
								value={exp.jobStartDate}
								onChange={(e) =>
									handleExperienceChange(index, "jobStartDate", e.target.value)
								}
								placeholder="e.g. Jan 2020 or Present"
							/>
						</div>
						<div>
							<h4>End Date</h4>
							<input
								type="text"
								name="jobEndDate"
								value={exp.jobEndDate}
								onChange={(e) =>
									handleExperienceChange(index, "jobEndDate", e.target.value)
								}
								placeholder="e.g. Jan 2020 or Present"
							/>
						</div>
					</div>
					<h4>Description</h4>
					<textarea
						placeholder="Describe your role and achievements"
						name="experienceDescription"
						value={exp.experienceDescription}
						onChange={(e) =>
							handleExperienceChange(
								index,
								"experienceDescription",
								e.target.value
							)
						}
					/>
					<button className="delButton" onClick={() => deleteExperience(index)}>
						<div className="delete-icon"></div>Delete
					</button>
				</div>
			))}
			<div className="accordionChildren">
				<hr />
				<button className="addButton" onClick={addExperience}>
					+ Experience
				</button>
			</div>
		</Accordion>
	);
}
export default Experience;