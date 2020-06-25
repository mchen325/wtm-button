<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div>
          <div class="cate-header">{{ $t("action.control") }}</div>
          <div class="cate-body">
            <button class="btn btn-info" @click="stopPlay">
              {{ $t("action.stopvoice") }}
            </button>
          </div>
          <audio id="player"></audio>
        </div>
        <div v-for="category in voices" v-bind:key="category.categoryName">
          <div class="cate-header">
            {{ $t("voicecategory." + category.categoryName) }}
          </div>
          <div class="cate-body">
            <button
              class="btn btn-primary"
              v-for="voiceItem in category.voiceList"
              v-bind:key="voiceItem.name"
              @click="play(voiceItem.path)"
            >
              {{ $t("voice." + voiceItem.name) }}
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
          <div class="wtm-bg"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wtm-bg{
    background: url(/resources/watame.png) no-repeat fixed right;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -999;
}
.cate-header {
  background-color: rgb(253, 251, 230);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 12px;
}
.cate-body {
  margin-bottom: 12px;
  text-align: center;
}
.cate-body button {
  margin: 5px;
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import VoiceList from "../voices.json";

@Component
class HomePage extends Vue {
  voices = VoiceList.voices;
  play(path) {
    this.stopPlay();
    let player = document.getElementById("player");
    player.src = "voices/" + path;
    player.play();
  }
  stopPlay() {
    let player = document.getElementById("player");
    player.pause();
  }
}
export default HomePage;
</script>
