<template>
  <h2>Traditional component - BaseCounterScriptFancy</h2>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
  <hr />
</template>

<script lang="ts" src="./BaseCounterScriptFancy"></script>
