<template>
  <!-- FIXME margin-top -->
  <!-- FIXME error handling -->
  <v-row class="pb-3">
    <v-col cols="12" md>
      <v-file-input
        ref="uploadImageInputRef"
        v-model="image"
        prepend-icon=""
        @change="handleChangeFile"
      />
      <v-hover v-if="uploadedImage.src">
        <template #default="{ isHovering, props }">
          <div class="img__container">
            <v-img
              v-bind="props"
              :alt="uploadedImage.alt"
              class="img"
              cover
              height=""
              :src="uploadedImage.src"
            />
            <v-overlay
              v-bind="props"
              class="img__overlay"
              contained
              :model-value="isHovering"
            >
              <v-icon class="cursor-pointer" color="white" size="26" @click="handleRemoveImage">trash</v-icon>
            </v-overlay>
          </div>
        </template>
      </v-hover>
      <div v-else class="img__place-holder">
        <v-icon color="neutral-5" size="40">user-rectangle</v-icon>
      </div>
    </v-col>
    <v-col cols="12" md>
      <h3 class="img-uploader__title">Upload Your Item's Picture Here</h3>
      <p class="img-uploader__description">Cover photos are 1875 pixels wide and 1000 pixels height. if your uploaded image is smaller than these dimensions, will stretch it to fit, making it appear blurry. to avoid this, ensure the cover photo you upload meets the dimension requirements.</p>
      <div class="flex gap-x-6">
        <v-btn
          append-icon="upload-simple"
          class="btn"
          color="primary"
          height="50"
          variant="outlined"
          @click="handleUploadImage"
        >Upload Image</v-btn>
        <v-btn
          class="btn btn--ai"
          color="primary"
          height="50"
        >
          Upload Image
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">

  // FIXME clean this
  const uploadImageInputRef = ref<any>()
  const image = ref()
  const uploadedImage = ref({
    src: '',
    alt: '',
  })
  const handleUploadImage = () => {
    console.log('handleUploadImage', uploadImageInputRef.value.$el.querySelector('input'))
    uploadImageInputRef.value.$el.querySelector('input').click()
  }
  const handleChangeFile = () => {
    console.log('handleUploadImage', image.value)
    const reader = new FileReader()
    reader.readAsDataURL(image.value)
    reader.onload = () => {
      uploadedImage.value = {
        src: reader.result,
        alt: image.value.name,
      }
      console.log(reader.result)
    }
  }
  const handleRemoveImage = () => {
    uploadedImage.value = {
      src: '',
      alt: '',
    }
    image.value = null
  }
  const handleGenerateImage = () => {
    console.log('handleGenerateImage')
  }
</script>

<style lang="scss" scoped>
.btn {
  width: calc(50% - 12px);
  &--ai {
    opacity: 0.5;
    background: linear-gradient(90deg, #557AD0 0%, #8555CC 100%);
  }
}
.img {
  @apply border border-neutral-4 rounded-lg;
  &__container {
    @apply relative h-52 rounded-lg w-full;
  }
  &__overlay {
    @apply flex items-center justify-center;
  }
  &__place-holder {
    @apply w-full h-full min-h-52 border border-neutral-4 rounded-lg flex justify-center items-center;
  }
  &-uploader {
    &__title {
      @apply text-black mb-3;
    }
    &__description {
      @apply text-neutral-9 text-Body-SM-2 mb-8;
    }
  }
}
</style>
