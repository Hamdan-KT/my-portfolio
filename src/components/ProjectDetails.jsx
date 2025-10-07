import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const ProjectDetails = ({
	title,
	description,
	subDescription = [],
	image,
	tags = [],
	href,
	closeModal,
}) => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
			<motion.div
				className="relative flex flex-col h-[95vh] w-full max-w-2xl border border-white/10 shadow-lg rounded-2xl bg-gradient-to-b from-midnight to-navy"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
			>
				{/* Close Button */}
				<button
					onClick={closeModal}
					className="absolute top-5 right-5 p-2 rounded-lg bg-black/30 hover:bg-black/50 transition"
				>
					<img src="assets/close.svg" alt="close" className="w-5 h-5" />
				</button>

				{/* Header with Image */}
				<div className="flex-shrink-0">
					<img
						src={image}
						alt={title}
						className="w-full aspect-video object-cover rounded-t-2xl"
					/>
					<h5 className="text-2xl font-bold text-white p-4">{title}</h5>
				</div>

				{/* Scrollable Description Section */}
				<div className="overflow-y-auto px-5 pb-12 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
					<p className="mb-3 text-neutral-300 leading-relaxed">{description}</p>
					{subDescription.map((subDesc, index) => (
						<p key={index} className="mb-3 text-neutral-400 leading-relaxed">
							{subDesc}
						</p>
					))}
				</div>

				{/* Footer (Fixed) */}
				<div className="absolute bottom-0 left-0 w-full flex items-center justify-between px-5 py-2 bg-gradient-to-r from-midnight/90 to-navy/90 border-t border-white/10 rounded-b-2xl">
					<div className="flex gap-3 overflow-x-auto items-center">
						{tags.map((tag) => (
							<span
								key={tag.id}
								className={twMerge(
									tag?.bgColor
										? "p-1 rounded-lg bg-white flex items-center justify-center"
										: "",
									"hover-animation"
								)}
							>
								<img
									src={tag.path}
									alt={tag.name}
									className="size-5 md:size-7 rounded-md"
								/>
							</span>
						))}
					</div>

					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs md:text-sm hover-animation font-medium text-white flex items-center gap-1 hover:underline"
					>
						View Project
						<img src="assets/arrow-up.svg" className="w-4 h-4" alt="arrow" />
					</a>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectDetails;
