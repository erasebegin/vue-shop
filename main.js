const app = new Vue({
  el: "#app",
  data: {
    products: {
      product1: {
        id: 1,
        title: "Marchberry Socks",
        description:
          "These socks were famously worn by the Grand Marchberry of Bibton and are actually still worn by it, but it will begrudgingly hand them over once the order is received.",
        image: "./assets/marchberry-socks.jpg",
        link: "https://erasebegin.github.com/thinkdrops",
        inStock: true,
        onSale: false,
        sizes: ["petite", "ferret", "embarassing"]
      },
      product2: {
        id: 2,
        title: "Gyrating Swede",
        description:
          "A sweet and crisp swede that gyrates uncontrollably four days a week. Place it on any mildly painful surface and watch it spin like a politician",
        image: "./assets/gyrating-swede.jpg",
        link: "https://erasebegin.github.com/thinkdrops",
        inStock: true,
        onSale: false
      }
    },
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    }
  }
});
