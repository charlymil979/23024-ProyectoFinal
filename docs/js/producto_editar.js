console.log(location.search); // lee los argumentos pasados a este formulario
var id = location.search.substr(4);
console.log(id);
const { createApp } = Vue;
createApp({
  data() {
    return {
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
      url: "http://ccontreras.pythonanywhere.com/menu/" + id,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.id = data.id;
          this.grupo = data.grupo;
          this.nombre = data.nombre;
          this.descripcion = data.descripcion;
          this.tipo1 = data.tipo1;
          this.precio1 = data.precio1;
          this.tipo2 = data.tipo2;
          this.precio2 = data.precio2;
          this.tipo3 = data.tipo3;
          this.precio3 = data.precio3;
          this.tipo4 = data.tipo4;
          this.precio4 = data.precio4;
          this.tipo5 = data.tipo5;
          this.precio5 = data.precio5;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      let producto = {
        id: this.id,
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
        precio5: this.precio5,
      };
      var options = {
        body: JSON.stringify(producto),
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro modificado");
          window.location.href = "productos.html";
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Modificar");
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
