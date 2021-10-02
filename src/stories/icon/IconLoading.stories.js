import IconLoading from './IconLoading.vue';

export default {
    title: 'Howie/Icon/Loading',
    component: IconLoading,
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
                    summary: 80
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
                    summary: '#f00'
                }
            }
        }
    }
};

const Template = args => ({
    components: { IconLoading },
    setup() {
        return { args };
    },
    template: '<IconLoading v-bind="args" />'
});

export const Loading = Template.bind({});
Loading.args = {
    size: 80,
    mainColor: '#f00'
};
