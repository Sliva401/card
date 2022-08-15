<template >
    <div class="dictionary">
        <wordsColection @selectedColection="selectedColection" />
        <div class="words-book">
            <div class="words-item" @click="removeWord(index)" v-for="(word, index) in wordsData" v-bind:key="word">
                {{ word.first }}: {{ word.second }}</div>
        </div>
        <div class="input-bar">
            <div class="search-bar">
                <input type="search" class="search-input" maxlength="40" @input="searchWord" v-model="searchInput">
                <button class="search-btn">&#128269;</button>
            </div>
            <input type="text" class="input" v-model="inputData">
            <div class="enter-btn button" @click.enter="inputEnter">&#8592;</div>
            <div class="clear-all-btn button" @click="clearAll">clear all</div>
            <div class="save-btn" @click="saveData"></div>
            <div class="counter">pairs:{{ wordsCounter }}</div>



        </div>

        <div class="close-btn" @click="closeDictionary">X</div>
    </div>
</template>
<script>
import wordsColection from './app-colection.vue';

export default {
    components: {
        wordsColection
    },
    data() {
        return {

            wordsData: this.words,
            inputData: '',
            wordsCounter: this.words.length,
            searchInput: '',
            searchMemory: [{ first: "add new words", second: "добавьте новые слова" }]


        }
    },
    props: {
        words: Array

    },

    methods: {
        searchWord() {
            this.wordsData = this.searchMemory
            if (this.wordsData.length !== 1) {



                let memo = []

                for (let i = 0; i < this.wordsData.length; i++) {
                    if (this.wordsData[i].first.includes(this.searchInput)) {
                        memo.push(this.wordsData[i])
                    }
                }
                this.wordsData = memo
            }
            if (this.searchInput === '') {
                this.searchMemory = this.wordsData
                this.$emit("changeCardContent", this.wordsData)

            }
            


        },
        searchChange() {
            
            console.log('fdf') 
        },
        counterCheck() {
            this.wordsCounter = this.wordsData.length
        },
        closeDictionary() {
            this.searchInput = ''
            this.wordsData = this.searchMemory
            this.$emit("closeDictionary")
        },
        selectedColection(arr) {
            this.wordsData = arr
            this.counterCheck()
            this.$emit("changeCardContent", this.wordsData)
            this.searchMemory = arr

        },
        clearAll() {
            this.wordsData = [{ first: "add new words", second: "добавьте новые слова" }]
            this.$emit("changeCardContent", this.wordsData)
            this.counterCheck()

        },
        inputEnter() {

            if (this.wordsData[0].first === "add new words") { this.wordsData = [] }
            if (this.inputData !== '' && this.searchInput === '') {
                let splittedInput = this.inputData.split(' ');
                splittedInput = splittedInput.map((item) => item.replace(/\./gi, ' '))
                if (splittedInput.length % 2 !== 0) { splittedInput.push('') }
                for (let i = 0; i < splittedInput.length; i++) {
                    if (i % 2 === 0) { this.wordsData.push({ first: splittedInput[i], second: splittedInput[i + 1] }); }

                    this.searchMemory = this.wordsData
                }
            }

            this.$emit("changeCardContent", this.wordsData)
            this.inputData = ''
            this.counterCheck()





        },
        removeWord(index) {
            this.searchMemory = this.searchMemory.filter((word) => word !== this.wordsData[index])
            this.wordsData = this.wordsData.filter((word) => word !== this.wordsData[index])
            if (this.wordsData.length === 0) { this.wordsData = [{ first: "add new words", second: "добавьте новые слова" }] }
            this.$emit("changeCardContent", this.wordsData)
            this.counterCheck()


        },
        saveData() {
            let saveArr = []
            for (let item of this.searchMemory) {
                saveArr.push(item.first)
                saveArr.push(item.second)
            }
            saveArr = saveArr.map((item) => item.replace(/ /gi, '.'))
            saveArr = saveArr.join(' ')
            navigator.clipboard.writeText(saveArr);



        }
    }

}
</script>
<style scoped>
.dictionary {
    position: fixed;
    width: 95%;
    height: 80%;
    background-color: white;
    border: 1px solid black;
    margin: 0 auto;
    top: 50px;
    right: 0;
    left: 0;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 0 20px 1px black;
    z-index: 3;

}

.words-book {
    display: grid;
    border: 1px solid black;
    padding: 5px;
    grid-template-columns: 1fr 1fr 1fr;
    height: 50%;
    overflow-y: scroll;



}

.counter {
    display: inline-block;
    width: 100%;


}
    .search-bar {
    position: absolute;
    margin: 0 auto;
    right: 0;
    left: 0;
    top: -33px;
    text-align: center;
}

.search-input {

    width: 250px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 3px;
}
.search-bar {
    position: absolute;
    margin: 0 auto;
    right: 0;
    left: 0;
    top: -33px;
    text-align: center;
}

.search-input {

    width: 250px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 3px;
}

.words-item {
    font-size: 25px;
    border: 1px solid black;
    display: inline-block;
    padding: 7px;
    border-radius: 10px;
    margin: 0 5px 5px 0;
    cursor: pointer;
    user-select: none;
    height: 100px;
    overflow: hidden;
    display: flex;

    align-items: center;
}

.words-item:hover {
    border: 1px solid red;
}

.close-btn {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 20px;
    background-color: white;
}

.input-bar {
    max-width: 444px;
    width: 90%;
    border: 1px solid black;
    padding: 10px;
    border-radius: 20px;
    position: absolute;
    bottom: 20px;
    margin: 0 auto;
    right: 0;
    left: 0;
    background: linear-gradient(59deg, rgba(188, 207, 207, 1) 0%, rgba(178, 217, 226, 1) 100%);


}

.save-btn {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    float: right;
    cursor: pointer;
    background-image: url("../assets/copy.png");
    background-size: 35px 35px;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
}

.save-btn:hover {
    opacity: 0.7;
}

.save-btn:active {
    transform: scale(0.95);
}

.button {
    border: 1px solid black;
    padding: 5px;
    font-size: 30px;
    display: inline-block;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgb(231, 231, 231);
    margin-right: 5px;
}

.button:hover {
    background-color: rgb(222, 222, 222);
}

.input {
    border: 1px solid black;
    height: 50px;
    font-size: 30px;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-right: 10px;
    width: 200px;
}
</style>