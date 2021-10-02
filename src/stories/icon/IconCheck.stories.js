import IconCheck from './IconCheck.vue';

export default {
    title: 'Howie/Icon/Check',
    component: IconCheck,
    argTypes: {
        size: {
            description: 'The icon width & height.',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'px'
                },
                defaultValue: {
                    summary: 24
                }
            }
        },
        mainColor: {
            description: 'The symbol color.',
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
        borderColor: {
            description: 'The border color.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'transparent'
                }
            }
        },
        bgColor: {
            description: 'The background color.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'transparent'
                }
            }
        }
    }
};

const Template = args => ({
    components: { IconCheck },
    setup() {
        return { args };
    },
    template: '<IconCheck v-bind="args" />'
});

export const Check = Template.bind({});
Check.args = {
    size: 48,
    mainColor: 'green',
    borderColor: 'transparent',
    bgColor: 'transparent'
};
