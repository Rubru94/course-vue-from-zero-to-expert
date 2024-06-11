console.log(Vue);

const { createApp, ref } = Vue;

const app = createApp({
  template: `
    <h1>Hello World</h1>
    <h2>{{message}}</h2>
    <h2>{{messageReactive}}</h2>
    <h2>{{author}}</h2>
    <p>From app.js</p>
    `,

  setup() {
    console.log("setup");

    const message = "Example message";
    const messageReactive = ref("Example message");

    const author = ref("John Doe");

    setTimeout(() => {
      messageReactive.value = "New message";
      author.value = "Jane Doen";
    }, 1500);

    return { message, messageReactive, author };
  },
});

app.mount("#myApp");
