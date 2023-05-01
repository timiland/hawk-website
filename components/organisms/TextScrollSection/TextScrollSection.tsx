import { SbBlokData, storyblokEditable } from '@storyblok/react';
import clsx from 'clsx';
import Link from 'next/link';
import ILink from '../../../types/ILink';
import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import Icon from '../../atoms/Icon/Icon';

interface ITextScrollSection extends SbBlokData {
	readonly title: string;
	readonly paragraphText: string;
	readonly link: ILink[];
}

export const TextScrollSection = ({ blok }: { blok: ITextScrollSection }) => {
	const { title, paragraphText, link } = blok;

	const [indexLimit, setIndexLimit] = useState(0);
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['center end', '1 1.2'],
	});

	const splitParagraph = paragraphText.split('');

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		setIndexLimit(Math.floor(latest * splitParagraph.length));
	});

	return (
		<section
			ref={ref}
			className="container flex flex-col gap-5  py-[150px] xl:gap-y-10 xl:py-[300px]"
			{...storyblokEditable(blok)}
		>
			{title && <h5>{title}</h5>}
			<h2>
				{splitParagraph.map((letter, index) => (
					<span
						className={clsx(
							index > Math.floor(scrollYProgress.get() * splitParagraph.length) - 1 &&
								'text-experience'
						)}
						key={index}
					>
						{letter}
					</span>
				))}
			</h2>
			<Link href={link[0]?.url?.url} className="flex items-center gap-4">
				{link[0].title} <Icon name="right_arrow" />
			</Link>
		</section>
	);
};

export default TextScrollSection;
