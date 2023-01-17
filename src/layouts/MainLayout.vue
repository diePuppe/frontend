<template>
  <q-layout view="hhh LpR fFf">
    <q-header reveal elevated class=primary>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="absolute-center">
          <q-space />
          Expertenverzeichnis
        </q-toolbar-title>
        <q-input @keyup="searchTerm" v-model="term" dark dense standout input-class="text-right" class="q-ml-md" :placeholder="search" >
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-tabs
        animated
        swipeable
        vertical
        class=secondary
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-route-tab v-for="nav in navs" :key="nav.lable" :icon= "nav.icon" :label="nav.lable" :to="nav.to"  />
      </q-tabs>
    </q-drawer>

    <q-tab-panel name="Settings">
      <a href="./settings">Mails</a>
 </q-tab-panel>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'


const linksList = [
  {
    title: 'Expertenübersicht',
    caption: 'Übersicht und Suche aller Experten',
    icon: 'groups',
    link: './#'
  },
  {
    title: 'Einstellungen',
    caption: 'Einstellungen ändern',
    icon: 'settings',
    link: './#/settings'
  }
]

export default defineComponent({
  name: 'MainLayout',
  data(){
    return{
      search: 'Search',
      term:"",
      result:[],
      navs: [
        {
        lable: 'Expertenübersicht',
        icon: 'groups',
        to: '/'
        },
        {
          lable: 'Settings',
          icon: 'settings',
          to: '/settings'
        },
        {
          lable: `Email-Senden`,
          icon: 'email',
          to: "/email"
        },
        {
          lable: 'Expertenhinzufügen',
          icon: 'groupadd',
          to: '/addexpert'
        },
        {
          lable:'Experten entfernen',
          icon: 'groupdelete',
          to: "/delete"
        }
      ],
    }
  },
  components: {
    EssentialLink,
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },


})
</script>
