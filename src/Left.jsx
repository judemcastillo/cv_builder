import { useState } from "react";
import Accordion from "./components/Accordion";
function Left({ formData, setFormData }) {
	const [started, setStarted] = useState(false);
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="left">
			{!started ? (
				<>
					<h2>Build a professional Resume Now!</h2>
					<p>
						Quickly create a standout CV that highlights your skills, education
						and experience with no hassle
					</p>
					<button className="startButton" onClick={() => setStarted(true)}>
						Get Started
					</button>
				</>
			) : (
				<div className="details">
					<h1>Enter Your Details</h1>
					<Accordion title="Personal Information">
						<div className="accordionChildren">
							<h4>Full Name</h4>
							<input
								type="text"
								placeholder="Enter Full Name"
								name="name"
								value={formData.name}
								onChange={handleChange}
							/>
							<div className="flexRow">
								<div>
									<h4>Email</h4>
									<input
										type="email"
										placeholder="Enter Email"
										name="email"
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
								<div>
									<h4>Phone</h4>
									<input
										type="tel"
										placeholder="XX-XXXXXXXX"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
									/>
								</div>
							</div>
							<h4>Location</h4>
							<input
								type="text"
								placeholder="Enter Location"
								name="location"
								value={formData.location}
								onChange={handleChange}
							/>
						</div>
					</Accordion>
					<Accordion title="Experience">
						<div className="accordionChildren">
							<h4>Job Title</h4>
							<input
								type="text"
								placeholder="Enter Job Title"
								name="jobTitle"
								value={formData.jobTitle}
								onChange={handleChange}
							/>
							<h4>Company</h4>
							<input
								type="text"
								placeholder="Enter Company"
								name="company"
								value={formData.company}
								onChange={handleChange}
							/>
							<h4>
								Location <span className="optional">optional</span>
							</h4>
							<input
								type="text"
								placeholder="Enter Location"
								name="jobLocation"
								value={formData.jobLocation}
								onChange={handleChange}
							/>
							<div className="flexRow">
								<div>
									<h4>Start Date</h4>
									<input
										type="text"
										name="jobStartDate"
										value={formData.jobStartDate}
										onChange={handleChange}
										placeholder="e.g. Jan 2020 or Present"
									/>
								</div>
								<div>
									<h4>End Date</h4>
									<input
										type="text"
										name="jobEndDate"
										value={formData.jobEndDate}
										onChange={handleChange}
										placeholder="e.g. Jan 2020 or Present"
									/>
								</div>
							</div>
							<h4>Description</h4>
							<textarea
								placeholder="Describe your role and achievements"
								name="experienceDescription"
								value={formData.experienceDescription}
								onChange={handleChange}
							/>
							<button className="delButton">
								<div className="delete-icon"></div>Delete
							</button>
							<hr />
							<button className="addButton">+ Experience</button>
						</div>
					</Accordion>

					<Accordion title="Education">
						<div className="accordionChildren">
							<h4>School</h4>
							<input
								type="text"
								name="school"
								value={formData.school}
								onChange={handleChange}
								placeholder="Enter School"
							/>
							<h4>Degree</h4>
							<input
								type="text"
								name="degree"
								value={formData.degree}
								onChange={handleChange}
								placeholder="Enter Degree"
							/>
							<h4>Location</h4>
							<input
								type="text"
								name="educationLocation"
								value={formData.educationLocation}
								onChange={handleChange}
								placeholder="Enter Location"
							/>
							<div className="flexRow">
								<div>
									<h4>Start Date</h4>
									<input
										type="text"
										name="educationStartDate"
										value={formData.educationStartDate}
										onChange={handleChange}
										placeholder="e.g. Jan 2020 or Present"
									/>
								</div>
								<div>
									<h4>End Date</h4>
									<input
										type="text"
										name="educationEndDate"
										value={formData.educationEndDate}
										onChange={handleChange}
										placeholder="e.g. Jan 2020 or Present"
									/>
								</div>
							</div>
							<h4>Description</h4>
							<textarea
								placeholder="Describe your studies and achievements"
								name="educationDescription"
								value={formData.educationDescription}
								onChange={handleChange}
							/>
							<button className="delButton">
								<div className="delete-icon"></div>Delete
							</button>
							<hr />
							<button className="addButton">+ Education</button>
						</div>
					</Accordion>

					<Accordion title="Projects">
						<div className="accordionChildren">
							<h4>Project Title</h4>
							<input
								type="text"
								name="projectTitle"
								value={formData.projectTitle}
								placeholder="Enter Project Title"
								onChange={handleChange}
							/>
							<h4>Sub Title</h4>
							<input
								type="text"
								name="projectSubtitle"
								value={formData.projectSubtitle}
								placeholder="Enter Project Sub Title"
								onChange={handleChange}
							/>
							<h4>Description</h4>
							<textarea
								name="projectDescription"
								value={formData.projectDescription}
								placeholder="Enter Project Description"
								onChange={handleChange}
							/>
							<button className="delButton">
								<div className="delete-icon"></div>Delete
							</button>
							<hr />
							<button className="addButton">+ Projects</button>
						</div>
					</Accordion>

					<Accordion title="Skills">
						<div className="accordionChildren">
							<h4>Category Name</h4>
							<input
								type="text"
								name="skillCategory"
								value={formData.skillCategory}
								onChange={handleChange}
								placeholder="Enter Skill Category"
							/>
							<button>+ Skill</button>
							<button className="delButton">Delete</button>
							<hr />
							<button className="addButton">+ Category</button>
						</div>
					</Accordion>

					<button className="pdfButton"><div className="downloadIcon"></div>Download as PDF</button>
				</div>
			)}
		</div>
	);
}
export default Left;
