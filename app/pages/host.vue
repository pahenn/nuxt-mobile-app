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
      label: "Explore",
    },
    {
      tab: "events",
      icon: ioniconsCalendarOutline,
      label: "My Events",
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
  const appSection = "host"
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
