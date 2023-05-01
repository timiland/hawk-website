import Head from 'next/head';
import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
	ISbStoriesParams,
} from '@storyblok/react';
import { StoryProp } from '../types';
import { GetStaticPropsContext } from 'next';

export default function Home({ story, preview }: StoryProp) {
	story = useStoryblokState(story); // enables live visual editing and preview mode

	return (
		<div>
			<Head>
				<title>Hawk</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<StoryblokComponent blok={story.content} />
		</div>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	// slug should match SB slug otherwise you have to use SB real path field
	let slug = 'home';

	// load the draft version
	let sbParams = {
		version: 'published', // default shows published
	} as ISbStoriesParams;

	if (context.preview) {
		sbParams.version = 'draft';
	}

	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
			preview: context.preview || false,
		},
		revalidate: 3600, // revalidate every hour
	};
}
