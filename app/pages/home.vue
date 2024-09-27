<script setup lang="ts">
  import { useRoute } from "vue-router"

  const tabs = [
    {
      tab: "login",
      icon: ioniconsLogInOutline,
      label: "Login",
    },
    {
      tab: "sign-up",
      icon: ioniconsPersonAddOutline,
      label: "Sign Up",
    },
  ]

  function getTitle(tabBarKey: string) {
    const route = useRoute()
    return tabs.find((tab) => `${tabBarKey}-${tab.tab}` === route.name)?.label
  }
  const appSection = "home"
</script>

<template>
  <IonPage>
    <template v-if="getTitle(appSection)">
      <Header :title="getTitle(appSection)" />
    </template>
    <IonContent>
      <AppSection
        :appSection="appSection"
        :tabs="tabs"
      />
    </IonContent>
  </IonPage>
</template>
