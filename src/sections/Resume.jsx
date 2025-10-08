import { motion } from "framer-motion";
import DownloadResumeButton from "../components/DownloadResumeButton";
import { RetroGrid } from "../components/RetroGrid";

function Resume() {
	return (
		<section className="relative m-2 mt-10 py-20 w-full h-full text-white text-center rounded-3xl overflow-hidden">
			<motion.div
				className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-400 to-gray-900"
				animate={{
					backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "linear",
				}}
				style={{
					backgroundSize: "100% 200%",
				}}
			/>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="relative w-full mx-auto z-10"
			>
				<h2 className="text-4xl font-bold mb-3">Download My Resume</h2>
				<p className="text-gray-300 mb-10 text-lg">
					Interested in working with me? You can download my latest resume
					below.
				</p>
				<DownloadResumeButton />
				<RetroGrid />
			</motion.div>

		</section>
	);
}

export default Resume;
