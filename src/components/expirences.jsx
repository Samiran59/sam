import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import resumePDF from "@/assets/pdf/Samiran malakar CV.pdf";

const experiences = [
	{
		title: "Senior Full Stack Developer",
		company: "TechCorp Inc.",
		location: "San Francisco, CA",
		period: "2022 - Present",
		description:
			"Lead development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
		achievements: [
			"Improved application performance by 40%",
			"Led team of 5 developers",
			"Implemented CI/CD pipeline reducing deployment time by 60%",
		],
	},
	{
		title: "Full Stack Developer",
		company: "StartupXYZ",
		location: "New York, NY",
		period: "2020 - 2022",
		description:
			"Developed and maintained multiple client projects using React, Node.js, and cloud technologies. Collaborated closely with design team to implement pixel-perfect UIs.",
		achievements: [
			"Built 10+ production applications",
			"Reduced bug reports by 50%",
			"Implemented automated testing strategies",
		],
	},
	{
		title: "Frontend Developer",
		company: "Digital Agency Co.",
		location: "Austin, TX",
		period: "2019 - 2020",
		description:
			"Created responsive web applications and landing pages for various clients. Specialized in modern JavaScript frameworks and performance optimization.",
		achievements: [
			"Delivered 25+ client projects",
			"Achieved 95+ PageSpeed scores",
			"Established component library standards",
		],
	},
];

const education = [
	{
		degree: "Bachelor of Science in Computer Science",
		school: "University of Technology",
		period: "2015 - 2019",
		gpa: "3.8/4.0",
	},
];

const certifications = [
	"AWS Certified Solutions Architect",
	"Google Cloud Professional Developer",
	"MongoDB Certified Developer",
];

const Experiences = () => {
	return (
		<section id="resume" className="relative bg-black-500 section-padding">
			<div className="max-w-6xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-mono text-gray-900 dark:text-white mb-4 ">
						Experience & Education
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
						My professional journey and educational background in software
						development.
					</p>
					<a
						href={resumePDF}
						download="Samiran-malakar-CV.pdf"
						className="inline-block"
					>
						<Button className="bg-gray-600 hover:bg-blue-700 text-white">
							<Download size={16} className="mr-2" />
							Download Resume
						</Button>
					</a>
				</motion.div>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Experience */}
					<div className="lg:col-span-2 h-full">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
								<Calendar className="mr-3 text-white-600" size={24} />
								Professional Experience
							</h3>
							<div className="space-y-8">
								{experiences.map((exp, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<Card className="bg-bg-card p-4 rounded-md border-4 border-double border-gray-600 shadow-lg text-gray-300 text-sm font-mono">
											<CardHeader>
												<CardTitle className="text-xl text-gray-900 dark:text-white">
													{exp.title}
												</CardTitle>
												<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 dark:text-gray-300">
													<div className="flex items-center mb-2 sm:mb-0">
														<span className="font-medium">{exp.company}</span>
													</div>
													<div className="flex items-center text-sm">
														<MapPin size={14} className="mr-1" />
														{exp.location}
														<span className="mx-2">•</span>
														{exp.period}
													</div>
												</div>
											</CardHeader>
											<CardContent>
												<p className="text-gray-600 dark:text-gray-300 mb-4">
													{exp.description}
												</p>
												<ul className="space-y-2">
													{exp.achievements.map((achievement, i) => (
														<li
															key={i}
															className="flex items-start text-gray-600 dark:text-gray-300"
														>
															<span className="text-blue-600 mr-2">•</span>
															{achievement}
														</li>
													))}
												</ul>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>

					{/* Education & Certifications */}
					<div className="space-y-8 self-start">
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
								<Award className="mr-3 text-white-600" size={24} />
								Education
							</h3>
							{education.map((edu, index) => (
								<Card key={index} className="bg-bg-card p-4 rounded-md border-4 border-double border-gray-600 shadow-lg text-gray-300 text-sm font-mono">
									<CardContent className="p-6">
										<h4 className="font-bold text-gray-900 dark:text-white mb-2">
											{edu.degree}
										</h4>
										<p className="text-gray-600 dark:text-gray-300 mb-2">
											{edu.school}
										</p>
										<div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
											<span>{edu.period}</span>
											<span>GPA: {edu.gpa}</span>
										</div>
									</CardContent>
								</Card>
							))}
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
								Certifications
							</h3>
							<Card className="bg-bg-card p-4 rounded-md border-4 border-double border-gray-600 shadow-lg text-gray-300 text-sm font-mono">
								<CardContent className="p-6">
									<ul className="space-y-3">
										{certifications.map((cert, index) => (
											<li
												key={index}
												className="flex items-center text-gray-600 dark:text-gray-300"
											>
												<Award size={16} className="text-red-400 mr-3" />
												{cert}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experiences;