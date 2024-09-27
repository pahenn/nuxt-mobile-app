<script setup lang="ts">
  defineProps<{
    title: string
    subtitle?: string
    description?: string
  }>()
</script>

<template>
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>{{ title }}</IonCardTitle>
      <IonCardSubtitle v-if="subtitle">{{ subtitle }}</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent v-if="description || $slots.default">
      <span v-if="description">{{ description }}</span>
      <slot />
    </IonCardContent>
  </IonCard>
</template>
