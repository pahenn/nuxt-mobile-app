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

  return {
    // state
    events,
    // actions
    fetchEvents,
  }
})
