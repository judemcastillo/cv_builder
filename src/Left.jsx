import { useState } from "react";
import Accordion from "./components/Accordion";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Left({ formData, setFormData, previewRef }) {
	const [started, setStarted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleDownloadPDF = async () => {
		const input = previewRef.current;
		if (!input) return;

		const canvas = await html2canvas(input, {
			scale: 2,
			useCORS: true,
			windowWidth: input.scrollWidth, // ensure full width
		});

		const imgData = canvas.toDataURL("image/png");
		const pdf = new jsPDF("p", "mm", "a4");
		const pageHeight = pdf.internal.pageSize.getHeight();
		const pageWidth = pdf.internal.pageSize.getWidth();

		const imgWidth = pageWidth;
		const imgHeight = (canvas.height * imgWidth) / canvas.width;

		let y = 0;
		while (y < imgHeight) {
			const pageCanvas = document.createElement("canvas");
			const pageContext = pageCanvas.getContext("2d");

			const pageHeightPx = (canvas.width * pageHeight) / pageWidth;
			pageCanvas.width = canvas.width;
			pageCanvas.height = pageHeightPx;

			pageContext.drawImage(
				canvas,
				0,
				y * (canvas.height / imgHeight),
				canvas.width,
				pageHeightPx,
				0,
				0,
				canvas.width,
				pageHeightPx
			);

			const pageImg = pageCanvas.toDataURL("image/png");
			if (y !== 0) pdf.addPage();
			pdf.addImage(pageImg, "PNG", 0, 0, pageWidth, pageHeight);

			y += pageHeight;
		}

		pdf.save("cv.pdf");
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
					<Experience formData={formData} setFormData={setFormData} />

					<Education formData={formData} setFormData={setFormData} />

					<Projects formData={formData} setFormData={setFormData} />

					<Skills formData={formData} setFormData={setFormData} />

					<button className="pdfButton" onClick={handleDownloadPDF}>
						<div className="downloadIcon"></div>Download as PDF
					</button>
				</div>
			)}
		</div>
	);
}
export default Left;
