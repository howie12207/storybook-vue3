import { ref } from 'vue';
import Mask from './Mask.vue';
import PopupCommon from './PopupCommon.vue';
import Rightbar from './Rightbar.vue';

export default {
    title: 'Howie/Mask',
    component: Mask,
    argTypes: {
        duration: {
            description: 'Animation duration(ms) of closing and opening mask .',
            control: 'number',
            table: {
                type: {
                    summary: 'number'
                },
                defaultValue: {
                    summary: 300,
                    detail: 'px'
                }
            }
        },
        closeOut: {
            description: 'Define click outside will close popup or not.',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: true
                }
            }
        },
        custom: {
            description: 'Determine use default style or custom.',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: false,
                    detail: 'Default style is fixed content in center.'
                }
            }
        },
        animation_mask: {
            description: 'Define mask animation.',
            control: 'string',
            control: { type: 'select' },
            options: ['fade', ''],
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'fade'
                }
            }
        },
        animation_popup: {
            description: 'Define popup animation.',
            control: { type: 'select' },
            options: ['slide-down', 'slide-left', ''],
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'slide-down'
                }
            }
        }
        // close: {
        //     description: 'Close events.',
        //     table: {
        //         type: {
        //             summary: 'function',
        //             detail: 'Use to change status'
        //         }
        //     },
        //     action: 'close'
        // },
        // default: {
        //     description: 'The content inside popup.',
        //     table: {
        //         type: {
        //             summary: 'slot'
        //         }
        //     }
        // }
    }
};

const TemplateDefault = args => ({
    components: { Mask },
    setup() {
        const popupOpen = ref(undefined);
        const popup = target => {
            popupOpen.value = target;
        };
        return { args, popupOpen, popup };
    },
    template: `<button @click="popup('common')">開啟遮罩層</button>
               <Mask v-bind="args" v-if="popupOpen === 'common'" @close="popup"/>`
});

const TemplatePopup = args => ({
    components: { PopupCommon },
    setup() {
        const popupOpen = ref(undefined);
        const popup = target => {
            popupOpen.value = target;
        };
        return { args, popupOpen, popup };
    },
    template: `<button @click="popup('create')">開啟彈窗</button>
               <PopupCommon v-bind="args" v-if="popupOpen === 'create'" @close="popup"/>`
});

const TemplateRightbar = args => ({
    components: { Rightbar },
    setup() {
        const popupOpen = ref(undefined);
        const popup = target => {
            popupOpen.value = target;
        };
        return { args, popupOpen, popup };
    },
    template: `<button @click="popup('rightbar')">開啟右側欄</button>
               <Rightbar v-bind="args" v-if="popupOpen === 'rightbar'" @close="popup"/>`
});

export const Default = TemplateDefault.bind({});
Default.args = {
    duration: 300,
    closeOut: true,
    custom: false,
    animation_mask: 'fade',
    animation_popup: 'slide-down'
};

export const Popup = TemplatePopup.bind({});
Popup.args = {
    ...Default.args,
    title: '新增',
    content: '請確認是否新增此項目'
};

export const RightMenu = TemplateRightbar.bind({});
RightMenu.args = {
    ...Default.args,
    custom: true,
    animation_popup: 'slide-left'
};
