import React, { useState } from "react";
import {
	ArrowBack,
	Science,
	SportsEsports,
	School,
	VolunteerActivism,
	Work,
} from "@mui/icons-material";

const App = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// Rowberry's actual portfolio categories
	const categories = [
		{
			id: "albertine-lab",
			title: "Albertine Lab",
			icon: Science,
			image:
				"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
			description: "Research experience and laboratory work",
			photos: [
				{
					id: 1,
					image:
						"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
					title: "Lab Research",
				},
				{
					id: 2,
					image:
						"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
					title: "Research Presentation",
				},
				{
					id: 3,
					image:
						"https://images.unsplash.com/photo-1581093458791-9d42e30c9a9e?w=400&h=300&fit=crop",
					title: "Lab Equipment",
				},
				{
					id: 4,
					image:
						"https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400&h=300&fit=crop",
					title: "Data Analysis",
				},
			],
		},
		{
			id: "hobbies",
			title: "Hobbies",
			icon: SportsEsports,
			image:
				"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
			description: "Personal interests and recreational activities",
			photos: [
				{
					id: 1,
					image:
						"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
					title: "Outdoor Activities",
				},
				{
					id: 2,
					image:
						"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
					title: "Sports & Recreation",
				},
				{
					id: 3,
					image:
						"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
					title: "Creative Pursuits",
				},
			],
		},
		{
			id: "university-utah",
			title: "University of Utah",
			icon: School,
			image:
				"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
			description: "Academic achievements and campus involvement",
			photos: [
				{
					id: 1,
					image:
						"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
					title: "Campus Life",
				},
				{
					id: 2,
					image:
						"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
					title: "Academic Projects",
				},
				{
					id: 3,
					image:
						"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
					title: "Student Organizations",
				},
				{
					id: 4,
					image:
						"https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
					title: "Graduation",
				},
			],
		},
		{
			id: "volunteering",
			title: "Volunteering",
			icon: VolunteerActivism,
			image:
				"https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
			description: "Community service and volunteer experiences",
			photos: [
				{
					id: 1,
					image:
						"https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
					title: "Community Service",
				},
				{
					id: 2,
					image:
						"https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
					title: "Volunteer Work",
				},
				{
					id: 3,
					image:
						"https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
					title: "Helping Others",
				},
			],
		},
		{
			id: "work",
			title: "Work",
			icon: Work,
			image:
				"https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
			description: "Professional experience and employment",
			photos: [
				{
					id: 1,
					image:
						"https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
					title: "Professional Experience",
				},
				{
					id: 2,
					image:
						"https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop",
					title: "Work Environment",
				},
				{
					id: 3,
					image:
						"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
					title: "Team Collaboration",
				},
			],
		},
	];

	const handleCategoryClick = (category) => {
		setIsTransitioning(true);
		setTimeout(() => {
			setSelectedCategory(category);
			setIsTransitioning(false);
		}, 150);
	};

	const handleBackClick = () => {
		setIsTransitioning(true);
		setTimeout(() => {
			setSelectedCategory(null);
			setIsTransitioning(false);
		}, 150);
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
					<div className="bg-white shadow-sm border-b">
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
					<div className="max-w-6xl mx-auto px-6 py-8">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{selectedCategory.photos.map((photo, index) => (
								<div
									key={photo.id}
									className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl`}
									style={{ animationDelay: `${index * 100}ms` }}
								>
									<div className="relative overflow-hidden rounded-xl bg-white shadow-md">
										<img
											src={photo.image}
											alt={photo.title}
											className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
											<h3 className="font-semibold text-lg">{photo.title}</h3>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}

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
				<div className="text-center py-16 px-6">
					<h1 className="text-5xl font-bold text-slate-900 mb-4">
						Jackson Rowberry
					</h1>
					<p className="text-xl text-slate-600 max-w-2xl mx-auto">
						Aspiring physician dedicated to compassionate care, global health,
						and medical excellence
					</p>
				</div>

				{/* Category Grid */}
				<div className="max-w-6xl mx-auto px-6 pb-16">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{categories.map((category, index) => (
							<div
								key={category.id}
								onClick={() => handleCategoryClick(category)}
								className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
									<div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
										<img
											src={category.image}
											alt={category.title}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

										{/* Icon */}
										<div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
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
		</div>
	);
};

export default App;
