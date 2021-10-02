import IconChevron from './IconChevron.vue';

export default {
    title: 'Howie/Icon/Chevron',
    component: IconChevron,
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
        lineWidth: {
            description: 'The symbol lineWidth.',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'px'
                },
                defaultValue: {
                    summary: 2
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

const TemplateChevron = args => ({
    components: { IconChevron },
    setup() {
        return { args };
    },
    template: '<IconChevron v-bind="args" />'
});

export const Chevron = TemplateChevron.bind({});
Chevron.args = {
    size: 24,
    mainColor: 'currentColor',
    borderColor: 'transparent',
    bgColor: 'transparent',
    direction: 'left',
    lineWidth: 2,
    pointer: false
};
