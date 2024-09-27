<script setup lang="ts">
  const bookings = [
    {
      title: "Event Title",
      subtitle: "Event Subtitle",
      description: "Event Description",
      imageUrl: "https://ionicframework.com/docs/img/demos/card-media.png",
    },
  ]
</script>

<template>
  <IonPage>
    <IonContent>
      <ImgCard
        v-for="booking in bookings"
        :key="booking.title"
        v-bind="booking"
      />
    </IonContent>
  </IonPage>
</template>
