<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import PxInput from '../px/PxInput.vue'

const query = ref('')
const searchInput = useTemplateRef('searchInput')

onMounted(() => {
	searchInput.value?.focus()
})

const onSearchSubmit = () => {
	window.location.href = `https://search.bleps.xyz/search?q=${encodeURIComponent(query.value)}`
}
</script>

<template>
	<form class="search-form" @submit.prevent="onSearchSubmit()">
		<PxInput
			icon="Search"
			placeholder="Query"
			ref="searchInput"
			v-model="query"
		/>
	</form>
</template>

<style scoped>
.search-form {
	display: flex;
	flex-direction: column;
	gap: calc(var(--l) * 2);
	inline-size: 100%;
}
</style>
