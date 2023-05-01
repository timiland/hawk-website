import { SbBlokData } from '@storyblok/react';
import ISbURL from './ISbURL';

export default interface ILink extends SbBlokData {
	readonly title: string;
	readonly url: ISbURL;
}
