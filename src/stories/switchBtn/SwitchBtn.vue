<script setup>
import { computed } from 'vue';

const props = defineProps({
    status: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    leftLabel: {
        type: String,
        default: ''
    },
    rightLabel: {
        type: String,
        default: ''
    },
    labelColor: {
        type: String,
        default: 'currentColor'
    },
    activeColor: {
        type: String,
        default: '#34D399'
    },
    inactiveColor: {
        type: String,
        default: '#E5E7EB'
    },
    disabledColor: {
        type: String,
        default: '#E5E7EB'
    },
    width: {
        type: Number,
        default: 72
    },
    height: {
        type: Number,
        default: 32
    }
});
const emit = defineEmits(['changeStatus']);

const changeStatus = value => {
    console.log(value);
    emit('changeStatus', value);
};

const style = computed(() => {
    return `
                --labelColor: ${props.labelColor};
                --activeColor: ${props.activeColor};
                --inactiveColor: ${props.inactiveColor};
                --disabledColor: ${props.disabledColor};
                --switchWidth: ${props.width}px;
                --switchHeight: ${props.height}px;
            `;
});
</script>
<template>
    <div :style="style" :class="['switch_section', status && 'active', disabled && 'disabled']">
        <slot name="left"
            ><span v-if="leftLabel" class="switch_content">{{ leftLabel }}</span></slot
        >
        <span class="slider round" @click="changeStatus(!status)"></span>
        <slot name="right"
            ><span v-if="rightLabel" class="switch_content">{{ rightLabel }}</span></slot
        >
    </div>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.switch_section {
    display: flex;
    align-items: center;
    position: relative;
}
.switch_section .switch_content {
    color: var(--labelColor);
    margin: 0 8px;
}
.switch_section .slider {
    position: relative;
    display: inline-block;
    width: var(--switchWidth);
    height: var(--switchHeight);
    cursor: pointer;
    background-color: var(--inactiveColor);
    transition: 0.4s;
}
.switch_section .slider::before {
    position: absolute;
    content: '';
    width: calc(var(--switchHeight) - 8px);
    height: calc(var(--switchHeight) - 8px);
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    transition: 0.4s;
}

.switch_section.active .slider {
    background-color: var(--activeColor);
}

.switch_section.active .slider::before {
    transform: translateX(calc(var(--switchWidth) - var(--switchHeight)));
}

.switch_section.disabled .slider {
    cursor: not-allowed;
    opacity: 0.4;
    background-color: var(--disabledColor);
}
.switch_section .slider.round {
    border-radius: var(--switchHeight);
}
.switch_section .slider.round::before {
    border-radius: 50%;
}
</style>
