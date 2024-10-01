<template>
  <FormLayout description="this is the description" :loading="false" title="title">
    <template #form>
      <v-text-field label="Label" :rules="[e=>'this is the error']" />
      <v-text-field append-inner-icon="envelope" label="Label" />
      <v-text-field class="text-field--with-suffix" label="Label">
        <template #append-inner>
          <div class="input__suffix">
            CKG
          </div>
        </template>
      </v-text-field>
      <v-select
        chips
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        label="Select"
        multiple
      />
      <Image />

      <UploadImageInputField />
    </template>
  </FormLayout>
</template>

<script setup lang="ts">
  import FormLayout  from '@/layouts/FormLayout.vue'
  import PhoneInputField from '@/components/PhoneInputField.vue'
</script>
