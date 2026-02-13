<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	onMount(() => goto('/en/diensten#training', { replaceState: true }));
</script>
