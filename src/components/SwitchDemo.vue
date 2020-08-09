<template>
    <div>
        <p>Switch 的文档</p>
        <Switch :value="x" @input="x = $event"></Switch>
    </div>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue';
    import {ref} from 'vue';

    export default {
        name: 'SwitchDemo',
        components: {Switch},
        setup() {
            const x = ref(true);
            return {x};
        }
    };
</script>

<style scoped>

</style>
