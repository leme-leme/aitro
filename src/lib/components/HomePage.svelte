<script lang="ts">
	import { t, localePath, type Lang } from '$lib/i18n.js';
	import LogoCarousel from './LogoCarousel.svelte';

	let { lang }: { lang: Lang } = $props();
	let tr = $derived(t(lang));

	const hasCases = false; // flip to true when case studies exist

	const services = [
		{ key: 'discovery' as const, img: '/images/service-discovery.png' },
		{ key: 'development' as const, img: '/images/service-development.png' },
		{ key: 'operating' as const, img: '/images/service-operating.png' },
	];
</script>

<svelte:head>
	<title>Aitro — {tr.hero.title}</title>
	<meta name="description" content={tr.hero.subtitle} />
</svelte:head>

<!-- Hero -->
<section class="bg-surface">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32 flex flex-col lg:flex-row items-center gap-12">
		<div class="flex-1">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-ink-900">
				{tr.hero.title}
			</h1>
			<p class="mt-6 text-lg sm:text-xl text-ink-600 max-w-2xl">
				{tr.hero.subtitle}
			</p>
			<p class="mt-4 text-ink-500 max-w-2xl">
				{tr.hero.body}
			</p>
			<a href={localePath(lang, '/contact')} class="mt-8 inline-block bg-ink-900 hover:bg-ink-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
				{tr.hero.cta}
			</a>
		</div>
		<div class="flex-shrink-0">
			<img src="/images/hero.png" alt="AI in healthcare" class="w-64 sm:w-80 lg:w-96 rounded-2xl" />
		</div>
	</div>
</section>

<!-- Stats bar -->
<section class="bg-ink-900">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
		<div class="text-accent-light font-semibold">{tr.stats.used}</div>
		<div class="text-ink-300">{tr.stats.sectors}</div>
		<div class="text-ink-300">{tr.stats.approach}</div>
	</div>
</section>

<!-- Logo carousel -->
<section class="bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6">
		<LogoCarousel {lang} {hasCases} />
	</div>
</section>

<!-- Extended story -->
<section class="bg-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
		{#each tr.extended.split('\n\n') as paragraph, i}
			{#if i === 0}
				<h3 class="text-2xl sm:text-3xl font-bold text-ink-900 leading-snug mb-8">{paragraph}</h3>
			{:else}
				<p class="text-ink-700 leading-relaxed mb-6 text-lg">{paragraph}</p>
			{/if}
		{/each}
	</div>
</section>

<!-- Diensten — staggered with parallax images -->
<section class="bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
		<h2 class="text-4xl sm:text-5xl font-bold text-ink-900 mb-16">{tr.services.title}</h2>

		{#each services as phase, i}
			{@const s = tr.services[phase.key]}
			<div class="border-t border-ink-200/50 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
				<!-- Text -->
				<div class="order-2 md:order-{i % 2 === 0 ? 1 : 2}">
					<h3 class="text-2xl sm:text-3xl font-medium text-ink-900 mb-3">{s.name}</h3>
					<p class="text-ink-500 text-lg mb-6 max-w-xl">{s.desc}</p>
					<div class="space-y-1">
						<p class="text-sm font-semibold text-ink-900 mb-2">{lang === 'en' ? 'Services:' : 'Diensten:'}</p>
						{#each s.items as item}
							<p class="text-ink-600 text-sm">{item}</p>
						{/each}
					</div>
				</div>
				<!-- Parallax image -->
				<div
					class="order-1 md:order-{i % 2 === 0 ? 2 : 1} relative w-full md:w-[340px] h-[300px] sm:h-[360px] rounded-lg overflow-hidden"
				>
					<!-- Black depth layer -->
					<div class="absolute inset-0 bg-ink-900 rounded-lg"></div>
					<!-- Surface depth layer -->
					<div class="absolute inset-0 bg-surface rounded-lg"
						style="clip-path: polygon({i % 2 === 0 ? '0 0, 100% 15%, 100% 100%, 0 85%' : '0 15%, 100% 0, 100% 85%, 0 100%'});"
					></div>
					<!-- Image with parallax -->
					<img
						src={phase.img}
						alt={s.name}
						class="absolute inset-0 w-full h-full object-cover rounded-lg parallax-img"
						style="transform: translateY(0px);"
					/>
				</div>
			</div>
		{/each}

		<div class="text-center mt-6">
			<a href={localePath(lang, '/diensten')} class="text-accent hover:text-accent-dark font-semibold underline underline-offset-4">
				{lang === 'en' ? 'View all services →' : 'Bekijk alle diensten →'}
			</a>
		</div>
	</div>
</section>

<style>
	.parallax-img {
		will-change: transform;
	}

	@media (prefers-reduced-motion: no-preference) {
		.parallax-img {
			transition: transform 0.1s linear;
		}
	}
</style>

<svelte:window on:scroll={() => {
	if (typeof window === 'undefined') return;
	const imgs = document.querySelectorAll('.parallax-img');
	imgs.forEach((img) => {
		const rect = img.getBoundingClientRect();
		const offset = (rect.top - window.innerHeight / 2) * 0.08;
		(img as HTMLElement).style.transform = `translateY(${offset}px)`;
	});
}} />
