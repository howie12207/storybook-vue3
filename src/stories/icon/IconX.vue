<script setup>
import { computed } from 'vue';

const prop = defineProps({
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
        '--xColor': prop.mainColor,
        '--xBorderColor': prop.borderColor,
        '--xBgColor': prop.bgColor,
        '--xSize': `${prop.size}px`
    };
});
</script>

<template>
    <div :style="style" :class="['icon_x', { pointer }]"></div>
</template>

<style scoped>
.icon_x {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: var(--xSize);
    height: var(--xSize);
    border: 2px solid var(--xBorderColor);
    border-radius: 50%;
    background-color: var(--xBgColor);
}
.icon_x::after,
.icon_x::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: calc(var(--xSize) - 10px);
    height: 2px;
    background: var(--xColor);
    border-radius: 5px;
    top: calc(var(--xSize) / 2 - 3px);
    left: 3px;
}
.icon_x::before {
    transform: rotate(45deg);
}
.icon_x::after {
    transform: rotate(-45deg);
}
.icon_x.pointer {
    cursor: pointer;
    transition: 0.3s;
}
.icon_x.pointer:hover {
    opacity: 0.7;
}
</style>
