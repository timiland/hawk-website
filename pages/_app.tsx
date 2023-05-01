import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Header from '../components/organisms/Header/Header';
import localFont from '@next/font/local';
import HeroSection from '../components/organisms/HeroSection/HeroSection';
import IconFeatureSection from '../components/organisms/IconFeatureSection/IconFeatureSection';
import TextScrollSection from '../components/organisms/TextScrollSection/TextScrollSection';
import { Page } from '../components/Page';

const archia = localFont({
	src: [
		{
			path: '../public/fonts/archia/Archia-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
	],
	variable: '--font-archia',
});

const bolton = localFont({
	src: [
		{
			path: '../public/fonts/f37bolton/F37Bolton-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-bolton',
});

const components = {
	header: Header,
	heroSection: HeroSection,
	iconFeatureSection: IconFeatureSection,
	page: Page,
	textScrollSection: TextScrollSection,
};

storyblokInit({
	accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
	use: [apiPlugin],
	components,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${archia.variable} ${bolton.variable} font-bolton text-black`}>
			<Component {...pageProps} />
		</main>
	);
}
