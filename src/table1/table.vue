<template>
    <div class="f-table-wrapper">
      <table class="f-table">
          <thead>
              <tr>
                  <th v-if="numberVisible">序号</th>
                  <th v-for="column of columns" :key="column.text">
                     {{column.text}}
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(rowData,index) of dataSource" :key="rowData.id">
                <td v-if="numberVisible">{{index + 1}}</td>
                <td v-for="column of columns" :key="column.text">
                    {{rowData[column.field]}}
                </td>
              </tr>
          </tbody>
      </table>
    </div>
</template>

<script>
export default {
    name: 'FlyTable',
    props: {
        dataSource: {
            type: Array,
            required: true,
            validator(array){
                return array.filter(item => item.id === undefined).length === 0
            }
        },
        columns: {
            type: Array
        },
        numberVisible: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "_variable";
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


