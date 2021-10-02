import IconWarning from './IconWarning.vue';

export default {
    title: 'Howie/Icon/Warning',
    component: IconWarning,
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
                    summary: 32
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
                    summary: 'currentColor'
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
    components: { IconWarning },
    setup() {
        return { args };
    },
    template: '<IconWarning v-bind="args" />'
});

export const Warning = Template.bind({});
Warning.args = {
    size: 32,
    mainColor: 'currentColor',
    borderColor: 'currentColor',
    bgColor: 'transparent'
};
