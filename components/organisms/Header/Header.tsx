import { SbBlokData, storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';
import { StoryBlokComponentProps } from '../../../types';
import IAsset from '../../../types/IAsset';
import ILink from '../../../types/ILink';
import Button from '../../atoms/Button/Button';

export interface IHeader extends SbBlokData {
	readonly logo: IAsset;
	readonly title: string;
	readonly cta: ILink[];
}

export const Header = ({ blok }: { blok: IHeader }) => {
	const { logo, cta } = blok;
	return (
		<header
			className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl"
			{...storyblokEditable(blok)}
		>
			<nav className="flex w-full items-center justify-between px-10 py-7">
				<Link href="/" className="relative">
					<Image
						priority
						alt={`${logo?.alt}`}
						src={logo.filename}
						width={100}
						height={25}
					/>
				</Link>
				<Button secondary link={cta[0]} />
			</nav>
		</header>
	);
};

export default Header;
