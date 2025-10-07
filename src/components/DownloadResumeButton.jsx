import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DownloadResumeButton = () => {
	const [downloaded, setDownloaded] = useState(false);
	const resumepath = "assets/docs/hamdan-resume.pdf";

	const copyToClipboard = () => {
		setDownloaded(true);
		setTimeout(() => setDownloaded(false), 2000);
	};

	return (
		<a href={resumepath} download>
			<motion.button
				onClick={copyToClipboard}
				whileHover={{ y: -4 }}
				whileTap={{ scale: 1.05 }}
				className="
          relative w-[12rem] px-1 py-4 text-sm font-medium rounded-full
          overflow-hidden cursor-pointer 
          text-neutral-900 dark:text-white
          shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_25px_rgba(255,255,255,0.1)]
          transition-all duration-300
        "
			>
				<motion.div
					className="
            absolute inset-0 
            bg-gradient-to-r from-sky-400 via-fuchsia-500 to-amber-400 
            dark:from-indigo-500 dark:via-purple-600 dark:to-pink-500
            rounded-full
          "
					animate={{
						backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						backgroundSize: "200% 200%",
						zIndex: 0,
					}}
				/>

				<div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-[1px] z-10" />

				<div className="relative z-20">
					<AnimatePresence mode="wait">
						{downloaded ? (
							<motion.p
								key="copied"
								className="flex items-center justify-center gap-2"
								initial={{ opacity: 0, y: -8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}
								transition={{ duration: 0.15, ease: "easeInOut" }}
							>
								<img
									src="assets/downloaded.svg"
									className="w-5"
									alt="downloaded"
								/>
								Downloaded
							</motion.p>
						) : (
							<motion.p
								key="copy"
								className="flex items-center justify-center gap-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.15 }}
							>
								<img
									src="assets/download.png"
									className="w-5"
									alt="download icon"
								/>
								Download
							</motion.p>
						)}
					</AnimatePresence>
				</div>
			</motion.button>
		</a>
	);
};

export default DownloadResumeButton;
