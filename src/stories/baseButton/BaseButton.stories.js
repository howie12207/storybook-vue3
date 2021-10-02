import { ref } from 'vue';
import BaseButton from './BaseButton.vue';

export default {
    title: 'Howie/BaseButton',
    component: BaseButton,
    argTypes: {
        mainColor: {
            description:
                'The border color and text color in normal, or background color when hover.',
            type: { name: 'string' },
            table: {
                defaultValue: {
                    summary: '#10b981'
                },
                type: {
                    summary: 'string'
                }
            }
        },
        disabledColor: {
            description: 'The border color and text color when disabled.',
            type: { name: 'string' },
            table: {
                defaultValue: {
                    summary: '#d1d5db'
                },
                type: {
                    summary: 'string'
                }
            }
        },
        loadingColor: {
            description: 'The loading icon color.',
            type: { name: 'string' },
            table: {
                defaultValue: {
                    summary: '#d1d5db'
                },
                type: {
                    summary: 'string'
                }
            }
        },
        disabled: {
            description: 'Define status whether disalbed or not.',
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
        loading: {
            description: 'Define status whether loading or not.',
            type: { name: 'boolean' },
            table: {
                defaultValue: {
                    summary: false
                },
                type: {
                    summary: 'boolean'
                }
            }
        }
    }
};

const Template = args => ({
    components: { BaseButton },
    setup() {
        const loading = ref(args.loading);
        const disabled = ref(args.disabled);
        const click = () => {
            disabled.value = !disabled.value;
            loading.value = !loading.value;
            setTimeout(() => {
                disabled.value = !disabled.value;
                loading.value = !loading.value;
            }, 1000);
        };
        return { args, loading, disabled, click };
    },
    template:
        '<BaseButton v-bind="args" :disabled="disabled" :loading="loading" @click="click">Common</BaseButton>'
});

export const Common = Template.bind({});
Common.args = {
    mainColor: '#10b981',
    disabledColor: '#d1d5db',
    loadingColor: '#d1d5db',
    disabled: false,
    loading: false
};
