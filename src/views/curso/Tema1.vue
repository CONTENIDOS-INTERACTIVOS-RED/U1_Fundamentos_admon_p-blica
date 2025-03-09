<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Gobernanza y gestión de redes'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
        .row.bg-gris.bg-full-width.py-4.mb-0
          div.px-5.pb-md-3.row
            .col-12.col-xl-8.d-flex.justify-content-center.align-items-center
              span Este enfoque implica procesos de decisión más inclusivos y participativos, en los que no solo intervienen entidades gubernamentales, sino también organizaciones civiles, actores privados y organismos internacionales. Como resultado, se han desarrollado modelos que fomentan la descentralización, la articulación de redes interinstitucionales y el fortalecimiento del control ciudadano sobre la administración estatal (Aguilar, 2014).
            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
        .row.bg-gris-claro.bg-full-width.p-4.mb-4
          p Este enfoque implica procesos de decisión más inclusivos y participativos, en los que no solo intervienen entidades gubernamentales, sino también organizaciones civiles, actores privados y organismos internacionales. Como resultado, se han desarrollado modelos que fomentan la descentralización, la articulación de redes interinstitucionales y el fortalecimiento del control ciudadano sobre la administración estatal (Aguilar, 2014).
    
        h2 Diferencias entre gobernanza y gobernabilidad
    
        p.mb-4 La siguiente tabla presenta las principales diferencias entre ambos conceptos:
    
        p <strong>Tabla 1.</strong> Comparación entre gobernanza y gobernabilidad
    
        .row.mb-4
          .col-12.col-md-10.mx-auto
            .tabla-a
              table
                thead
                  tr
                    th(width="25%").text-bold Aspecto
                    th.text-bold Gobernabilidad
                    th.text-bold Gobernanza
                tbody
                  tr
                    td.text-bold Enfoque principal
                    td Capacidad del gobierno para ejercer autoridad y mantener el orden.
                    td Participación de múltiples actores en la toma de decisiones.
                  tr
                    td.text-bold Modelo de gestión
                    td Jerárquico y vertical.
                    td Colaborativo y descentralizado.
                  tr
                    td.text-bold Actores involucrados
                    td Gobierno central y entidades estatales.
                    td Gobierno, sociedad civil, sector privado y organismos internacionales.
                  tr
                    td.text-bold Objetivo principal
                    td Garantizar la estabilidad política y social.
                    td Promover la transparencia, eficiencia y participación en la gestión pública.
            .bg-rojo-claro.p-4
              span Desde esta perspectiva, la gobernanza no reemplaza la gobernabilidad, sino que la complementa a través de redes de cooperación y estrategias que fortalecen la capacidad del Estado para abordar problemáticas complejas de manera sostenible (Aguilar, 2014).
    
        #t_1_1.titulo-segundo(data-aos="flip-up")
          div.d-flex
            span.me-3 1.1
            h2 Enfoques teóricos sobre la gobernanza en la administración pública
    
        p.mb-4 Diferentes enfoques han permitido aplicar la gobernanza en distintos contextos administrativos:
        .row.mb-4
          .col-12.col-xl-8
            LineaTiempoD.color-secundario
              p(numero='1' titulo='Gobernanza jerárquica') Modelo tradicional en el que el Estado mantiene la autoridad central en la toma de decisiones, con estructuras burocráticas verticales que garantizan estabilidad institucional.
              p(numero='2' titulo='Gobernanza en red') Propone la cooperación entre entidades gubernamentales y actores externos, facilitando la gestión de recursos y optimizando la prestación de servicios públicos. 
              p(numero='3' titulo='Gobernanza participativa') Se basa en la inclusión directa de la ciudadanía mediante audiencias públicas, consultas populares y presupuestos participativos, fortaleciendo la transparencia institucional.
              p(numero='4' titulo='Gobernanza multinivel') Destaca la coordinación entre niveles de gobierno (nacional, regional y local) para descentralizar la gestión pública y optimizar su impacto en la población.
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
    
        .row.bg-verde-oscuro.bg-full-width.py-4.mb-4
          div.px-5.pb-md-3
            .col-1.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-5.svg', alt='Texto que describa la imagen')
            .col-12.col-xl-11
              span.text-white La combinación de estos enfoques ha permitido una administración pública más flexible y adaptable, promoviendo la cooperación estatal y privada en la formulación de estrategias para el desarrollo sostenible. 
        #t_1_2.titulo-segundo(data-aos="flip-up")
          div.d-flex
            span.me-3 1.2
            h2 Relación entre gobernanza y gestión eficiente de recursos estatales

        p.mb-4 Uno de los principales beneficios de la gobernanza es la optimización en la gestión de recursos estatales. La descentralización y la participación de múltiples actores permiten un uso más estratégico de los fondos públicos, minimizando duplicidades y promoviendo la rendición de cuentas (Lasagna, 2013).
        
        .row.bg-fondo-1.bg-full-width.py-4.mb-4
          div.px-5.pb-md-3
            .row.mb-4
              .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
                div.custom-image-card.rounded-8px
                  img.mb-4(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
                  div.mb-4
                    p.text-bold.text-center Coordinación interinstitucional
                    p.text-small.px-4.text-center.pb-2 Facilita la planificación estratégica y ejecución eficiente de programas gubernamentales.
              .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
                div.custom-image-card.rounded-8px
                  img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
                  div.mb-4
                    p.text-bold.text-center Transparencia y control social
                    p.text-small.px-4.text-center.pb-2 Permite la supervisión ciudadana y reduce los riesgos de corrupción.
              .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
                div.custom-image-card.rounded-8px
                  img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
                  div.mb-4
                    p.text-bold.text-center Innovación en la gestión pública
                    p.text-small.px-4.text-center.pb-2 Favorece la adopción de nuevas tecnologías y metodologías administrativas.

        .row.bg-amarillo-claro.bg-full-width.py-4.mb-4
          div.px-5.pb-md-3
            span En Colombia, la gobernanza ha sido clave en políticas de desarrollo sostenible. Modelos como los Contratos Plan han promovido alianzas entre diferentes niveles de gobierno y actores locales, garantizando un desarrollo territorial más equilibrado y eficiente (Aguilar, 2014).

        #t_1_3.titulo-segundo(data-aos="flip-up")
          div.d-flex
            span.me-3 1.3
            h2 Modelos de gobernanza en la administración pública

        p.mb-4 La gobernanza en la administración pública ha evolucionado de modelos centralizados hacia esquemas más abiertos y participativos. Tradicionalmente, la administración pública se basaba en un modelo jerárquico, fundamentado en la burocracia weberiana, con estructuras verticales que garantizaban control y estabilidad institucional (Aguilar, 2014).

        ImagenInfografica.color-secundario.mb-0.bg-white
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/unidad/img-9.png', alt='Descripción de la imagen')
          .tarjeta.bg-white.p-4(x='31.4%' y='36%' numero='+')
            .h5.mb-2 Toma de decisiones centralizada 
            p Las decisiones son adoptadas por autoridades superiores sin consulta amplia con otros actores.
          .tarjeta.bg-white.p-4(x='70%' y='36%' numero='+')
            .h5.mb-2 Normas y procedimientos rígidos
            p Regulaciones estrictas que limitan la flexibilidad en la gestión pública.
          .tarjeta.bg-white.p-4(x='31.4%' y='64%' numero='+')
            .h5.mb-2 Supervisión administrativa estricta
            p Control vertical y énfasis en la rendición de cuentas interna.
          .tarjeta.bg-white.p-4(x='70%' y='64%' numero='+')
            .h5.mb-2 Baja autonomía en organismos subordinados
            p Dependencia de instancias superiores para la ejecución de acciones.

        .bg-verde-claro.p-4.mb-4
          span Aunque este modelo ha fortalecido la institucionalidad, su rigidez y limitada flexibilidad han llevado al desarrollo de enfoques más colaborativos.

        .row.mb-4
          .col-6.col-lg-3.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
            .bg-verde.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
              p.text-bold.mb-0.text-center Participación de diversos sectores
            .bg-verde-claro.p-4.h-100
              p.mb-0.text-small.text-center Involucra actores gubernamentales, privados y civiles en la formulación de políticas.
          .col-6.col-lg-3.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
            .bg-amarillo-oscuro.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
              p.text-bold.mb-0.text-center Flexibilidad organizacional
            .bg-amarillo.p-4.h-100
              p.mb-0.text-small.text-center Permite la descentralización en la toma de decisiones.
          .col-6.col-lg-3.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
            .bg-rojo.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
              p.text-bold.mb-0.text-center Redes de cooperación interinstitucional	
            .bg-rojo-claro.p-4.h-100
              p.mb-0.text-small.text-center Facilitan la gestión de políticas y programas a través de alianzas estratégicas.
          .col-6.col-lg-3.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
            .bg-gris-oscuro.px-4.py-3.mb-0.h-100.d-flex.justify-content-center.align-items-center
              p.text-bold.mb-0.text-center.text-white Mayor transparencia	
            .bg-gris-claro.p-4.h-100
              p.mb-0.text-small.text-center Brinda acceso ciudadano a la información gubernamental.

        #t_1_4.titulo-segundo(data-aos="flip-up")
          div.d-flex
            span.me-3 1.4
            h2 Tendencias globales en la implementación de la gobernanza

        p.mb-4 A nivel mundial, la gobernanza ha evolucionado hacia esquemas más dinámicos y participativos, impulsados por la globalización, la digitalización de procesos y la creciente demanda ciudadana por una administración pública más accesible.

        .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
          div.px-4.px-md-5.py-md-3
            SlyderA(tipo="b").bg-white
              .row.p-4.px-md-5.py-lg-5.justify-content-between
                .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                  p.text-bold Gobernanza digital
                  p Uso de tecnologías de la información para digitalizar trámites, automatizar procesos administrativos y mejorar la transparencia (Aguilar, 2014).
                .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
              .row.p-4.px-md-5.py-lg-5.justify-content-between
                .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                  p.text-bold Gobernanza abierta
                  p Implementación de datos abiertos y consulta ciudadana para promover la corresponsabilidad en la gestión pública (Lasagna, 2013).
                .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
              .row.p-4.px-md-5.py-lg-5.justify-content-between
                .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                  p.text-bold Gobernanza en red
                  p Cooperación entre múltiples actores mediante alianzas público-privadas y redes intergubernamentales para mejorar la eficiencia en la prestación de servicios (Peña, 2013).
                .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
              .row.p-4.px-md-5.py-lg-5.justify-content-between
                .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                  p.text-bold Gobernanza basada en evidencia
                  p Uso de indicadores y sistemas de monitoreo para evaluar políticas públicas con base en datos verificables y análisis técnicos (Rovira, 2013).
                .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

        p.mb-4 Estas tendencias han permitido que los Estados sean más eficientes, transparentes y adaptativos a los desafíos del contexto global.

        #t_1_5.titulo-segundo(data-aos="flip-up")
          div.d-flex
            span.me-3 1.5
            h2 La gobernanza multinivel y la descentralización del poder

        p.mb-4 La gobernanza multinivel implica la interacción entre el gobierno central, los entes regionales y las administraciones locales para coordinar la implementación de políticas públicas. En Colombia, la descentralización ha fortalecido la autonomía de los gobiernos locales desde la Constitución de 1991, permitiendo una gestión más eficiente de los recursos públicos (Rovira, 2013).

        .row.mb-4
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            p.mb-4
            .bg-gris-claro.mb-4.p-4
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Coordinación intergubernamental.</strong> Asegura la coherencia en la implementación de políticas a nivel nacional, regional y local.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Transferencia de competencias. </strong>Otorga mayor autonomía a los gobiernos locales para gestionar sus recursos.
              div.d-flex.mb-4
                img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                p.mb-0 <strong>Mecanismos de cooperación. </strong>Establece acuerdos entre distintos niveles de gobierno para la ejecución de proyectos estratégicos.
            span Los beneficios de la descentralización en la gobernanza multinivel: 
        .row.bg-gris.bg-full-width.p-4.mb-4
          div.px-5.pb-md-3
            .col-12.col-lg-11
              img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

        .row.bg-verde-claro.bg-full-width.p-4.mb-4
          div.px-5.row

            .col-1.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-16.svg', alt='Texto que describa la imagen')
    
            .col-12.col-xl-11
              span A pesar de sus ventajas, la descentralización enfrenta desafíos como la falta de coordinación intergubernamental y las desigualdades en la capacidad administrativa de los territorios (Peña, 2013).

        #t_1_6.titulo-segundo(data-aos="flip-up")
          div.d-flex
            span.me-3 1.6
            h2 La gestión de redes como estrategia para la articulación interinstitucional y la participación ciudadana.

        p.mb-4 La gestión de redes ha emergido como una estrategia clave en la administración pública, facilitando la cooperación entre entidades gubernamentales, sector privado y sociedad civil para mejorar la eficiencia y la transparencia en la gestión estatal (Rovira, 2013).

        .row.bg-amarillo.bg-full-width.p-4.mb-4
          div.px-5.pb-md-3
            .row
              .col-12.col-xl-7
                div.d-flex.mb-4
                  img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                  p.mb-0 <strong>Interdependencia. </strong>Ningún actor tiene control absoluto; las decisiones son producto de cooperación y negociación.
                div.d-flex.mb-4
                  img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                  p.mb-0 <strong>Flexibilidad organizacional. </strong>Permite adaptación a cambios sin perder cohesión.
                div.d-flex.mb-4
                  img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                  p.mb-0 <strong>Co-creación de valor público. </strong>Soluciones más inclusivas y sostenibles gracias a la colaboración.
                div.d-flex.mb-4
                  img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
                  p.mb-0 <strong>Transparencia y rendición de cuentas.</strong>Monitoreo y evaluación para garantizar confianza en la red de gobernanza (Rovira, 2013).
              .col-4.d-none.d-xl-block
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')


        p.mb-4 Los tipos de redes en la administración pública son: 

        .row.mb-4
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

          .col-12.col-xl-8
            LineaTiempoD.color-secundario
              p(numero='1' titulo='Redes intergubernamentales') Coordinación entre niveles de gobierno para garantizar coherencia en la ejecución de políticas.<br> <strong>Ejemplo:</strong> Sistema Nacional de Planeación en Colombia.
              p(numero='2' titulo='Redes público-privadas') Colaboración entre empresas y entidades gubernamentales para optimizar la prestación de servicios.<br> <strong>Ejemplo:</strong> Asociaciones Público-Privadas (APP) en infraestructura vial.
              p(numero='3' titulo='Redes de la sociedad civil') Organizaciones comunitarias y ONG trabajan junto con el Estado en áreas como derechos humanos y medio ambiente.<br> <strong>Ejemplo:</strong> Red Nacional de Veedurías Ciudadanas para monitoreo del uso de recursos públicos.

        p.mb-4 Los beneficios de la gestión de redes en la administración pública son: 

        .row.bg-fondo-1.bg-full-width.py-4.mb-0
          div.px-5.pb-md-3
            .row.mb-4.justify-content-center
              .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Mayor eficiencia en la formulación de políticas
                  p.px-1.text-small.mb-0.d-flex.text-center Compartición de información y recursos entre actores, reduciendo duplicidad de esfuerzos.
              .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Fortalecimiento de la participación ciudadana
                  p.px-1.text-small.mb-0.d-flex.text-center Inclusión de la ciudadanía en procesos de decisión a través de mecanismos como cabildos abiertos y presupuestos participativos.
              .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Transparencia y rendición de cuentas
                  p.px-1.text-small.mb-0.d-flex.text-center Implementación de auditoría social y plataformas digitales de acceso a la información pública (Aguilar, 2014).
        .row.bg-verde-oscuro.bg-full-width.py-4.mb-4
          div.px-5.pb-md-3.row
            .col-12.col-xl-9.text-white
              p.text-bold Ejemplo
              span En Colombia, la plataforma SECOP permite a los ciudadanos monitorear en tiempo real la contratación pública, garantizando transparencia en la gestión gubernamental (Rovira, 2013).
            .col-3.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

        h2 Desafíos en la implementación de redes en la gestión pública
        p.mb-4 A pesar de sus beneficios, la implementación de redes enfrenta obstáculos que pueden afectar su eficacia.
        TabsC.mb-4
          .tabs-content.border.px-4.p-md-5.py-3(titulo='Fragmentación institucional', :iconUrl="require('@/assets/curso/unidad/img-23.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
                figure
                  img(src='@/assets/curso/unidad/img-24.png', alt='Descripción de la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0
                h4(data-aos='fade-up') Fragmentación institucional
                p(data-aos='fade-up') Falta de coordinación entre entidades gubernamentales, generando duplicidad de funciones.
          .tabs-content.border.px-4.p-md-5.py-3(titulo='Resistencia al cambio', :iconUrl="require('@/assets/curso/unidad/img-23.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
                figure
                  img(src='@/assets/curso/unidad/img-25.png', alt='Descripción de la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0
                h4(data-aos='fade-up') Resistencia al cambio
                p(data-aos='fade-up') Funcionarios y organizaciones con estructuras tradicionales pueden oponerse a modelos en red.
          .tabs-content.border.px-4.p-md-5.py-3(titulo='Coordinación intergubernamental', :iconUrl="require('@/assets/curso/unidad/img-23.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
                figure
                  img(src='@/assets/curso/unidad/img-26.png', alt='Descripción de la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0
                h4(data-aos='fade-up') Coordinación intergubernamental
                p(data-aos='fade-up') Necesidad de estructuras claras de liderazgo para facilitar la toma de decisiones.
          .tabs-content.border.px-4.p-md-5.py-3(titulo='Medición del impacto', :iconUrl="require('@/assets/curso/unidad/img-23.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
                figure
                  img(src='@/assets/curso/unidad/img-27.png', alt='Descripción de la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0
                h4(data-aos='fade-up') Medición del impacto
                p(data-aos='fade-up') Evaluación compleja debido a la dificultad de cuantificar beneficios en el corto plazo (Rovira, 2013).

        .row.bg-amarillo.bg-full-width.p-4.mb-4
          div.px-5.pb-md-3
            .row
              .col-1.d-none.d-xl-block
                img(src='@/assets/curso/unidad/img-28.svg', alt='Texto que describa la imagen')
              .col-12.col-xl-11
                span Estos retos requieren estrategias de fortalecimiento institucional y mecanismos de evaluación que permitan consolidar la gestión en red como un modelo efectivo en la administración pública.

        .bg-full-width.border-top-9-azul
          .px-5.pt-5.pb-0
            h2 Material complementario
            .row
              .col-12.col-md-6.col-lg-8
                p.d-flex.my-4
                  img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                  a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/61358") Porras Nadales, A. (2014). La acción de gobierno: gobernabilidad, gobernanza, gobermedia.
                p.d-flex.my-4
                  img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                  a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=AdEgDjec14c") [Vídeo] Ministerio TIC Colombia. (2024, 6 de agosto). Gobernanza de la Inteligencia Artificial: equilibrio entre innovación y regulación.
                p.d-flex.my-4
                  img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                  a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106277") Beuchat, G. (2017). Se debe y se puede: gestión de la innovación pública.
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
