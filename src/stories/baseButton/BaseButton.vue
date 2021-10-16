<script setup>
import { computed } from 'vue';
import IconLoading from './IconLoading.vue';
const props = defineProps({
    mainColor: {
        type: String,
        default: '#10b981'
    },
    disabledColor: {
        type: String,
        default: '#d1d5db'
    },
    loadingColor: {
        type: String,
        default: '#d1d5db'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'button',
        validator: value => ['button', 'submit', 'reset'].includes(value)
    }
});
const emit = defineEmits(['click']);

const onClick = e => {
    if (!props.disabled) emit('click', e);
};

const style = computed(() => {
    return {
        '--buttonMainColor': props.mainColor,
        '--buttonDisabledColor': props.disabledColor
    };
});
</script>

<template>
    <button
        :style="style"
        :type="type"
        :class="['base_button', { disabled }, { loading }]"
        @click="onClick"
    >
        <IconLoading
            v-if="loading"
            :mainColor="loadingColor"
            class="icon"
            :size="16"
        /><slot></slot>
    </button>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.base_button {
    display: inline-block;
    position: relative;
    border: 1px solid var(--buttonMainColor);
    background-color: #fff;
    color: var(--buttonMainColor);
    padding: 4px 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.4s;
}
.base_button:hover {
    background-color: var(--buttonMainColor);
    color: #fff;
}
.base_button.disabled {
    border: 1px solid var(--buttonDisabledColor);
    color: var(--buttonDisabledColor);
    cursor: not-allowed;
}
.base_button.loading {
    padding: 4px 8px 4px 24px;
}
.base_button.disabled:hover {
    background-color: initial;
    color: var(--buttonDisabledColor);
}
.icon {
    position: absolute;
    left: 4px;
    top: 8px;
}
</style>
