<template>
  <q-page class="bg-grey-3 window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row justify-center items-center">
        <h5 class="text-h5 text-grey-7">Email senden</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-3" style="width:360px;">
          <q-card-section>
            <q-form class="q-gutter-lg">
              <q-input square clearable v-model="email" type="text" label="Email" />
              <q-input square clearable v-model="email" type="email" label="Text" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md q-py-lg">
            <q-btn unelevated color="primary" size="lg" class="full-width" label="Email-senden" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'EmailSenden',
  data () {
    return {
      name: '',
      email: ''
    }
  }
}
</script>

<style>
</style>
