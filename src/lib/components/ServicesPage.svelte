<script lang="ts">
	import { t, type Lang } from '$lib/i18n.js';

	let { lang }: { lang: Lang } = $props();
	let tr = $derived(t(lang));
</script>

<svelte:head>
	<title>{tr.services.title} — Aitro</title>
</svelte:head>

<section class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
	<h1 class="text-4xl font-bold text-navy-900 mb-4">{tr.services.title}</h1>
	<p class="text-navy-600 max-w-2xl mb-16 text-lg">{lang === 'en' ? 'A proven three-phase approach to realize AI in healthcare.' : 'Een bewezen aanpak in drie fasen om AI in de zorg te realiseren.'}</p>

	<div class="space-y-16">
		{#each ['discovery', 'development', 'operating'] as phase, i}
			{@const s = tr.services[phase]}
			<div class="grid md:grid-cols-2 gap-8 items-start">
				<div>
					<div class="flex items-center gap-3 mb-4">
						<span class="bg-health-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">{i + 1}</span>
						<span class="text-sm uppercase tracking-wider text-health-600 font-semibold">{s.subtitle}</span>
					</div>
					<h2 class="text-2xl font-bold text-navy-900 mb-3">{s.name}</h2>
					<p class="text-navy-600 leading-relaxed">{s.desc}</p>
				</div>
				<ul class="space-y-3">
					{#each s.items as item}
						<li class="flex items-start gap-3">
							<svg class="w-5 h-5 text-health-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
							<span class="text-navy-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
