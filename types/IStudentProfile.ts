import { ISbStoryData } from '@storyblok/react';
import DisciplineEnum from './enums/DisciplineEnum';
import IAsset from './IAsset';
import ISbURL from './ISbURL';

export default interface IStudentProfile extends ISbStoryData {
  readonly discipline: DisciplineEnum;
  readonly initials: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly video: IAsset;
  readonly images: IAsset[];
  readonly component: string;
  readonly podcastAudio: IAsset;
  readonly profilePicture: IAsset;
  readonly portfolioWebsiteLink: ISbURL;
  readonly slug: string;
  readonly bio: string;
  readonly linkedIn: ISbURL;
  readonly instagram: ISbURL;
  readonly mobile: string;
  readonly email: string;
  readonly _uid: string;
}
