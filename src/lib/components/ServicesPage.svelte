<script lang="ts">
	import { t, type Lang } from '$lib/i18n.js';

	let { lang }: { lang: Lang } = $props();
	let tr = $derived(t(lang));
</script>

<svelte:head>
	<title>{tr.services.title} — Aitro</title>
</svelte:head>

<!-- Diensten -->
<section class="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
	<h1 class="text-5xl sm:text-6xl font-bold text-ink-900 mb-6">{tr.services.title}</h1>
	<p class="text-ink-500 max-w-3xl mb-20 text-2xl sm:text-3xl leading-snug">{lang === 'en' ? 'A proven three-phase approach to realize AI in healthcare.' : 'Een bewezen aanpak in drie fasen om AI in de zorg te realiseren.'}</p>

	<div class="space-y-20">
		{#each ['discovery', 'development', 'operating'] as phase, i}
			{@const s = tr.services[phase]}
			<div class="grid md:grid-cols-2 gap-10 items-start border-t border-ink-200/50 pt-12">
				<div>
					<div class="flex items-center gap-3 mb-5">
						<span class="bg-ink-900 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">{i + 1}</span>
						<span class="text-base uppercase tracking-wider text-ink-500 font-semibold">{s.subtitle}</span>
					</div>
					<h2 class="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">{s.name}</h2>
					<p class="text-ink-600 leading-relaxed text-xl sm:text-2xl">{s.desc}</p>
				</div>
				<ul class="space-y-4">
					{#each s.items as item}
						<li class="flex items-start gap-3">
							<svg class="w-6 h-6 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
							<span class="text-ink-700 text-lg sm:text-xl">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<!-- Training -->
<section id="training" class="bg-surface scroll-mt-20">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
		<h2 class="text-5xl sm:text-6xl font-bold text-ink-900 mb-20">Training</h2>

		<div class="grid md:grid-cols-2 gap-12">
			{#each ['dev', 'healthcare'] as type}
				{@const tr_t = tr.training[type]}
				<div class="bg-white rounded-xl p-10 border border-ink-100">
					<h3 class="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">{tr_t.name}</h3>
					<p class="text-ink-600 mb-8 leading-relaxed text-lg sm:text-xl">{tr_t.desc}</p>
					<ul class="space-y-4">
						{#each tr_t.items as item}
							<li class="flex items-start gap-3">
								<svg class="w-6 h-6 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
								<span class="text-ink-700 text-base sm:text-lg">{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>
