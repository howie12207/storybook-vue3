import IconX from './IconX.vue';

export default {
    title: 'Howie/Icon/X',
    component: IconX,
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
                    summary: 'currentColor'
                }
            }
        },
        pointer: {
            description: 'Define whether hover effect or not.',
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

const TemplateX = args => ({
    components: { IconX },
    setup() {
        return { args };
    },
    template: '<IconX v-bind="args" />'
});

export const X = TemplateX.bind({});
X.args = {
    size: 24,
    mainColor: 'currentColor',
    borderColor: 'transparent',
    bgColor: 'transparent',
    pointer: false
};
