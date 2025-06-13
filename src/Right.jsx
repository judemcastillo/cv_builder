function Right({ formData, previewRef }) {
	return (
		<div className="right">
			<div className="preview" ref={previewRef}>
				{/* Header Section */}
				<h1>{formData.name || "John Doe"}</h1>
				<div className="contact-info">
					<span>📧 {formData.email || "john@example.com"}</span>
					<span>📞 {formData.phone || "1234567890"}</span>
					<span>📍 {formData.location || "Your City"}</span>
				</div>

				{/* EXPERIENCE */}
				<section>
					<h2 className="section-title">EXPERIENCE</h2>
					{formData.experiences.map((exp, index) => (
						<div className="cv-item" key={index}>
							<div className="cv-left">
								<p className="title">{exp.jobTitle || "Job Title"}</p>
								<p className="italic">{exp.company || "Company ABC"}</p>
								<p className="description">
									{exp.experienceDescription || "Description..."}
								</p>
							</div>
							<div className="cv-right">
								<p>
									{exp.jobStartDate || "Jan 2020"} -{" "}
									{exp.jobEndDate || "Present"}
								</p>
								<p>{exp.jobLocation || "New York"}</p>
							</div>
						</div>
					))}
				</section>

				{/* EDUCATION */}
				<section>
					<h2 className="section-title">EDUCATION</h2>
					{formData.education.map((edu, index) => (
						<div className="cv-item" key={index}>
							<div className="cv-left">
								<p className="title">{edu.school || "University Name"}</p>

								<p className="italic">{edu.degree || "Degree"}</p>

								<p className="description">
									{edu.educationDescription ||
										"Description of your education..."}
								</p>
							</div>
							<div className="cv-right">
								<p>
									{edu.educationStartDate || "Jan 2020"} -{" "}
									{edu.educationEndDate || "Present"}
								</p>
								<p>{edu.educationLocation || "New York"}</p>
							</div>
						</div>
					))}
				</section>

				{/* PROJECTS */}
				<section>
					<h2 className="section-title">PROJECTS</h2>
					{formData.projects.map((proj, index) => (
						<div className="cv-item" key={index}>
							<div className="cv-left">
								<p className="title">{proj.projectTitle || "Project Title"}</p>
								<p className="italic">
									{proj.projectSubtitle || "Role"}
								</p>
								<p className="description">
									{proj.projectDescription ||
										"Brief description of the project..."}
								</p>
							</div>
						</div>
					))}
				</section>

				{/* SKILLS */}
				<section>
					<h2 className="section-title">SKILLS</h2>
					{formData.skills?.length > 0 ? (
						formData.skills.map((cat, i) => (
							<p key={i} className="skillSection">
								<strong>{cat.category || "Category"}:</strong>{" "}
								{cat.items?.filter(Boolean).join(", ") || "None"}
							</p>
						))
					) : (
						<p>No skills added yet.</p>
					)}
				</section>
			</div>
		</div>
	);
}

export default Right;
