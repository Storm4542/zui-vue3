import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocIndex from './components/DocIndex.vue';
import Switch from './components/SwitchDemo.vue';
import Button from './components/Button.vue';
import Tabs from './components/Tabs.vue';
import Dialog from './components/Dialog.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc, children: [
                {
                    path: '',
                    component: DocIndex
                },
                {
                    path: 'switch',
                    component: Switch
                },
                {
                    path: 'button',
                    component: Button
                },
                {
                    path: 'Tabs',
                    component: Tabs
                },
                {
                    path: 'Dialog',
                    component: Dialog
                },
            ]
        },

    ],
});
router.afterEach(() => {

});

export default router;

