<script setup>
import { computed } from 'vue';

const props = defineProps({
    list: {
        type: Array,
        required: true
    },
    mainColor: {
        type: String,
        default: 'rgb(96, 165, 250)'
    },
    secColor: {
        type: String,
        default: 'rgb(156, 163, 175)'
    },
    divider: {
        type: String,
        default: '/'
    }
});

const style = computed(() => {
    return {
        '--breadcrumbColor': props.mainColor,
        '--breadcrumbSecColor': props.secColor
    };
});
</script>

<template>
    <div :style="style" class="breadcrumb">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path
                d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
            />
        </svg>
        <template v-for="(item, index) of list">
            <template v-if="index !== list.length - 1 && item.url">
                <router-link class="breadcrumb_item" :to="item.url" :key="index">{{
                    item.name
                }}</router-link>
                <span class="divider" :key="`${index}divider`">{{ divider }}</span>
            </template>
            <span v-else class="breadcrumb_item" :key="index">{{ item.name }}</span>
        </template>
    </div>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.breadcrumb {
    display: flex;
    align-items: center;
}
.breadcrumb .breadcrumb_item {
    position: relative;
    margin: 0 8px;
    text-decoration: none;
    color: var(--breadcrumbColor);
    transition: 0.4s;
}
.breadcrumb a.breadcrumb_item:hover {
    opacity: 0.7;
}
.breadcrumb span.breadcrumb_item,
.breadcrumb .divider {
    color: var(--breadcrumbSecColor);
}
</style>
