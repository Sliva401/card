<template>
    <div class="card" :class="{ active: rotateActive }" @click="rotateActive = !rotateActive">
        <div class="front">{{ wordsData[index].first }}</div>
        <div class="back">{{ wordsData[index].second }}</div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            rotateActive: false
        }
    },
    props: {
        wordsData: Array,
        index: Number
    },
    methods: {

    }
}
</script>
<style scoped>
.card {
    width: 95%;
    max-width: 600px;
    height: 300px;
    border-radius: 20px;
    border: 1px solid black;
    background-color: #fff;
    cursor: pointer;

}

.active {
    transform: rotateY(180deg);
}


.card {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
    box-shadow: 0 0 10px 1px black;


}

.front,
.back {
    backface-visibility: hidden;
    position: absolute;

    text-align: center;
    top: 35%;
    right: 0;
    left: 0;
    font-size: 45px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;


}

.front {
    z-index: 2;
}

.back {
    transform: rotateY(180deg);
}
</style>