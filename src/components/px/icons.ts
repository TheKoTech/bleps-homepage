/* @ts-ignore */
import Search from '../../assets/Search.svg?skipsvgo'
/* @ts-ignore */
import Adguard from '../../assets/Adguard.svg?skipsvgo'
/* @ts-ignore */
import Frigate from '../../assets/Frigate.svg?skipsvgo'
/* @ts-ignore */
import Homeassistant from '../../assets/Homeassistant.svg?skipsvgo'
/* @ts-ignore */
import Seafile from '../../assets/Seafile.svg?skipsvgo'
/* @ts-ignore */
import Searxng from '../../assets/Searxng.svg?skipsvgo'
/* @ts-ignore */
import StatusOk from '../../assets/StatusOk.svg?skipsvgo'
/* @ts-ignore */
import StatusBad from '../../assets/StatusBad.svg?skipsvgo'

export const icons = {
	Search,

	Adguard,
	Frigate,
	Homeassistant,
	Seafile,
	Searxng,

	StatusOk,
	StatusBad,
} as const

export type IconName = keyof typeof icons
