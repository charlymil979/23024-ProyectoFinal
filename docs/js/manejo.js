export default function manejador(){
      const h3Elements = document.querySelectorAll("h3");
      const sectionElements = document.querySelectorAll("section");
}
// const   { manejador } = Vue;

// export default manejador({
//   el: "#app",
//   data() {
//     return {
//       grupos: [],
//     };
//   },
//   mounted() {
//     const h3Elements = document.querySelectorAll("h3");
//     const sectionElements = document.querySelectorAll("section");
//     console.log(h3Elements, sectionElements)

//     for (let i = 0; i < h3Elements.length; i++) {
//       const grupo = {
//         name: h3Elements[i].textContent.trim(),
//         activo: false,
//       };
//       this.grupos.push(grupo);
//     }

//     if (this.grupos.length === sectionElements.length) {
//       for (let i = 0; i < sectionElements.length; i++) {
//         const section = sectionElements[i];
//         section.classList.add("seccion1");
//       }
//     }
//   },
//   methods: {
//     toggleSection(index) {
//       this.grupos.forEach((grupo, i) => {
//         if (i === index) {
//           grupo.activo = !grupo.activo; // Toggle activo para el grupo actual
//         } else {
//           grupo.activo = false; // Desactivar los demás grupos
//         }
//       });
//     },
//   },
// });
/* window.addEventListener("DOMContentLoaded", (e) => {
  document.addEventListener("click", (e) => {
 
    let $titulo = e.target.classList[0];
    console.log(e.target)
    // console.log($titulo)
    let $seccion = document.querySelectorAll(".seccion1");
    const $flecha = document.querySelectorAll(".flecha");
    
    if (
      e.target.matches("a") ||
      e.target.matches(".flecha")
    ) {
      if (e.target.classList.contains($titulo)) {
        $seccion.forEach((el, i) => {
          if (el.classList.contains($titulo)) {
            el.classList.toggle("activa");
            $flecha[i].classList.toggle("open");
          } else {
            el.classList.remove("activa");
            $flecha[i].classList.remove("open");
          }
          el.scrollTo(0, 50);
        });
      }
    }
//  window.scrollTo(0, visualViewport.height);
  });
});
 */
