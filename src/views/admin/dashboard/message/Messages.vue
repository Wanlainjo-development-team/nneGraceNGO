<template>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th class="text-left text-caption">
            Name
          </th>
          <th class="text-left text-caption">
            Subject
          </th>
          <th class="text-left text-caption">
            Email
          </th>
          <th class="text-left text-caption">
            Message
          </th>
        </tr>
      </thead>
      <tbody>
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <tr v-for="message in message.messages" :key="message.id" v-bind="props"
              :class="isHovering ? 'bg-blue-lighten-5' : undefined" @click="openMessage(message)" style="cursor: pointer;">
              <td class="text-body-2" :class="!message.read ? 'text-blue font-weight-bold' : 'text-grey-darken-3'">{{ message.name }}</td>
              <td class="text-body-2" :class="!message.read ? 'text-blue font-weight-bold' : 'text-grey-darken-3'">{{ message.subject }}</td>
              <td class="text-body-2" :class="!message.read ? 'text-blue font-weight-bold' : 'text-grey-darken-3'">{{ message.email }}</td>
              <td class="text-body-2" :class="!message.read ? 'text-blue font-weight-bold' : 'text-grey-darken-3'">{{ message.message.slice(0, 50) }}...</td>
            </tr>
          </template>
        </v-hover>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup>
import { useMessageStore } from "@/store/message";
import { ref } from "vue";
import router from '@/router'

const message = ref(useMessageStore())

const openMessage = prop => {
  router.push(`/admin/dashboard/message/${prop.id}`)
}
</script>
