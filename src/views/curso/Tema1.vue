<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. CONCEPTOS BÁSICOS DE ADMINISTRACIÓN PÚBLICA'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-right")
          p.mb-0(data-aos="fade-up") La administración pública es una disciplina esencial para el desarrollo de los Estados modernos, especialmente en contextos como el colombiano, donde la gestión de recursos, políticas y acciones articuladas resulta clave para satisfacer las necesidades colectivas. Este campo no solo cumple una función operativa, sino que también representa el vínculo entre las demandas de la ciudadanía y la capacidad del Estado para responder de manera equitativa.
        .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-5.d-none.d-xl-block
          img.h-100(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7
          p.mb-4(data-aos="fade-up") En Colombia, la administración pública es un pilar para alcanzar objetivos nacionales e impulsar transformaciones sociales. La Constitución Política de 1991 establece principios fundamentales, como la eficiencia y la transparencia, que orientan la gestión gubernamental y fortalecen la confianza entre el gobierno y la población.
          .bg-verde-claro.p-4(data-aos="fade-up")
            span Comprender estos conceptos permite analizar el funcionamiento del Estado de manera integral, incluyendo los mecanismos que garantizan la prestación de servicios esenciales y la implementación de políticas públicas. Además, profundizar en sus principios y funciones facilita la identificación de oportunidades para optimizar procesos administrativos en distintos contextos.

      #t_1_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 1.1
          h2 Definición de administración pública

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4(data-aos="fade-up") La administración pública es el conjunto de procesos, estructuras y acciones que desarrolla el Estado para cumplir funciones esenciales como garantizar el bienestar colectivo, promover el desarrollo y salvaguardar los derechos ciudadanos. Este ámbito no solo gestiona recursos, sino también relaciones y expectativas sociales, lo que lo convierte en un sistema dinámico y multidimensional.
          span En Colombia, la administración pública es fundamental para responder a las necesidades de una sociedad diversa y en constante transformación. Su naturaleza está orientada al servicio, lo que implica que las entidades estatales deben operar bajo principios como la eficiencia y la transparencia, establecidos en la Constitución Política de 1991. Al gestionar recursos públicos, estas entidades deben priorizar el bien común sobre los intereses particulares.
        .d-none.d-xl-block.col-4
          img.h-100(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

      #t_1_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 1.2
          h2 Diferencias entre la administración pública y privada

      p.mb-4 Aunque ambas disciplinas comparten principios administrativos como la planificación y la organización, sus objetivos y naturaleza son distintos.
      p.mb-4 <strong>Tabla 1.</strong> Diferencias entre la administración pública y privada

      .tabla-a
        table
          thead
            tr
              th(width="25%").text-bold Aspecto
              th.text-bold Administración Pública
              th.text-bold Administración Privada
          tbody
            tr
              td.text-bold Propósito
              td Satisfacer necesidades sociales mediante bienes y servicios públicos.
              td Maximizar utilidades y beneficios económicos.
            tr
              td.text-bold Regulación
              td Opera bajo un marco legal estricto que garantiza equidad y transparencia.
              td Se rige por criterios de eficiencia económica y competitividad.
            tr
              td.text-bold Gestión del talento humano
              td La contratación y remuneración están reguladas para asegurar equidad.
              td La contratación es flexible y depende de estrategias empresariales.
            tr
              td.text-bold Uso de recursos
              td Priorización del interés público en la asignación de recursos.
              td Búsqueda de rentabilidad y optimización de costos.

      .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-6.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 En el contexto colombiano, estas diferencias se evidencian en la regulación de la contratación y la gestión del talento humano en entidades estatales. Según Díaz Daza (2011), las entidades públicas deben cumplir requisitos legales estrictos para asegurar la transparencia y equidad en la administración de los recursos.
      
      #t_1_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 1.3
          h2 Principios básicos de la administración pública

      p.mb-4(data-aos="fade-up") La administración pública se rige por principios fundamentales que orientan su funcionamiento:

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-7.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='37%' y='36%' numero='+')
          .h5.mb-2 Eficiencia
          p Uso óptimo de los recursos disponibles para maximizar resultados.
        .tarjeta.bg-white.p-4(x='64.3%' y='36%' numero='+')
          .h5.mb-2 Eficacia
          p Cumplimiento de los objetivos establecidos en planes y políticas públicas.
        .tarjeta.bg-white.p-4(x='37%' y='63%' numero='+')
          .h5.mb-2 Transparencia
          p Implementación de prácticas abiertas y accesibles para que la ciudadanía pueda supervisar y evaluar la gestión estatal.
        .tarjeta.bg-white.p-4(x='64.3%' y='63%' numero='+')
          .h5.mb-2 Equidad
          p Distribución justa de recursos y oportunidades para garantizar el bienestar general.

      p.mb-4(data-aos="fade-up") En Colombia, estos principios están presentes en documentos clave como el Plan Nacional de Desarrollo 2018-2022, que establece estrategias para fortalecer la confianza ciudadana y mejorar la prestación de servicios (DNP, 2020).

      TabsC.mb-0
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Política', :iconUrl="require('@/assets/curso/unidad/img-8.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Política
              p(data-aos='fade-up') Relacionada con la formulación de políticas públicas y su alineación con las prioridades nacionales. En Colombia, la acción pública responde a las necesidades de desarrollo sostenible y justicia social.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Legal', :iconUrl="require('@/assets/curso/unidad/img-8.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Legal
              p(data-aos='fade-up') Comprende el marco normativo que regula las actividades estatales. Leyes como la 2200 de 2022 garantizan la simplificación de procesos administrativos para mejorar la eficiencia (Función Pública, 2022).
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Social', :iconUrl="require('@/assets/curso/unidad/img-8.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Social
              p(data-aos='fade-up') Enfocada en atender las demandas de la población, especialmente de los sectores más vulnerables. La administración pública desempeña un papel clave en la inclusión social y la equidad.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Técnica', :iconUrl="require('@/assets/curso/unidad/img-8.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Técnica
              p(data-aos='fade-up') Involucra el diseño y la implementación de sistemas y herramientas que optimizan la gestión administrativa.

      .bg-rojo-claro.p-4.mb-4(data-aos="fade-up")
        span Estas dimensiones interconectadas permiten al Estado colombiano cumplir su misión constitucional, adaptándose a los retos del entorno y las demandas ciudadanas.

      #t_1_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 1.4
          h2 Funciones esenciales de la administración pública

      .row.bg-amarillo.bg-full-width.pt-4.mb-4
        div.px-5
          .row.mb-4
            .col-12.col-xl-8
              p.mb-4(data-aos="fade-up") Las funciones de la administración pública se pueden clasificar en tres grandes áreas:
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Regulación: </strong>establece normas y directrices que guían el comportamiento de los actores sociales y económicos. En Colombia, estas regulaciones buscan garantizar la justicia y el orden público.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Provisión de servicios: </strong>asegura la entrega de bienes y servicios esenciales como salud, educación y seguridad, garantizando el acceso equitativo a través de políticas redistributivas.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Promoción del desarrollo: </strong>implementa estrategias que fomentan el crecimiento económico, la sostenibilidad ambiental y la cohesión social.
            .d-none.d-xl-block.col-4
              img.h-100(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      p.mb-4 Las entidades públicas no solo gestionan recursos, sino que también impactan múltiples aspectos del desarrollo humano.

      h2 Rol del administrador público

      .row.mb-4
        .col-5.d-none.d-xl-block
          img.h-100(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7
          p.mb-4(data-aos="fade-up") El administrador público actúa como intermediario entre el Estado y la sociedad, interpretando las necesidades ciudadanas y transformándolas en acciones concretas alineadas con los objetivos gubernamentales. Según Mejía (2015), uno de los principales retos es diseñar estructuras salariales equitativas que promuevan la motivación y el desempeño del talento humano en el sector público.
          .d-flex.align-items-start.bg-verde-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-15.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 En Colombia, este profesional debe liderar procesos de transformación organizacional, implementar políticas basadas en evidencia y garantizar el cumplimiento de las metas de desarrollo.

      h2 Importancia de la administración pública en Colombia
      p.mb-4(data-aos="fade-up") La administración pública impulsa el desarrollo y la cohesión social. En un país con diversidad cultural y geográfica, el diseño de políticas públicas inclusivas es clave para reducir desigualdades históricas.

      p.mb-4 El <strong>Plan Nacional de Desarrollo 2018-2022</strong> resalta la importancia de fortalecer la capacidad institucional para mejorar la calidad de vida. Esto implica:

      .row.mb-4
        .col-12.col-md-6.col-lg-4.mx-auto(data-aos="flip-up")
          .bg-verde.h-100.p-4.rounded
            p.text-bold.text-center.my-auto.d-flex Modernizar los procesos administrativos.
        .col-12.col-md-6.col-lg-4.mx-auto(data-aos="flip-up")
          .bg-amarillo-oscuro.h-100.p-4.rounded
            p.text-bold.text-center.my-auto.d-flex Implementar tecnologías innovadoras.
        .col-12.col-md-6.col-lg-4.mx-auto(data-aos="flip-up")
          .bg-rojo.p-4.h-100.p-4.rounded.d-flex
            p.text-bold.text-center.my-auto.d-flex Fomentar la participación ciudadana.

      p.mb-4(data-aos="fade-up") Así, la administración pública no solo estructura el Estado, sino que también es un catalizador del cambio social.

      #t_1_5.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 1.5
          h2 Funciones de la administración pública

      p.mb-4(data-aos="fade-up") La administración pública busca garantizar el bienestar general mediante la gestión de recursos, la prestación de servicios y el establecimiento de normas que regulen la convivencia.

      .row.mb-4
        .col-12.col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Función de regulación")(data-aos="fade-up")
              p Creación de normas y directrices para ordenar la conducta de individuos y organizaciones. Ejemplo: la Ley 2200 de 2022 promueve la simplificación de trámites administrativos.
            .div(titulo="Función de provisión de servicios")(data-aos="fade-up")
              p Garantiza el acceso equitativo a servicios esenciales como salud, educación y seguridad. Ejemplo: la educación básica gratuita como derecho fundamental.
            .div(titulo="Función de promoción del desarrollo")(data-aos="fade-up")
              p Diseña e implementa políticas para reducir desigualdades y fomentar la participación ciudadana. Ejemplo: programas como Colombia Productiva para incentivar la innovación y la competitividad.
            .div(titulo="Función de protección y seguridad")(data-aos="fade-up")
              p Prevención de riesgos, mitigación de desastres y fortalecimiento de la seguridad ciudadana. Ejemplo: el Sistema Nacional para la Gestión del Riesgo de Desastres (SNGRD).
            .div(titulo="Función de participación ciudadana")(data-aos="fade-up")
              p Involucra a la ciudadanía en la toma de decisiones públicas. Ejemplo: cabildos abiertos, consultas populares y veedurías ciudadanas.
            .div(titulo="Función de coordinación interinstitucional")(data-aos="fade-up")
              p Articula acciones entre distintos niveles del Estado para una gestión eficiente. Ejemplo: coordinación entre alcaldías y ministerios para la infraestructura vial.
        .col-12.col-lg-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

      #t_1_6.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 1.6
          h2 La función del administrador público

      p.mb-4(data-aos="fade-up") El administrador público desempeña un papel clave en el desarrollo social y económico del país.

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.row
          .col-4.d-none.d-xl-block
            img.mb-4(src='@/assets/curso/unidad/img-17.png', alt='Descripción de la imagen')
          .col-12.col-xl-8
            SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
              div.rounded-8px
                .row.mb-4.justify-content-center
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Liderazgo en políticas públicas
                    p.px-1.text-small.mb-0.d-flex.text-center Diagnostica necesidades y diseña intervenciones efectivas.
              div.rounded-8px
                .row.mb-4.justify-content-center
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Gestión eficiente de recursos
                    p.px-1.text-small.mb-0.d-flex.text-center Planifica y supervisa presupuestos para maximizar el impacto.
              div.rounded-8px
                .row.mb-4.justify-content-center
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Facilitador de la participación ciudadana
                    p.px-1.text-small.mb-0.d-flex.text-center Promueve mecanismos como cabildos y veedurías.
              div.rounded-8px
                .row.mb-4.justify-content-center
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Promoción de la innovación
                    p.px-1.text-small.mb-0.d-flex.text-center Implementa tecnologías y moderniza procesos estatales.
              div.rounded-8px
                .row.mb-4.justify-content-center
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-22.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Garantía de ética y transparencia
                    p.px-1.text-small.mb-0.d-flex.text-center Asegura una gestión pública libre de corrupción.
              div.rounded-8px
                .row.mb-4.justify-content-center
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-23.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Coordinación entre niveles de gobierno
                    p.px-1.text-small.mb-0.d-flex.text-center Articula acciones entre entidades nacionales, departamentales y municipales.

      .row.bg-amarillo.bg-full-width.p-4.mb-4
        div.px-5.pb-md-3
          span Según López (2019), el administrador público debe interpretar las demandas locales y articularlas con las metas nacionales, promoviendo así una gestión descentralizada y equitativa.

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://repositorio.21.edu.ar/bitstream/handle/ues21/12816/TEORIA%20DE%20LA%20ADMINISTRACION%20PUBLICA.pdf") Ramió, C. (2021). Teoría de la organización. LP Derecho.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://repositorio.21.edu.ar/bitstream/handle/ues21/12816/TEORIA%20DE%20LA%20ADMINISTRACION%20PUBLICA.pdf") Martínez, J. (2019). Teoría de la administración pública. Universidad Siglo 21.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=XyKc27G1V3s") [Vídeo] Administración pública: ¿Qué es? Descubre TODO en 4 minutos. (2022, 10 de marzo).
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.oas.org/sap/publications/2008/La%20Descentralizacin.pdf") Organización de los Estados Americanos (OEA). (2008). La descentralización y la gobernabilidad democrática en América Latina.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
