// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Fun Toy Kingdom';
export const SITE_DESCRIPTION = 'Toy reviews, educational play ideas, gift guides, family buying advice, and hands-on recommendations to help parents choose toys children truly enjoy.';

/* Topic colours / icons, shared by the topic and category pages. */
export type TopicMeta = { icon: string; from: string; to: string; blurb: string };

export const TOPIC_META: Record<string, TopicMeta> = {
	'Baby, Toddler & Sensory Toys': {
		icon: '🍼',
		from: '#f45b9b',
		to: '#be185d',
		blurb: 'Soft, safe and sensory-rich picks for the tiniest hands.',
	},
	'Educational, STEM & Robot Toys': {
		icon: '🤖',
		from: '#0ea5e9',
		to: '#0369a1',
		blurb: 'Curious minds, coding bots and hands-on science.',
	},
	'Cars, Trucks, Trains & RC Toys': {
		icon: '🏎️',
		from: '#f97316',
		to: '#c2410c',
		blurb: 'Vroom, choo-choo and remote-control thrills.',
	},
	'Outdoor, Ride-On & Sports Toys': {
		icon: '🛴',
		from: '#22a559',
		to: '#166534',
		blurb: 'Fresh-air fun, from scooters to backyard sports.',
	},
	'Dolls, Collectibles & Characters': {
		icon: '🪆',
		from: '#a855f7',
		to: '#6d28d9',
		blurb: 'Dolls, figures and favorite characters.',
	},
	'Pretend Play, Plush & Novelty Toys': {
		icon: '🧸',
		from: '#f59e0b',
		to: '#b45309',
		blurb: 'Make-believe, cuddly plush and quirky novelties.',
	},
	'Building, DIY & Handmade Toys': {
		icon: '🧱',
		from: '#ef4444',
		to: '#b91c1c',
		blurb: 'Blocks, kits and crafty handmade creations.',
	},
	'Games & Puzzles': {
		icon: '🧩',
		from: '#6366f1',
		to: '#3730a3',
		blurb: 'Board games, brain teasers and jigsaws.',
	},
	'Toy Care, Shopping & Pet Toys': {
		icon: '🐾',
		from: '#14b8a6',
		to: '#0f766e',
		blurb: 'Cleaning, smart buying, and toys for pets too.',
	},
};

export const FALLBACK_TOPIC_META: TopicMeta = {
	icon: '🎁',
	from: '#64748b',
	to: '#334155',
	blurb: '',
};
