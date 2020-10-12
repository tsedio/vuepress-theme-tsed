import Select from './Select.vue'
import { COLORS_LIST } from '../../../utils/colors'
import { boolean, number, select, text } from '@storybook/addon-knobs'

export default {
    title: 'Atoms/Select'
}

export const overview = () => ({
    components: {
        Select,
    },
    template: `
        <Select>
        </Select>`
})