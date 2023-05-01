import { storyblokEditable, SbBlokData } from '@storyblok/react';
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
		<section className="py-[100px] xl:px-10 2xl:px-20" {...storyblokEditable(blok)}>
			<div className="mx-auto grid h-full max-w-[1300px] xl:grid-cols-2">
				<div className="">{/* <Image/> */}</div>
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
