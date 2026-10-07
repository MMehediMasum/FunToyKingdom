// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://funtoykingdom.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		// Headings: rounded, friendly, toy-like
		{
			provider: fontProviders.google(),
			name: 'Fredoka',
			cssVariable: '--font-heading',
			weights: [600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-rounded', 'system-ui', 'sans-serif'],
		},
		// Body text: soft, highly readable rounded sans
		{
			provider: fontProviders.google(),
			name: 'Nunito',
			cssVariable: '--font-body',
			weights: [400, 700],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});
