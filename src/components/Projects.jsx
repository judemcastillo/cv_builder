import Accordion from "./Accordion";

function Projects({ formData, setFormData }) {
	const handleProjectChange = (index, field, value) => {
		const updated = [...formData.projects];
		updated[index][field] = value;
		setFormData((prev) => ({ ...prev, projects: updated }));
	};
	const addProject = () => {
		setFormData((prev) => ({
			...prev,
			projects: [
				...prev.projects,
				{
					projectTitle: "",
					projectSubtitle: "",
					projectDescription: "",
				},
			],
		}));
	};
	const deleteProject = (index) => {
		const updated = formData.projects.filter((_, i) => i !== index);
		setFormData((prev) => ({ ...prev, projects: updated }));
	};
	return (
		<>
			<Accordion title="Projects">
				{formData.projects.map((proj, index) => (
					<div className="accordionChildren" key={index}>
						<h4>Project Title</h4>
						<input
							type="text"
							name="projectTitle"
							value={proj.projectTitle}
							placeholder="Enter Project Title"
							onChange={(e) =>
								handleProjectChange(index, "projectTitle", e.target.value)
							}
						/>
						<h4>Role</h4>
						<input
							type="text"
							name="projectSubtitle"
							value={proj.projectSubtitle}
							placeholder="Enter Project Role"
							onChange={(e) =>
								handleProjectChange(index, "projectSubtitle", e.target.value)
							}
						/>
						<h4>Description</h4>
						<textarea
							name="projectDescription"
							value={proj.projectDescription}
							placeholder="Enter Project Description"
							onChange={(e) =>
								handleProjectChange(index, "projectDescription", e.target.value)
							}
						/>
						<button className="delButton" onClick={() => deleteProject(index)}>
							<div className="delete-icon"></div>Delete
						</button>
					</div>
				))}
				<div className="accordionChildren">
					<hr />
					<button className="addButton" onClick={addProject}>
						+ Project
					</button>
				</div>
			</Accordion>
		</>
	);
}

export default Projects;
