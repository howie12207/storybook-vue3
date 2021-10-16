import Badge from './Badge.vue';

export default {
    title: 'Howie/Badge',
    component: Badge,
    decorators: [() => ({ template: '<div style="padding: 3em;"><story /></div>' })],
    argTypes: {
        label: {
            description: 'The Badge text.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: ''
                }
            }
        },
        textColor: {
            description: 'The text color.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: '#fff'
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
                    summary: 'rgba(0, 0, 0, 0.4)'
                }
            }
        },
        gap: {
            description: 'The gap between text to Badge.',
            type: { name: 'number' },
            table: {
                type: {
                    summary: 'number',
                    detail: 'px'
                },
                defaultValue: {
                    summary: 8
                }
            }
        },
        location: {
            description: 'The Badge location.',
            type: { name: 'string' },
            table: {
                type: {
                    summary: 'string',
                    detail: `1. left
2. left-top
3. left-bottom
4. top
5. top-left
6. top-right
7. right
8. right-top
9. right-bottom
10. bottom
11. bottom-left
12. bottom-right
          `
                },
                defaultValue: {
                    summary: 'bottom'
                }
            },
            control: 'select',
            options: [
                'left',
                'left-top',
                'left-bottom',
                'top',
                'top-left',
                'top-right',
                'right',
                'right-top',
                'right-bottom',
                'bottom',
                'bottom-left',
                'bottom-right'
            ]
        }
    }
};

const Template = args => ({
    components: { Badge },
    setup() {
        const displayText = '示範文字';
        return { args, displayText };
    },
    template: '<Badge v-bind="args"><span>{{ displayText }}</span></Badge>'
});

export const Common = Template.bind({});
Common.args = {
    label: '解釋',
    bgColor: 'rgba(0, 0, 0, 0.4)',
    textColor: '#fff',
    location: 'bottom',
    gap: 8
};
