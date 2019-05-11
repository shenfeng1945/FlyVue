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
                :checked="inAllSelectedItems"
                ref="allSelected"
            /></label>
          </th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
            {{ column.text }}
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
  </div>
</template>

<script>
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
    }
  },
  computed: {
    inAllSelectedItems() {
      return this.selectedItems.length === this.dataSource.length;
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
}
</style>
