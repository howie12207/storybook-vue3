<script setup>
import { computed } from 'vue';

const props = defineProps({
    size: {
        type: Number,
        default: 24
    },
    mainColor: {
        type: String,
        default: 'white'
    },
    borderColor: {
        type: String,
        default: 'gray'
    },
    bgColor: {
        type: String,
        default: 'gray'
    }
});

const style = computed(() => {
    return {
        '--infoColor': props.mainColor,
        '--infoBorderColor': props.borderColor,
        '--infoBgColor': props.bgColor,
        '--infoSize': `${props.size}px`
    };
});
</script>

<template>
    <i :style="style" class="icon_info"></i>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}

.icon_info {
    display: inline-block;
    position: relative;
    width: var(--infoSize);
    height: var(--infoSize);
    border: 2px solid var(--infoBorderColor);
    border-radius: 50%;
    background-color: var(--infoBgColor);
}
.icon_info::after,
.icon_info::before {
    content: '';
    position: absolute;
    border-radius: 3px;
    width: calc(2 / 20 * var(--infoSize));
    background: var(--infoColor);
    left: calc(var(--infoSize) / 2 - 2px - 2 / 20 * var(--infoSize) / 2);
}
.icon_info::after {
    bottom: calc(2 / 20 * var(--infoSize));
    height: calc(8 / 20 * var(--infoSize));
}
.icon_info::before {
    height: calc(2 / 20 * var(--infoSize));
    top: calc(2 / 20 * var(--infoSize));
}
</style>
