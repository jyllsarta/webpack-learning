<template lang="pug">
div
  h1 Hello world!!
  p
    | {{count}}
</template>

<script>
import Btn from "./components/Btn"

export default {
    components: {
        Btn
    },
    data () {
        return {
            count: 5,
        }
    },
    methods: {
        doCount(countType) {
            this.count += (countType === "up" ? 1 : -1)
        },
    },
}
</script>

<style lang="scss" scoped>
body {
    .container {
        text-align: center;
        width: 600px;
    }
}
.count {
    font-size: 35px;
    margin: 10px;
}
</style>