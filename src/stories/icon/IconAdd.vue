<script setup>
import { computed } from 'vue';

const props = defineProps({
    size: {
        type: Number,
        default: 24
    },
    mainColor: {
        type: String,
        default: 'currentColor'
    },
    borderColor: {
        type: String,
        default: 'transparent'
    },
    bgColor: {
        type: String,
        default: 'transparent'
    },
    pointer: {
        type: Boolean,
        default: false
    }
});

const style = computed(() => {
    return {
        '--addColor': props.mainColor,
        '--addBorderColor': props.borderColor,
        '--addBgColor': props.bgColor,
        '--addSize': `${props.size}px`
    };
});
</script>

<template>
    <div :style="style" :class="['icon_add', { pointer }]"></div>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.icon_add {
    display: inline-block;
    position: relative;
    width: var(--addSize);
    height: var(--addSize);
    border: 2px solid var(--addBorderColor);
    border-radius: 50%;
    background-color: var(--addBgColor);
}
.icon_add::after,
.icon_add::before {
    content: '';
    position: absolute;
    width: calc(var(--addSize) / 2);
    height: 2px;
    background: var(--addColor);
    border-radius: 5px;
    top: calc(var(--addSize) / 2 - 3px);
    left: calc(var(--addSize) / 4 - 2px);
}
.icon_add::after {
    width: 2px;
    height: calc(var(--addSize) / 2);
    top: calc(var(--addSize) / 4 - 2px);
    left: calc(var(--addSize) / 2 - 3px);
}
.icon_add.pointer {
    cursor: pointer;
    transition: 0.3s;
}
.icon_add.pointer:hover {
    opacity: 0.7;
}
</style>
