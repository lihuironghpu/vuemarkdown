<template>
  <div style="text-align: left">
    <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
    <button @click="getHtml">获取HTML</button>
    <div id="aa"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MarkDown',
    data () {
      return {
        content: '',
        configs: {
          toolbar: ['bold', 'italic', 'strikethrough', '|', 'heading', 'heading-smaller', 'heading-bigger',
            'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'ordered-list', '|',
            'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'side-by-side',
            'fullscreen', '|', 'guide']
        },
        htmlPreview: ''
      }
    },
    methods: {
      getHtml: function () {
        this.htmlPreview = this.markdownele.markdown(this.content)
        document.getElementById('aa').innerHTML = this.htmlPreview
        console.log(this.markdownele.markdown(this.content))
      }
    },
    computed: {
      markdownele () {
        return this.$refs.markdownEditor.simplemde
      }
    }
  }
</script>

<style>

</style>
