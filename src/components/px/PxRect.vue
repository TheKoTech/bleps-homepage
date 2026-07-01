<script setup lang="ts">
import { computed } from 'vue'
import { corners, cornerSizes, type CornerName } from './corners'

type Props = {
	corner: CornerName
	bevel?: boolean
}

const props = defineProps<Props>()

const Corner = computed(() => corners[props.corner])

const cornerSize = computed(() => cornerSizes[props.corner])
</script>

<template>
	<div class="px-rect" ref="px-rect" :style="{ '--corner-size': cornerSize }">
		<component
			class="px-rect__corner px-rect__corner--tl"
			:is="Corner"
			:style="{ transform: `rotate(0deg)` }"
		/>
		<component
			class="px-rect__corner px-rect__corner--tr"
			:is="Corner"
			:style="{ transform: `rotate(90deg)` }"
		/>
		<component
			class="px-rect__corner px-rect__corner--br"
			:is="Corner"
			:style="{ transform: `rotate(180deg)` }"
		/>
		<component
			class="px-rect__corner px-rect__corner--bl"
			:is="Corner"
			:style="{ transform: `rotate(270deg)` }"
		/>

		<div class="px-rect__edge px-rect__edge--top" />
		<div class="px-rect__edge px-rect__edge--right" />
		<div class="px-rect__edge px-rect__edge--bottom" />
		<div class="px-rect__edge px-rect__edge--left" />

		<div class="px-rect__bevel" v-if="props.bevel">
			<component
				class="px-rect__corner px-rect__corner--tr"
				:is="Corner"
				:style="{ transform: `rotate(90deg)` }"
			/>
			<component
				class="px-rect__corner px-rect__corner--br"
				:is="Corner"
				:style="{ transform: `rotate(180deg)` }"
			/>
			<component
				class="px-rect__corner px-rect__corner--bl"
				:is="Corner"
				:style="{ transform: `rotate(270deg)` }"
			/>

			<div class="px-rect__edge px-rect__edge--right" />
			<div class="px-rect__edge px-rect__edge--bottom" />
		</div>

		<div class="px-rect__content">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.px-rect {
	position: relative;

	--edge-pad: calc(var(--l) * var(--corner-size));
}

svg {
	position: absolute;
}

.px-rect__corner {
	block-size: var(--edge-pad);
	inline-size: var(--edge-pad);
}

.px-rect__corner--tl {
	inset: 0 auto auto 0;
}

.px-rect__corner--tr {
	inset: 0 0 auto auto;
	transform: rotate(90deg);
}

.px-rect__corner--br {
	inset: auto 0 0 auto;
}

.px-rect__corner--bl {
	inset: auto auto 0 0;
	transform: rotate(90deg);
}

.px-rect__edge {
	position: absolute;
	background: currentColor;
}

.px-rect__bevel {
	position: absolute;
	block-size: 100%;
	inline-size: 100%;
	inset-block-end: calc(var(--l) * -2);
	inset-inline-end: calc(var(--l) * -2);
}

.px-rect__edge--top,
.px-rect__edge--bottom {
	height: var(--l);
	left: calc(var(--l) * var(--corner-size));
	right: calc(var(--l) * var(--corner-size));
}

.px-rect__edge--top {
	top: 0;
}
.px-rect__edge--bottom {
	bottom: 0;
}

.px-rect__edge--left,
.px-rect__edge--right {
	width: var(--l);
	top: calc(var(--l) * var(--corner-size));
	bottom: calc(var(--l) * var(--corner-size));
}

.px-rect__edge--left {
	left: 0;
}
.px-rect__edge--right {
	right: 0;
}

.px-rect__content {
	block-size: 100%;
	inline-size: 100%;
}
</style>
