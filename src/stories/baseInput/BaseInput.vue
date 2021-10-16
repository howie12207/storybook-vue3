<script setup>
import { ref, computed, nextTick, onMounted } from 'vue';
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
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    multi: {
        type: Boolean,
        default: false
    },
    focus: {
        type: Boolean,
        default: false
    },
    errReserve: {
        type: Boolean,
        default: true
    },
    theme: {
        type: Number,
        default: 1,
        validator: value => [1, 2].includes(value)
    }
});
const emit = defineEmits(['update:inputValue', 'update:isValid', 'onBlur', 'onKeyup']);
import(`./theme${props.theme}.css`);

const inputRef = ref(null);
onMounted(() => {
    if (props.focus) inputRef.value.focus();
});
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
const onKeyup = (value, e) => {
    clearBtnShow.value = value.length > 0;
    emit('onKeyup', e);
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
    <section :class="['input_section', !isValid && blurInput && 'is_error', !multi && 'not_multi']">
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
                    ref="inputRef"
                    :id="id"
                    v-model="valueSync"
                    class="input"
                    :type="type"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    @blur="onBlur(inputValue)"
                    @keyup="onKeyup(inputValue, $event)"
                    @keydown="onKeydown"
                />
                <IconX v-if="clearBtn && clearBtnShow" class="icon_x" pointer @click="clear" />
            </div>
            <div :class="['error_box', errReserve && 'reserve']">
                <div v-if="!isValid && blurInput" class="error_text">
                    {{ errorText(props) }}
                </div>
            </div>
        </div>
    </section>
</template>
