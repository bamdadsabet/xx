<template>
  <PageLaout v-bind="{title, description, hasHelp: false}">
    <v-data-table-server
      class="data-table"
      disable-sort
      :headers="headers"
      hover
      :items="data?.data.data"
      items-per-page="10"
      :loading="isPending"
      :page="page"
    >

      <template v-if="$vuetify.display.smAndDown" #default="{items}">
        <section class="flex flex-col gap-y-4">
          <div v-for="(item, index) in items" :key="index" class="border border-neutral-3 rounded-lg p-4 flex flex-wrap gap-y-4">
            <div v-for="(header, i) in headers" :key="i" class="text-Caption-LG-2 flex flex-col gap-y-1 w-1/2">
              <div v-if="header.key !== 'operation'" class="header text-neutral-7">{{ header.title }}</div>
              <div v-if="header.key === 'index'" class="item text-neutral-11">{{ index + 1 }}</div>
              <div v-else class="item text-neutral-11">{{ item[header.key] }}</div>
            </div>
            <div class="w-full flex justify-end items-center gap-4">
              <v-switch
                class="switch"
                density="compact"
                hide-details
              />
              <v-btn color="red" :ripple="{ class: 'bg-neutral-1 opacity-30' }" size="25" variant="text">
                <v-icon size="20">edit</v-icon>
              </v-btn>
              <v-btn :ripple="{ class: 'bg-neutral-1 opacity-30' }" size="25" variant="text">
                <v-icon size="20">trash</v-icon>
              </v-btn>
            </div>
          </div>
        </section>
      </template>
      <template #item.index="{index}">
        {{ index + 1 }}
      </template>

      <template #item.operation>
        <div class="flex justify-end items-center gap-x-4 h-4">
          <v-slot name="operation" />
          <v-switch
            class="switch"
            density="compact"
            hide-details
          />
          <v-btn color="red" :ripple="{ class: 'bg-neutral-1 opacity-30' }" size="25" variant="text">
            <v-icon size="20">edit</v-icon>
          </v-btn>
          <v-btn :ripple="{ class: 'bg-neutral-1 opacity-30' }" size="25" variant="text">
            <v-icon size="20">trash</v-icon>
          </v-btn>
        </div>
      </template>
      <template #bottom>
        <v-pagination
          v-model="page"
          active-color="#00000"
          class="mb-28 mt-14"
          color="red"
          length="15"
          size="32"
          total-visible="4"
        />
      </template>
    </v-data-table-server>
  </PageLaout>
</template>

<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query'
  import { api } from '../services'
  import PageLaout from './PageLayout.vue'
  interface Props {
    title: string;
    description: string;
  }
  defineProps<Props>()
  const page = ref<number>(1)
  const x = ref<boolean>(true)

  const headers = [
    {
      title: '#',
      key: 'index',
    },
    {
      title: 'Category Name',
      key: 'name',
    },

    {
      title: 'Operation',
      key: 'operation',
      align: 'end',
    },
  ]

  const { isPending, data } = useQuery({ queryKey: ['categories'], queryFn: () => api.get('/online-menu/categories') })
</script>

<style scoped lang="scss">
  .data-table {
    @apply text-Caption-LG-2;
    &:deep(thead) {
      @apply bg-neutral-3 border-t border-x border-neutral-3 ;
    }
    &:deep(.v-data-table__tr) {
      @apply border-x border-neutral-3;
      &:nth-child(even) {
        @apply bg-neutral-2 border-neutral-3;
      }
      &:last-of-type {
        @apply border-b border-neutral-3
      }
    }
    &:deep(td) {
      padding-top: 20px!important;
      padding-bottom: 20px!important;
    }
  }
  .switch {
    &:deep(.v-switch__track) {
      height: 18px;
      min-width: 35px;
      background: transparent;
      border: 1px solid var(--Base-Black, #1A1E16);
    }
    &:deep(.v-switch__thumb) {
      width: 10px;
      height: 10px;
      background: black;
    }
  }
</style>
