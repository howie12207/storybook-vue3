import { ref, onMounted } from 'vue';
import BaseTable from './BaseTable.vue';
import BaseButton from '../baseButton/BaseButton.vue';

export default {
    title: 'Howie/BaseTable',
    component: BaseTable,
    argTypes: {
        listTitles: {
            description: 'Provide table head.',
            table: {
                type: {
                    detail: `label & key are required.
1. label for table head.
2. key correspond to list data.
3. type to format value.
(1) thousand
(2) date
(3) time
(4) slot
          `
                }
            }
        },
        listData: {
            description: 'Provide list data.'
        },
        fixedHead: {
            description: 'Fixed head and set table height.'
        },
        default: {
            description: 'Custom content.',
            table: {
                type: {
                    summary: 'slot:[key]',
                    detail: "<template #key='thisData'>{{thisData}}</template>"
                }
            }
        }
    }
};

const Template = args => ({
    components: { BaseTable },
    setup() {
        return { args };
    },
    template: `<BaseTable v-bind="args" />`
});
const TemplateLoading = args => ({
    components: { BaseTable },
    setup() {
        const loading = ref(args.loading);
        onMounted(() => {
            loading.value = true;
            setTimeout(() => {
                console.log(123);
                loading.value = false;
            }, 1000);
        });
        return { args, loading };
    },
    template: `<BaseTable v-bind="args" :loading="loading" />`
});

const TemplateSlot = args => ({
    components: { BaseTable, BaseButton },
    setup() {
        return { args };
    },
    template: `<div>
    <BaseTable v-bind="args">
      <template #operation="thisData">
        <BaseButton>刪除</BaseButton>
      </template>
    </BaseTable>
  </div>`
});

export const Common = Template.bind({});
Common.args = {
    listTitles: [
        { label: '日期', key: 'date' },
        { label: '標題', key: 'title' },
        { label: '內容', key: 'content' },
        { label: '留言數', key: 'comment' }
    ],
    listData: [
        {
            title: 'StoryBook',
            content: 'StoryBook的展示',
            date: '2020-07-07 07:07:07',
            comment: 7000
        },
        {
            title: 'Tailwind',
            content: 'Tailwind的展示',
            date: '2020-07-17 17:17:17',
            comment: 7777
        },
        {
            title: 'Vue',
            content: 'Vue的展示',
            date: '2020-08-08 08:08:08',
            comment: 6
        },
        {
            title: 'Nuxt',
            content: 'Nuxt的展示',
            date: '2020-09-09 09:09:09',
            comment: 200
        }
    ],
    loading: false,
    fixedHead: false,
    maxHeight: 'initial'
};

export const Loading = TemplateLoading.bind({});
Loading.args = {
    ...Common.args
};

export const FixedHead = Template.bind({});
FixedHead.args = {
    ...Common.args,
    listData: [
        ...Common.args.listData,
        ...Common.args.listData,
        ...Common.args.listData,
        ...Common.args.listData
    ],
    fixedHead: true,
    maxHeight: '300px'
};

export const Format = Template.bind({});
Format.args = {
    ...Common.args,
    listTitles: [
        { label: '日期', key: 'date', type: 'date' },
        { label: '標題', key: 'title' },
        { label: '內容', key: 'content' },
        { label: '留言數', key: 'comment', type: 'thousand' }
    ]
};

export const LimitWidth = Template.bind({});
LimitWidth.args = {
    ...Common.args,
    listTitles: [
        { label: '日期', key: 'date', width: '120px' },
        { label: '標題', key: 'title' },
        { label: '內容', key: 'content' },
        { label: '留言數', key: 'comment' }
    ]
};

export const Slot = TemplateSlot.bind({});
Slot.args = {
    ...Common.args,
    listTitles: [...Common.args.listTitles, { label: '操作', key: 'operation', type: 'slot' }]
};

export const Empty = Template.bind({});
Empty.args = {
    ...Common.args,
    listData: []
};
