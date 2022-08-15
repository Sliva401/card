<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="btn drop" @click="indexDrop">drop</div>
      <appCard :wordsData="wordsData" :index="index" />
      <div class="btn learn" @click="indexUp">learn</div>
    </div>
    <div class="btn dictionary-btn" @click="dictionaryOpen = !dictionaryOpen">dictionary</div>
    <dictionary v-show="dictionaryOpen" @changeCardContent="changeCardContent" @closeDictionary="closeDictionary"
      :words="wordsData" />
  </div>
</template>

<script>
import appCard from './components/app-card.vue';
import dictionary from './components/app-dictionary.vue';



export default {
  name: 'App',
  components: {
    appCard,
    dictionary,

  },
  data() {
    return {
      dictionaryOpen: false,
      wordsData: [{ first: "add new words", second: "добавьте новые слова" }],
      index: 0
    }
  },
  methods: {
    closeDictionary() {
      this.dictionaryOpen = false

    },
    changeCardContent(arr) {
      this.wordsData = arr;
      this.index = 0


    },
    indexUp() {
      if (this.index === this.wordsData.length - 1) { this.index = 0 }
      else { ++this.index }

    },
    indexDrop() {

      if (this.wordsData.length === 1) { this.wordsData[0] = { first: "add new words", second: "добавьте новые слова" } }
      else {
        if (this.index === this.wordsData.length - 1) { this.wordsData.splice(this.index, 1); this.index = 0 }
        else { this.wordsData.splice(this.index, 1) }
      }




    }
  }
}
</script>

<style >
* {
  vertical-align: baseline;
  font-weight: inherit;
  font-family: inherit;
  font-style: inherit;
  font-size: 100%;
  border: 0 none;
  outline: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

body {
  background-color: rgb(84, 139, 221);
}

.card-wrapper {
  max-width: 1920px;
  padding-top: 150px;
  margin: 0 auto;

}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;



}

.btn {
  cursor: pointer;
  user-select: none;
  font-size: 45px;
  height: 160px;
  padding: 5px;
  border: 40px solid rgba(63, 125, 218, 0);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;


}

.btn:hover {
  border: 40px solid rgb(63, 125, 218);

}

.btn:active {
  transform: scale(0.9);
}

.dictionary-btn {
  width: 326px;
  margin: 0 auto;
  position: relative;
  justify-content: flex-start;

}

.dictionary-btn::after {
  content: '';
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 7px;

  background-image: url("./assets/books.png");
  background-size: cover;
}

@media screen and (max-width: 808px) {

  .drop,
  .learn {
    position: absolute;
    top: 50%;
    z-index: 2;
    outline: 1px solid black;
    height: 50px;
    width: 100px;
  }

  .drop {
    left: 10px;
  }

  .learn {
    right: 10px;
  }

  .dictionary-btn {
    position: absolute;
    top: 10px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
}
</style>
