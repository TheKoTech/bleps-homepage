<script setup lang="ts">
import { useTemplateRef } from 'vue'
import PxRect from './PxRect.vue'
import { icons, type IconName } from './icons'

type Props = {
	label?: string
	icon?: IconName
	placeholder?: string
}

const props = defineProps<Props>()
const model = defineModel({ default: '' })
const inputRef = useTemplateRef<HTMLInputElement>('inputRef')

defineExpose({ focus: () => inputRef.value?.focus() })
</script>

<template>
	<div>
		<PxRect class="px-input" corner="Corner2">
			<div class="px-input__inner">
				<label class="px-input__label">{{ props.label }}</label>

				<input
					class="px-input__field"
					ref="inputRef"
					:placeholder="props.placeholder"
					v-model.trim="model"
				/>

				<component
					class="px-input__icon"
					v-if="props.icon"
					:is="icons[props.icon]"
				/>
			</div>
		</PxRect>
	</div>
</template>

<style scoped>
.px-input {
	position: relative;
	block-size: calc(var(--l) * 20);
	inline-size: 100%;
}

.px-input__inner {
	display: flex;
	inline-size: 100%;
	block-size: 100%;
	align-items: center;
	gap: calc(var(--l) * 8);
	justify-content: space-between;
	padding-inline: calc(var(--l) * 10);
}

.px-input__field {
	color: var(--primary);
	caret-color: var(--primary);
	padding-block-end: calc(var(--l));
	inline-size: 100%;

	&:focus-visible {
		outline: unset;
	}

	&::selection {
		background: var(--primary);
		color: var(--bg);
	}
}

.px-input__label {
	position: absolute;
	inset-inline-start: calc(var(--l) * 4.5);
	inset-block-start: calc(var(--l) * -8);
	padding-inline: 0.5ch;
	background: var(--bg);
}

.px-input__icon {
	block-size: calc(var(--l) * 12);
	inline-size: calc(var(--l) * 12);
	flex-shrink: 0;
}
</style>
