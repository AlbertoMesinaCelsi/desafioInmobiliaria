const propiedades = [
    {
      id: 1,
      nombre: "Apartamento de lujo en zona exclusiva",
      imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      toilette: 4,
      precio: 5000,
      fumar: false,
      mascotas: false
    },
    {
      id: 2,
      nombre: "Apartamento acogedor en la montaña",
      imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      direccion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      toilette: 1,
      precio: 5200,
      fumar: true,
      mascotas: true
    },
    {
      id: 3,
      nombre: "Penthouse de lujo con terraza panorámica",
      imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      direccion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      toilette: 3,
      precio: 9000,
      fumar: false,
      mascotas: true
    },
    {
      id: 4,
      nombre: "Penthouse de lujo con terraza panorámica",
      imagen: "https://imgar.zonapropcdn.com/avisos/1/00/52/16/60/07/360x266/1877645439.jpg?isFirstImage=true",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      direccion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      toilette: 3,
      precio: 7500,
      fumar: false,
      mascotas: true
    },
    {
      id: 5,
      nombre: "Magnifico departamento urbano",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_872466-MLC75886615055_042024-O.webp",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      direccion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      toilette: 3,
      precio: 8500,
      fumar: false,
      mascotas: true
    },
    
  ]
  
 

  const venta = document.querySelector('#venta-propiedad')
  let html = ""
  
  for(let propiedad of propiedades){
     html+= `
      <div class="card" id="${propiedad.id}">
        <img src="${propiedad.imagen}" alt="${propiedad.nombre}">
        <div class="card-content">
          <h3>${propiedad.nombre}</h3>
          <p>${propiedad.descripcion}</p>
          <p>
              <i class="fas fa-map-marker-alt"> </i> ${propiedad.direccion}
            </p>
            <p>   
              <i class="fas fa-bed"></i> ${propiedad.habitaciones} habitaciones |
              <i class="fas fa-bath"></i>  ${propiedad.toilette} baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> Precio ${propiedad.precio}</p>
            <p style="color: ${propiedad.fumar? "green":"red"}"><i class="fas fa-smoking-ban"></i> ${propiedad.fumar ? "Permitido fumar" : "No está permitido fumar"}</p>
            <p style="color: ${propiedad.mascotas ? "green":"red"}"><i class="fa-solid fa-ban"></i> ${propiedad.mascotas ? "Permitidas las mascotas" : "No están permitidas las mascotas"} </p>
        </div>
      </div>
      
    `
    
  }
  
  venta.innerHTML = html