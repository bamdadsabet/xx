<template>
  <v-row class="input-group" no-gutters>
    <v-select
      v-model="model.prefix"
      class="input--select"
      :error="hasError"
      :items="prefixItems"
      max-width="96"
    />
    <v-text-field
      v-model="model.phoneNumber"
      class="input--text-field"
      placeholder="Phone number"
      :rules="[e => 'error msg']"
      @blur.once="() => {showError = true}"
    />
  </v-row>
</template>

<script setup lang="ts">
  import { defineModel } from 'vue'
  import { VTextField } from 'vuetify/components'

  // FIXME clean this
  type UnwrapReadonlyArray<A> = A extends Readonly<Array<infer I>> ? I : A;
  type ValidationRule = UnwrapReadonlyArray<VTextField['rules']>
  export interface IPhoneNumberInputProps {
    prefixItems: string[],
    rules: ValidationRule[]
  }
  const props = defineProps<IPhoneNumberInputProps>()

  const model = defineModel({
    default: reactive({
      prefix: '',
      phoneNumber: '',
    }),
  })
  const showError = ref<boolean>(false)
  const hasError = computed(() => {
    console.log('modal', model.value, showError.value)
    return showError.value && !model.value.phoneNumber
  })
</script>

<style lang="scss" scoped>
  .input-group {
    .input--select {
      &:deep(.v-field) {
        @apply rounded-r-none bg-neutral-3;
      }
    }
    .input--text-field {
      &:deep(.v-field) {
        @apply rounded-l-none;
      }
      &:deep(.v-input__details) {
        @apply relative right-24;
      }
    }
  }
</style>
