import { onMounted, onUnmounted } from 'vue'

export function useShortcuts() {
	const goTo = (subdomain: string) => {
		window.location.href = `https://${subdomain}.bleps.xyz`
	}

	// keeping this as shortcust in case i wanna add something cool later
	const shortcuts: Record<string, () => void | undefined> = {
		'ctrl+f': () => goTo('files'),
		'ctrl+s': () => goTo('search'),
		'ctrl+d': () => goTo('adguard'),
		'ctrl+e': () => goTo('home'),
		'ctrl+g': () => goTo('cam'),
	}

	const handleKeydown = (event: KeyboardEvent) => {
		const key = [
			event.ctrlKey && 'ctrl',
			event.shiftKey && 'shift',
			event.altKey && 'alt',
			event.metaKey && 'meta',
			event.code.replace(/^Key(?=[A-Z])/, '').toLowerCase(),
		]
			.filter(Boolean)
			.join('+')

		if (!shortcuts[key]) return

		event.preventDefault()
		shortcuts[key]()
	}

	onMounted(() => window.addEventListener('keydown', handleKeydown))
	onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
}
