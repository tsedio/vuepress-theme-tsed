import { mount } from '@vue/test-utils'
import Badge from './Badge.vue';

test('Badge', () => {
    const wrapper = mount(Badge)
    expect(wrapper.attributes('class')).toBe('inline-block rounded-small px-2 text-white text-sm normal-case bg-emerald')
    expect(wrapper.attributes('style')).toBe('vertical-align: top;')
    expect(wrapper.html()).toBe("<span class=\"inline-block rounded-small px-2 text-white text-sm normal-case bg-emerald\" style=\"vertical-align: top;\"></span>" )    
})