<script setup lang="ts">
import { computed } from 'vue'
import { icons, type IconName } from '../px/icons'
import PxKbd from '../px/PxKbd.vue'
import PxRect from '../px/PxRect.vue'
import { ServiceStatus } from './serviceStatus'

type Props = {
	name: Extract<
		IconName,
		'Adguard' | 'Frigate' | 'Homeassistant' | 'Seafile' | 'Searxng'
	>
	hotkey: string
	href: string
	status: ServiceStatus
}

const props = defineProps<Props>()

const Icon = computed(() => icons[props.name])

const StatusIcon = computed(() =>
	props.status === ServiceStatus.Ok ? icons.StatusOk : icons.StatusBad,
)
</script>

<template>
	<a class="service-item" :href>
		<div class="service-item__content">
			<div class="service-item__icon">
				<Icon />

				<!-- <StatusIcon class="service-item__status-icon" /> -->
			</div>

			<PxKbd>{{ props.hotkey }}</PxKbd>
		</div>

		<PxRect class="service-item__rect" corner="Corner3" />
	</a>
</template>

<style scoped>
.service-item {
	display: block;
	position: relative;
	user-select: none;

	&:where(:focus-visible, :hover, :active) {
		outline: none;

		.service-item__rect {
			display: block;
		}
	}
}

.service-item__content {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: calc(var(--l) * 8);
	gap: calc(var(--l) * 4);
}

.service-item__icon {
	display: flex;
	align-items: center;
	justify-content: center;

	> * {
		flex-shrink: 0;
	}
}

.service-item__status-icon {
	position: absolute;
	inset-block-start: calc(var(--l) * 4);
	inset-inline-start: calc(50% + var(--l) * 12);
}

.service-item__rect {
	position: absolute;
	inset: 0;
	display: none;
}
</style>
