function Right({ formData }) {
	return (
		<div className="right">
			<div className="preview">
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
					<div className="cv-item">
						<div className="cv-left">
							<p className="title">
								{formData.jobTitle || "Frontend Developer"}
							</p>

							<p className="italic">{formData.company || "XYZ Company"}</p>

							<p className="description">
								{formData.experienceDescription ||
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed d magna aliqua."}
							</p>
						</div>
						<div className="cv-right">
							<p>
								{formData.jobStartDate || "Jan 2020"} -{" "}
								{formData.jobEndDate || "Present"}
							</p>

							<p>{formData.jobLocation || "New York"}</p>
						</div>
					</div>
				</section>

				{/* EDUCATION */}
				<section>
					<h2 className="section-title">EDUCATION</h2>
					<div className="cv-item">
						<div className="cv-left">
							<p className="title">{formData.school || "University Name"}</p>

							<p className="italic">{formData.degree || "Degree"}</p>

							<p className="description">
								{formData.educationDescription ||
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed d magna aliqua."}
							</p>
						</div>
						<div className="cv-right">
							<p>
								{formData.educationStartDate || "Jan 2020"} -{" "}
								{formData.educationEndDate || "Present"}
							</p>
							<p>{formData.educationLocation || "New York"}</p>
						</div>
					</div>
				</section>

				{/* PROJECTS */}
				<section>
					<h2 className="section-title">PROJECTS</h2>
					<div className="cv-item">
						<div className="cv-left">
							<p className="title">{formData.projectTitle || "Project A"}</p>
							<p className="italic">{formData.projectSubtitle || "Subtitle"}</p>
							<p className="description">
								{formData.projectDescription ||
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed d magna aliqua."}
							</p>
						</div>
					</div>
				</section>

				{/* SKILLS */}
				<section>
					<h2 className="section-title">SKILLS</h2>
					<p className="description">{formData.skillCategory || "Web Development"}:</p>
				</section>
			</div>
		</div>
	);
}

export default Right;
