import IconInfo from './IconInfo.vue';

export default {
    title: 'Howie/Icon/Info',
    component: IconInfo,
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
                    summary: 'white'
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
                    summary: 'gray'
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
                    summary: 'gray'
                }
            }
        }
    }
};

const Template = args => ({
    components: { IconInfo },
    setup() {
        return { args };
    },
    template: '<IconInfo v-bind="args" />'
});

export const Info = Template.bind({});
Info.args = {
    size: 24,
    mainColor: 'white',
    borderColor: 'gray',
    bgColor: 'gray'
};
