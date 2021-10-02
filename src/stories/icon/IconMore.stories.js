import IconMore from './IconMore.vue';

export default {
    title: 'Howie/Icon/More',
    component: IconMore,
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
        }
    }
};

const TemplateMore = args => ({
    components: { IconMore },
    setup() {
        return { args };
    },
    template: '<IconMore v-bind="args" />'
});

export const More = TemplateMore.bind({});
More.args = {
    size: 32,
    mainColor: 'currentColor',
    borderColor: 'currentColor',
    lineWidth: 2
};
