<script setup lang="ts">
  const { fetchEvents } = useTalentStore()
  await fetchEvents()

  const { events } = storeToRefs(useTalentStore())
</script>

<template>
  <IonPage>
    <IonContent>
      <ImgCard
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :subtitle="`${event.host.display_name} @ ${event.venue.title}`"
        :description="event.description"
        :imageUrl="event.primary_image"
        :routerLink="`/talent/events/${event.id}`"
      >
        <!-- <div class="flex justify-end gap-2">
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
        </div> -->
      </ImgCard>
    </IonContent>
  </IonPage>
</template>
