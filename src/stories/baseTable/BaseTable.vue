<script setup>
import { computed } from 'vue';
import { toDateTime, toDate, toThousand } from './format';
import IconLoading from './IconLoading.vue';

const props = defineProps({
    listTitles: {
        type: Array,
        required: true
    },
    listData: {
        type: Array,
        default: () => []
    },
    loading: {
        type: Boolean,
        default: false
    },
    fixedHead: {
        type: Boolean,
        default: false
    },
    maxHeight: {
        type: String,
        default: 'initial'
    },
    emptyText: {
        type: String,
        default: '暫無資料'
    }
});

const style = computed(() => {
    return {
        '--baseTableHeight': props.maxHeight
    };
});
</script>

<template>
    <div
        :style="style"
        :class="['base_table', { fixed_head: fixedHead }, { limit_height: maxHeight }]"
    >
        <div class="table_wrapper">
            <table class="table_section">
                <thead>
                    <tr>
                        <th
                            v-for="(head, index) of listTitles"
                            :key="index"
                            :style="{
                                width: head.width,
                                minWidth: head.width,
                                maxWidth: head.width
                            }"
                        >
                            {{ head.label }}
                        </th>
                    </tr>
                </thead>
                <tbody v-if="loading">
                    <tr class="loading">
                        <td :colspan="listTitles.length"><IconLoading /></td>
                    </tr>
                </tbody>
                <tbody v-else-if="listData && listData.length > 0">
                    <tr v-for="(rowData, index) of listData" :key="index">
                        <td v-for="(item, i) of listTitles" :key="i">
                            <!-- 客製化 slot -->
                            <template v-if="item.type === 'slot'">
                                <slot :name="item.key" :thisData="rowData"></slot>
                            </template>
                            <!-- 千分位 -->
                            <template v-else-if="item.type === 'thousand'">{{
                                toThousand(rowData[item.key])
                            }}</template>
                            <!-- 日期 -->
                            <template v-else-if="item.type === 'date'">{{
                                toDate(rowData[item.key])
                            }}</template>
                            <!-- 時間 -->
                            <template v-else-if="item.type === 'time'">{{
                                toDateTime(rowData[item.key])
                            }}</template>
                            <!-- 沒特殊需求 -->
                            <template v-else>{{ rowData[item.key] }}</template>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr class="empty">
                        <td :colspan="listTitles.length">{{ emptyText }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}
.base_table {
    padding: 8px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 4px;
}
.base_table .table_wrapper {
    overflow-x: auto;
}
.base_table .table_wrapper .table_section {
    width: 100%;
    border-collapse: collapse;
}
.table_section thead tr,
.table_section tbody tr:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.table_section tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.15);
}

.table_section th,
.table_section td {
    position: relative;
    padding: 8px;
    text-align: center;
    vertical-align: middle;
}

.table_section .loading td {
    height: 160px;
}
.table_section .empty td {
    height: 160px;
    line-height: 160px;
}

.base_table.fixed_head .table_section thead tr {
    border-bottom: none;
}
.base_table.fixed_head .table_section thead th {
    position: sticky;
    background-color: #fff;
    top: 0;
    z-index: 2;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 10%);
}

.base_table.limit_height .table_wrapper {
    max-height: var(--baseTableHeight);
}

.base_table .table_wrapper::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
.base_table .table_wrapper::-webkit-scrollbar-track {
    background-color: rgba(10, 18, 26, 0.15);
    border-radius: 10px;
}
.base_table .table_wrapper::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 10px;
}
</style>
