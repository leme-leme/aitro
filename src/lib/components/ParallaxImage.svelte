<script lang="ts">
	let { src, alt = '' }: { src: string; alt?: string } = $props();

	let container: HTMLDivElement;
	let mx = $state(0);
	let my = $state(0);

	function onMove(e: MouseEvent) {
		if (!container) return;
		const rect = container.getBoundingClientRect();
		// -1 to 1 range from center
		mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
		my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
	}

	function onLeave() {
		mx = 0;
		my = 0;
	}

	// Back layer (low freq / soft) moves less
	let backX = $derived(mx * -6);
	let backY = $derived(my * -6);
	// Front layer (high contrast / edges) moves more
	let frontX = $derived(mx * 14);
	let frontY = $derived(my * 14);
</script>

<div
	bind:this={container}
	class="relative overflow-hidden rounded-lg cursor-crosshair w-full h-full"
	role="img"
	aria-label={alt}
	onmousemove={onMove}
	onmouseleave={onLeave}
>
	<!-- Back: soft / low contrast layer — slow drift -->
	<img
		{src}
		alt=""
		class="layer back-layer"
		style="transform: translate({backX}px, {backY}px) scale(1.15);"
	/>
	<!-- Front: high contrast / edges — fast drift -->
	<img
		{src}
		alt=""
		class="layer front-layer"
		style="transform: translate({frontX}px, {frontY}px) scale(1.08);"
	/>
</div>

<style>
	.layer {
		position: absolute;
		inset: -20px;
		width: calc(100% + 40px);
		height: calc(100% + 40px);
		object-fit: cover;
		transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
		will-change: transform;
		pointer-events: none;
	}

	.back-layer {
		filter: blur(1.5px) saturate(0.6) brightness(1.1);
		z-index: 1;
	}

	.front-layer {
		filter: contrast(1.6) saturate(1.3) brightness(0.95);
		mix-blend-mode: overlay;
		opacity: 0.85;
		z-index: 2;
	}
</style>
