<script lang="ts">
	import { localePath, type Lang } from '$lib/i18n.js';

	let { lang, hasCases = false }: { lang: Lang; hasCases?: boolean } = $props();

	const logos = [
		{ src: '/images/logos/logo-1.png', alt: 'Client logo 1' },
		{ src: '/images/logos/logo-2.svg', alt: 'Client logo 2' },
		{ src: '/images/logos/logo-3.png', alt: 'Client logo 3' },
		{ src: '/images/logos/logo-4.png', alt: 'Client logo 4' },
		{ src: '/images/logos/logo-5.png', alt: 'Client logo 5' },
	];
</script>

<div class="overflow-x-auto scrollbar-hide py-12 -mx-4 px-4 snap-x snap-mandatory touch-pan-x">
	<div class="flex gap-3 w-max">
		{#each logos as logo}
			{#if hasCases}
				<a href={localePath(lang, '/cases')} class="flex-shrink-0 w-[280px] h-[150px] bg-surface-warm rounded-md flex items-center justify-center px-6 snap-start hover:bg-ink-100 transition-colors">
					<img src={logo.src} alt={logo.alt} class="max-h-[60px] max-w-[160px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
				</a>
			{:else}
				<div class="flex-shrink-0 w-[280px] h-[150px] bg-surface-warm rounded-md flex items-center justify-center px-6 snap-start">
					<img src={logo.src} alt={logo.alt} class="max-h-[60px] max-w-[160px] object-contain grayscale opacity-60" />
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
