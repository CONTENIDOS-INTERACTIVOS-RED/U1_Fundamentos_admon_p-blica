<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .row.bg-amarillo.bg-full-width.p-4.mb-4
        div.px-5.pb-md-3.row
          .col-12.col-xl-7.d-flex.align-items-center.justify-content-center
            span La administración pública es un componente fundamental en el desarrollo y funcionamiento del Estado, ya que permite la planificación, organización y ejecución de políticas orientadas al bienestar colectivo. A través de sus diversas funciones, garantiza la provisión de bienes y servicios esenciales, así como la regulación de actividades que impactan a la sociedad. En el caso de Colombia, su marco normativo está basado en la Constitución de 1991, que establece principios como la transparencia y la equidad en la gestión gubernamental.
          .col-5.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-1.png' alt='Texto que describa la imagen')
      
      .row
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-2.png' alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Este campo se distingue de la administración privada en su orientación al servicio público, priorizando la satisfacción de necesidades sociales por encima del lucro. Además, la administración pública opera bajo un esquema normativo riguroso que busca garantizar eficiencia en el uso de los recursos y la correcta ejecución de las políticas públicas. Su labor es esencial para fortalecer la confianza ciudadana en las instituciones y promover el desarrollo sostenible del país.
          .bg-gris.p-4
            span El administrador público juega un papel clave en la articulación entre el gobierno y la sociedad, transformando necesidades en acciones concretas. Su responsabilidad abarca desde la formulación de estrategias hasta la supervisión de programas que impactan diferentes sectores. En este sentido, la modernización y fortalecimiento de la administración pública son esenciales para mejorar la calidad de vida y garantizar el cumplimiento de los objetivos del Estado.

      



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
