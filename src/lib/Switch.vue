<template>
    <button @click="toggle" :class="{checked}"><span></span></button>
</template>

<script lang="ts">
    import {ref} from 'vue';

    export default {
        name: 'Switch',
        setup() {
            const checked = ref(false);
            const toggle = () => {
                checked.value = !checked.value;
            };
            return {checked, toggle};
        }
    };
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button {
        height: $h;
        width: $h*2;
        border: none;
        background-color: grey;
        border-radius: $h/2;
        position: relative;
    }

    span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        border-radius: $h2/2;
        background-color: white;
        transition: left 0.2s;
    }

    button.checked {
        background-color: blue;
    }

    button.checked > span {
        left: calc(100% - #{$h2} - 2px);
    }
    button:focus{
        outline: none;
    }
</style>
