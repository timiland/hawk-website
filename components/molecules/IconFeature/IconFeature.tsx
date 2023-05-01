import { SbBlokData } from '@storyblok/react';
import { StoryBlokComponentProps } from '../../../types';
import Icon from '../../atoms/Icon/Icon';

export interface IIconFeature extends SbBlokData {
	readonly icon: string;
	readonly primaryText: string;
	readonly secondaryText: string;
}

const IconFeature = ({ icon, primaryText, secondaryText }: IIconFeature) => (
	<div className="flex min-w-[250px] max-w-[250px] items-center justify-start gap-[18px] overflow-hidden text-ellipsis whitespace-nowrap rounded-[4px] border border-white bg-black/10 p-[18px] text-white backdrop-blur-xs">
		<div className="rounded-[4px] border border-white p-2">
			<Icon name={icon} size="2rem" />
		</div>
		<div className="flex w-full flex-col items-start">
			<div>{primaryText}</div>
			<div className="text-[13px]">{secondaryText}</div>
		</div>
	</div>
);

export default IconFeature;
