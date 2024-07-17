<script lang="ts">
	// import type { LayoutData } from './$types';
	// export let data: LayoutData;
	import '../app.css';
	import { onMount } from 'svelte';
	import { paint } from './gradient.js';

	onMount(() => {
		const canvas = document.querySelector('canvas') as HTMLCanvasElement;
		const context = canvas.getContext('2d') as CanvasRenderingContext2D;

		let frame = requestAnimationFrame(function loop(t: number) {
			frame = requestAnimationFrame(loop);
			paint({ context, t });
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<header class="p-2 flex gap-2 items-center border-b border-gray-300">
	<div class="w-8 h-8">
		<canvas class="w-full h-full"></canvas>
	</div>
	<h2 class="text-3xl font-bold">SEO Manager</h2>
</header>
<slot />

<style>
	canvas {
		mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
	}
</style>
