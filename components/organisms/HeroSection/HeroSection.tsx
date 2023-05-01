import { SbBlokData, storyblokEditable } from '@storyblok/react';
import clsx from 'clsx';
import Image from 'next/image';
import IAsset from '../../../types/IAsset';
import ILink from '../../../types/ILink';
import Button from '../../atoms/Button/Button';

export interface IHeroSection extends SbBlokData {
	readonly logo: IAsset;
	readonly title: string;
	readonly text: string;
	readonly cta: ILink[];
	readonly textColour: 'black' | 'white';
	readonly backgroundImage: IAsset;
}

export const HeroSection = ({ blok }: { blok: IHeroSection }) => {
	const { title, text, backgroundImage, textColour, cta } = blok;
	return (
		<section className="relative py-[100px]" {...storyblokEditable(blok)}>
			<div className="unset-img">
				<Image
					alt={backgroundImage.alt}
					src={backgroundImage.filename}
					fill
					className="custom-img"
				/>
			</div>
			<div className="container absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center xl:gap-8">
				<h1 className={clsx(textColour === 'white' ? 'text-white' : 'text-black')}>
					{title}
				</h1>
				{text && <p>{text}</p>}
				<Button link={cta[0]} />
			</div>
		</section>
	);
};

export default HeroSection;
