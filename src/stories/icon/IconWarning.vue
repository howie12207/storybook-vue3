<script setup>
import { computed } from 'vue';

const props = defineProps({
    size: {
        type: Number,
        default: 32
    },
    mainColor: {
        type: String,
        default: 'currentColor'
    },
    borderColor: {
        type: String,
        default: 'currentColor'
    },
    bgColor: {
        type: String,
        default: 'transparent'
    }
});

const style = computed(() => {
    return {
        '--warningColor': props.mainColor,
        '--warningBorderColor': props.borderColor,
        '--warningBgColor': props.bgColor,
        '--warningSize': `${props.size}px`
    };
});
</script>

<template>
    <i :style="style" class="icon_warning"></i>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.icon_warning {
    display: inline-block;
    position: relative;
    width: var(--warningSize);
    height: var(--warningSize);
    border: 2px solid var(--warningBorderColor);
    border-radius: 50%;
    background-color: var(--warningBgColor);
}
.icon_warning::after,
.icon_warning::before {
    content: '';
    position: absolute;
    border-radius: 3px;
    width: calc(2 / 20 * var(--warningSize));
    background: var(--warningColor);
    left: calc(var(--warningSize) / 2 - 2px - 2 / 20 * var(--warningSize) / 2);
}
.icon_warning::after {
    top: calc(2 / 20 * var(--warningSize));
    height: calc(8 / 20 * var(--warningSize));
}
.icon_warning::before {
    height: calc(2 / 20 * var(--warningSize));
    bottom: calc(2 / 20 * var(--warningSize));
}
</style>
