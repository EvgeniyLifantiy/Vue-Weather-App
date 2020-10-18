<template>
  <div class="Today">
    <Todayfor City="Ростов-на-Дону"/>
  </div>
</template>

<script>

import Todayfor from '@/components/Todayfor.vue'

export default {
  name: 'Today',
  components: {
    Todayfor
  }
}
</script>
