import { SbBlokData, storyblokEditable } from '@storyblok/react';
import clsx from 'clsx';
import Image from 'next/image';
import IAsset from '../../../types/IAsset';
import IconFeature, { IIconFeature } from '../../molecules/IconFeature/IconFeature';
import { useState, useEffect } from 'react';
import { useInView } from 'react-hook-inview';
import { AnimatePresence, motion } from 'framer-motion';

const positionClasses = [
	'left-[136px] top-[322px]',
	'left-[380px] top-[570px]',
	'right-[200px] top-[330px]',
];

interface IIconFeatureSection extends SbBlokData {
	readonly backgroundImage: IAsset;
	readonly iconFeatures: IIconFeature[];
}

export const IconFeatureSection = ({ blok }: { blok: IIconFeatureSection }) => {
	const [showFeatures, setShowFeatures] = useState(false);
	const { backgroundImage, iconFeatures } = blok;
	const [ref, inView] = useInView({ threshold: 0.5 });

	useEffect(() => {
		if (inView && !showFeatures) {
			setShowFeatures(true);
		}
	}, [inView, showFeatures]);

	return (
		<section ref={ref} className="mt-[100px] xl:px-10 2xl:px-20" {...storyblokEditable(blok)}>
			<div className="relative mx-auto h-full min-h-[790px] max-w-[1300px]">
				<Image
					alt={backgroundImage.alt}
					src={backgroundImage.filename}
					fill
					className="absolute z-0 object-cover"
				/>
				<div className="absolute right-0 top-0 h-4 w-[200px] bg-white" />
				<div className="absolute left-0 bottom-0 h-10 w-[160px] bg-white" />

				<AnimatePresence>
					{showFeatures && (
						<div className="flex flex-col items-center justify-center gap-6 text-center xl:gap-8">
							{iconFeatures.map((item: IIconFeature, index: number) => (
								<motion.div
									key={item._uid}
									className={clsx('xl:absolute', positionClasses[index])}
									initial={{
										opacity: 0,
										translateY: 30,
									}}
									animate={{ opacity: 1, translateY: 0 }}
									transition={{
										duration: 0.5,
										ease: 'easeOut',
										delay: 0.3 + index * 0.5,
									}}
								>
									<IconFeature {...item} />
								</motion.div>
							))}
						</div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default IconFeatureSection;
