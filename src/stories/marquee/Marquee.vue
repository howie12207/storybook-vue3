<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
    content: {
        type: Array,
        default: () => [],
        required: true
    },
    color: {
        type: String,
        default: 'currentColor'
    },
    step: {
        type: Number,
        default: 100
    },
    duration: {
        type: Number,
        default: 0
    },
    stop: {
        type: Boolean,
        default: false
    }
});

const marqueeContent = ref(null);
const width = ref('');

onMounted(() => {
    width.value = marqueeContent.value.clientWidth > 1000 ? marqueeContent.value.clientWidth : 1000;
});

const style = computed(() => {
    const time = props.duration > 0 ? props.duration : width.value / props.step;
    return `
                --scrollDuration: ${time}s;
                --textColor: ${props.color};
            `;
});
</script>

<template>
    <div :style="style" :class="['marquee', { stop }]">
        <div ref="marqueeContent" class="content">
            <span v-for="(item, i) of content" class="item" :key="i">{{ item }}</span>
        </div>
    </div>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.marquee {
    --moveInitial: 100vw;
    --moveFinal: -100%;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    color: var(--textColor);
}

.marquee .content {
    width: fit-content;
    position: relative;
    transform: translateX(var(--moveInitial));
    animation: marquee var(--scrollDuration) linear infinite;
    animation-play-state: running;
}
.marquee .content .item {
    padding-right: 8vw;
}

.marquee.stop:hover .content {
    animation-play-state: paused;
}

@keyframes marquee {
    0% {
        transform: translateX(var(--moveInitial));
    }
    100% {
        transform: translateX(var(--moveFinal));
    }
}
</style>
