<script lang="ts">
	import { t, type Lang } from '$lib/i18n.js';

	let { lang }: { lang: Lang } = $props();
	let tr = $derived(t(lang));
</script>

<svelte:head>
	<title>Cases — Aitro</title>
</svelte:head>

<section class="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
	<h1 class="text-5xl sm:text-6xl font-bold text-ink-900 mb-8">{tr.cases.title}</h1>
	<p class="text-ink-500 text-xl sm:text-2xl">{tr.cases.coming}</p>
</section>
