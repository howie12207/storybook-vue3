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
    direction: {
        type: String,
        default: 'left',
        validator(value) {
            return ['left', 'top', 'right', 'bottom'].includes(value);
        }
    },
    lineWidth: {
        type: Number,
        default: 2
    },
    pointer: {
        type: Boolean,
        default: false
    }
});

const style = computed(() => {
    return {
        '--chevronSize': `${props.size}px`,
        '--chevronColor': props.mainColor,
        '--chevronBorderColor': props.borderColor,
        '--chevronBgColor': props.bgColor,
        '--chevronLineWidth': `${props.lineWidth}px`
    };
});
</script>

<template>
    <div :style="style" :class="['icon_chevron', direction, { pointer }]"></div>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.icon_chevron {
    display: inline-block;
    position: relative;
    width: var(--chevronSize);
    height: var(--chevronSize);
    border: 1px solid var(--chevronBorderColor);
    border-radius: 50%;
    background-color: var(--chevronBgColor);
}
.icon_chevron::after {
    content: '';
    position: absolute;
    border: solid var(--chevronColor);
    border-width: 0 var(--chevronLineWidth) var(--chevronLineWidth) 0;
    border-bottom-right-radius: 2px;
    padding: calc(calc(var(--chevronSize) - var(--chevronLineWidth)) / 5);
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%) rotate(135deg);
}
.icon_chevron.top::after {
    transform: translate(-50%, -25%) rotate(-135deg);
}
.icon_chevron.right::after {
    transform: translate(-75%, -50%) rotate(-45deg);
}
.icon_chevron.bottom::after {
    transform: translate(-50%, -75%) rotate(45deg);
}

.icon_chevron.pointer {
    cursor: pointer;
    transition: 0.3s;
}
.icon_chevron.pointer:hover {
    opacity: 0.7;
}
</style>
