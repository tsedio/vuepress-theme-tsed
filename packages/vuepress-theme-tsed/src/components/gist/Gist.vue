<template>
  <div class="gist" ref="gist">
  </div>
</template>
<script>
  export default {
    name: 'Gist',
    props: {
      id: {
        type: String,
        required: true
      },

      repo: {
        type: String,
        required: true
      },

      filename: {
        type: String
      }
    },

    mounted() {
      this.loadScript('https://gist.github.com/' + this.repo + '/' + this.id + '.json');
    },

    methods: {
      loadScript(url) {
        const id = Math.round(Math.random() * 10000);
        const script = document.createElement('script');

        window['gistCb' + id] = (result) => {
          delete window['gistCb' + id];
          script.parentNode.removeChild(script);
          this.onComplete(result);
        };
        script.src = url + '?callback=gistCb' + id;

        document.body.appendChild(script);
      },

      onComplete(data) {
        this.$refs.gist.innerHTML = data.div;
      }
    }
  };
</script>
<style lang="scss" src="./Gist.scss"></style>
