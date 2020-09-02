<template>
  <section class="new-post-form">
    <form @submit.prevent="onSave">
      <InputForm v-model="editedPost.author">Author Name</InputForm>
      <InputForm v-model="editedPost.title">Title</InputForm>
      <InputForm v-model="editedPost.thumbnailLink">Thumbnail Link</InputForm>
      <InputForm
        control-type="textarea"
        v-model="editedPost.content">
        Content
      </InputForm>
      <SuperButton type="submit">Save</SuperButton>
      <SuperButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel">Cancel
      </SuperButton>
    </form>
  </section>
</template>

<script>
import InputForm from '@/components/uiComp/Input'
import SuperButton from '@/components/uiComp/Button'
export default {
  components: {
    SuperButton,
    InputForm,
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.data ? {...this.data} : {
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
