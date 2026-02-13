<script lang="ts">
	import { t, localePath, type Lang } from '$lib/i18n.js';
	import LogoCarousel from './LogoCarousel.svelte';

	let { lang }: { lang: Lang } = $props();
	let tr = $derived(t(lang));
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
			<a href={localePath(lang, '/contact')} class="mt-8 inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
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
		<LogoCarousel />
	</div>
</section>

<!-- Extended story -->
<section class="bg-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
		{#each tr.extended.split('\n\n') as paragraph}
			<p class="text-ink-700 leading-relaxed mb-6 text-lg">{paragraph}</p>
		{/each}
	</div>
</section>

<!-- Services preview -->
<section class="bg-surface">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
		<h2 class="text-3xl font-bold text-ink-900 mb-12 text-center">{tr.services.title}</h2>
		<div class="grid md:grid-cols-3 gap-8">
			{#each [
				{ key: 'discovery', img: '/images/service-discovery.png' },
				{ key: 'development', img: '/images/service-development.png' },
				{ key: 'operating', img: '/images/service-operating.png' }
			] as phase}
				{@const s = tr.services[phase.key]}
				<div class="bg-white rounded-xl overflow-hidden shadow-sm border border-ink-100">
					<img src={phase.img} alt={s.name} class="w-full h-48 object-cover" />
					<div class="p-8">
						<div class="text-accent font-bold text-sm uppercase tracking-wider mb-2">{s.subtitle}</div>
						<h3 class="text-xl font-bold text-ink-900 mb-3">{s.name}</h3>
						<p class="text-ink-600 text-sm leading-relaxed">{s.desc}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="text-center mt-10">
			<a href={localePath(lang, '/diensten')} class="text-accent hover:text-accent-dark font-semibold underline underline-offset-4">
				{lang === 'en' ? 'View all services →' : 'Bekijk alle diensten →'}
			</a>
		</div>
	</div>
</section>
