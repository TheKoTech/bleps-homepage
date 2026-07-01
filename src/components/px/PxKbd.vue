<script setup lang="ts">
import PxRect from './PxRect.vue'
</script>

<template>
	<PxRect class="px-kbd" corner="Corner3" :bevel="true">
		<kbd class="px-kbd__content">
			<slot />
		</kbd>
	</PxRect>
</template>

<style scoped>
.px-kbd__content {
	display: inline-block;
	padding-block: calc(var(--l) * 0.75) calc(var(--l) * 1.25);
	padding-inline: calc(var(--l) * 5);
}

.px-kbd__bevel {
	position: absolute;
	block-size: 100%;
	inline-size: 100%;
	inset-block-start: calc(var(--l) * 2);
	inset-inline-start: calc(var(--l) * 2);
}
</style>
