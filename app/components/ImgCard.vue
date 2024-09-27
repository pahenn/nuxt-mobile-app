<script setup lang="ts">
  defineProps<{
    title: string
    subtitle?: string
    description?: string
    imageUrl?: string
  }>()

  const defaultImageUrl =
    "https://ionicframework.com/docs/img/demos/card-media.png"
</script>

<template>
  <IonCard>
    <IonImg
      :alt="title"
      :src="imageUrl || defaultImageUrl"
    />
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
