<template>
  <div class="page">
    <article class="container">
      <slot name="top"/>

      <Content :custom="false"/>

      <div class="page-nav" v-if="prev || next">
        <p class="inner">
        <span v-if="prev"
              class="prev">
          ←
          <router-link v-if="prev"
                       class="prev"
                       :to="prev.path">
            {{ prev.title || prev.path }}
          </router-link>
        </span>

          <span v-if="next"
                class="next">
          <router-link v-if="next" :to="next.path">
            {{ next.title || next.path }}
          </router-link>
          →
        </span>
        </p>
      </div>

      <slot name="bottom"/>

    </article>
  </div>
</template>

<script>
  import { resolvePage } from '../utils/index';

  export default {
    props: ['sidebarItems'],

    computed: {

      prev() {
        const prev = this.$page.frontmatter.prev;
        if (prev === false) {
          return;
        } else if (prev) {
          return resolvePage(this.$site.pages, prev, this.$route.path);
        } else {
          return resolvePrev(this.$page, this.sidebarItems);
        }
      },

      next() {
        const next = this.$page.frontmatter.next;
        if (next === false) {
          return;
        } else if (next) {
          return resolvePage(this.$site.pages, next, this.$route.path);
        } else {
          return resolveNext(this.$page, this.sidebarItems);
        }
      }
    }
  };

  function resolvePrev(page, items) {
    return find(page, items, -1);
  }

  function resolveNext(page, items) {
    return find(page, items, 1);
  }

  function find(page, items, offset) {
    const res = [];
    items.forEach(item => {
      if (item.type === 'group') {
        res.push(...item.children || []);
      } else {
        res.push(item);
      }
    });
    for (let i = 0; i < res.length; i++) {
      const cur = res[i];
      if (cur.type === 'page' && cur.path === page.path) {
        return res[i + offset];
      }
    }
  }
</script>

<style lang="scss" src="./Page.scss"></style>
