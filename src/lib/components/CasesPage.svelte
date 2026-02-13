<script lang="ts">
	import { t, type Lang } from '$lib/i18n.js';

	let { lang }: { lang: Lang } = $props();
	let tr = $derived(t(lang));
</script>

<svelte:head>
	<title>Cases — Aitro</title>
</svelte:head>

<section class="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
	<h1 class="text-4xl font-bold text-navy-900 mb-6">{tr.cases.title}</h1>
	<p class="text-navy-500 text-lg">{tr.cases.coming}</p>
</section>
