import { storyblokEditable, StoryblokComponent, SbBlokData } from '@storyblok/react';
import { StoryBlokComponentProps } from '../types';

export const Page = ({ blok }: StoryBlokComponentProps) => {
	return (
		<div className="relative" {...storyblokEditable(blok)}>
			{blok.body?.map((nestedBlok: SbBlokData) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	);
};
