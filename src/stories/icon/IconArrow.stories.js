import IconArrow from './IconArrow.vue';

export default {
    title: 'Howie/Icon/Arrow',
    component: IconArrow,
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
        direction: {
            description: 'The chevron direction.',
            type: { name: 'string' },
            control: { type: 'select' },
            options: ['left', 'top', 'right', 'bottom'],
            table: {
                type: {
                    summary: 'left | top | right | bottom'
                },
                defaultValue: {
                    summary: 'left'
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

const TemplateArrow = args => ({
    components: { IconArrow },
    setup() {
        return { args };
    },
    template: '<IconArrow v-bind="args" />'
});

export const Arrow = TemplateArrow.bind({});
Arrow.args = {
    size: 24,
    mainColor: 'currentColor',
    borderColor: 'transparent',
    bgColor: 'transparent',
    direction: 'left',
    pointer: false
};
