<template>
  <div @click="playSound" class="oxford-sound" title="Click vào để phát âm">
    <button type="button" @click="playSound()">US Sound</button>
    <button type="button" @click="playSound()">UK Sound</button>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
    },
    text: String,
    vertical: {
      type: String,
      default: 'top',
    },
  },
  methods: {
    playSound() {
      const getLink = getLinkOxfordDicionary(this.text, this.type)
    },
  },
}

/**
 * @param {String} text
 */
function getLinkOxfordDicionary(text, type) {
  const baseURL = 'https://www.oxfordlearnersdictionaries.com/media/english/'
  // uk_pron/m/mem/memo_/memo__gb_1.mp3
  if (type === 'US') {
    return baseURL + 'uk_pron/' + text.substring(0, 1) + '/' + text.substring(0, 3)
  } else {
    return baseURL + 'us_pron/' + text.substring(0, 1)
  }
}
</script>

<style scoped>
.oxford-sound {
  background-image: url('https://www.oxfordlearnersdictionaries.com/external/images/documents/icon-audio-bre.png');
  background-repeat: no-repeat;
  background-position: left top !important;
  background-size: 100%;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  display: inline-block;
  font-size: 14px;
}
</style>
