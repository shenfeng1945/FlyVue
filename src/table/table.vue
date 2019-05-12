<template>
  <div class="f-table-wrapper">
    <table class="f-table" :class="{ bordered, compact, striped }">
      <thead>
        <tr>
          <th>
            <label
              ><input
                type="checkbox"
                @change="onChangeAllItems"
                :checked="isAllSelectedItems"
                ref="allSelected"
            /></label>
          </th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
            <div class="f-table-column">
              {{ column.text }}
              <span
                v-if="column.field in orderBy"
                class="f-table-sorter"
                @click="changeOrderBy(column.field)"
              >
                <f-icon
                  name="esc"
                  :class="{ active: orderBy[column.field] === 'esc' }"
                ></f-icon>
                <f-icon
                  name="desc"
                  :class="{ active: orderBy[column.field] === 'desc' }"
                ></f-icon>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="item.id">
          <th>
            <label
              ><input
                type="checkbox"
                @change="onChangeItem(item, index, $event)"
                :checked="inSelectedItems(item)"
            /></label>
          </th>
          <td v-if="numberVisible">{{ index + 1 }}</td>
          <template v-for="column in columns">
            <td>{{ item[column.field] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
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
    }
  },
  components: {
    "f-icon": Icon
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
  .f-table-loading {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center;
    align-items: center; background: rgba(255, 255, 255, 0.8);
    svg { @include spin; width: 50px; height: 50px; }
  }
}
</style>
