export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Gobernanza y tendencias de lo público',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gobernanza y gestión de redes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Enfoques teóricos sobre la gobernanza en la administración pública',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Relación entre gobernanza y gestión eficiente de recursos estatales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modelos de gobernanza en la administración pública',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tendencias globales en la implementación de la gobernanza',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              ' La gobernanza multinivel y la descentralización del poder',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'La gestión de redes como estrategia para la articulación interinstitucional y la participación ciudadana',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Gestión pública por procesos vs. gestión pública por resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Gestión pública basada en procesos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Gestión pública orientada a resultados',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguilar, L. F. (2014). Gobernanza y gestión pública: (ed.). FCE - Fondo de Cultura Económica.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/109360',
    },
    {
      referencia:
        'Lasagna, M. (2013). Innovación pública: un modelo de aportación de valor: (ed.). RIL editores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67279',
    },
    {
      referencia:
        'Peña, L. (2013). Ética y servicio público: ( ed.). Plaza y Valdés (España).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/43378',
    },
    {
      referencia:
        'Rovira, A. (Coord.). (2013). Gobernanza democrática: ( ed.). Marcial Pons Ediciones Jurídicas y Sociales.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/101852',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (sf). Herramientas de Innovación Pública.',
      link:
        'https://www.dnp.gov.co/LaEntidad_/subdireccion-general-prospectiva-desarrollo-nacional/direccion-gobierno-ddhh-paz/Paginas/herramientas-de-innovacion-publica.aspx',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (sf). Sobre innovación pública.',
      link:
        'https://www.dnp.gov.co/LaEntidad_/subdireccion-general-prospectiva-desarrollo-nacional/direccion-gobierno-ddhh-paz/Paginas/sobre-innovacion-publica.aspx',
    },
    {
      referencia:
        'Procuraduría General de la Nación. (sf). Mecanismos de control y rendición de cuentas en el sector público.',
      link:
        'https://www.dnp.gov.co/LaEntidad_/Direccion-general/oficina-asesora-planeacion/Paginas/mecanismos-control-rendicion-cuentas.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Administración pública',
      significado:
        'Conjunto de instituciones y procesos que gestionan los recursos y servicios estatales para satisfacer las necesidades de la ciudadanía.',
    },
    {
      termino: 'Articulación interinstitucional',
      significado:
        'Coordinación entre diferentes entidades públicas y privadas para lograr objetivos comunes en la gestión gubernamental.',
    },
    {
      termino: 'Centralización',
      significado:
        'Modelo administrativo en el que las decisiones y la gestión se concentran en una autoridad o nivel gubernamental único.',
    },
    {
      termino: 'Descentralización',
      significado:
        'Proceso mediante el cual se otorgan competencias y recursos a los gobiernos locales o regionales, promoviendo la autonomía.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Capacidad de obtener resultados deseados con el mínimo uso de recursos posibles en la gestión pública.',
    },
    {
      termino: 'Ética en la gestión pública',
      significado:
        'Conjunto de valores y principios que guían el actuar de los funcionarios públicos en el ejercicio de sus funciones.',
    },
    {
      termino: 'Gobernabilidad',
      significado:
        'Capacidad del gobierno para implementar políticas públicas y mantener la estabilidad institucional.',
    },
    {
      termino: 'Gobernanza',
      significado:
        'Enfoque colaborativo de gestión pública basado en la participación ciudadana y la articulación de múltiples actores.',
    },
    {
      termino: 'Indicadores de desempeño',
      significado:
        'Herramientas que miden el éxito de las políticas y programas públicos en términos de resultados obtenidos.',
    },
    {
      termino: 'Innovación pública',
      significado:
        'Proceso de introducción de nuevas ideas, tecnologías y métodos para mejorar los servicios y la gestión gubernamental.',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'Proceso mediante el cual los ciudadanos intervienen activamente en la formulación, implementación y evaluación de políticas públicas.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
