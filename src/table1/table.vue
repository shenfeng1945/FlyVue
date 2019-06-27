<template>
    <div class="f-table">
      <table>
          <thead>
              <tr>
                  <th v-for="column of columns" :key="column">
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>2</td>
                  <td>2</td>
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


