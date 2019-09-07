<template>
  <div class="f-table-wrapper">
    <table class="f-table" :class="{ bordered, striped }" ref="tableHead">
      <thead class="f-table-thead">
        <tr>
          <th v-if="expandField" style="width:50px"></th>
          <th v-if="checkable" style="width: 50px" class="f-table-center">
            <f-checkbox
              @change="onChangeAllItems"
              :value="isAllSelectedItems"
              :indeterminate="indeterminate"
            ></f-checkbox>
          </th>
          <th v-if="numberVisible" style="width: 50px">#</th>
          <th v-for="column in columns" :key="column.field" :style="{width: column.width + 'px'}">
            <div
              class="f-table-column"
              :class="{'f-table-sorter': column.sortable}"
              @click="changeOrderBy(column.field)"
            >
              {{ column.text }}
              <span v-if="column.sortable" class="f-sorter-icons">
                <f-icon
                  name="caret-up"
                  :class="{ active: orderBy.field === column.field && orderBy.order === 'esc' }"
                ></f-icon>
                <f-icon
                  name="caret-down"
                  :class="{ active: orderBy.field === column.field && orderBy.order === 'desc' }"
                ></f-icon>
              </span>
            </div>
          </th>
          <th v-if="$scopedSlots.$stable" ref="actionHeader">操作</th>
        </tr>
      </thead>
    </table>
    <div :style="{height: scrollHeight, overflow: 'scroll' }">
      <table class="f-table" :class="{ bordered, striped }">
        <tbody class="f-table-tbody">
          <template v-for="(item, index) in renderDataSource">
            <tr :key="item.id">
              <td style="width: 50px" v-if="expandField">
                <f-icon
                  name="down"
                  v-if="inExpendedIds(item.id) && !!item[expandField]"
                  @click="insertItem(item.id)"
                  style="cursor: pointer;"
                ></f-icon>
                <f-icon name="right" v-else @click="insertItem(item.id)" style="cursor: pointer;"></f-icon>
              </td>
              <td v-if="checkable" style="width: 50px" class="f-table-center">
                <f-checkbox
                  @change="onChangeItem(item, index, $event)"
                  :value="inSelectedItems(item)"
                ></f-checkbox>
              </td>
              <td v-if="numberVisible" style="width: 50px">{{ index + 1 }}</td>
              <template v-for="column in columns">
                <td :style="{width: column.width + 'px'}" :key="column.field">
                  <template v-if="column.render">
                    <vnodes :vnodes="column.render(item[column.field])"></vnodes>
                  </template>
                  <template v-else>{{ item[column.field] }}</template>
                </td>
              </template>
              <td v-if="$scopedSlots.$stable">
                <div ref="actions" style="display:inline-block;">
                  <slot :item="item"></slot>
                </div>
              </td>
            </tr>
            <tr
              :key="`${item.id}-expandField`"
              v-if="inExpendedIds(item.id) && !!item[expandField]"
              class="f-expand-row"
            >
              <td></td>
              <td
                :colspan="columns.length + expandedColSpan"
                style="text-align: left;"
              >{{item[expandField]}}</td>
            </tr>
          </template>
          <template v-if="renderDataSource.length === 0">
            <div class="f-table__empty-default">
              <div class="f-table__empty-icon">
                <div class="f-table__icon--inner">
                  <span class="inner-rect"></span>
                  <span class="inner-horizontal-line inner-line1"></span>
                  <span class="inner-horizontal-line inner-line2"></span>
                  <span class="inner-horizontal-line inner-line3"></span>
                  <span class="inner-circle"></span>
                </div>
              </div>
              <span class="f-table__empty-text">No Data</span>
            </div>
          </template>
        </tbody>
      </table>
    </div>
    <div class="f-table-loading" v-if="loading">
      <f-icon name="loading"></f-icon>
    </div>
  </div>
</template>

<script>
import Icon from "../icon/Icon";
import Scroll from "../scroll/scroll";
import Checkbox from "../formControls/checkbox";

