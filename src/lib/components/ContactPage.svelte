<script lang="ts">
	import { t, type Lang } from '$lib/i18n.js';

	let { lang }: { lang: Lang } = $props();
	let tr = $derived(t(lang));
</script>

<svelte:head>
	<title>Contact — Aitro</title>
</svelte:head>

<section class="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
	<h1 class="text-5xl sm:text-6xl font-bold text-ink-900 mb-8">{tr.contact.title}</h1>
	<p class="text-ink-600 text-xl sm:text-2xl mb-12 max-w-xl leading-relaxed">{tr.contact.body}</p>

	<div class="bg-ink-50 rounded-xl p-10 border border-ink-100 max-w-md">
		<div class="mb-6">
			<span class="text-base text-ink-500 uppercase tracking-wider font-semibold">{tr.contact.email}</span>
			<a href="mailto:info@aitro.nl" class="block text-2xl text-ink-900 font-medium hover:text-accent-dark transition-colors mt-2">info@aitro.nl</a>
		</div>
		<div>
			<span class="text-base text-ink-500 uppercase tracking-wider font-semibold">Web</span>
			<a href="https://aitro.nl" class="block text-2xl text-ink-900 font-medium hover:text-accent-dark transition-colors mt-2">aitro.nl</a>
		</div>
	</div>
</section>
