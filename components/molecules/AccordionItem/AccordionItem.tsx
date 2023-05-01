import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { AnimatePresence, motion } from 'framer-motion';
import IAsset from '../../../types/IAsset';

export interface IAccordionItem extends SbBlokData {
	readonly image: IAsset;
	readonly primaryText: string;
	readonly secondaryText: string;
	readonly title: string;
}

interface Props {
	readonly blok: IAccordionItem;
	readonly index: number;
	readonly isActive: boolean;
	readonly setActiveIndex: (index: number) => void;
}

const AccordionItem = ({ isActive, index, blok, setActiveIndex }: Props) => {
	const { image, primaryText, secondaryText, title } = blok;

	return (
		<div className="border-t border-experience" {...storyblokEditable(blok)}>
			<button onClick={() => setActiveIndex(index)} className="cta-large-text">
				{title}
			</button>
			<AnimatePresence>
				{isActive && (
					<motion.div
						style={{ overflow: 'hidden' }}
						initial={{ height: 0 }}
						animate={{ height: 'auto' }}
						exit={{ height: 0 }}
					>
						<h4>{primaryText}</h4>
						<p className="cta-large-text text-profound">{secondaryText}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AccordionItem;