export default {
  name: "FlyTable",
  props: {
    dataSource: {
      type: Array,
      default: () => ([])
    },
    // 头部序号是否展示
    numberVisible: {
      type: Boolean,
      default: false
    },
    // 是否带边框
    bordered: {
      type: Boolean,
      default: false
    },
    // 是否条纹展示
    striped: {
      type: Boolean,
      default: false
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    orderBy: {
      type: Object,
      default: () => ({})
    },
    loading: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    },
    // 展开的Key
    expandField: {
      type: String
    },
    // 是否可选中
    checkable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "f-icon": Icon,
    vnodes: {
      functional: true,
      render: (h, context) => context.props.vnodes
    },
    "f-scroll": Scroll,
    "f-checkbox": Checkbox
  },
  data() {
    return {
      expandedIds: [],
      columns: [],
      scrollHeight: undefined,
      // 是否半选
      indeterminate: false,
      renderDataSource: null
    };
  },
  methods: {
    onChangeItem(item, index, selected) {
      let copySelected = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) {
        copySelected.push(item);
      } else {
        const findIndex = copySelected.findIndex(value => value.id === item.id);
        copySelected.splice(findIndex, 1);
      }
      this.$emit("update:selectedItems", copySelected);
    },
    onChangeAllItems(selected) {
      this.$emit("update:selectedItems", selected ? this.dataSource : []);
    },
    inSelectedItems(item) {
      return (
        this.selectedItems.filter(selectedItem => selectedItem.id === item.id)
          .length > 0
      );
    },
    changeOrderBy(key) {
      let copyOrderBy = JSON.parse(JSON.stringify(this.orderBy));
      const oldOrder = copyOrderBy["order"];
      if (key === copyOrderBy["field"]) {
        if (oldOrder === "esc") {
          copyOrderBy["order"] = "desc";
        } else if (oldOrder === "desc") {
          copyOrderBy["order"] = true;
        } else {
          copyOrderBy["order"] = "esc";
        }
      } else {
        copyOrderBy["order"] = "esc";
      }
      copyOrderBy["field"] = key;
      this.$emit("update:orderBy", copyOrderBy);
    },
    insertItem(id) {
      if (this.inExpendedIds(id)) {
        this.takeOutItem(id);
      } else {
        this.expandedIds.push(id);
      }
    },
    takeOutItem(id) {
      const index = this.expandedIds.findIndex(r => r === id);
      this.expandedIds.splice(index, 1);
    },
    inExpendedIds(id) {
      return this.expandedIds.indexOf(id) >= 0;
    },
    setActionsWidth() {
      const actionsEle = this.$refs.actions;
      let { width } = actionsEle[0].getBoundingClientRect();
      let actionsParentEle = actionsEle[0].parentNode;
      let borderLeft = this.getStyleValue(
        actionsParentEle,
        "border-left-width"
      );
      let borderRight = this.getStyleValue(
        actionsParentEle,
        "border-right-width"
      );
      let paddingLeft = this.getStyleValue(actionsParentEle, "padding-left");
      let paddingRight = this.getStyleValue(actionsParentEle, "padding-right");
      let actionHeaderWidth =
        width +
        parseInt(borderLeft, 10) +
        parseInt(borderRight, 10) +
        parseInt(paddingLeft, 10) +
        parseInt(paddingRight, 10) +
        "px";
      this.$refs.actionHeader.style.width = actionHeaderWidth;
      actionsEle.forEach(
        div => (div.parentNode.style.width = actionHeaderWidth)
      );
    },
    getStyleValue(el, val) {
      return getComputedStyle(el).getPropertyValue(val);
    },
    updateDataSource() {
      const { field, order } = this.orderBy;
      let copyDataSource = JSON.parse(JSON.stringify(this.dataSource));
      this.renderDataSource = copyDataSource.sort((a, b) => {
        if (order === "esc") {
          if (typeof a[field] === "number") {
            return a[field] - b[field];
          } else if (typeof a[field] === "string") {
            if (a[field] > b[field]) return 1;
            if (a[field] < b[field]) return -1;
            return 0;
          }
        } else if (order === "desc") {
          if (typeof a[field] === "number") {
            return b[field] - a[field];
          } else if (typeof a[field] === "string") {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
            return 0;
          }
        } else {
          return 0;
        }
      });
    }
  },
  computed: {
    isAllSelectedItems() {
      if (this.selectedItems.length !== this.renderDataSource.length) {
        return false;
      }
      let equal = true;
      const array1 = this.selectedItems.map(item => item.id).sort();
      const array2 = this.renderDataSource.map(item => item.id).sort();
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          equal = false;
          break;
        }
      }
      return equal;
    },
    expandedColSpan() {
      let num = 0;
      if (this.checkable) {
        num++;
      }
      if (this.expandField) {
        num++;
      }
      return num;
    }
  },
  created() {
    this.updateDataSource();
  },
  mounted() {
    this.columns = this.$slots.default
      .filter(node => node.tag)
      .map(node => {
        let { text, field, width, sortable } = node.componentOptions.propsData;
        const render = node.data.scopedSlots && node.data.scopedSlots.default;
        return { text, field, width, render, sortable };
      });
    this.$nextTick(() => {
      if (this.height) {
        const { height } = this.$refs.tableHead.getBoundingClientRect();
        this.scrollHeight = this.height - height + "px";
      }
    });
    this.$scopedSlots.$stable && this.setActionsWidth();
  },
  watch: {
    selectedItems() {
      // 半选与全选
      this.indeterminate =
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.renderDataSource.length;
    },
    orderBy: {
      handler: function() {
        this.updateDataSource();
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "style/_variable";
.f-table-wrapper {
  position: relative;
  .f-table {
    border-collapse: collapse;
    display: table;
    border-spacing: 0;
    width: 100%;
    &.bordered {
      td,
      th {
        border-left: 1px solid rgba(16, 22, 26, 0.15);
        border-right: 1px solid rgba(16, 22, 26, 0.15);
      }
      th {
        border-top: 1px solid rgba(16, 22, 26, 0.15);
      }
    }
    td,
    th {
      text-align: center;
      padding: 8px 0;
      border: none;
    }
    .f-table-thead {
      color: #909399;
      font-weight: 500;
      tr {
        box-shadow: inset 0 -1px 0 rgba(16, 22, 26, 0.15);
        border: none;
      }
    }
    .f-table-tbody {
      tr {
        box-shadow: inset 0 -1px 0 rgba(16, 22, 26, 0.15);
        background: none;
        border: none;
      }
      tr:hover:not(.f-expand-row) {
        background: $menu-hover-color;
      }
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: white;
          }
          &:nth-child(even) {
            background: $menu-hover-color;
          }
        }
      }
    }
    &-column {
      user-select: none;
      &.f-table-sorter {
        cursor: pointer;
      }
      .f-sorter-icons {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        svg {
          fill: $grey;
          cursor: pointer;
          &.active {
            fill: #409eff;
          }
        }
        svg:first-child {
          margin-bottom: -0.3em;
        }
        svg:last-child {
          margin-top: -0.3em;
        }
      }
    }
  }
  .f-table-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    svg {
      @include spin;
      width: 50px;
      height: 50px;
    }
  }
  .f-table .f-table-center {
    text-align: center;
  }
}

