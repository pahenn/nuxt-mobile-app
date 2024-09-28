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
    <NuxtImg
      v-if="imageUrl"
      provider="directus"
      :alt="title"
      :src="imageUrl"
    />
    <NuxtImg
      v-else
      :alt="title"
      src="defaultImageUrl"
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
