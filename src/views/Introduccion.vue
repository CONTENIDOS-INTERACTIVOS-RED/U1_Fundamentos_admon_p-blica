<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .row.bg-verde-oscuro.bg-full-width.p-4.mb-4
        .col-12.col-xl-8.d-flex.justify-content-center.align-items-center
          span.text-white La gobernanza y la gestión de redes han transformado la administración pública al promover la cooperación entre el Estado, el sector privado y la sociedad civil. A diferencia de la gobernabilidad, que se enfoca en la capacidad del gobierno para ejercer control y mantener el orden, la gobernanza fomenta la participación de múltiples actores en la toma de decisiones, impulsando modelos de gestión más flexibles y descentralizados. Este enfoque ha permitido mejorar la eficiencia en la gestión de recursos, fortalecer la transparencia y generar soluciones innovadoras para los desafíos sociales y económicos.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
  
      .row
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 En este contexto, la gestión pública ha evolucionado a través de dos enfoques clave: la gestión basada en procesos y la gestión orientada a resultados. Mientras la primera optimiza procedimientos administrativos mediante la estandarización y automatización, la segunda prioriza el impacto social y la medición de resultados para garantizar políticas efectivas. La combinación de estos modelos ha permitido que las instituciones públicas mejoren la prestación de servicios, asegurando una mayor eficiencia y rendición de cuentas en la administración estatal.
          .bg-rojo-claro.p-4
            span La innovación y la ética desempeñan un papel fundamental en la modernización del sector público. La implementación de nuevas tecnologías, la digitalización de procesos y el fortalecimiento de mecanismos de control han permitido mejorar la accesibilidad y calidad de los servicios públicos. Asimismo, la adopción de principios éticos en la gestión gubernamental es clave para prevenir la corrupción y consolidar la confianza ciudadana en las instituciones. Estos elementos, junto con una gobernanza efectiva, son esenciales para garantizar un desarrollo sostenible y equitativo en la administración pública.
  
      
  </template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
