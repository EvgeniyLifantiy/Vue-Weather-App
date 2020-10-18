<template>
  <div class="weekfor">
    {{get(City)}}
    <div v-for="item of cast" :key="item.icon">
      <h1>{{reverse(item.Day)}}</h1>
      <h1>{{GetWeekDay(item.Day)}}</h1>
      <img :src="`http://openweathermap.org/img/wn/${item.Icon}@2x.png`">
      <h1>{{((item.MaxTemp+item.MinTemp)/2-272.1).toFixed(1)}} c </h1>
      <h1>{{item.Description}}</h1>
      </div>
  </div>
</template>

<script>

import Api from '@/lib/Api'

export default {
  name: 'Weekfor',
  data () {
    return {
      cast: ''
    }
  },
  props: {
    City: String
  },
  methods: {
    GetWeekDay (date) {
      const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
      const ddate = new Date(date)// convert our input to the date
      return days[ddate.getDay()]
    },
    get (City) {
      this.cast = Api.forecast
    },
    reverse (date) {
      return (date.slice(0, 10).split('-').reverse().join('-'))
    }
  }
}
</script>

<style scoped>
.weekfor{
  columns:5;
  column-width: 0px;

  }

</style>
