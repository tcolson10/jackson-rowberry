import React, { useState, useEffect } from "react";
import {
	ArrowBack,
	Science,
	SportsEsports,
	School,
	VolunteerActivism,
	Work,
	LinkedIn,
	Email,
} from "@mui/icons-material";

const App = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const [expandedImage, setExpandedImage] = useState(null);
	const [showContactModal, setShowContactModal] = useState(false);

	// Track scroll position for animations
	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Rowberry's actual portfolio categories with ALL real images
	const categories = [
		{
			id: "albertine-lab",
			title: "Albertine Lab",
			icon: Science,
			image: "/All Images/Albertine Lab/IMG_4356.JPG",
			description: "Research experience and laboratory work",
			photos: [
				{
					id: 1,
					image: "/All Images/Albertine Lab/IMG_4356.JPG",
					title: "Lab Research",
				},
				{
					id: 2,
					image: "/All Images/Albertine Lab/IMG_4357.JPG",
					title: "Laboratory Work",
				},
				{
					id: 3,
					image: "/All Images/Albertine Lab/IMG_4366.jpg",
					title: "Research Equipment",
				},
				{
					id: 4,
					image: "/All Images/Albertine Lab/IMG_8743.jpg",
					title: "Lab Environment",
				},
				{
					id: 5,
					image: "/All Images/Albertine Lab/IMG_8759.jpg",
					title: "Scientific Process",
				},
				{
					id: 6,
					image:
						"/All Images/Albertine Lab/Screen Shot 2025-05-30 at 3.24.22 PM.png",
					title: "Research Data",
				},
				{
					id: 7,
					image:
						"/All Images/Albertine Lab/Screen Shot 2025-05-30 at 3.26.21 PM.png",
					title: "Lab Analysis",
				},
				{
					id: 8,
					image:
						"/All Images/Albertine Lab/Screen Shot 2025-05-30 at 3.31.44 PM.png",
					title: "Research Results",
				},
				{
					id: 9,
					image:
						"/All Images/Albertine Lab/Screen Shot 2025-05-30 at 3.32.07 PM.png",
					title: "Lab Documentation",
				},
			],
		},
		{
			id: "hobbies",
			title: "Hobbies",
			icon: SportsEsports,
			image: "/All Images/Hobbies/IMG_4358.JPG",
			description: "Personal interests and recreational activities",
			photos: [
				{
					id: 1,
					image: "/All Images/Hobbies/0D53BD58-6A86-4C54-8AB4-EF87DDED933E.JPG",
					title: "Personal Activity",
				},
				{
					id: 2,
					image: "/All Images/Hobbies/39FF7032-E955-4B18-B5E6-1772997D9963.JPG",
					title: "Recreation Time",
				},
				{
					id: 3,
					image:
						"/All Images/Hobbies/64995934081_F30AAACF-538F-427B-B551-7EE683211377.jpg",
					title: "Hobby Experience",
				},
				{
					id: 4,
					image:
						"/All Images/Hobbies/65878733766_F0953B7B-8B01-4EF6-A8D5-61504A02CF5F.jpg",
					title: "Personal Interest",
				},
				{
					id: 5,
					image:
						"/All Images/Hobbies/67650834500_30C4D7D8-0A85-4EA3-888E-D6CD67F23555.jpg",
					title: "Leisure Activity",
				},
				{
					id: 6,
					image: "/All Images/Hobbies/IMG_0519.JPG",
					title: "Personal Project",
				},
				{
					id: 7,
					image: "/All Images/Hobbies/IMG_1155.JPG",
					title: "Recreational Activity",
				},
				{
					id: 8,
					image: "/All Images/Hobbies/IMG_1299.jpg",
					title: "Creative Pursuit",
				},
				{
					id: 9,
					image: "/All Images/Hobbies/IMG_2439.jpg",
					title: "Personal Time",
				},
				{
					id: 10,
					image: "/All Images/Hobbies/IMG_2935.JPG",
					title: "Hobby Pursuit",
				},
				{
					id: 11,
					image: "/All Images/Hobbies/IMG_4358.JPG",
					title: "Personal Interest",
				},
				{
					id: 12,
					image: "/All Images/Hobbies/IMG_4360.JPG",
					title: "Personal Project",
				},
				{
					id: 13,
					image: "/All Images/Hobbies/IMG_4362.JPG",
					title: "Creative Activity",
				},
				{
					id: 14,
					image: "/All Images/Hobbies/IMG_4363.JPG",
					title: "Recreation",
				},
				{
					id: 15,
					image: "/All Images/Hobbies/IMG_4364.JPG",
					title: "Personal Activity",
				},
				{
					id: 16,
					image: "/All Images/Hobbies/IMG_5423.jpg",
					title: "Hobby Time",
				},
				{
					id: 17,
					image: "/All Images/Hobbies/IMG_5537.JPG",
					title: "Personal Time",
				},
				{
					id: 18,
					image: "/All Images/Hobbies/IMG_6062.JPG",
					title: "Leisure Activity",
				},
				{
					id: 19,
					image: "/All Images/Hobbies/IMG_6920.JPG",
					title: "Hobby Experience",
				},
				{
					id: 20,
					image: "/All Images/Hobbies/IMG_9520.jpg",
					title: "Personal Interest",
				},
				{
					id: 21,
					image: "/All Images/Hobbies/IMG_9532.jpg",
					title: "Recreation Activity",
				},
			],
		},
		{
			id: "university-utah",
			title: "University of Utah",
			icon: School,
			image: "/All Images/University of Utah/IMG_4359.JPG",
			description: "Academic achievements and campus involvement",
			photos: [
				{
					id: 1,
					image:
						"/All Images/University of Utah/7C6E0074-5B6D-471B-A64D-058F532929BE.JPG",
					title: "University Experience",
				},
				{
					id: 2,
					image: "/All Images/University of Utah/FullSizeRender_VSCO.JPG",
					title: "Campus Memories",
				},
				{
					id: 3,
					image: "/All Images/University of Utah/IMG_4359.JPG",
					title: "Campus Life",
				},
				{
					id: 4,
					image: "/All Images/University of Utah/IMG_4365.JPG",
					title: "Academic Experience",
				},
				{
					id: 5,
					image: "/All Images/University of Utah/IMG_4368.JPG",
					title: "University Activities",
				},
				{
					id: 6,
					image: "/All Images/University of Utah/IMG_4369.JPG",
					title: "Student Life",
				},
				{
					id: 7,
					image: "/All Images/University of Utah/IMG_4371.JPG",
					title: "Campus Events",
				},
				{
					id: 8,
					image: "/All Images/University of Utah/IMG_4372.JPG",
					title: "Academic Projects",
				},
				{
					id: 9,
					image: "/All Images/University of Utah/IMG_4373.JPG",
					title: "University Experience",
				},
				{
					id: 10,
					image: "/All Images/University of Utah/IMG_6624.jpg",
					title: "Campus Activities",
				},
				{
					id: 11,
					image: "/All Images/University of Utah/IMG_9754.JPG",
					title: "Graduation",
				},
			],
		},
		{
			id: "volunteering",
			title: "Volunteering",
			icon: VolunteerActivism,
			image: "/All Images/Volunteering/IMG_0465.jpg",
			description: "Community service and volunteer experiences",
			photos: [
				{
					id: 1,
					image: "/All Images/Volunteering/53011519095_326f5a2847_o 2.JPG",
					title: "Volunteer Experience",
				},
				{
					id: 2,
					image: "/All Images/Volunteering/53012250804_8021b0fdae_o 2.JPG",
					title: "Service Work",
				},
				{
					id: 3,
					image: "/All Images/Volunteering/53012704068_99a09bda7b_o 2.JPG",
					title: "Community Service",
				},
				{
					id: 4,
					image: "/All Images/Volunteering/53013633747_c8773cc21f_o 2.JPG",
					title: "Community Engagement",
				},
				{
					id: 5,
					image: "/All Images/Volunteering/53013728827_1a46351f9e_o 2.JPG",
					title: "Volunteer Project",
				},
				{
					id: 6,
					image: "/All Images/Volunteering/53014558283_2d792d4ecd_o 2.JPG",
					title: "Service Experience",
				},
				{
					id: 7,
					image: "/All Images/Volunteering/IMG_0465.jpg",
					title: "Community Service",
				},
				{
					id: 8,
					image: "/All Images/Volunteering/IMG_0502 2.JPG",
					title: "Volunteer Work",
				},
				{
					id: 9,
					image: "/All Images/Volunteering/IMG_0600 2.JPG",
					title: "Helping Others",
				},
				{
					id: 10,
					image: "/All Images/Volunteering/IMG_0830_2.jpg",
					title: "Community Impact",
				},
				{
					id: 11,
					image: "/All Images/Volunteering/rowberry000524-r1-020-8a 2.JPG",
					title: "Service Project",
				},
				{
					id: 12,
					image: "/All Images/Volunteering/rowberry000524-r1-042-19a 2.JPG",
					title: "Community Impact",
				},
			],
		},
		{
			id: "work",
			title: "Work",
			icon: Work,
			image: "/All Images/Work/IMG_4361.jpg",
			description: "Professional experience and employment",
			photos: [
				{
					id: 1,
					image:
						"/All Images/Work/58163351162_90FE6089-B81A-498A-8EE0-DA57D9A78793.JPG",
					title: "Workplace Experience",
				},
				{
					id: 2,
					image:
						"/All Images/Work/65411909747_C0900C03-3144-43F8-908C-DE13D76FC6EE.jpg",
					title: "Professional Development",
				},
				{
					id: 3,
					image:
						"/All Images/Work/69244181925_B6E40C36-753E-45A5-99D0-51C67C22E2C6.jpg",
					title: "Work Achievement",
				},
				{
					id: 4,
					image: "/All Images/Work/IMG_4361.jpg",
					title: "Professional Experience",
				},
				{
					id: 5,
					image: "/All Images/Work/IMG_4370.jpg",
					title: "Work Environment",
				},
				{
					id: 6,
					image: "/All Images/Work/IMG_4596.jpg",
					title: "Team Collaboration",
				},
				{
					id: 7,
					image: "/All Images/Work/IMG_9178.JPG",
					title: "Professional Development",
				},
				{
					id: 8,
					image: "/All Images/Work/Screen Shot 2025-05-30 at 3.25.57 PM.png",
					title: "Work Project",
				},
				{
					id: 9,
					image: "/All Images/Work/Screen Shot 2025-05-30 at 3.26.08 PM.png",
					title: "Professional Skills",
				},
				{
					id: 10,
					image: "/All Images/Work/Screen Shot 2025-05-30 at 3.31.30 PM.png",
					title: "Work Documentation",
				},
			],
		},
	];

	const handleCategoryClick = (category) => {
		setIsTransitioning(true);
		setTimeout(() => {
			setSelectedCategory(category);
			setIsTransitioning(false);
			// Always scroll to top when entering category
			window.scrollTo({ top: 0, behavior: "instant" });
		}, 150);
	};

	const handleBackClick = () => {
		setIsTransitioning(true);
		setExpandedImage(null);
		setTimeout(() => {
			setSelectedCategory(null);
			setIsTransitioning(false);
			// Smooth scroll to portfolio section
			setTimeout(() => {
				document.getElementById("portfolio").scrollIntoView({
					behavior: "smooth",
				});
			}, 100);
		}, 150);
	};

	const scrollToPortfolio = () => {
		document.getElementById("portfolio").scrollIntoView({
			behavior: "smooth",
		});
	};

	const openImageModal = (image) => {
		setExpandedImage(image);
		document.body.style.overflow = "hidden"; // Prevent background scrolling
		document.body.style.position = "fixed"; // Fix body position
		document.body.style.top = `-${window.scrollY}px`; // Maintain scroll position
		document.body.style.width = "100%"; // Prevent width shift
	};

	const closeImageModal = () => {
		const scrollY = document.body.style.top;
		setExpandedImage(null);
		document.body.style.overflow = "unset"; // Restore scrolling
		document.body.style.position = "static"; // Restore position
		document.body.style.top = "auto"; // Reset top
		document.body.style.width = "auto"; // Reset width
		window.scrollTo(0, parseInt(scrollY || "0") * -1); // Restore scroll position
	};

	const openContactModal = () => {
		setShowContactModal(true);
		document.body.style.overflow = "hidden"; // Prevent background scrolling
	};

	const closeContactModal = () => {
		setShowContactModal(false);
		document.body.style.overflow = "unset"; // Restore scrolling
	};

	if (selectedCategory) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
				<div
					className={`transition-all duration-500 ease-out ${
						isTransitioning
							? "opacity-0 transform scale-95"
							: "opacity-100 transform scale-100"
					}`}
				>
					{/* Header */}
					<div className="bg-white/90 backdrop-blur-sm shadow-sm border-b sticky top-0 z-10">
						<div className="max-w-6xl mx-auto px-6 py-6">
							<button
								onClick={handleBackClick}
								className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200 mb-4 group"
							>
								<ArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
								<span className="font-medium">Back to Portfolio</span>
							</button>
							<div className="flex items-center gap-4">
								<div className="p-3 bg-blue-100 rounded-xl">
									<selectedCategory.icon className="w-8 h-8 text-blue-600" />
								</div>
								<div>
									<h1 className="text-3xl font-bold text-slate-900">
										{selectedCategory.title}
									</h1>
									<p className="text-slate-600 mt-1">
										{selectedCategory.description}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Photo Gallery */}
					<div className="max-w-6xl mx-auto px-6 py-8 pb-16">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{selectedCategory.photos.map((photo, index) => (
								<div
									key={photo.id}
									className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
									onClick={() => openImageModal(photo)}
								>
									<div className="relative rounded-xl bg-white shadow-md overflow-hidden">
										<div className="overflow-hidden rounded-xl">
											<img
												src={photo.image}
												alt={photo.title}
												className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
											/>
										</div>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
										<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
											<h3 className="font-semibold text-lg">{photo.title}</h3>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Image Modal - Only in category view */}
					{expandedImage && (
						<div
							className="fixed top-0 left-0 w-full h-full bg-black z-50"
							onClick={closeImageModal}
						>
							<button
								onClick={closeImageModal}
								className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2"
							>
								<svg
									className="w-8 h-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>

							<img
								src={expandedImage.image}
								alt={expandedImage.title}
								style={{
									width: "100vw",
									height: "100vh",
									objectFit: "contain",
									position: "absolute",
									top: 0,
									left: 0,
								}}
								onClick={(e) => e.stopPropagation()}
							/>

							<div className="absolute bottom-4 left-4 right-4 text-center z-10">
								<h3 className="text-white text-xl font-semibold bg-black/50 p-2 rounded">
									{expandedImage.title}
								</h3>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
			{/* Hero Section */}
			<section className="min-h-screen relative overflow-hidden">
				{/* Animated background elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full transform rotate-12 animate-pulse"></div>
					<div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-indigo-200/20 to-transparent rounded-full transform -rotate-12 animate-pulse delay-700"></div>
				</div>

				<div className="max-w-7xl mx-auto px-6 pt-24 sm:pt-0 sm:flex sm:items-center sm:min-h-screen relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
						{/* Left side - Headshot */}
						<div
							className="flex justify-center lg:justify-end transform transition-all duration-1000 ease-out"
							style={{
								transform: `translateY(${scrollY * 0.05}px)`,
								opacity: Math.max(0, 1 - scrollY * 0.002),
							}}
						>
							<div className="relative group">
								<div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
								<div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
									<img
										src="/All Images/headshot.JPG"
										alt="Jackson Rowberry"
										className="w-full h-full object-cover object-top"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
								</div>
							</div>
						</div>

						{/* Right side - Name and info */}
						<div
							className="text-center lg:text-left space-y-6 transform transition-all duration-1000 ease-out delay-300"
							style={{
								transform: `translateX(${Math.min(0, -scrollY * 0.1)}px)`,
								opacity: Math.max(0, 1 - scrollY * 0.002),
							}}
						>
							<div className="space-y-4">
								<h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
									Jackson
									<span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
										Rowberry
									</span>
								</h1>

								<div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto lg:mx-0"></div>
							</div>

							<p className="text-xl text-slate-600 leading-relaxed max-w-lg">
								Aspiring physician dedicated to compassionate care, innovative
								research, and making a meaningful impact in global health and
								medical excellence.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<button
									onClick={scrollToPortfolio}
									className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
								>
									View Portfolio
								</button>

								<button
									onClick={openContactModal}
									className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:shadow-lg"
								>
									Get in Touch
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section id="portfolio" className="py-20 bg-white/50 backdrop-blur-sm">
				<div
					className={`transition-all duration-1000 ease-out ${
						scrollY > 300
							? "opacity-100 transform translate-y-0"
							: "opacity-0 transform translate-y-20"
					}`}
				>
					{/* Section Header */}
					<div className="text-center mb-16 px-6">
						<h2 className="text-5xl font-bold text-slate-900 mb-4">
							Portfolio
						</h2>
						<div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-6"></div>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							Explore the journey through academics, research, service, and
							personal growth that defines my path to medicine.
						</p>
					</div>

					{/* Category Grid */}
					<div className="max-w-6xl mx-auto px-6">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{categories.map((category, index) => (
								<div
									key={category.id}
									onClick={() => handleCategoryClick(category)}
									className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
								>
									<div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
										<div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
											<img
												src={category.image}
												alt={category.title}
												className="w-full h-full object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

											{/* Icon */}
											<div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
												<category.icon className="w-6 h-6 text-white" />
											</div>

											{/* Title */}
											<div className="absolute bottom-0 left-0 right-0 p-6">
												<h3 className="text-2xl font-bold text-white mb-2">
													{category.title}
												</h3>
												<p className="text-white/90 text-sm leading-relaxed">
													{category.description}
												</p>
											</div>
										</div>

										{/* Hover Effect */}
										<div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-all duration-300" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Contact Modal */}
			{showContactModal && (
				<div
					className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
					onClick={closeContactModal}
				>
					<div
						className="bg-white rounded-2xl p-8 max-w-md w-full transform transition-all duration-300 scale-100"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="text-center mb-6">
							<h3 className="text-2xl font-bold text-slate-900 mb-2">
								Get in Touch
							</h3>
							<p className="text-slate-600">
								Let's connect! Choose your preferred method:
							</p>
						</div>

						<div className="space-y-4">
							<a
								href="https://www.linkedin.com/in/jackson-rowberry-7156b41b8/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 w-full px-6 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-blue-700"
								onClick={closeContactModal}
							>
								<LinkedIn className="w-6 h-6" />
								<div className="text-left">
									<div className="font-semibold">LinkedIn</div>
									<div className="text-blue-100 text-sm">
										Connect professionally
									</div>
								</div>
							</a>

							<a
								href="mailto:jrowberry74@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 w-full px-6 py-4 bg-slate-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-slate-700"
								onClick={closeContactModal}
							>
								<Email className="w-6 h-6" />
								<div className="text-left">
									<div className="font-semibold">Email</div>
									<div className="text-slate-100 text-sm">
										jrowberry74@gmail.com
									</div>
								</div>
							</a>
						</div>

						<button
							onClick={closeContactModal}
							className="w-full mt-6 px-4 py-2 text-slate-500 hover:text-slate-700 transition-colors duration-200"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
