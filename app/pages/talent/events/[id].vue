<script setup lang="ts">
  const { id } = useRoute().params
</script>

<template>
  <IonPage>
    <AppTabsToolbar
      :title="`Event ${id}`"
      showBackButton
    />
    <IonContent> Event {{ id }} </IonContent>
  </IonPage>
</template>
