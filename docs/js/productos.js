const { createApp } = Vue;
createApp({
  data() {
    return {
      menu: [],
      //url:'http://localhost:5000/productos',
      // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
      url: "https://ccontreras.pythonanywhere.com/menu", // si ya lo subieron a pythonanywhere
      error: false,
      cargando: true,
      /*atributos para el guardar los valores del formulario */
      id: 0,
      grupo: "",
      nombre: "",
      descripcion: "",
      tipo1: "",
      precio1: "",
      tipo2: "",
      precio2: "",
      tipo3: "",
      precio3: "",
      tipo4: "",
      precio4: "",
      tipo5: "",
      precio5: "",
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.menu = data;
          this.cargando = false;
          console.log(data)
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar(elemento) {
      const url = this.url + "/" + elemento;
      var options = {
        method: "DELETE",
      };
      fetch(url, options)
        .then((res) => res.text()) // or res.json()
        .then((res) => {
          location.reload();
        });
    },
    grabar() {
      let elemento = {
        grupo: this.grupo,
        nombre: this.nombre,
        descripcion: this.descripcion,
        tipo1: this.tipo1,
        precio1: this.precio1,
        tipo2: this.tipo2,
        precio2: this.precio2,
        tipo3: this.tipo3,
        precio3: this.precio3,
        tipo4: this.tipo4,
        precio4: this.precio4,
        tipo5: this.tipo5,
        precio5: this.precio5
      };
      var options = {
        body: JSON.stringify(elemento),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado");
          window.location.href = "../productos.html";
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Grabarr");
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
