<template>
    <button @click="toggle" :class="{checked:value}"><span></span></button>
    <div>{{value}}</div>
</template>

<script lang="ts">
    export default {
        name: 'Switch',
        props: {
            value: {
                type: Boolean,
            }
        },
        setup(props, context) {
            const toggle = () => {
                context.emit('input', !props.value);
            };
            return {toggle};
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

    button:focus {
        outline: none;
    }
</style>
