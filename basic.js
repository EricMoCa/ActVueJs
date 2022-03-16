Vue.createApp({
    data() {
      return {
        information: {
          name: "Eric Valentin Mogica Carbajal",
          id: "A01274260"
        }
      };
    }
  }).mount("#app");

  Vue.createApp({
    data() {
      return {
        words: ["Hola", "Mundo", "Xd"]
      };
    }
  }).mount("#app2");

  Vue.createApp({
    data() {
      return {
        picsumImage: "https://i.pinimg.com/736x/60/a4/4b/60a44b8a85c43cdc385795f30c21165a.jpg"
      };
    }
  }).mount("#app3");