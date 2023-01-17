<template>
  <q-page class="q-pa-md">
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 3000px">

      <q-input filled bottom-slots v-model="text" label="Name" center :dense="dense">
      </q-input>
      <q-btn>
        <div class="q-pa-md">
          <div class="q-gutter-md row items-start">
            <q-date v-model="date" />
          </div>
        </div>
      </q-btn>


      <q-input filled bottom-slots v-model="text" label="Adresse" :dense="dense">
      </q-input>
      <q-input filled bottom-slots v-model="text" label="Fähigkeiten" :dense="dense">
      </q-input>
      <div class="q-pa-md">
        <q-input
          v-model="text"
          filled
          type="textarea"
          label="Beschreibung"
          dense="dense"
        />
      </div>
      <template>
        <div class="q-pa-md">
          <q-checkbox v-model="val" />
        </div>
      </template>

          <q-btn icon="send" label="Experten hinzufügen" class="primary"/>

    </div>
  </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "AddExpert",
  setup () {
    return {
      date: ref('1900/01/01')
    }
  }

}

</script>

<style scoped>

</style>
