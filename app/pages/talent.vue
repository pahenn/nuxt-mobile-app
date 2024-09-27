<script setup lang="ts">
  import { useRoute } from "vue-router"
  const tabs = [
    {
      tab: "home",
      icon: ioniconsHomeOutline,
      label: "Home",
    },
    {
      tab: "explore",
      icon: ioniconsSearchOutline,
      label: "Find Work",
    },
    {
      tab: "jobs",
      icon: ioniconsCalendarOutline,
      label: "Jobs",
    },
    {
      tab: "messages",
      icon: ioniconsChatbubbleOutline,
      label: "Messages",
    },
    {
      tab: "profile",
      icon: ioniconsPersonCircleOutline,
      label: "Profile",
    },
  ]

  function getTitle(tabBarKey: string) {
    const route = useRoute()
    return tabs.find((tab) => `${tabBarKey}-${tab.tab}` === route.name)?.label
  }

  const appSection = "talent"
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
