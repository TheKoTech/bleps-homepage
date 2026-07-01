<script setup lang="ts">
import SearchField from './components/feature/SearchField.vue'
import ServiceItem from './components/feature/ServiceItem.vue'
import { ServiceStatus } from './components/feature/serviceStatus'
import { useShortcuts } from './composables/useShortcuts'

useShortcuts()
</script>

<template>
	<main class="app-content">
		<h1 class="app-content__title">https://search.bleps.xyz/search?q=</h1>

		<h1 class="app-content__title app-content__title--small">
			search.bleps.xyz/search?q=
		</h1>

		<SearchField class="app-content__search" />

		<div class="app-content__services">
			<ServiceItem
				name="Seafile"
				hotkey="Ctrl+F"
				href="https://files.bleps.xyz"
				:status="ServiceStatus.Ok"
			/>

			<ServiceItem
				name="Searxng"
				hotkey="Ctrl+S"
				href="https://search.bleps.xyz"
				:status="ServiceStatus.Ok"
			/>

			<ServiceItem
				name="Adguard"
				hotkey="Ctrl+D"
				href="https://frigate.bleps.xyz"
				:status="ServiceStatus.Bad"
			/>

			<ServiceItem
				name="Homeassistant"
				hotkey="Ctrl+E"
				href="https://homeassistant.bleps.xyz"
				:status="ServiceStatus.Bad"
			/>

			<ServiceItem
				name="Frigate"
				hotkey="Ctrl+G"
				href="https://cam.bleps.xyz"
				:status="ServiceStatus.Ok"
			/>
		</div>
	</main>
</template>

<style scoped>
.app-content {
	block-size: 100%;
	inline-size: 100%;
	margin-inline: auto;
	max-inline-size: calc(var(--l) * 320);
	padding-inline: calc(var(--l) * 16);
	align-items: flex-start;
	justify-content: center;

	display: flex;
	flex-direction: column;
	gap: calc(var(--l) * 12);
}

.app-content__title {
	font-size: 1rem;
}

.app-content__title--small {
	display: none;
}

.app-content__services {
	display: flex;
	align-items: center;
	inline-size: 100%;
	justify-content: center;
	gap: calc(var(--l) * 6);
}

@media screen and (width <= 700px) {
	.app-content__services {
		flex-wrap: wrap;
	}
}

@media screen and (width <= 450px) {
	.app-content {
		padding-inline: calc(var(--l) * 8);
	}
}

@media screen and (width < 392px) {
	.app-content {
		padding-inline: calc(var(--l) * 8);
	}

	.app-content__title {
		display: none;
	}

	.app-content__title--small {
		display: block;
	}
}
</style>
