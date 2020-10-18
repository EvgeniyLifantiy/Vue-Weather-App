<template>
  <div class="Todayfor">
    {{get(city)}}
      <div v-for="item of Todaycast" :key="item.Temp">
      <h1>Температура {{(item.Temp-272.1).toFixed(1)}} С</h1>
      <img :src="`http://openweathermap.org/img/wn/${item.Icon}@2x.png`">
      <h1>Влажность {{item.Humidity}} %</h1>
      <h1> {{item.Description}}</h1>
      </div>
  </div>
</template>

<script>

import Api from '@/lib/TodayApi'

export default {
  name: 'Todayfor',
  data () {
    return {
      Todaycast: '12'
    }
  },
  props: {
    City: String
  },
  methods: {
    get () {
      this.Todaycast = Api.forecast
    }
  }
}
</script>

<style scoped>
.Todayfor{
  font-size: 50px;
  font-weight: bold;
  color: #2c3e50;}

</style>
