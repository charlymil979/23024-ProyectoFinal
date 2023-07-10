const CustomComponent1 = {
  template: /*html*/ `
                <div>
                    <button @click="ver">{{buttonText}}</button>
                </div>`,
  data() {
    return {
      buttonText: "Ver",
    };
  },
  methods(){
    function ver(){
      return console.log("hola")
    }
  }
};

const ejemplo4 = Vue.createApp({
  components: {
    "componente": CustomComponent1,
  },
}).mount("#envio");
/* const confirmar = function () {
  const $select=document.getElementsByTagName("select")
  $select.forEach(el => {
    if(el.selectedIndex > 0){
      console.log(el.id, el.selectedIndex)
    }
  });
 }; */
