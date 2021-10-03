<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    bgColor: {
        type: String,
        default: 'rgba(0, 0, 0, 0.4)'
    },
    textColor: {
        type: String,
        default: '#fff'
    },
    location: {
        type: String,
        default: 'bottom',
        validator(value) {
            return [
                'left',
                'left-top',
                'left-bottom',
                'top',
                'top-left',
                'top-right',
                'right',
                'right-top',
                'right-bottom',
                'bottom',
                'bottom-left',
                'bottom-right'
            ].includes(value);
        }
    },
    gap: {
        type: Number,
        default: 8
    }
});

const show = ref(false);
const changeShow = status => {
    show.value = status;
};

const style = computed(() => {
    return {
        '--tooltipsBgColor': props.bgColor,
        '--tooltipsTextColor': props.textColor,
        '--tooltipsGap': `-${props.gap}px`
    };
});
</script>

<template>
    <div
        :style="style"
        :class="['tooltips', location]"
        @mouseleave="changeShow(false)"
        @mouseenter="changeShow(true)"
    >
        <slot></slot>
        <transition name="fade">
            <div v-show="show" class="tooltips_popup">{{ label }}</div>
        </transition>
    </div>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.tooltips {
    position: relative;
    display: inline-block;
}
.tooltips .tooltips_popup {
    position: absolute;
    display: block;
    text-align: center;
    z-index: 100;
    border-radius: 4px;
    padding: 8px;
    font-size: 12px;
    line-height: 1.2;
    width: max-content;
    word-wrap: break-word;
    background: var(--tooltipsBgColor);
    color: var(--tooltipsTextColor);
}

/* 三角形 */
.tooltips .tooltips_popup::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
}

/* 下 */
.tooltips.bottom .tooltips_popup {
    bottom: calc(var(--tooltipsGap) - 8px);
    left: 50%;
    transform: translate(-50%, 100%);
}
.tooltips.bottom-left .tooltips_popup {
    bottom: calc(var(--tooltipsGap) - 8px);
    left: 0;
    transform: translateY(100%);
}
.tooltips.bottom-right .tooltips_popup {
    bottom: calc(var(--tooltipsGap) - 8px);
    right: 0;
    transform: translateY(100%);
}

/* 三角形 下 */
.tooltips.bottom .tooltips_popup::before {
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent var(--tooltipsBgColor) transparent;
}
.tooltips.bottom-left .tooltips_popup::before {
    top: -8px;
    left: 8px;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent var(--tooltipsBgColor) transparent;
}
.tooltips.bottom-right .tooltips_popup::before {
    top: -8px;
    right: 8px;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent var(--tooltipsBgColor) transparent;
}

/* 上 */
.tooltips.top .tooltips_popup {
    top: calc(var(--tooltipsGap) - 8px);
    left: 50%;
    transform: translate(-50%, -100%);
}
.tooltips.top-left .tooltips_popup {
    top: calc(var(--tooltipsGap) - 8px);
    left: 0;
    transform: translateY(-100%);
}
.tooltips.top-right .tooltips_popup {
    top: calc(var(--tooltipsGap) - 8px);
    right: 0;
    transform: translateY(-100%);
}

/* 三角形 上 */
.tooltips.top .tooltips_popup::before {
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px 8px 0 8px;
    border-color: var(--tooltipsBgColor) transparent transparent transparent;
}
.tooltips.top-left .tooltips_popup::before {
    bottom: -8px;
    left: 8px;
    border-width: 8px 8px 0 8px;
    border-color: var(--tooltipsBgColor) transparent transparent transparent;
}
.tooltips.top-right .tooltips_popup::before {
    bottom: -8px;
    right: 8px;
    border-width: 8px 8px 0 8px;
    border-color: var(--tooltipsBgColor) transparent transparent transparent;
}

/* 右 */
.tooltips.right .tooltips_popup {
    right: calc(var(--tooltipsGap) - 8px);
    top: 50%;
    transform: translate(100%, -50%);
}
.tooltips.right-top .tooltips_popup {
    right: calc(var(--tooltipsGap) - 8px);
    top: 0;
    transform: translateX(100%);
}
.tooltips.right-bottom .tooltips_popup {
    right: calc(var(--tooltipsGap) - 8px);
    bottom: 0;
    transform: translateX(100%);
}

/* 三角形 右 */
.tooltips.right .tooltips_popup::before,
.tooltips.right-top .tooltips_popup::before,
.tooltips.right-bottom .tooltips_popup::before {
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 8px 8px 8px 0;
    border-color: transparent var(--tooltipsBgColor) transparent transparent;
}

/* 左 */
.tooltips.left .tooltips_popup {
    left: calc(var(--tooltipsGap) - 8px);
    top: 50%;
    transform: translate(-100%, -50%);
}
.tooltips.left-top .tooltips_popup {
    left: calc(var(--tooltipsGap) - 8px);
    top: 0;
    transform: translateX(-100%);
}
.tooltips.left-bottom .tooltips_popup {
    left: calc(var(--tooltipsGap) - 8px);
    bottom: 0;
    transform: translateX(-100%);
}

/* 三角形 左 */
.tooltips.left .tooltips_popup::before,
.tooltips.left-top .tooltips_popup::before,
.tooltips.left-bottom .tooltips_popup::before {
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent var(--tooltipsBgColor);
}

.fade-enter-active {
    animation: fade 0.3s ease forwards;
}
.fade-leave-active {
    animation: fade 0.3s ease forwards reverse;
}
@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
