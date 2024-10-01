<template>
  <v-snackbar
    v-model="showSnackbar"
    :color="toastColor"
    contained
    :height="$vuetify.display.mdAndDown ? 64 : 80"
    max-width="none"
    multi-line
    position="absolute"
    :timeout="displayingTime"
    :transition="showSnackbar ? 'scroll-y-reverse-transition' : 'scroll-y-transition'"
    width="100vw"
    z-index="60"
  >
    <v-container max-width="1656">
      <div class="flex justify-center items-center text-white">
        <h1 class="md:text-Body-SM-2 text-Body-SM-1 m-auto">{{ toast && toast.message }}</h1>
        <v-btn
          class="text-white"
          :color="toastColor"
          elevation-1
          icon="x"
          ripple
          rounded
          size="32"
          @click="closeSnackbar"
        />
      </div>
    </v-container>
  </v-snackbar>
</template>

<script setup lang="ts">
  export interface IToastProps {
    displayingTime?: number;
    delay: number,
  }
  export interface INotificationToast {
    isError: boolean;
    message: string;
  }

  // Props
  const props = withDefaults(defineProps<IToastProps>(), {
    displayingTime: 5000,
    delay: 200,
  })

  // Model
  const model = defineModel<INotificationToast[]>()

  // Refs
  const toast = ref<INotificationToast>()
  const showSnackbar = ref<boolean>(false)
  const currentSetTimeOutId = ref<number>()

  // Computed Vars
  const toastColor = computed(() => (toast.value && toast.value.isError) ? 'error' : 'primary')

  // Methods
  const closeSnackbar = () => {
    showSnackbar.value = false
    if (currentSetTimeOutId.value) {
      console.log(currentSetTimeOutId.value)
      clearTimeout(currentSetTimeOutId.value)
      model.value = model.value?.slice(1)
    }
  }

  const displayToast = async () => {
    if (!model.value || model.value.length === 0) return
    console.log(model.value)
    for (const index in model.value) {
      toast.value = model.value[index]
      showSnackbar.value = true
      await new Promise(() => {
        currentSetTimeOutId.value = setTimeout(() => {
          model.value = model.value?.slice(1)
        }, props.displayingTime + props.delay)
      })
    }
    model.value = []
  }

  // Watch
  watchEffect(displayToast)

</script>
