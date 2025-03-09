<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Gestión pública por procesos vs. gestión pública por resultados'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-rojo-claro.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") La administración pública ha adoptado distintos modelos de gestión con el fin de mejorar la eficiencia operativa y la efectividad en la formulación de políticas. Dos enfoques clave son la gestión basada en procesos y la gestión orientada a resultados, cada uno con características, objetivos y aplicaciones específicas.

    p.mb-4 <strong>Tabla 2.</strong> Diferencias entre la gestión basada en procesos y la gestión orientada a resultados

    .row.mb-4
      .col-12.col-md-10.mx-auto
        .tabla-a
          table
            thead
              tr
                th(width="25%").text-bold Criterio
                th.text-bold Gestión por procesos
                th.text-bold Gestión por resultados
            tbody
              tr
                td.text-bold Enfoque
                td Optimización de procedimientos administrativos.
                td Impacto y efectividad de políticas públicas.
              tr
                td.text-bold Objetivo principal
                td Mejorar la eficiencia operativa.
                td Garantizar el cumplimiento de objetivos estratégicos.
              tr
                td.text-bold Indicadores clave
                td Tiempos de ejecución, costos operativos.
                td Cambios en la  calidad de vida, reducción de brechas sociales.
              tr
                td.text-bold Aplicación
                td Áreas con procesos administrativos repetitivos.
                td Sectores orientados a un impacto social, como salud y educación.
    #t_2_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.1
        h2 Gestión pública basada en procesos

    p.mb-4 Este modelo organizacional busca mejorar la eficiencia de la administración pública mediante la estructuración de procedimientos y la optimización de flujos de trabajo, asegurando calidad y trazabilidad en la prestación de servicios (Rovira, 2013).

    .row.mb-4
      .col-12.col-xl-8.mx-auto.me-xl-0.bg-amarillo.p-4(data-aos="fade-right")
        div.px-5
          p.mb-4 Para estudiar la temática, lo invitamos a escuchar el siguiente podcast.
          TarjetaAudio.color-primario.bg-white.mb-3(
            texto='Texto descriptivo del audio'
            tiempo
            :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
            @audio-hover='mostrarIndicadorTarjetaAudio = false'
          )
      .d-none.d-xl-block.col-2.px-0
        img.h-100(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

    p.mb-4 Algunos ejemplos de aplicación en servicios gubernamentales son: 
    
    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Digitalización de trámites administrativos', :iconUrl="require('@/assets/curso/unidad/img-31.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-32.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Digitalización de trámites administrativos
            p(data-aos='fade-up') Implementación de ventanillas únicas digitales para reducir tiempos de espera en la gestión de documentos.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Optimización en la asignación de recursos', :iconUrl="require('@/assets/curso/unidad/img-31.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-33.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Optimización en la asignación de recursos
            p(data-aos='fade-up') En sectores como salud y educación, este enfoque ha mejorado la distribución de insumos y servicios.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Estandarización en la contratación pública', :iconUrl="require('@/assets/curso/unidad/img-31.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-34.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Estandarización en la contratación pública
            p(data-aos='fade-up') La plataforma SECOP II en Colombia ha facilitado la automatización de procesos de contratación, asegurando mayor transparencia (Lasagna, 2013).

    #t_2_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.2
        h2 Gestión pública orientada a resultados

    p.mb-4 Este modelo prioriza la medición del desempeño gubernamental con base en la consecución de objetivos estratégicos y el impacto generado en la sociedad (Peña, 2013).
    p.mb-4 Los principios fundamentales son:
    .row.mb-4
      .col-12.col-md-6
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-35.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.text-bold.mb-3 Focalización en objetivos:
            p.pe-xl-3.mb-0 Las políticas públicas deben alinearse con metas estratégicas.
      .col-12.col-md-6
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-35.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.text-bold.mb-3 Uso de evidencia:
            p.pe-xl-3.mb-0 La toma de decisiones debe basarse en información cuantificable.
      .col-12.col-md-6
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-35.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.text-bold.mb-3 Evaluación del desempeño:
            p.pe-xl-3.mb-0 Se implementan sistemas de monitoreo para medir el impacto de las acciones gubernamentales.
      .col-12.col-md-6
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-35.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.text-bold.mb-3 Flexibilidad en la gestión:
            p.pe-xl-3.mb-0 Ajuste de estrategias en función de los resultados obtenidos.
    p.mb-4 Los indicadores de desempeño en la evaluación de políticas públicas son: 

    .row.mb-4
      .col-12.col-md-6.col-lg-4.mx-auto(data-aos="flip-up")
        .bg-verde.h-100.p-4.rounded
          p.text-bold.text-center.mb-3 Eficiencia
          p.mb-0.text-center Relación entre recursos invertidos y resultados obtenidos.
      .col-12.col-md-6.col-lg-4.mx-auto(data-aos="flip-up")
        .bg-amarillo-oscuro.h-100.p-4.rounded
          p.text-bold.text-center.mb-3 Efectividad
          p.mb-0.text-center Grado de cumplimiento de los objetivos propuestos.
      .col-12.col-md-6.col-lg-4.mx-auto(data-aos="flip-up")
        .bg-rojo.p-4.h-100.p-4.rounded
          p.text-bold.text-center.mb-3 Impacto
          p.mb-0.text-center Cambios reales generados en la población beneficiaria de una política pública.

    p.mb-4 Los contextos en los que cada modelo es más eficaz: 

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Gestión por procesos
                p.text-small.px-4.text-center.pb-2 Recomendado en trámites administrativos, fiscalización y control interno de entidades gubernamentales.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Gestión por resultados
                p.text-small.px-4.text-center.pb-2 Implementado en programas de política social, inversión pública y planeación estratégica gubernamental.
    h2 Casos de implementación en Colombia
    p.mb-4 En Colombia, la aplicación de estos modelos ha modernizado la prestación de servicios, optimizado el uso de recursos y fortalecido la transparencia en la ejecución de políticas públicas.

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Ventanilla Única Empresarial (VUE) 
              p Plataforma digital que permite a los emprendedores realizar trámites para la creación de empresas en un solo sitio web. Ha reducido el tiempo de constitución de empresas de 11 días a 24 horas (Lasagna, 2013).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Modelo Integrado de Planeación y Gestión (MIPG)
              p Articula planeación, gestión del talento humano y control de resultados en entidades gubernamentales, optimizando la asignación de recursos (Peña, 2013).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Sistema de Información del Registro Nacional de Estado Civil (SIRNEC)
              p Digitalización de registros civiles que ha reducido tiempos de expedición de documentos como cédulas y registros de nacimiento (Rovira, 2013).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')

    p.mb-4 La aplicación de la gestión de resultados en políticas públicas es: 

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        LineaTiempoD.color-secundario
          p(numero='1' titulo='Programa "Colombia Mayor"') Subsidios para adultos mayores en condición de vulnerabilidad. Monitoreado con indicadores como cobertura y reducción de la pobreza extrema en esta población (Peña, 2013).
          p(numero='2' titulo='Sistema Nacional de Evaluación de Resultados (SINERGIA)') Plataforma que permite analizar el impacto de los programas gubernamentales y mejorar la asignación de recursos (Aguilar, 2014).
          p(numero='3' titulo='Programa "Familias en Acción"') Evaluado con indicadores de nutrición infantil, asistencia escolar y reducción de la pobreza, logrando ampliar su cobertura y mejorar la entrega de subsidios (Lasagna, 2013).

    h2 Evaluación del impacto de ambos modelos en la eficiencia gubernamental
    p.mb-4 La combinación de ambos modelos ha generado mejores resultados en la administración pública colombiana, permitiendo una prestación de servicios más efectiva en áreas clave como salud, educación y seguridad ciudadana. 

    .row.mb-0.mx-0
      .d-none.d-xl-block.col-3.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
      .col-12.col-xl-9.d-flex.align-items-center.bg-verde-claro.p-4(data-aos="fade-left")
        p.mb-3.text-bold(data-aos="fade-up") Sistema de Emergencias 123	
        span Optimización de procesos y monitoreo de resultados ha reducido tiempos de respuesta y mejorado la coordinación entre Policía, Bomberos y el sistema de salud (Peña, 2013).
    .row.mb-4.mx-0
      .col-12.col-xl-9.d-flex.align-items-center.bg-verde.p-4(data-aos="fade-right")
        p.mb-3.text-bold(data-aos="fade-up") Ministerio de Salud y Protección Social
        span Combinación de ambos modelos para mejorar la gestión de citas médicas (procesos) y reducir tasas de mortalidad infantil (resultados) (Rovira, 2013).
      .d-none.d-xl-block.col-3.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')

    p.mb-4 La gestión pública basada en procesos y la gestión orientada a resultados son enfoques complementarios que contribuyen a mejorar la eficiencia gubernamental. Mientras que la gestión por procesos optimiza la operatividad y estandarización de procedimientos, la gestión por resultados se enfoca en el impacto de las políticas públicas. Su implementación depende de los objetivos estratégicos de cada entidad gubernamental, combinándose para lograr una administración más efectiva y transparente.

    .row.bg-gris-claro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Innovación pública y ética en la gestión pública
          p.mb-5(data-aos="fade-up") Los invitamos a leer Innovación pública y ética en la gestión pública , un análisis sobre cómo la modernización del sector estatal impulsa la eficiencia, la transparencia y la confianza ciudadana. En este documento se exploran estrategias clave de innovación en la administración pública, desde la digitalización de trámites hasta la optimización de recursos, así como los desafíos que enfrenta su implementación.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Innovación pública y ética en la gestión pública
    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69481") Díaz Matajira, L. & Forero Pineda, C. (2014). La gestión de lo público: debates y dilemas.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=vzf9FVM2l5A") [Vídeo] Desarrollo Global. (2014, 17 de septiembre). Diploma Gestión Pública - Planeamiento Estratégico y Gestión por Resultados.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=uEbR8vfm9BQ") [Vídeo] Ministerio TIC Colombia. (2022). ContraloríaTIC: Innovación Pública Digital.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
