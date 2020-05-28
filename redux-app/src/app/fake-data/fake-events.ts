import { Evento } from '../model/Evento';
export let events: Evento[] = [
    {
        Id: 1,
        Nombre: "Concierto post-pandemia",
        Descripcion: "Una concierto con todas las de la ley para celebtrar el fin de la pandemia",
        Fecha: "2025-01-01",
        Estado: "Iniciado",
    },
    {
        Id: 2,
        Nombre: "Obra de teatro - La Divina Comedia",
        Descripcion: "Obra basada en el libro de su mismo nombre",
        Fecha: "2020-04-30",
        Estado: "Finalizado",
    },
    {
        Id: 3,
        Nombre: "Cine arte - Película aburrida",
        Descripcion: "Película con tono sepia, algo deprimente",
        Fecha: "2020-05-29",
        Estado: "En progreso",
    }
]