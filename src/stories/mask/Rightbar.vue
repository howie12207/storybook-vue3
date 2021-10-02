<script setup>
import Mask from './Mask.vue';
defineProps({
    duration: {
        type: Number,
        default: 300
    },
    closeOut: {
        type: Boolean,
        default: true
    },
    custom: {
        type: Boolean,
        default: true
    },
    animation_mask: {
        type: String,
        default: 'fade',
        validator(value) {
            return ['', 'fade'].includes(value);
        }
    },
    animation_popup: {
        type: String,
        default: 'slide-left',
        validator(value) {
            return ['', 'slide-down', 'slide-left'].includes(value);
        }
    }
});
const emit = defineEmits(['close']);

const confirm = close => {
    console.log('確認');
    close();
};
const closeEmit = () => {
    emit('close');
};
</script>

<template>
    <Mask
        :duration="duration"
        :closeOut="closeOut"
        :custom="custom"
        :animation_mask="animation_mask"
        :animation_popup="animation_popup"
        @close="closeEmit"
    >
        <template #default="{ close }">
            <div class="rightbar">菜單</div>
        </template>
    </Mask>
</template>

<style scoped>
.rightbar {
    position: fixed;
    right: 0;
    top: 0;
    width: 240px;
    height: 100vh;
    overflow-y: auto;
    padding: 16px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    text-align: center;
    background-color: #fff;
    box-sizing: border-box;
}
</style>
