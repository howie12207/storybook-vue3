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
        default: 'currentColor'
    },
    bgColor: {
        type: String,
        default: 'transparent'
    },
    lineWidth: {
        type: Number,
        default: 2
    }
});

const style = computed(() => {
    const { mainColor, borderColor, bgColor, size, lineWidth } = props;
    const pointSize = props.size / 6;
    return {
        '--moreColor': mainColor,
        '--moreBorderColor': borderColor,
        '--moreBgColor': bgColor,
        '--moreSize': `${size}px`,
        '--moreLineWidth': `${lineWidth}px`,
        '--morePointSize': `${pointSize}px`,
        '--morePosition': `${(size - lineWidth * 2 - pointSize) / 2}px`,
        '--moreNPointMargin': `-${pointSize + (size - lineWidth * 2 - pointSize * 3) / 4}px`,
        '--morePointMargin': `${pointSize + (size - lineWidth * 2 - pointSize * 3) / 4}px`
    };
});
</script>

<template>
    <div :style="style" class="icon_more"></div>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}

.icon_more {
    display: inline-block;
    position: relative;
    width: var(--moreSize);
    height: var(--moreSize);
    border: var(--moreLineWidth) solid var(--moreBorderColor);
    border-radius: var(--moreSize);
    background-color: var(--moreBgColor);
}
.icon_more::before {
    content: '';
    position: absolute;
    display: block;
    width: var(--morePointSize);
    height: var(--morePointSize);
    background-color: var(--moreColor);
    border-radius: 50%;
    top: var(--morePosition);
    left: var(--morePosition);
    box-shadow: var(--moreNPointMargin) 0 0, var(--morePointMargin) 0 0;
}
</style>
