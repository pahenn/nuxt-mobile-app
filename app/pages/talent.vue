<script setup lang="ts">
  import { useRoute } from "vue-router"
  const tabs = [
    {
      tab: "home",
      icon: ioniconsHomeOutline,
      label: "Home",
    },
    {
      tab: "events",
      icon: ioniconsSearchOutline,
      label: "Find Events",
    },
    {
      tab: "bookings",
      icon: ioniconsCalendarOutline,
      label: "My Bookings",
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
