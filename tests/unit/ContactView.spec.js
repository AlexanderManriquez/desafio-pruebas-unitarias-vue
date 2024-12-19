import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

describe('HomeView.vue', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});