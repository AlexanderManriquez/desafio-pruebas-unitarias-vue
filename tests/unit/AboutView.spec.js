import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
    it('matches the snapshot', () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{ path: '/about', component: AboutView }]
        })
        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})