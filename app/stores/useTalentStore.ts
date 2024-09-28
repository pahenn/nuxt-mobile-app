import { defineStore } from "pinia"
import { readItems } from "@directus/sdk"

export const useTalentStore = defineStore("talent-store", () => {
  const events = ref([])

  async function fetchEvents() {
    const { $directus } = useNuxtApp()
    const data = await $directus.request(
      readItems("events", {
        fields: [
          "id, title, subtitle, description, primary_image, host.display_name, venue.title",
        ],
      })
    )
    events.value = data
  }

  const cachedEvents = ref([])

  const event = ref(null)

  async function fetchEvent(eventId: string) {
    // Check if the event is in the cache
    const cachedEvent = cachedEvents.value.find((e) => e.id === eventId)
    if (cachedEvent) {
      event.value = cachedEvent
      return
    }

    // If not in cache, fetch from API
    const { $directus } = useNuxtApp()
    try {
      const fetchedEvent = await $directus.request(
        readItems("events", {
          fields: [
            "id",
            "title",
            "subtitle",
            "description",
            "primary_image",
            "host.display_name",
            "venue.title",
          ],
          filter: { id: { _eq: eventId } },
        })
      )

      if (fetchedEvent && fetchedEvent.length > 0) {
        // Add to cache
        cachedEvents.value.push(fetchedEvent[0])
        // Set the event
        event.value = fetchedEvent[0]
      } else {
        event.value = null
      }
    } catch (error) {
      console.error("Error fetching event:", error)
      event.value = null
    }
  }

  return {
    // state
    events,
    // actions
    fetchEvents,
  }
})
