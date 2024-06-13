<template>
    <section>
        <h3>Counter: {{counter}}</h3>
        <h3>Square: {{squareCounter}}</h3>
    
        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { computed, ref } from 'vue';

    const counter = ref(10);
    const squareCounter = computed(() => Math.pow(counter.value, 2));

</script>

<style scoped> /* scoped --> applies only to this component */
    h1{
        color: aqua;
    }
</style>