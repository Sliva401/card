<template>

    <div class="words-colection">
        <div class="colection-item" :class="{ active: item.active }" v-for="item in colectionItems"
            @click="chooseColection(item)" :key="item.content">
            {{ item.content }}
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            colectionItems: [{ active: true, content: "custom" }, { active: false, content: 100 }, { active: false, content: 500 }, { active: false, content: 1000 }, { active: false, content: 5000 }],
            defaultValue: [{ first: "add new words", second: "добавьте новые слова" }]
        }
    },
    methods: {
        chooseColection(item) {
            for (let colection of this.colectionItems) { colection.active = false }
            item.active = true

            if (item.content === "custom") { this.$emit("selectedColection", this.defaultValue) } else {


                let xhr = new XMLHttpRequest()
                xhr.open('GET', 'data.json')
                xhr.onload = () => {
                    let selectedColection = JSON.parse(xhr.response).words.splice(0, item.content)
                    this.$emit("selectedColection", selectedColection)
                }
                xhr.send()
            }
        }
    }
}
</script>
<style scoped>
.words-colection {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 300px;
    margin: 0 auto 20px auto;
}

.colection-item {
    border: 1px solid black;
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    user-select: none;

}

.colection-item:hover {
    box-shadow: 0 0 10px 2px rgb(94, 206, 216);
}

.active {

    background: linear-gradient(59deg, rgba(188, 207, 207, 1) 0%, rgba(23, 184, 221, 1) 100%);
    ;
}
</style>