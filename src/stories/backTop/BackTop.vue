<script setup>
import { ref, computed, onMounted, onBeforeUnmount, shallowRef } from 'vue';
import { easeInOutCubic } from './animation';

const props = defineProps({
    size: {
        type: Number,
        default: 40
    },
    visible: {
        type: Number,
        default: 200
    },
    right: {
        type: Number,
        default: 40
    },
    bottom: {
        type: Number,
        default: 40
    },
    zIndex: {
        type: Number,
        default: 1000
    }
});
const emit = defineEmits(['scrollToTop']);

onMounted(() => {
    window.addEventListener('scroll', onScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});

const el = shallowRef(document.documentElement);

const show = ref(false);
const onScroll = () => {
    show.value = el.value.scrollTop >= props.visible;
};

const scrollToTop = () => {
    const beginTime = Date.now();
    const beginValue = el.value.scrollTop;
    const scrollFrame = () => {
        // 0.5秒內滾動完
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
            el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress));
            requestAnimationFrame(scrollFrame);
        } else {
            el.value.scrollTop = 0;
        }
    };
    requestAnimationFrame(scrollFrame);
    emit('scrollToTop');
};

const style = computed(() => {
    return {
        '--backTopSize': `${props.size}px`,
        '--backTopRight': `${props.right}px`,
        '--backTopBottom': `${props.bottom}px`,
        '--backTopZIndex': props.zIndex
    };
});
</script>

<template>
    <transition name="fade">
        <div v-show="show" :style="style" class="back_top" @click="scrollToTop">
            <slot>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(37, 99, 235)"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                >
                    <path d="M24 22h-24l12-20z" />
                </svg>
            </slot>
        </div>
    </transition>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.back_top {
    position: fixed;
    z-index: var(--backTopZIndex);
    right: var(--backTopRight);
    bottom: var(--backTopBottom);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--backTopSize);
    height: var(--backTopSize);
    border-radius: 50%;
    box-shadow: 0 0 8px #0000001f;
    cursor: pointer;
    transition: 0.3s;
}
.back_top:hover {
    background-color: rgb(239, 246, 255);
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
