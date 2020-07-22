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
.wtm-bg {
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
// import VoiceList from "../voices.json";
import axios from "axios";
import en_US from "../locales/en-US";
import zh_CN from "../locales/zh-CN";
import ja_JP from "../locales/ja-JP";

const env = process.env.NODE_ENV;

@Component
class HomePage extends Vue {
  voices = [];
  baseUrl =
    env === "development"
      ? "http://localhost:17105"
      : "https://request.watame.moe";
  mounted() {
    this.getList();
  }
  getList() {
    axios
      .get(this.baseUrl + "/api/Voice/GetVoiceList")
      .then((response) => {
        const callback = response.data;
        this.voices = callback.data;
        this.loadLanguage();
      })
      .catch((e) => {
        console.error(e);
      });
  }
  loadLanguage() {
    let addZh_CN = { voice: {}, voicecategory: {} };
    let adden_US = { voice: {}, voicecategory: {} };
    let addja_JP = { voice: {}, voicecategory: {} };

    for (let voiceCategoryList of this.voices) {
      if (voiceCategoryList.categoryDescription !== undefined) {
        if (voiceCategoryList.categoryDescription["zh-CN"] !== undefined) {
          addZh_CN.voicecategory[voiceCategoryList.categoryName] =
            voiceCategoryList.categoryDescription["zh-CN"];
        }
        if (voiceCategoryList.categoryDescription["en-US"] !== undefined) {
          adden_US.voicecategory[voiceCategoryList.categoryName] =
            voiceCategoryList.categoryDescription["en-US"];
        }
        if (voiceCategoryList.categoryDescription["ja-JP"] !== undefined) {
          addja_JP.voicecategory[voiceCategoryList.categoryName] =
            voiceCategoryList.categoryDescription["ja-JP"];
        }
      }
      for (let voiceItem of voiceCategoryList.voiceList) {
        if (voiceItem.description !== undefined) {
          if (voiceItem.description["zh-CN"] !== undefined) {
            addZh_CN.voice[voiceItem.name] = voiceItem.description["zh-CN"];
          }
          if (voiceItem.description["en-US"] !== undefined) {
            adden_US.voice[voiceItem.name] = voiceItem.description["en-US"];
          }
          if (voiceItem.description["ja-JP"] !== undefined) {
            addja_JP.voice[voiceItem.name] = voiceItem.description["ja-JP"];
          }
        }
      }
    }

    let emzh_CN = Object.assign(zh_CN, addZh_CN);
    let emen_US = Object.assign(en_US, adden_US);
    let emja_JP = Object.assign(ja_JP, addja_JP);

    let locale = "zh-CN";
    if (/ja/i.test(navigator.language)) {
      locale = "ja-JP";
      this.$i18n.setLocaleMessage(locale, emja_JP);
    } else if (/en/i.test(navigator.language)) {
      locale = "en-US";
      this.$i18n.setLocaleMessage(locale, emen_US);
    } else {
      this.$i18n.setLocaleMessage(locale, emzh_CN);
    }
  }
  play(path) {
    this.stopPlay();
    let player = document.getElementById("player");
    player.src = this.baseUrl + "/" + path;
    player.play();
  }
  stopPlay() {
    let player = document.getElementById("player");
    player.pause();
  }
}
export default HomePage;
</script>
