import { ref } from 'vue';
import SwitchBtn from './SwitchBtn.vue';

export default {
    title: 'Howie/SwitchBtn',
    component: SwitchBtn,
    argTypes: {
        status: {
            description: 'The switch status.',
            type: { name: 'boolean' },
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: false
                }
            }
        },
        disabled: {
            description: 'Disabled status',
            type: { name: 'boolean' },
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: false
                }
            }
        },
        leftLabel: {
            description: 'The text of left label.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: ''
                }
            }
        },
        rightLabel: {
            description: 'The text of right label.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: ''
                }
            }
        },
        labelColor: {
            description: 'The text color.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'currentColor'
                }
            }
        },
        activeColor: {
            description: 'The active color.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: '#34D399'
                }
            }
        },
        inactiveColor: {
            description: 'The inactive color.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: '#E5E7EB'
                }
            }
        },
        disabledColor: {
            description: 'The inactive color.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: '#E5E7EB'
                }
            }
        },
        width: {
            description: 'The switch width.',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'px'
                },
                defaultValue: {
                    summary: 72
                }
            }
        },
        height: {
            description: 'The switch height.',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'px'
                },
                defaultValue: {
                    summary: 32
                }
            }
        },
        changeStatus: {
            description: 'Emit function when status change.',
            type: { name: 'function' },
            table: {
                type: {
                    summary: 'function'
                }
            }
        },
        left: {
            description: 'Slot for left label.',
            control: { type: 'text' },
            table: {
                type: {
                    summary: 'html'
                }
            }
        },
        right: {
            description: 'Slot for right label.',
            control: { type: 'text' },
            table: {
                type: {
                    summary: 'html'
                }
            }
        }
    }
};

const Template = args => ({
    components: { SwitchBtn },
    setup() {
        const status = ref(args.status);
        const disabled = ref(args.disabled);
        const changeStatus = active => {
            disabled.value = true;
            setTimeout(() => {
                status.value = active;
                disabled.value = false;
            }, 1000);
        };
        return { args, status, disabled, changeStatus };
    },
    template:
        '<SwitchBtn v-bind="args" :status="status" :disabled="disabled" @changeStatus="changeStatus" />'
});

const TemplateSlot = args => ({
    components: { SwitchBtn },
    setup() {
        const status = ref(args.status);
        const disabled = ref(args.disabled);
        const changeStatus = active => {
            disabled.value = true;
            setTimeout(() => {
                status.value = active;
                disabled.value = false;
            }, 1000);
        };
        return { args, status, disabled, changeStatus };
    },
    template: `<SwitchBtn v-bind="args" :status="status" :disabled="disabled" @changeStatus="changeStatus">
          <template #left><span style="padding:0 8px">左slot</span></template>
          <template #right><span style="padding:0 8px">右slot</span></template>
        </SwitchBtn>`
});

export const Common = Template.bind({});
Common.args = {
    status: false,
    disabled: false,
    leftLabel: '關',
    rightLabel: '開',
    labelColor: 'currentColor',
    activeColor: '#34D399',
    inactiveColor: '#E5E7EB',
    disabledColor: '#E5E7EB',
    width: 72,
    height: 32
};

export const Slot = TemplateSlot.bind({});
Slot.args = {
    ...Common.args
};
