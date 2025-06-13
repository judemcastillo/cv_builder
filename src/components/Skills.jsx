import Accordion from "./Accordion";
function Skills({ formData, setFormData }) {
    const handleSkillCategoryChange = (catIndex, value) => {
		const updated = [...formData.skills];
		updated[catIndex].category = value;
		setFormData((prev) => ({ ...prev, skills: updated }));
	};

	const handleSkillItemChange = (catIndex, skillIndex, value) => {
		const updated = [...formData.skills];
		updated[catIndex].items[skillIndex] = value;
		setFormData((prev) => ({ ...prev, skills: updated }));
	};

	const addSkillItem = (catIndex) => {
		const updated = [...formData.skills];
		updated[catIndex].items.push("");
		setFormData((prev) => ({ ...prev, skills: updated }));
	};

	const deleteSkillItem = (catIndex, skillIndex) => {
		const updated = [...formData.skills];
		updated[catIndex].items.splice(skillIndex, 1);
		setFormData((prev) => ({ ...prev, skills: updated }));
	};

	const addSkillCategory = () => {
		setFormData((prev) => ({
			...prev,
			skills: [...prev.skills, { category: "", items: [] }],
		}));
	};

	const deleteSkillCategory = (catIndex) => {
		const updated = [...formData.skills];
		updated.splice(catIndex, 1);
		setFormData((prev) => ({ ...prev, skills: updated }));
	};
    return (
        <Accordion title="Skills">
						{formData.skills.map((skillCategory, catIndex) => (
							<div className="accordionChildren" key={catIndex}>
								<h4>Category Name</h4>
								<input
									type="text"
									name="skillCategory"
									value={skillCategory.category}
									onChange={(e) =>
										handleSkillCategoryChange(catIndex, e.target.value)
									}
									placeholder="Enter Skill Category"
								/>
								{/* Skills in this category */}
								{skillCategory.items.map((skill, skillIndex) => (
								
									<div key={skillIndex} className="skillItem">
										<input
											type="text"
											placeholder="Enter a Skill"
											value={skill}
											onChange={(e) =>
												handleSkillItemChange(
													catIndex,
													skillIndex,
													e.target.value
												)
											}
										/>
										<div
											className="skillDelButton"
											onClick={(e) => {
												e.preventDefault();
												deleteSkillItem(catIndex, skillIndex);
											}}
										>
									
										</div>
									</div>
								))}
								<button
									className="skillButton"
									onClick={(e) => {
										e.preventDefault();
										addSkillItem(catIndex);
									}}
								>
									+ Skill
								</button>
								<button
									className="delButton"
									onClick={(e) => {
										e.preventDefault();
										deleteSkillCategory(catIndex);
									}}
								>
									Delete
								</button>
							</div>
						))}
						<div className="accordionChildren">
							<hr />
							<button
								className="addButton"
								onClick={(e) => {
									e.preventDefault();
									addSkillCategory();
								}}
							>
								+ Category
							</button>
						</div>
					</Accordion>
    );
}
export default Skills;