.f-table__empty-default {
  padding: 2em;
  border-bottom: 1px solid rgba(16, 22, 26, 0.15);
  border-left: 1px solid rgba(16, 22, 26, 0.15);
  border-right: 1px solid rgba(16, 22, 26, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .f-table__empty-icon {
    position: relative;
    height: 60px;
    width: 60px;
    box-sizing: border-box;
    background-color: #fff;
    .f-table__icon--inner {
      position: relative;
      height: 52px;
      width: 55px;
      box-sizing: border-box;
      border: 1px solid #c7c7d0;
      margin: 3px 1px;
      border-radius: 2px;
      span {
        position: absolute;
        background-color: #fff;
      }
      .inner-circle {
        position: absolute;
        right: -8px;
        bottom: -5px;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        border: 1px solid #c7c7d0;
        &::before,
        &::after {
          position: absolute;
          content: "";
          left: 50%;
          transform: translateX(-50%);
        }
        &::before {
          width: 2px;
          height: 8px;
          bottom: 10px;
          background-color: #c7c7d0;
        }
        &::after {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          bottom: 5px;
          background-color: #c7c7d0;
        }
      }
      .inner-rect {
        top: -4px;
        height: 8px;
        width: 20px;
        border: 1px solid #c7c7d0;
        border-radius: 1px;
        left: 50%;
        transform: translateX(-50%);
      }
      .inner-horizontal-line {
        background-color: #c7c7d0;
        height: 2px;
        transform: scaleY(0.5);
        left: 15px;
        &.inner-line1 {
          width: 20px;
          top: 15px;
        }
        &.inner-line2 {
          width: 15px;
          top: 22px;
        }
        &.inner-line3 {
          width: 10px;
          top: 30px;
        }
      }
    }
  }
}
</style>
