<template>
  <q-page class="q-pa-md">

    <q-item>
      <q-item-section>
        <q-item-label overline>Ergebnisse für</q-item-label>
        <q-item-label>Entwickler für Java</q-item-label>
        <q-item-label caption>Entfernen sie Filter um mehr Ergebnisse zu erhalten</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>{{experts.length}} Treffer</q-item-label>
      </q-item-section>
    </q-item>
    <q-list bordered padding>
      <expert v-for="(expert, key) in experts"
              :key="key"
              :expert="expert"
              :id="key"></expert>
    </q-list>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'

import {mapGetters} from "vuex";

export default defineComponent({
  name: 'ExpertenOverview',
  computed:{
    //Hier werden die Daten die in Store-expert.js eingelagert sind über die getter methode ausgelesen
    ...mapGetters('experts', ['experts'])
  },
  components: {
    'expert' : require('src/components/experts/expert.vue').default
  }
})
</script>
