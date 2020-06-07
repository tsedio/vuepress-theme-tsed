<template>
  <div class="aio-select">
    <div class="form-select-menu">
      <button class="form-select-button" @click="toggle()">
        <strong>{{label}}:</strong>
        <span :class="'symbol ' + (current.value|| 'all')"></span>
        <span class="symbol-text">{{current.label}}</span>
      </button>
      <ul :class="{'form-select-dropdown': true, 'open': open}">
        <li role="button" tabindex="0" @click.prevent.stop="() => onClick({label: 'All'})">
          <span class="symbol all"></span>All
        </li>

        <li v-for="(item, index) in items"
            role="button"
            :key="index"
            :tabindex="index"
            @click.prevent.stop="() => onClick(item)">
          <span :class="'symbol ' + item.value"></span>{{item.label}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Select',
    props: {
      label: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        open: false,
        current: { label: 'All' }
      };
    },
    mounted() {
      this.listener = () => this.open = false;
      document.body.addEventListener('click', this.listener);
    },

    destroyed() {
      document.body.removeEventListener('click', this.listener);
    },

    methods: {
      onClick(item) {
        this.open = false;
        this.current = item;

        this.$emit('change', item);
      },

      toggle() {
        setTimeout(() => this.open = !this.open);
      }
    }
  };
</script>
<style lang="scss">
  .aio-select {
    width: 200px;
    color: rgba(0, 0, 0, 0.87);
    display: block;
    .form-select-menu {
      position: relative;
      margin: 0;
    }
    &.open .form-select-menu ul.form-select-dropdown {
      display: block;
    }
  }

  .form-select-button {
    background: #fff;
    box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
    box-sizing: border-box;
    border: 1px solid #fff;
    color: #546e7a;
    font-size: 12px;
    font-weight: 400;
    height: 32px;
    line-height: 32px;
    outline: none;
    padding: 0 16px;
    text-align: left;
    width: 100%;
    cursor: pointer;
    &:focus {
      border: 1px solid #42a5f5;
      box-shadow: 0 2px 2px rgba(66, 165, 245, 0.24), 0 0 2px rgba(66, 165, 245, 0.12);
    }
    strong {
      font-weight: 600;
      margin-right: 8px;
      text-transform: uppercase;
    }
  }

  ul.form-select-dropdown {
    color: rgba(0, 0, 0, 0.87);
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    background: #fff;
    box-shadow: 0 16px 16px rgba(10, 16, 20, 0.24), 0 0 16px rgba(10, 16, 20, 0.12);
    border-radius: 4px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
    display: none;

    &.open {
      display: block;
    }
  }

  .form-select-dropdown li {
    cursor: pointer;
    font-size: 14px;
    line-height: 32px;
    margin: 0;
    padding: 0 16px 0 40px;
    position: relative;
    transition: all .2s;
    &:hover {
      background: #eceff1;
      color: #2196f3;
    }
    &.selected {
      background-color: #cfd8dc;
      &:hover {
        background-color: #cfd8dc;
      }
    }
    .symbol {
      left: 16px;
      position: absolute;
      top: 8px;
      z-index: 5;
    }
    &:hover {
      background: #eceff1;
      color: #2196f3;
    }
  }

  .form-select-menu {
    margin: 8px;
  }

  .form-search {
    position: relative;
    input {
      width: 182px;
      box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
      box-sizing: border-box;
      border: 1px solid #fff;
      color: #1e88e5;
      font-size: 16px;
      height: 32px;
      line-height: 32px;
      outline: none;
      padding: 0 16px 0 32px;
      transition: all .2s;
      &:focus {
        border: 1px solid #42a5f5;
        box-shadow: 0 2px 2px rgba(66, 165, 245, 0.24), 0 0 2px rgba(66, 165, 245, 0.12);
      }
    }
  }

  div.form-search i.material-icons {
    width: 20px;
    pointer-events: none;
    right: 48px;
    color: #cfd8dc;
    font-size: 20px;
    left: 8px;
    position: absolute;
    top: 6px;
    z-index: 1;
    display: none;
  }
</style>