
const propiedades_venta = [
    {
      nombre: "Apartamento de lujo",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion: "Apartamento exclusivo con diseño moderno.",
      ubicacion: "Luxury Lane, Prestige Suburb",
      habitaciones: 4,
      costo: 5000,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Casa familiar en suburbios",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion: "Casa espaciosa ideal para familias.",
      ubicacion: "Suburbio Park, Downtown",
      habitaciones: 3,
      costo: 4000,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Penthouse de lujo",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      descripcion: "Increíble penthouse con vista al mar.",
      ubicacion: "Skyline Avenue, Beach City",
      habitaciones: 5,
      costo: 8000,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Casa campestre",
      src: "https://images.homify.com/c_fill,f_auto,q_auto,w_740/v1506000047/p/photo/image/2237421/26_Claudia_y_Mauricio_05.jpg",
      descripcion: "Casa con amplio jardín y entorno natural.",
      ubicacion: "Country Road, Hill Valley",
      habitaciones: 3,
      costo: 3500,
      smoke: true,
      pets: false,
    },
  ];
  


  const propiedades_alquiler = [
    {
      nombre: "Apartamento céntrico",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60",
      descripcion: "Cerca de comercios y transporte público.",
      ubicacion: "Main Street, Downtown",
      habitaciones: 2,
      costo: 2000,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Apartamento vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?auto=format&fit=crop&w=1470&q=80",
      descripcion: "Apartamento con vistas impresionantes.",
      ubicacion: "Ocean Avenue, Seaside",
      habitaciones: 3,
      costo: 2500,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Condominio moderno",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1000&q=60",
      descripcion: "Condominio tranquilo en zona residencial.",
      ubicacion: "Residential Road, Suburbia",
      habitaciones: 3,
      costo: 2200,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Casa acogedora",
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80",
      descripcion: "Ideal para parejas o pequeños grupos.",
      ubicacion: "Countryside Road, Greenfield",
      habitaciones: 2,
      costo: 1800,
      smoke: true,
      pets: true,
    },
  ];
  

  
  function renderizarPropiedades(propiedades, contenedor, max = 3) {
    let html = "";
    propiedades.slice(0, max).forEach((propiedad) => {
      html += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
              <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
                <i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i>
                ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
              </p>
              <p class="${propiedad.pets ? "text-success" : "text-danger"}">
                <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
                ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
              </p>
            </div>
          </div>
        </div>
      `;
    });
    contenedor.innerHTML = html;
  }
  


  document.addEventListener("DOMContentLoaded", () => {
    const contenedorVenta = document.querySelector("#venta .row");
    const contenedorAlquiler = document.querySelector("#alquiler .row");
  
    renderizarPropiedades(propiedades_venta, contenedorVenta);
    renderizarPropiedades(propiedades_alquiler, contenedorAlquiler);
  });
  