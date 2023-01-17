<template>


  <q-item-label header>Experten</q-item-label>
  <div>
     <!--Durch das klick-event wird updateExpert ausgfefühert welches durch mappactions von der store-experts.js
      importiert wird siehe zeilee 48 -->
      <q-item>

      <q-item-section top avatar>
        <q-avatar size="150px">
          <img :src="expert.image">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{expert.name}}</q-item-label>
        <q-item-label caption v-for="skill in expert.skills">Fähigkeit:{{skill.name}} auf Level {{skill.level}}</q-item-label>
      </q-item-section>

      <q-item-section side top >
        <q-btn   @click="updateExpert({id: id, updates: {available: !expert.available}})" clickable v-if="expert.available" class="bg-green text-black rounded-borders" style="width: 100%">
          Verfügbar
        </q-btn>
        <q-btn  @click="updateExpert({id: id, updates: {available: !expert.available}})" clickable v-else class="bg-red text-black rounded-borders"  style="width: 100%">
          Nicht Verfügbar
        </q-btn>
        <q-separator spaced />
        <q-separator spaced />
        <q-separator spaced />
        <q-separator spaced />
        <q-btn to="/email" icon="mail" label="Email-Senden" class="primary"  style="width: 100%" v-slot:default/>
      </q-item-section>

    </q-item>


  </div>



  <q-separator spaced />
</template>

<script>
import {mapActions} from "vuex"

export default {
  name: "expert",
  props:['expert', 'id'],

  //experten updaten
  methods:{
    //experts verweist heir auf das Modul in der Index.js  welche wiederum von Store-experts.js importiert wird
  ...mapActions('experts', ['updateExpert']),


  }
}

</script>

<style scoped>

</style>
