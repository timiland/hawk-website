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
	readonly variant: 'variant_one' | 'variant_two';
}

export const HeroSection = ({ blok }: { blok: IHeroSection }) => {
	const { title, text, variant, backgroundImage, textColour, cta } = blok;

	console.log(variant);
	return (
		<section className="relative mt-[100px]" {...storyblokEditable(blok)}>
			<div
				className={clsx(
					variant === 'variant_one' ? 'min-h-[325px]' : 'min-h-[500px] xl:min-h-[825px]',
					'relative overflow-hidden'
				)}
			>
				<Image
					alt={backgroundImage.alt}
					src={backgroundImage.filename}
					fill
					className="object-cover"
				/>
			</div>
			<div className="container absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center xl:gap-8">
				<h1 className={clsx(textColour === 'white' ? 'text-white' : 'text-black')}>
					{title}
				</h1>
				{text && <p>{text}</p>}
				<Button link={cta[0]} />
			</div>
			<div className="absolute right-0 top-0 hidden h-8 w-[220px] bg-white xl:block" />
			<div className="absolute left-0 bottom-0 hidden h-8 w-[320px] bg-white xl:block" />
			<div className="absolute left-0 top-0 hidden h-28 w-28 bg-white xl:block" />
		</section>
	);
};

export default HeroSection;
