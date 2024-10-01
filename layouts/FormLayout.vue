<template>
  <PageLaout v-bind="{title, description, hasHelp: !!helpContent}" @toggle-help="toggleHelp">
    <v-row>
      <v-col class="md:order-first order-last" cols="12" lg="6" md="7">
        <v-form @submit.prevent>
          <slot name="form" />
          <v-btn block class="mt-2" type="submit">Submit</v-btn>
        </v-form>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        md="5"
        offset="0"
        offset-lg="2"
      >
        <v-card v-show="showHelp" class="help-card">
          <v-card-title>
            <div class="help-card__header">
              <h4>title</h4>
              <v-btn
                icon="x"
                round
                rounded
                size="20"
                variant="plain"
                @click="showHelp = false"
              />

            </div>
          </v-card-title>
          <v-card-text class="help-card__body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, molestiae veniam vitae obcaecati eius aperiam voluptas. Dolores, ab eum? Quidem maiores repudiandae, obcaecati enim aliquam dolores perspiciatis alias possimus perferendis?
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </PageLaout>
</template>
<script setup lang="ts">
  import PageLaout from './PageLayout.vue'
  export interface IFormLayoutProps {
    loading?: boolean;
    iscreate?: boolean;
    helpContent?: {
      title: string;
      body: string;
    }
    title: string;
    description: string;
  }

  // Props
  withDefaults(defineProps<IFormLayoutProps>(), {
    loading: true,
    iscreate: false,
  })

  // Refs
  const showHelp = ref<boolean>(true)
  // Methods
  const toggleHelp = () => {
    showHelp.value = !showHelp.value
  }
</script>

<style lang="scss" scoped>
  .help-card {
    @apply bg-warning-tint-1;
    &__header {
      @apply flex justify-between items-center text-warning-shade-5;
    }
    &__body {
      @apply text-warning-shade-4 text-Caption-LG-3;
    }
  }
</style>
