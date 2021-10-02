import { ref } from 'vue';
import BaseInput from './BaseInput.vue';

export default {
    title: 'Howie/BaseInput',
    component: BaseInput,
    argTypes: {
        inputValue: {
            description: 'Input value',
            table: {
                defaultValue: {
                    summary: '',
                    category: 'Do not operate manually'
                },
                type: {
                    summary: 'string | number'
                }
            }
        },
        isValid: {
            description: 'Verify status',
            table: {
                defaultValue: {
                    summary: false,
                    category: 'Do not operate manually'
                },
                type: {
                    summary: 'boolean'
                }
            }
        },
        label: {
            description: 'Label content',
            type: { name: 'string' },
            table: {
                defaultValue: {
                    summary: ''
                },
                type: {
                    summary: 'string'
                }
            }
        },
        placeholder: {
            description: 'Input placeholder',
            type: { name: 'string' },
            table: {
                defaultValue: {
                    summary: ''
                },
                type: {
                    summary: 'string'
                }
            }
        },
        type: {
            description: 'Input type',
            type: { name: 'string' },
            control: { type: 'select' },
            options: ['text', 'password', 'number'],
            table: {
                defaultValue: {
                    summary: 'text'
                },
                type: {
                    summary: 'text | number'
                }
            }
        },
        id: {
            description: 'Unique id for label & input binding',
            type: { name: 'string', required: true },
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        rules: {
            description: 'Verify rules',
            type: { name: 'object' },
            table: {
                defaultValue: {
                    summary: {},
                    detail: `1. min with max limit min & max specify value length.
2. atLeast limit at least specify value length.
3. only limit only specify value length.
4. limit within enAndNumber limit only accept english & number.
5. limit within en limit only accept english.
6. limit within number limit only accept number.
7. limit within email limit only accept mail format.`
                },
                type: {
                    summary: 'boolean'
                }
            }
        },
        multi: {
            description: 'Mutiple lines for label and input',
            type: { name: 'boolean' },
            table: {
                defaultValue: {
                    summary: false
                },
                type: {
                    summary: 'boolean'
                }
            }
        },
        clearBtn: {
            description: 'Show clear button or not',
            type: { name: 'boolean' },
            table: {
                defaultValue: {
                    summary: false
                },
                type: {
                    summary: 'boolean'
                }
            }
        },
        errMsg: {
            description: 'Define custom error message',
            type: { name: 'string' },
            table: {
                defaultValue: {
                    summary: ''
                },
                type: {
                    summary: 'string'
                }
            }
        }
    }
};

const Template = args => ({
    components: { BaseInput },
    setup() {
        const inputValue = ref('');
        const isValid = ref(false);
        return { args, inputValue, isValid };
    },
    template: `<BaseInput v-bind="args" v-model:inputValue="inputValue" v-model:isValid="isValid"></BaseInput>`
});
const TemplateCompare = args => ({
    components: { BaseInput },
    setup() {
        const inputValue1 = ref('');
        const isValid1 = ref(false);
        const inputValue2 = ref('');
        const isValid2 = ref(false);
        const errMsg = ref('');
        const confirmPwd = target => {
            if (target === 'first' && inputValue2.value === '') return;
            if (inputValue1.value !== inputValue2.value) {
                if (target === 'first') isValid2.value = false;
                errMsg.value = '密碼不同';
            } else {
                if (target === 'first') inputValue2.value = true;
                errMsg.value = '';
            }
        };
        return { args, inputValue1, inputValue2, isValid1, isValid2, errMsg, confirmPwd };
    },
    template: `<BaseInput v-bind="args" v-model:inputValue="inputValue1" v-model:isValid="isValid1" :id="args.id1" :label="args.label1" :rules="args.rules1" @onBlur="confirmPwd('first')" @onKeyup="confirmPwd('first')"></BaseInput>
               <BaseInput v-bind="args" v-model:inputValue="inputValue2" v-model:isValid="isValid2" :id="args.id2" :label="args.label2" :rules="args.rules2" :errMsg="errMsg" @onBlur="confirmPwd" @onKeyup="confirmPwd"></BaseInput>`
});

export const Common = Template.bind({});
Common.args = {
    label: '備註',
    id: 'remark',
    placeholder: '請輸入...',
    type: 'text',
    rules: {},
    multi: false,
    clearBtn: false
};

export const IsRequired = Template.bind({});
IsRequired.args = {
    ...Common.args,
    label: '暱稱',
    id: 'nickname',
    rules: { isRequired: true }
};

export const LimitEn = Template.bind({});
LimitEn.args = {
    ...Common.args,
    label: '英文名',
    id: 'enName',
    rules: { limit: 'en' }
};

export const LimitEnAndNumber = Template.bind({});
LimitEnAndNumber.args = {
    ...Common.args,
    label: '帳號',
    id: 'account',
    rules: { limit: 'enAndNumber' }
};

export const LimitNumber = Template.bind({});
LimitNumber.args = {
    ...Common.args,
    label: '金額',
    id: 'amount',
    type: 'number',
    rules: { limit: 'number' }
};

export const LimitNumberDecimal = Template.bind({});
LimitNumberDecimal.args = {
    ...Common.args,
    label: '美金',
    id: 'usd',
    type: 'number',
    rules: { limit: 'decimal' }
};

export const LimitEmail = Template.bind({});
LimitEmail.args = {
    ...Common.args,
    label: '信箱',
    id: 'email',
    rules: { limit: 'email' }
};

export const MinMax = Template.bind({});
MinMax.args = {
    ...Common.args,
    label: '帳號',
    id: 'account',
    rules: { limit: 'enAndNumber', min: 6, max: 16 }
};

export const AtLeast = Template.bind({});
AtLeast.args = {
    ...Common.args,
    label: '姓名',
    id: 'name',
    rules: { atLeast: 2 }
};

export const Only = Template.bind({});
Only.args = {
    ...Common.args,
    label: '手機',
    id: 'phone',
    type: 'number',
    rules: { only: 10 }
};

export const Compare = TemplateCompare.bind({});
Compare.args = {
    ...Common.args,
    label1: '密碼',
    id1: 'password',
    rules1: { limit: 'enAndNumber', min: 6, max: 16 },
    label2: '確認密碼',
    id2: 'confirmPassword',
    rules2: { limit: 'enAndNumber', min: 6, max: 16 }
};
