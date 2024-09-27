<script setup lang="ts">
  const listings = [
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
        v-for="listing in listings"
        :key="listing.title"
        v-bind="listing"
      >
        <div class="flex justify-end gap-2">
          <IonButton
            size="small"
            color="primary"
            >Save</IonButton
          >
          <IonButton
            size="small"
            color="primary"
            >Apply</IonButton
          >
        </div>
      </ImgCard>
    </IonContent>
  </IonPage>
</template>
