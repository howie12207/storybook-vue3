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
    }
});
const style = computed(() => {
    return {
        '--checkColor': props.mainColor,
        '--checkBorderColor': props.borderColor,
        '--checkBgColor': props.bgColor,
        '--checkSize': `${props.size}px`,
        '--checkBorder': `${(2 / 22) * props.size}px`,
        '--checkLeft': `${(4 / 22) * props.size}px`,
        '--checkTop': `-${(1 / 22) * props.size}px`,
        '--checkWidth': `${(6 / 22) * props.size}px`,
        '--checkHeight': `${(10 / 22) * props.size}px`
    };
});
</script>

<template>
    <i :style="style" class="icon_check"></i>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.icon_check {
    position: relative;
    display: inline-block;
    width: var(--checkSize);
    height: var(--checkSize);
    border: var(--checkBorder) solid var(--checkBorderColor);
    border-radius: 50%;
    background-color: var(--checkBgColor);
}
.icon_check::after {
    content: '';
    display: block;
    position: absolute;
    left: var(--checkLeft);
    top: var(--checkTop);
    width: var(--checkWidth);
    height: var(--checkHeight);
    border-width: 0 var(--checkBorder) var(--checkBorder) 0;
    border-style: solid;
    border-color: var(--checkColor);
    transform-origin: bottom left;
    transform: rotate(45deg);
}
</style>
