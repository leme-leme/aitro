<script lang="ts">
	import { t, type Lang } from '$lib/i18n.js';

	let { lang }: { lang: Lang } = $props();
	let tr = $derived(t(lang));
</script>

<svelte:head>
	<title>Contact — Aitro</title>
</svelte:head>

<section class="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
	<h1 class="text-4xl font-bold text-ink-900 mb-6">{tr.contact.title}</h1>
	<p class="text-ink-600 text-lg mb-10 max-w-xl">{tr.contact.body}</p>

	<div class="bg-ink-50 rounded-xl p-8 border border-ink-100 max-w-md">
		<div class="mb-4">
			<span class="text-sm text-ink-500 uppercase tracking-wider font-semibold">{tr.contact.email}</span>
			<a href="mailto:info@aitro.nl" class="block text-lg text-ink-900 font-medium hover:text-accent-dark transition-colors mt-1">info@aitro.nl</a>
		</div>
		<div>
			<span class="text-sm text-ink-500 uppercase tracking-wider font-semibold">Web</span>
			<a href="https://aitro.nl" class="block text-lg text-ink-900 font-medium hover:text-accent-dark transition-colors mt-1">aitro.nl</a>
		</div>
	</div>
</section>
