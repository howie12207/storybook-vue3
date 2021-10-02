<script setup>
import Mask from './Mask.vue';
defineProps({
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
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
        default: false
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
        default: 'slide-down',
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
            <div class="popup_box">
                <slot name="title">
                    <h1 class="title">{{ title }}</h1>
                </slot>
                <slot name="content">
                    <h2 class="content">{{ content }}</h2>
                </slot>
                <slot name="footer">
                    <button class="btn btn_confirm" @click="confirm(close)">確認</button>
                    <button class="btn btn_cancel" @click="close">取消</button>
                </slot>
            </div>
        </template>
    </Mask>
</template>

<style scoped>
.popup_box {
    --confirm_color: rgb(16, 185, 129);
    --confirm_light_color: rgb(236, 253, 245);
    --cancel_color: rgb(107, 114, 128);
    --cancel_light_color: rgb(243, 244, 246);

    padding: 16px;
    border-radius: 10px;
    text-align: center;
    background-color: #fff;
    box-sizing: border-box;
}
.title {
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 16px;
}
.content {
    font-size: 16px;
    font-weight: 500;
    margin: 16px 0;
}
.btn {
    display: inline-block;
    font-size: 16px;
    background-color: #fff;
    margin: 0 8px;
    padding: 4px 24px;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.4s;
}
.btn_confirm {
    color: var(--confirm_color);
    background-color: var(--confirm_light_color);
    border: 1px solid var(--confirm_color);
}
.btn_cancel {
    color: var(--cancel_color);
    background-color: var(--cancel_light_color);
    border: 1px solid var(--cancel_color);
}
.btn_confirm:hover {
    color: #fff;
    background-color: var(--confirm_color);
}
.btn_cancel:hover {
    color: #fff;
    background-color: var(--cancel_color);
}
</style>
