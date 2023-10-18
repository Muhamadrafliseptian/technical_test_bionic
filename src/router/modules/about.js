import AboutView from '@/views/AboutView.vue';
import SlicingView from '@/views/SlicingCss.vue';
export default [
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/slicing',
        name: 'slicing',
        component: SlicingView
    }
]