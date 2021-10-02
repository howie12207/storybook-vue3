import Breadcrumb from './Breadcrumb.vue';

export default {
    title: 'Howie/Breadcrumb',
    component: Breadcrumb,
    argTypes: {
        list: {
            description: 'The path list.',
            type: { name: 'array', required: true },
            table: {
                type: {
                    summary: 'array',
                    detail: '{name: "", url: ""}'
                }
            }
        },
        mainColor: {
            description: 'The nav color.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'rgb(96, 165, 250)'
                }
            }
        },
        secColor: {
            description: 'The last path color.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'rgb(156, 163, 175)'
                }
            }
        },
        divider: {
            description: 'The divider content between path.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: '/'
                }
            }
        }
    }
};

const TemplateCustom = args => ({
    components: { Breadcrumb },
    setup() {
        return { args };
    },
    template: '<Breadcrumb v-bind="args" />'
});

export const Custom = TemplateCustom.bind({});
Custom.args = {
    mainColor: 'rgb(37, 99, 235)',
    secColor: 'rgb(156, 163, 175)',
    divider: '/',
    list: [
        { name: '首頁', url: '/' },
        { name: '分類', url: '/' },
        { name: '麵包屑', url: '/' },
        { name: '樣式', url: '/' }
    ]
};
