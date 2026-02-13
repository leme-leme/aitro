<script>
	import '../app.css';
	import { t, switchLangPath } from '$lib/i18n.js';
	import { page } from '$app/state';

	let { children } = $props();

	let lang = $derived(page.url.pathname.startsWith('/en') ? 'en' : 'nl');
	let tr = $derived(t(lang));
	let prefix = $derived(lang === 'en' ? '/en' : '');
	let otherLang = $derived(lang === 'en' ? 'nl' : 'en');
	let switchPath = $derived(switchLangPath(page.url.pathname, otherLang));

	let mobileOpen = $state(false);
	const hasCases = false; // flip to true when case studies are published
</script>

<div class="min-h-screen flex flex-col bg-white text-ink-900">
	<header class="border-b border-ink-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
		<nav class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
			<a href="{prefix}/" class="text-xl font-bold tracking-tight text-ink-900">
				aitro<span class="text-accent">.</span>
			</a>

			<!-- Desktop nav -->
			<ul class="hidden md:flex items-center gap-8 text-sm font-medium">
				<li><a href="{prefix}/aanpak" class="text-ink-600 hover:text-ink-900 transition-colors">{lang === 'en' ? 'Approach' : 'Aanpak'}</a></li>
				<li><a href="{prefix}/diensten" class="text-ink-600 hover:text-ink-900 transition-colors">{lang === 'en' ? 'Services' : 'Diensten'}</a></li>
				<li><a href="{prefix}/training" class="text-ink-600 hover:text-ink-900 transition-colors">Training</a></li>
				{#if hasCases}<li><a href="{prefix}/cases" class="text-ink-600 hover:text-ink-900 transition-colors">Cases</a></li>{/if}
				<li><a href="{prefix}/contact" class="text-ink-600 hover:text-ink-900 transition-colors">Contact</a></li>
				<li>
					<a href={switchPath} class="text-xs uppercase tracking-wider px-2 py-1 border border-ink-200 rounded hover:bg-ink-50 transition-colors">
						{otherLang.toUpperCase()}
					</a>
				</li>
			</ul>

			<!-- Mobile toggle -->
			<button class="md:hidden text-ink-700" onclick={() => mobileOpen = !mobileOpen} aria-label="Menu">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if mobileOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</nav>

		<!-- Mobile nav -->
		{#if mobileOpen}
			<div class="md:hidden border-t border-ink-100 bg-white px-4 py-4">
				<ul class="flex flex-col gap-3 text-sm font-medium">
					<li><a href="{prefix}/aanpak" onclick={() => mobileOpen = false} class="block py-1 text-ink-600">{lang === 'en' ? 'Approach' : 'Aanpak'}</a></li>
					<li><a href="{prefix}/diensten" onclick={() => mobileOpen = false} class="block py-1 text-ink-600">{lang === 'en' ? 'Services' : 'Diensten'}</a></li>
					<li><a href="{prefix}/training" onclick={() => mobileOpen = false} class="block py-1 text-ink-600">Training</a></li>
					{#if hasCases}<li><a href="{prefix}/cases" onclick={() => mobileOpen = false} class="block py-1 text-ink-600">Cases</a></li>{/if}
					<li><a href="{prefix}/contact" onclick={() => mobileOpen = false} class="block py-1 text-ink-600">Contact</a></li>
					<li><a href={switchPath} class="inline-block text-xs uppercase tracking-wider px-2 py-1 border border-ink-200 rounded">{otherLang.toUpperCase()}</a></li>
				</ul>
			</div>
		{/if}
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="bg-ink-900 text-ink-300">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
			<p>{tr.footer.replace('{year}', String(new Date().getFullYear()))}</p>
			<div class="flex gap-6">
				<a href="{prefix}/contact" class="hover:text-white transition-colors">Contact</a>
				<a href={switchPath} class="hover:text-white transition-colors">{otherLang.toUpperCase()}</a>
			</div>
		</div>
	</footer>
</div>
