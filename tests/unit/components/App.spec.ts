import App from "@/App.vue";
import MiniRockbot from "@/components/mini-rockbot-container/MiniRockbot.vue";
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
  test('should show MiniRockbot component', async () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(MiniRockbot).isVisible()).toBe(true);
  })
})