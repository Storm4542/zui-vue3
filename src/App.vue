<template>
    <router-view/>
</template>

<script lang="ts">
    import {ref, provide} from 'vue';
    import router from './router';

    export default {
        name: 'App',
        components: {},
        setup() {
            const width = document.documentElement.clientWidth;
            //<500即为手机
            const asideVisible = ref(width > 500);
            provide('asideVisible', asideVisible);
            router.afterEach(() => {
                if (width <= 500) {
                    asideVisible.value = false;
                }
            });
        }
    };
</script>
