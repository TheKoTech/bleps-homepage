/* @ts-ignore */
import Corner1 from '../../assets/Corner1.svg?skipsvgo'
/* @ts-ignore */
import Corner2 from '../../assets/Corner2.svg?skipsvgo'
/* @ts-ignore */
import Corner3 from '../../assets/Corner3.svg?skipsvgo'

export const corners = {
	Corner1,
	Corner2,
	Corner3,
} as const

export const cornerSizes: { [K in CornerName]: number } = {
	Corner1: 2.5,
	Corner2: 5,
	Corner3: 2,
}

export type CornerName = keyof typeof corners
