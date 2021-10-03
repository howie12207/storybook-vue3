import Marquee from './Marquee.vue';

export default {
    title: 'Howie/Marquee',
    component: Marquee,
    argTypes: {
        content: {
            description: 'Provide marquee list.',
            type: { name: 'array', required: true },
            table: {
                type: {
                    summary: 'array'
                },
                defaultValue: {
                    summary: '[]'
                }
            }
        },
        duration: {
            description:
                'One round time. Priority higher than step. If value equal to 0, using step.',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'second'
                },
                defaultValue: {
                    summary: 0
                }
            }
        },
        step: {
            description:
                'One round time. Priority lower than duration. When duration equl to 0, using this param.',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'px'
                },
                defaultValue: {
                    summary: 100
                }
            }
        },
        color: {
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
        stop: {
            description: 'Hover whether stop or not.',
            type: { name: 'boolean' },
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: false
                }
            }
        }
    }
};

const Template = args => ({
    components: { Marquee },
    setup() {
        return { args };
    },
    template: '<marquee v-bind="args" />'
});

export const Step = Template.bind({});
Step.args = {
    content: ['測試內容第一行', 'go go go go go go go go go go go ', '測試內容第三'],
    color: 'blue',
    step: 100,
    duration: 0,
    stop: false
};

export const Duration = Template.bind({});
Duration.args = {
    ...Step.args,
    duration: 20
};
