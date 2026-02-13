<script lang="ts">
	import { t, type Lang } from '$lib/i18n.js';

	let { lang }: { lang: Lang } = $props();
	let tr = $derived(t(lang));
</script>

<svelte:head>
	<title>Training — Aitro</title>
</svelte:head>

<section class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
	<h1 class="text-4xl font-bold text-navy-900 mb-16">Training</h1>

	<div class="grid md:grid-cols-2 gap-12">
		{#each ['dev', 'healthcare'] as type}
			{@const tr_t = tr.training[type]}
			<div class="bg-navy-50 rounded-xl p-8 border border-navy-100">
				<h2 class="text-2xl font-bold text-navy-900 mb-3">{tr_t.name}</h2>
				<p class="text-navy-600 mb-6 leading-relaxed">{tr_t.desc}</p>
				<ul class="space-y-3">
					{#each tr_t.items as item}
						<li class="flex items-start gap-3">
							<svg class="w-5 h-5 text-health-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
							<span class="text-navy-700 text-sm">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
