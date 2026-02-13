<script lang="ts">
	const logos = [
		{ src: '/images/logos/logo-1.png', alt: 'Client logo 1' },
		{ src: '/images/logos/logo-2.svg', alt: 'Client logo 2' },
		{ src: '/images/logos/logo-3.png', alt: 'Client logo 3' },
		{ src: '/images/logos/logo-4.png', alt: 'Client logo 4' },
		{ src: '/images/logos/logo-5.png', alt: 'Client logo 5' },
	];
</script>

<div class="overflow-hidden py-12">
	<div class="flex animate-scroll-left" style="width: max-content;">
		{#each [...logos, ...logos] as logo}
			<div class="flex-shrink-0 mx-4 w-[200px] h-[100px] bg-surface-warm rounded-lg flex items-center justify-center px-6">
				<img src={logo.src} alt={logo.alt} class="max-h-[50px] max-w-[160px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
			</div>
		{/each}
	</div>
</div>
