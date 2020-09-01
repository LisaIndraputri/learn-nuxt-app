<template>
  <div class="wrapper-new-post">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
        <AppControlInput
          control-type="textarea"
          v-model="editedPost.content">
          Content
        </AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel">Cancel
        </AppButton>
      </form>
    </section>
  </div>
</template>

<script>
import AppControlInput from '@/components/uiComp/AppControlInput'
import AppButton from '@/components/uiComp/AppButton'
export default {
  components: {
    AppButton,
    AppControlInput,
  },
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    onSave () {
      // save wip
      console.log(this.editedPost, 'save wip')
    },
    onCancel () {
      console.log('cancel wip')
      this.$router.push('/admin')
    }
  }

}
</script>

<style>

</style>
