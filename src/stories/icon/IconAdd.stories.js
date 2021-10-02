import IconAdd from './IconAdd.vue';

export default {
    title: 'Howie/Icon/Add',
    component: IconAdd,
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

const TemplateAdd = args => ({
    components: { IconAdd },
    setup() {
        return { args };
    },
    template: '<IconAdd v-bind="args" />'
});

export const Add = TemplateAdd.bind({});
Add.args = {
    size: 24,
    mainColor: 'currentColor',
    borderColor: 'transparent',
    bgColor: 'transparent',
    pointer: false
};
