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
        validator: value => {
            return ['left', 'top', 'right', 'bottom'].includes(value);
        }
    },
    pointer: {
        type: Boolean,
        default: false
    }
});

const style = computed(() => {
    return {
        '--arrowSize': `${props.size}px`,
        '--arrowColor': props.mainColor,
        '--arrowBorderColor': props.borderColor,
        '--arrowBgColor': props.bgColor,
        '--arrowLineWidth': props.lineWidth
    };
});
</script>

<template>
    <div :style="style" :class="['icon_arrow', direction, { pointer }]"></div>
</template>

<style scoped>
*,
*::after,
*::before {
    box-sizing: border-box;
}
.icon_arrow {
    display: inline-block;
    position: relative;
    width: var(--arrowSize);
    height: var(--arrowSize);
    border: 1px solid var(--arrowBorderColor);
    border-radius: 50%;
    background-color: var(--arrowBgColor);
}
.icon_arrow::after,
.icon_arrow::before {
    content: '';
    position: absolute;
    left: calc(var(--arrowSize) / 8);
}
.icon_arrow::after {
    width: calc(var(--arrowSize) / 3);
    height: calc(var(--arrowSize) / 3);
    border-bottom: 2px solid var(--arrowColor);
    border-left: 2px solid var(--arrowColor);
    transform-origin: bottom left;
    transform: rotate(45deg);
    left: calc(var(--arrowSize) / 8 - 1px);
    bottom: 50%;
}
.icon_arrow::before {
    width: calc(var(--arrowSize) - var(--arrowSize) / 4 - 2px);
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--arrowColor);
}
.icon_arrow.top {
    transform: rotate(90deg);
}
.icon_arrow.right {
    transform: rotate(180deg);
}
.icon_arrow.bottom {
    transform: rotate(270deg);
}

.icon_arrow.pointer {
    cursor: pointer;
    transition: 0.3s;
}
.icon_arrow.pointer:hover {
    opacity: 0.7;
}
</style>
