<script lang="ts" setup>
  defineProps<{
    appSection: string
    tabs: {
      tab: string
      icon: string
      label: string
    }[]
  }>()
</script>
<template>
  <IonTabs>
    <IonRouterOutlet />
    <IonTabBar slot="bottom">
      <IonTabButton
        v-for="tab in tabs"
        :key="appSection + tab.tab"
        :tab="tab.tab"
        :href="`/${appSection}/${tab.tab}`"
      >
        <IonIcon :icon="tab.icon" />
        <IonLabel>{{ tab.label }}</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
</template>
