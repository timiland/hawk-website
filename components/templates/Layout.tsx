import { SbBlokData } from '@storyblok/react';
import clsx from 'clsx';
import { ReactNode } from 'react';
import ILink from '../../models/ILink';
import Footer from '../organisms/Footer/Footer';
import Header from '../organisms/Header/Header';

export interface ILayout {
  readonly children: ReactNode;
  readonly fullScreen?: boolean;
  readonly globals: SbBlokData[];
  readonly showFooter?: boolean;
  readonly audioButton?: boolean;
}

const Layout = ({
  audioButton = false,
  children,
  fullScreen = false,
  globals,
  showFooter = false,
}: ILayout) => {
  const globalComponents = globals[0]?.global as SbBlokData[];

  const headerProps = globalComponents?.find(
    (component) => component?.component === 'header'
  ) as { links: ILink[]; allowAudioLabel: string };

  const footerProps = globalComponents?.find(
    (component) => component?.component === 'footer'
  ) as { emailLabel: string; getInTouchLabel: string; createdByLabel: string };

  return (
    <div
      className={clsx(
        fullScreen && 'h-screen',
        'bg-black-night flex flex-col relative overflow-hidden min-h-screen'
      )}
    >
      <Header audioButton={audioButton} {...headerProps} />
      {children}
      {showFooter && <Footer {...footerProps} />}
    </div>
  );
};

export default Layout;
