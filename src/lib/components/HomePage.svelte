<script lang="ts">
	import { t, localePath, type Lang } from '$lib/i18n.js';

	let { lang }: { lang: Lang } = $props();
	let tr = $derived(t(lang));
</script>

<svelte:head>
	<title>Aitro — {tr.hero.title}</title>
	<meta name="description" content={tr.hero.subtitle} />
</svelte:head>

<!-- Hero -->
<section class="bg-navy-950 text-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
		<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
			{tr.hero.title}
		</h1>
		<p class="mt-6 text-lg sm:text-xl text-navy-200 max-w-2xl">
			{tr.hero.subtitle}
		</p>
		<p class="mt-4 text-navy-300 max-w-2xl">
			{tr.hero.body}
		</p>
		<a href={localePath(lang, '/contact')} class="mt-8 inline-block bg-health-500 hover:bg-health-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
			{tr.hero.cta}
		</a>
	</div>
</section>

<!-- Stats bar -->
<section class="bg-navy-900 border-t border-navy-800">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
		<div class="text-health-400 font-semibold">{tr.stats.used}</div>
		<div class="text-navy-300">{tr.stats.sectors}</div>
		<div class="text-navy-300">{tr.stats.approach}</div>
	</div>
</section>

<!-- Extended story -->
<section class="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
	{#each tr.extended.split('\n\n') as paragraph}
		<p class="text-navy-700 leading-relaxed mb-6 text-lg">{paragraph}</p>
	{/each}
</section>

<!-- Services preview -->
<section class="bg-navy-50">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
		<h2 class="text-3xl font-bold text-navy-900 mb-12 text-center">{tr.services.title}</h2>
		<div class="grid md:grid-cols-3 gap-8">
			{#each ['discovery', 'development', 'operating'] as phase}
				{@const s = tr.services[phase]}
				<div class="bg-white rounded-xl p-8 shadow-sm border border-navy-100">
					<div class="text-health-500 font-bold text-sm uppercase tracking-wider mb-2">{s.subtitle}</div>
					<h3 class="text-xl font-bold text-navy-900 mb-3">{s.name}</h3>
					<p class="text-navy-600 text-sm leading-relaxed">{s.desc}</p>
				</div>
			{/each}
		</div>
		<div class="text-center mt-10">
			<a href={localePath(lang, '/diensten')} class="text-health-600 hover:text-health-700 font-semibold underline underline-offset-4">
				{lang === 'en' ? 'View all services →' : 'Bekijk alle diensten →'}
			</a>
		</div>
	</div>
</section>
