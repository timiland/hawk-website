import { storyblokEditable, SbBlokData } from '@storyblok/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import AccordionItem, { IAccordionItem } from '../../molecules/AccordionItem/AccordionItem';

export interface IAccordionSection extends SbBlokData {
	readonly accordionItems: IAccordionItem[];
}

const AccordionSection = ({ blok }: { blok: IAccordionSection }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { accordionItems } = blok || {};

	return (
		<section className="pt-[100px] xl:px-10 2xl:px-20" {...storyblokEditable(blok)}>
			<div className="mx-auto grid h-full max-w-[1300px] xl:grid-cols-2 xl:gap-36">
				<AnimatePresence mode="wait">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						key={accordionItems[activeIndex].title}
						className="relative overflow-hidden xl:min-h-[780px]"
					>
						<Image
							alt={accordionItems[activeIndex].image.alt}
							src={accordionItems[activeIndex].image.filename}
							className="object-cover"
							fill
						/>
					</motion.div>
				</AnimatePresence>
				<div className="">
					{accordionItems.map((item, index) => (
						<AccordionItem
							key={item.title}
							index={index}
							isActive={activeIndex === index}
							setActiveIndex={setActiveIndex}
							blok={item}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default AccordionSection;
