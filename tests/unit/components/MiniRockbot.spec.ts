import MiniRockbot from '../../../src/components/mini-rockbot-container/MiniRockbot.vue';
import HeaderComponent from '../../../src/components/HeaderComponent.vue';
import TabsComponent from '../../../src/components/TabsComponent.vue';
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
  test('should show components', () => {
    const wrapper = shallowMount(MiniRockbot);
    expect(wrapper.findComponent(HeaderComponent).isVisible()).toBe(true);
    expect(wrapper.findComponent(TabsComponent).isVisible()).toBe(true);
    expect(wrapper.find('el-divider').isVisible()).toBe(true);
  })
})