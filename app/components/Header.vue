<script lang="ts" setup>
  defineProps<{
    title?: string
  }>()
</script>

<template>
  <IonHeader>
    <IonToolbar>
      <IonTitle>{{ title }}</IonTitle>
    </IonToolbar>
  </IonHeader>
</template>
