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
      <AppTabsToolbar
        :title="getTitle(appSection)"
        showBackButton
      />
    </template>
    <IonContent>
      <AppTabsLayout
        :appSection="appSection"
        :tabs="tabs"
      />
    </IonContent>
  </IonPage>
</template>
