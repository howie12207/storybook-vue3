import BackTop from './BackTop.vue';

export default {
    title: 'Howie/BackTop',
    component: BackTop,
    decorators: [() => ({ template: '<div style="height: 800px"><story /></div>' })],
    argTypes: {
        size: {
            description: 'The BackTop size.',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'px'
                },
                defaultValue: {
                    summary: 40
                }
            }
        },
        visible: {
            description: 'The distance to scrollTop will show BackTop.',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'px'
                },
                defaultValue: {
                    summary: 200
                }
            }
        },
        bottom: {
            description: 'Absolute to bottom',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'px'
                },
                defaultValue: {
                    summary: 40
                }
            }
        },
        right: {
            description: 'Absolute to right',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'px'
                },
                defaultValue: {
                    summary: 40
                }
            }
        },
        zIndex: {
            description: 'z-index',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number'
                },
                defaultValue: {
                    summary: 1000
                }
            }
        }
    }
};

const Template = args => ({
    components: { BackTop },
    setup() {
        return { args };
    },
    template: '<BackTop v-bind="args"></BackTop>'
});

const TemplateSlot = args => ({
    components: { BackTop },
    setup() {
        return { args };
    },
    template: '<BackTop v-bind="args"><span style="font-size: 12px">Top</span></BackTop>'
});

export const Common = Template.bind({});
Common.args = {
    size: 40,
    visible: 200,
    bottom: 40,
    right: 40,
    zIndex: 1000
};

export const Slot = TemplateSlot.bind({});
Slot.args = {
    ...Common.args
};
