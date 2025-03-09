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
    numeroUnidad: '1',
    tituloUnidad: 'Contextualización de la Administración Pública',
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
        titulo: 'CONCEPTOS BÁSICOS DE ADMINISTRACIÓN PÚBLICA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de administración pública',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diferencias entre la administración pública y privada',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Principios básicos de la administración pública',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Funciones esenciales de la administración pública',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Funciones de la administración pública',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'La función del administrador público',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'ORÍGENES DEL ESTADO: CONCEPTOS, ELEMENTOS Y FINES DEL ESTADO',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición del Estado en el ámbito administrativo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Estado, gobierno y administración pública: diferencias conceptuales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'El Estado moderno y su vínculo con la gestión pública',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Estado como entidad administrativa',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Relevancia de las instituciones en el concepto de Estado',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Elementos del Estado desde la administración pública',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Finalidades del Estado desde la administración pública',
            hash: 't_2_7',
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
        'Constitución Política de Colombia. (1991). Constitución Política de 1991.',
      link: 'https://www.constitucioncolombia.com',
    },
    {
      referencia:
        'Consejo Superior de la Judicatura. (2022). Funciones y estructura de la rama judicial en Colombia.',
      link:
        'https://www.ramajudicial.gov.co/web/consejo-superior-de-la-judicatura/funciones',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021). Funciones y estructura del Congreso colombiano.',
      link:
        'https://www.camara.gov.co/sites/default/files/2018-02/Guia%20ba%CC%81sica%20Estructura%20y%20Funciones%20del%20Congreso..pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2020). Plan Nacional de Desarrollo 2018-2022.',
      link:
        'https://www.dnp.gov.co/plan-nacional-desarrollo/Paginas/plan-nacional-de-desarrollo-2018-2022.aspx',
    },
    {
      referencia:
        'Díaz Daza, V. J. (2011). Administración de personal y liquidación de nómina (4.ª edición revisada y aumentada). Ecoe Ediciones.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=xXhaDwAAQBAJ&oi=fnd&pg=PT12&dq=Administraci%C3%B3n+de+personal+y+liquidaci%C3%B3n+de+n%C3%B3mina&ots=ihTkPx3hzc&sig=Zes1L3H8TbWlKAs96QjNZ0ZD6M#v=onepage&q=Administraci%C3%B3n%20de%20personal%20y%20liquidaci%C3%B3n%20de%20n%C3%B3mina&f=false',
    },
    {
      referencia:
        'Función Pública. (2022). Simplificación de procesos administrativos en Colombia: avances y retos.',
      link: 'https://www.funcionpublica.gov.co',
    },
    {
      referencia:
        'Fiscalía General de la Nación. (2022). Resultados de investigaciones contra la corrupción en Colombia.',
      link:
        'https://www.fiscalia.gov.co/colombia/wp-content/uploads/Informe-de-Gestion-2021-2022.pdf',
    },
    {
      referencia: 'Función Pública. (2022). Ley 2200 de 2022.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=177869',
    },
    {
      referencia:
        'López, R. (2019). Estado, gobierno y administración pública en Colombia. Universidad Nacional de Colombia.',
      link: 'https://repositorio.unal.edu.co',
    },
    {
      referencia:
        'López, R. (2021). La administración pública y su impacto en la gobernanza en Colombia. Editorial Universidad Nacional de Colombia.',
      link: 'https://repositorio.unal.edu.co',
    },
    {
      referencia:
        'Mejía, J. (2015). Guía para el diseño de estructuras salariales en las empresas. Universidad Cooperativa de Colombia.',
      link: 'http://dx.doi.org/10.16925/greylit.1080',
    },
    {
      referencia:
        'Pérez, F., & García, L. (2020). Teoría del Estado y la administración pública: Perspectivas comparadas. Fondo Editorial Universidad de los Andes.',
      link: 'https://uniandes.edu.co',
    },
    {
      referencia:
        'Ramírez, J. (2021). El Consejo de Estado y su papel en el fortalecimiento institucional en Colombia. Universidad Nacional Autónoma de México.',
      link: 'https://www.unam.mx',
    },
    {
      referencia:
        'Ramírez, J. (2021). La soberanía y el poder público en el contexto colombiano. Editorial Universidad del Rosario.',
      link: 'https://editorial.urosario.edu.co',
    },
    {
      referencia:
        'Rodríguez, A. (2021). Fortalecimiento institucional en la administración pública colombiana. Universidad Nacional de Colombia.',
      link: 'https://repositorio.unal.edu.co',
    },
  ],
  glosario: [
    {
      termino: 'Administración Pública',
      significado:
        'Conjunto de procesos, estructuras y acciones mediante los cuales el Estado gestiona recursos y ejecuta políticas públicas para satisfacer las necesidades de la sociedad.',
    },
    {
      termino: 'Control Político',
      significado:
        'Función de la rama legislativa que supervisa y evalúa la gestión de la rama ejecutiva para garantizar transparencia y eficiencia en la administración pública.',
    },
    {
      termino: 'Estado',
      significado:
        'Organización política y administrativa que ejerce soberanía sobre un territorio, regula las relaciones sociales y garantiza derechos fundamentales.',
    },
    {
      termino: 'Población',
      significado:
        'Conjunto de personas que habitan en el territorio del Estado y son sujetos de derechos y deberes establecidos por este.',
    },
    {
      termino: 'Políticas Públicas',
      significado:
        'Decisiones y acciones del Estado diseñadas para resolver problemas sociales y mejorar la calidad de vida de la población.',
    },
    {
      termino: 'Proceso de descentralización',
      significado:
        'Mediante el cual el Estado transfiere competencias, recursos y autonomía a las entidades territoriales para una gestión más eficiente.',
    },
    {
      termino: 'Rama Ejecutiva',
      significado:
        'Órgano del Estado encargado de implementar políticas públicas, administrar recursos y garantizar el orden público.',
    },
    {
      termino: 'Rama Judicial',
      significado:
        'Institución encargada de interpretar y aplicar las leyes, garantizar los derechos fundamentales y resolver conflictos legales.',
    },
    {
      termino: 'Rama Legislativa',
      significado:
        'Poder del Estado que crea, modifica y deroga leyes, además de ejercer control político sobre las otras ramas.',
    },
    {
      termino: 'Soberanía',
      significado:
        'Autoridad suprema que tiene el Estado para gobernar su territorio, tomar decisiones y establecer normas sin interferencias externas.',
    },
    {
      termino: 'Territorio',
      significado:
        'Espacio geográfico delimitado donde el Estado ejerce su autoridad y administra los recursos naturales, económicos y sociales.',
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
