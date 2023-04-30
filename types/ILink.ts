import { SbBlokData } from '@storyblok/react';
import TargetEnum from './enums/TargetEnum';

export default interface ILink extends SbBlokData {
  readonly url: string;
  readonly title: string;
  readonly target?: TargetEnum;
}
