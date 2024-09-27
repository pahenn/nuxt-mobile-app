<script lang="ts" setup>
  defineProps<{
    title?: string
    showBackButton?: boolean
  }>()
</script>

<template>
  <IonHeader>
    <IonToolbar>
      <template v-if="showBackButton">
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
      </template>
      <IonTitle>{{ title }}</IonTitle>
    </IonToolbar>
  </IonHeader>
</template>
