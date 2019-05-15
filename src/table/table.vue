<template>
  <div class="f-table-wrapper" ref="wrapper">
    <div :style="{height: height + 'px',overflow: 'auto'}" ref="tableWrapper">
      <table class="f-table" :class="{ bordered, compact, striped }" ref="table">
        <thead class="f-table-thead">
          <tr>
            <th style="width:50px"></th>
            <th style="width: 50px" class="f-table-center">
              <label>
                <input
                  type="checkbox"
                  @change="onChangeAllItems"
                  :checked="isAllSelectedItems"
                  ref="allSelected"
                >
              </label>
            </th>
            <th v-if="numberVisible" style="width: 50px">#</th>
            <th v-for="column in columns" :key="column.field" :style="{width: column.width + 'px'}">
              <div class="f-table-column">
                {{ column.text }}
                <span
                  v-if="column.field in orderBy"
                  class="f-table-sorter"
                  @click="changeOrderBy(column.field)"
                >
                  <f-icon name="esc" :class="{ active: orderBy[column.field] === 'esc' }"></f-icon>
                  <f-icon name="desc" :class="{ active: orderBy[column.field] === 'desc' }"></f-icon>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in dataSource">
            <tr :key="item.id">
              <td style="width: 50px">
                <f-icon name="down" v-if="inExpendedIds(item.id) && !!item[expand]" @click="insertItem(item.id)"></f-icon>
                <f-icon name="right" v-else @click="insertItem(item.id)"></f-icon>
              </td>
              <td style="width: 50px" class="f-table-center">
                <label>
                  <input
                    type="checkbox"
                    @change="onChangeItem(item, index, $event)"
                    :checked="inSelectedItems(item)"
                  >
                </label>
              </td>
              <td v-if="numberVisible" style="width: 50px">{{ index + 1 }}</td>
              <template v-for="column in columns">
                <td
                  :style="{width: column.width + 'px'}"
                  :key="column.field"
                >{{ item[column.field] }}</td>
              </template>
            </tr>
            <tr :key="`${item.id}-expand`" v-if="inExpendedIds(item.id) && !!item[expand]">
               <td style="border: none;"></td>
               <td :colspan="columns.length + 1" style="border-left: none;">{{item[expand]}}</td>
            </tr>
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

export default {
  name: "FlyTable",
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        return array.filter(item => item.id === undefined).length === 0;
      }
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
    compact: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: true
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
    expand: {
      type: String
    }
  },
  components: {
    "f-icon": Icon
  },
  data(){
    return {
      expandedIds: []
    }
  },
  methods: {
    onChangeItem(item, index, e) {
      const selected = e.target.checked;
      let copySelected = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) {
        copySelected.push(item);
      } else {
        const findIndex = copySelected.findIndex(value => value.id === item.id);
        copySelected.splice(findIndex, 1);
      }
      this.$emit("update:selectedItems", copySelected);
    },
    onChangeAllItems(e) {
      let selected = e.target.checked;
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
      const oldValue = copyOrderBy[key];
      if (oldValue === "esc") {
        copyOrderBy[key] = "desc";
      } else if (oldValue === "desc") {
        copyOrderBy[key] = true;
      } else {
        copyOrderBy[key] = "esc";
      }
      this.$emit("update:orderBy", copyOrderBy);
    },
    insertItem(id){
      if(this.inExpendedIds(id)){
        this.takeOutItem(id);
      }else{
        this.expandedIds.push(id);
      }
    },
    takeOutItem(id){
      const index = this.expandedIds.findIndex(r => r === id);
      this.expandedIds.splice(index,1);
    },
    inExpendedIds(id){
      return this.expandedIds.indexOf(id) >= 0;
    }
  },
  computed: {
    isAllSelectedItems() {
      if (this.selectedItems.length !== this.dataSource.length) {
        return false;
      }
      let equal = true;
      const array1 = this.selectedItems.map(item => item.id).sort();
      const array2 = this.dataSource.map(item => item.id).sort();
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          equal = false;
          break;
        }
      }
      return equal;
    }
  },
  mounted() {
    let cloneTable = this.$refs.table.cloneNode(false);
    cloneTable.classList.add("f-table-copy");
    let tHead = this.$refs.table.children[0];
    let { height } = tHead.getBoundingClientRect();
    this.$refs.tableWrapper.style.marginTop = height + "px";
    cloneTable.style.marginTop = `-${height}px`;
    cloneTable.appendChild(tHead);
    this.$refs.wrapper.appendChild(cloneTable);
  },
  watch: {
    selectedItems() {
      // 半选与全选
      this.$refs.allSelected.indeterminate =
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.dataSource.length;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../style/variable";
$grey: darken($grey, 20%);
.f-table-wrapper {
  position: relative;
  .f-table {
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $grey;
    width: 100%;

    &.bordered {
      border: 1px solid $grey;
      td,
      th {
        border: 1px solid $grey;
      }
    }
    td,
    th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: white;
          }
          &:nth-child(even) {
            background: lighten($grey, 35%);
          }
        }
      }
    }
    &-column {
      display: flex;
      align-items: center;
      .f-table-sorter {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 3px;
        svg {
          width: 10px;
          height: 10px;
          fill: $grey;
          cursor: pointer;
          &.active {
            fill: $button-primary-active-bg;
          }
        }
      }
    }
  }
  .f-table-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    > .f-table-thead {
      background: white;
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
  .f-table .f-table-center{
    text-align: center;
  }
}
</style>
