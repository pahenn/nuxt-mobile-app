<script setup lang="ts">
  const { id } = useRoute().params
</script>

<template>
  <IonPage>
    <AppTabsToolbar
      :title="`Event ${id}`"
      showBackButton
    />
    <IonContent class="ion-padding"> </IonContent>
  </IonPage>
</template>
