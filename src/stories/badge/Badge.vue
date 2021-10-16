<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    value: {
        type: [String, Number],
        default: ''
    },
    max: {
        type: Number,
        default: 99
    }
});
</script>

<template>
    <div class="badge">
        <sup>
            <slot name="sup"></slot>
        </sup>
        <slot></slot>
    </div>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
</style>
