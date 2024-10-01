<template>
  <v-container max-width="1656">
    <section class="page__header">
      <div>
        <h1 class="page__title">{{ title }}</h1>
        <p class="page__description">{{ description }}</p>
      </div>
      <div class="page__header__actions">
        <div class="page__header__action">
          <span class="text-neutral-9 flex gap-x-2 text-Caption-LG-2 cursor-pointer" @click="$emit('toggleHelp')">
            <v-icon size="14">hand</v-icon>
            Help
          </span>
          <span class="status__container">
            {{ isOnline ? 'online' : 'offline' }}
            <div :class="['status', {'status--online': isOnline}, {'status--offline': !isOnline}]">
              <div class="status__inner" />
            </div>
          </span>
        </div>
        <span class="date">
          <span>{{ current.date }}</span>
          <span>{{ current.time }}</span>
        </span>
      </div>
    </section>
    <slot />
  </v-container>
</template>

<script setup lang="ts">
  import { withDefaults, defineProps, defineEmits } from 'vue'
  export interface IDisplayTime {
    time: string;
    date: string;
  }

  export interface IPageLayoutProps {
    title: string;
    description: string;
    hasHelp: boolean;
  }

  // Props
  withDefaults(defineProps<IPageLayoutProps>(), {
    hasHelp: false,
  })

  // Emits
  defineEmits(['toggleHelp'])

  // Refs
  const isOnline = ref<boolean>(true)
  const currentTime = ref<number>(Date.now())
  const interval = setInterval(() => {
    currentTime.value = Date.now()
  }, 1000)

  // Computed Vars
  const current = computed<IDisplayTime>(() => {
    const now = new Date(currentTime.value)
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hour = String(now.getHours()).padStart(2, '0')
    const minute = String(now.getMinutes()).padStart(2, '0')

    const date = `${year}-${month}-${day}`
    const time = `${hour}:${minute}`

    console.log(date)

    return { date, time }
  })

  // Methods
  const setOnline = () => isOnline.value = true
  const setOffline = () => isOnline.value = false

  // Hooks
  onMounted(() => {
    window.addEventListener('online', setOffline)
    window.addEventListener('offline', setOffline)
  })

  onUnmounted(() => {
    window.clearInterval(interval)
    window.removeEventListener('online', setOnline)
    window.removeEventListener('offline', setOffline)
  })
</script>

<style lang="scss" scoped>
  @keyframes pulse {
      75%, 100% {
        transform: scale(1.75);
        opacity: 0;
      }
  }
  .page {
    &__header {
      @apply flex justify-between md:flex-row flex-col-reverse md:gap-y-0 gap-x-6 gap-y-6 mb-6 mt-10;
      &__actions {
        @apply flex md:gap-x-10 gap-x-6 justify-between h-fit;
      }
      &__action {
        @apply flex md:gap-x-10 gap-x-6;
      }
      .date {
        @apply text-neutral-7 w-28 text-Caption-LG-2 flex gap-x-2;
      }
      .status {
        &__container {
          @apply text-neutral-9 text-Caption-LG-2 flex gap-x-2 items-center;
        }
        @apply flex justify-center items-center w-1 h-1 rounded-full;
        &__inner {
          @apply w-2 h-2 rounded-full shrink-0;
          animation: pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        &--online {
          @apply bg-success;
          .status__inner {
            @apply bg-success-tint-2;
          }
        }
        &--offline {
          @apply bg-neutral-7;
          .status__inner {
            @apply bg-inherit;
          }
        }
      }
    }
    &__title {
      @apply text-Heading-3 text-black mb-2;
    }
    &__description {
      @apply text-neutral-10 text-Body-SM-1;
    }
  }
</style>
