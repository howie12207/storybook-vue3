<script setup>
import { ref, computed, nextTick, defineProps, defineEmits } from 'vue';
import IconX from './IconX.vue';
import { typeRules, lengthRules, errorText } from './inputVerify.js';
const props = defineProps({
    inputValue: {
        type: [String, Number],
        default: ''
    },
    isValid: {
        type: Boolean,
        default: true
    },
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text',
        validator: value => ['text', 'password', 'number'].includes(value)
    },
    id: {
        type: String,
        required: true
    },
    rules: {
        type: Object,
        default: () => ({})
    },
    errMsg: {
        type: String,
        default: ''
    },
    clearBtn: {
        type: Boolean,
        default: true
    },
    multi: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits(['update:inputValue', 'update:isValid', 'onBlur', 'onKeyup']);
const blurInput = ref(false);
const clearBtnShow = ref(false);
const valueSync = computed({
    get: () => props.inputValue,
    set: val => emit('update:inputValue', val)
});
const onBlur = value => {
    if (!blurInput.value) blurInput.value = true;
    emit('onBlur', value);
    nextTick(() => validate(value));
};
const onKeyup = value => {
    clearBtnShow.value = value.length > 0;
    emit('onKeyup', value);
    nextTick(() => validate(value));
};
const onKeydown = e => {
    const code = {
        number: [69, 107, 109, 110, 187, 189, 190],
        decimal: [69, 107, 109, 187, 189]
    };
    const limit = props.rules.limit;
    if (!code[limit]) return;
    if (code[limit].includes(e.keyCode)) e.preventDefault();
};
const validate = value => {
    if (!blurInput.value) return;
    let isValid = true;
    if (Object.keys(props.rules).length > 0) {
        const typeLimit = typeRules(value, props.rules.limit);
        const lengthLimit = lengthRules(value, props);
        isValid = typeLimit && lengthLimit;
    }
    emit('update:isValid', props.errMsg === '' && isValid);
};
const clear = () => {
    valueSync.value = '';
    blurInput.value = false;
    clearBtnShow.value = false;
    emit('update:isValid', Object.keys(props.rules).length === 0);
};
</script>

<template>
    <section :class="['input_section', !isValid && blurInput && 'is_error', !multi && 'flex']">
        <div class="left">
            <slot name="label">
                <label :class="['label', valueSync !== '' && 'not_empty']" :for="id">{{
                    label
                }}</label>
            </slot>
            <div class="left_bottom"></div>
        </div>
        <div class="right">
            <div class="input_block">
                <input
                    :id="id"
                    v-model="valueSync"
                    class="input"
                    :type="type"
                    :placeholder="placeholder"
                    @blur="onBlur(inputValue)"
                    @keyup="onKeyup(inputValue)"
                    @keydown="onKeydown"
                />
                <IconX v-if="clearBtn && clearBtnShow" class="icon_x" pointer @click="clear" />
            </div>
            <div class="error_box">
                <div v-if="!isValid && blurInput" class="error_text">
                    {{ errorText(props) }}
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.input_section {
    --textColor: #374151;
    --borderColor: #374151;
    --activeBorderColor: #2390fa;
    --errorColor: #fd393e;
}
.input_block {
    position: relative;
}
.input_block:focus-within::after {
    width: 100%;
    left: 0;
}
.input {
    display: block;
    position: relative;
    width: 100%;
    outline: none;
    padding: 0 24px 0 8px;
    background-color: transparent;
    border: none;
    border-bottom: 1px var(--borderColor) solid;
}
.input_block::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    left: 50%;
    background-color: var(--activeBorderColor);
    transition: 0.5s;
}
.label {
    font-weight: 600;
    color: var(--textColor);
}
.is_error .label {
    color: var(--errorColor);
}
.is_error .input {
    border-color: var(--errorColor);
}
.is_error .input_block::after {
    background-color: var(--errorColor);
}
.is_error .icon_x {
    color: var(--errorColor);
}

.error_box {
    font-size: 14px;
    text-align: left;
    color: var(--errorColor);
}
.icon_x {
    position: absolute;
    right: 0;
    bottom: 0;
    color: var(--activeBorderColor);
}

.flex {
    display: flex;
}
.flex .label {
    flex-shrink: 0;
    margin-right: 8px;
}
.flex .right {
    flex-grow: 1;
}
</style>
