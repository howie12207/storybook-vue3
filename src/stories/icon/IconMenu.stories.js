import { ref } from 'vue';
import IconMenu from './IconMenu.vue';

export default {
    title: 'Howie/Icon/Menu',
    component: IconMenu,
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
        status: {
            description: 'The active status.',
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

const Template = args => ({
    components: { IconMenu },
    setup() {
        const status = ref(false);
        return { args, status };
    },
    template: '<IconMenu v-model:status="status" v-bind="args" />'
});

export const Menu = Template.bind({});
Menu.args = {
    size: 32,
    mainColor: '#3b82f6'
};
