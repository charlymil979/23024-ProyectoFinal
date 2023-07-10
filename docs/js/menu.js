
const { createApp } = Vue;
createApp({
  data() {
    return {
      url: "http://ccontreras.pythonanywhere.com/menu",
      error: false,
      cargando: true,
      grupos: {},
      pedidos:[],
      comentarios:[],
      ver:false
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const Menu = [];

          for (const el in data) {
            if (!Menu[data[el]["grupo"]]) {
              Menu[data[el]["grupo"]] = [];
            }
            Menu[data[el]["grupo"]].push(data[el]);
          }
          let a = 1;
          for (const grupo in Menu) {
            // console.log(grupo);
            // console.log(Menu[grupo]);
            this.grupos[grupo] = Menu[grupo];
            this.grupos[grupo].indice = a;
          }
          // console.log(this.grupos);

          this.cargando = false;
          console.log(Menu);
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    confirmar() {
      const $select = document.getElementsByTagName("select");
      const $comentarios = document.querySelectorAll('[id^="comentario"]');

      let id = [];
      for (let index = 0; index < $select.length; index++) {
        if ($select[index].selectedIndex > 0)
        id.push([$select[index].id, $select[index].selectedIndex]);
      }
      this.pedidos=id
      
      let coment = [];
      for (let index = 0; index < $comentarios.length; index++) {
        if ($comentarios[index].value.trim() != "")
        coment.push($comentarios[index].value);
      }
      this.comentarios=coment
      this.ver=true;
      return console.log(this.comentarios)
    },
    enviar() {

      return console.log(this.id, this.ver);
    },
    refrescar(){
      location.reload()
    }
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
