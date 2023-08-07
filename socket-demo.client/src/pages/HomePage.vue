<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 rounded elevation-3 bg-black">
      <button type="button" class="btn bg-black btn-lg fs-1" :disabled="!account.id" @click="toggleLightbulb()"
        :class="{ isOn }" title="lightbulb">
        <i class="mdi" :class="isOn ? 'mdi-lightbulb-on' : 'mdi-lightbulb-variant-outline'"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js'
import { lightHandler } from '../handlers/LightHandler.js'


export default {
  setup() {

    const isOn = computed(() => AppState.isOn)

    onMounted(() => {
      lightHandler.emit('GET_LIGHT_STATUS')
    })



    return {
      isOn,
      account: computed(() => AppState.account),
      toggleLightbulb() {
        lightHandler.emit('TOGGLE_LIGHTBULB')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  i {
    transition: all .15s ease-in-out;
    color: blanchedalmond;
  }

  .isOn {
    i {
      color: rgb(255, 255, 109);
      filter: drop-shadow(1px 1px 5px rgb(252, 252, 214)) drop-shadow(-1px -1px 5px rgb(252, 252, 214));

    }
  }

}
</style>
