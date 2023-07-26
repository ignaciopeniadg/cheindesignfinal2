import React, { useState, useEffect } from 'react'
import Title from '../Title/Title'
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css'
import { useParams } from 'react-router-dom';

const servicios =

    [
        {
            id: "a1",
            nombre: "Diseño de Logotipo",
            categoriaId: 1,
            category: "brand",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/dise%C3%B1od-de-logotipo.jpg?alt=media&token=55783c70-5a3c-492e-b225-929890c6ad0d',
            descripcion: "Logotipo/Isotipo, Aplicaciones básicas y guía de uso. Comprende 3 etapas: 3 opciones de diseño en base a brief desarrollado por cliente, 2 etapas de corrección, (se refiere a etapas globales, se pueden corregir más de un detalle en cada etapa) y por último Desarrollo de manual de marca.",
            precio: 200
        },
        {
            id: "a2",
            nombre: "Rediseño de una identidad",
            categoriaId: 1,
            category: "brand",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/dise%C3%B1od-de-logotipo.jpg?alt=media&token=55783c70-5a3c-492e-b225-929890c6ad0d',
            descripcion: "Logotipo/Isotipo, Aplicaciones básicas y guía de uso. Comprende 3 etapas: 3 opciones de diseño en base a brief desarrollado por cliente, 2 etapas de corrección, (se refiere a etapas globales, se pueden corregir más de un detalle en cada etapa) y por último Desarrollo de manual de marca.",
            precio: 200
        },
        {
            id: "a3",
            nombre: "Digitalización de marca",
            categoriaId: 1,
            category: "brand",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/dise%C3%B1od-de-logotipo.jpg?alt=media&token=55783c70-5a3c-492e-b225-929890c6ad0d',
            descripcion: "En el caso de contar con una marca previamente diseñada por otro profesional y no contar con su versión en algún programa de vector, se digitalizará en Illustrator para tener un archivo vectorizado del mismo.",
            precio: 30
        },
        {
            id: "b1",
            nombre: "Calcos",
            categoriaId: 2,
            category: "merch",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/calcos.png?alt=media&token=cdd78917-670f-4eaa-abfa-a7e38400f915',
            descripcion: "Diseño MockUp de Calcos circulares con elementos gráficos visuales de la marca. Se entrega archivo jpg del MockUp y Psd o Ai con Vectores y referencia de medidas para su impresión",
            precio: 30
        },
        {
            id: "b2",
            nombre: "Remera",
            categoriaId: 2,
            category: "merch",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Remera.png?alt=media&token=ddb794c9-66b7-44d2-99ed-a5ef3a03a874',
            descripcion: "Diseño MockUp de Remera con elementos gráficos visuales de la marca. Se entrega archivo jpg del MockUp y Psd o Ai con Vectores y referencia de medidas para su impresión",
            precio: 30
        },
        {
            id: "b3",
            nombre: "Hoodie",
            categoriaId: 2,
            category: "merch",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Hoddie.png?alt=media&token=a8d2a877-c12e-426b-b248-c1e305b70237',
            descripcion: "Diseño MockUp de Hoodie con elementos gráficos visuales de la marca. Se entrega archivo jpg del MockUp y Psd o Ai con Vectores y referencia de medidas para su impresión",
            precio: 30
        },
        {
            id: "b4",
            nombre: "Gorra",
            categoriaId: 2,
            category: "merch",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Gorra.png?alt=media&token=9c7bda37-3088-4c0b-aaef-5716af7c07ba',
            precio: 30
        },
        {
            id: "b5",
            nombre: "Bolsa",
            categoriaId: 2,
            category: "merch",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Bolsa.jpg?alt=media&token=a6c7eed3-568a-4adf-9129-b0bf457cfc14',
            precio: 20
        },
        {
            id: "b6",
            nombre: "Botella",
            categoriaId: 2,
            category: "merch",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Etiqueta.png?alt=media&token=e57eedb5-88ec-450d-a37c-9b0b8d58f2a5',
            descripcion: "Etiqueta y contraetiqueta",
            precio: 20
        },
        {
            id: "c1",
            nombre: "Envase",
            categoriaId: 3,
            category: "pack",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/pack.png?alt=media&token=006fb7ff-7dd0-43cb-8caf-f7c9091c5a8c',
            descripcion: "Etiqueta aplicada, envoltura simple, impresión sobre envase, etc.",
            precio: 100
        },
        {
            id: "c21",
            nombre: "Caja",
            categoriaId: 3,
            category: "pack",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Troquelado%20caja.jpg?alt=media&token=20c6b1b4-0bf5-470c-860a-ebcc6aebf062',
            descripcion: "Desarrollo morfológico de estuche troquelado.",
            precio: 150
        },
        {
            id: "c3",
            nombre: "Etiqueta",
            categoriaId: 3,
            category: "pack",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Etiqueta.png?alt=media&token=e57eedb5-88ec-450d-a37c-9b0b8d58f2a5',
            precio: 100
        },
        {
            id: "d1",
            nombre: "Portada CD",
            categoriaId: 4,
            category: "edi",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/portada-cd.png?alt=media&token=d2890f61-7b82-4817-92fc-518b3da6ed1f',
            precio: 40
        },
        {
            id: "d2",
            nombre: "Tapa de Libro o Revista",
            categoriaId: 4,
            category: "edi",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/tapa-libro.png?alt=media&token=2967c7ff-b8f5-4b43-94a5-c11398ffc79a',
            precio: 40
        },
        {
            id: "d3",
            nombre: "Menú de Restaurante o Bar",
            categoriaId: 4,
            category: "edi",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Men%C3%BA.jpg?alt=media&token=cf0acde3-fdab-4af5-b568-2330395e3151',
            precio: 100
        },
        {
            id: "e1",
            nombre: "Diseño de Avatar para RRSS",
            categoriaId: 5,
            category: "ilus",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Avatar%20redes.jpg?alt=media&token=c879e9b4-f105-41f3-9a4a-d74d83c0d459',
            precio: 50
        },
        {
            id: "e2",
            nombre: "Ilustración Vectorial",
            categoriaId: 5,
            category: "ilus",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/digitalizacion-de-la-marca.png?alt=media&token=547261fa-cced-42e9-85d5-e5efd156da8b',
            precio: 100
        },
        {
            id: "f1",
            nombre: "Posteo o Historia Estática",
            categoriaId: 6,
            category: "rrss",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Post.jpg?alt=media&token=85a1324a-19b9-45db-b4f9-3abff54a4914',
            Descripción: "Diseño de posteo o historia estática para redes sociales.",
            precio: 25
        },
        {
            id: "f2",
            nombre: "Posteo o Historia Animada",
            categoriaId: 6,
            category: "rrss",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Post.jpg?alt=media&token=85a1324a-19b9-45db-b4f9-3abff54a4914',
            Descripción: "Diseño de posteo o historia animada para redes sociales. Animación básica de hasta 15 segundos",
            precio: 40
        },
        {
            id: "f3",
            nombre: "Plantilla Feed o Historia",
            categoriaId: 6,
            category: "rrss",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Post.jpg?alt=media&token=85a1324a-19b9-45db-b4f9-3abff54a4914',
            descripcion: "Diseño de plantilla en continuación de línea gráfica con manual de marca de 3 piezas",
            precio: 40
        },
        {
            id: "f4",
            nombre: "Plantilla Feed",
            categoriaId: 6,
            category: "rrss",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Post.jpg?alt=media&token=85a1324a-19b9-45db-b4f9-3abff54a4914',
            descripcion: "Diseño de plantilla en continuación de línea gráfica con manual de marca de 6 piezas",
            precio: 60
        },
        {
            id: "f5",
            nombre: "Plantilla Feed",
            categoriaId: 6,
            category: "rrss",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Post.jpg?alt=media&token=85a1324a-19b9-45db-b4f9-3abff54a4914',
            descripcion: "Diseño de plantilla en continuación de línea gráfica con manual de marca de 9 piezas",
            precio: 90
        },
        {
            id: "g1",
            nombre: "Maquetación Landing",
            descripcion: "Maquetación de landing responsivo/adaptativo de hasta 5 secciones en html, css y JavaScript",
            categoriaId: 7,
            category: "web",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Web.jpg?alt=media&token=ece610d9-a935-4d00-8a94-bc7980e1af6a',
            precio: 100
        },
        {
            id: "g2",
            nombre: "Maquetación de Sitio",
            descripcion: "Maquetación de sitio responsivo/adaptativo de hasta 5 secciones separadas html, css y JavaScript",
            categoriaId: 7,
            category: "web",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Web.jpg?alt=media&token=ece610d9-a935-4d00-8a94-bc7980e1af6a',
            precio: 200
        },
        {
            id: "g3",
            nombre: "Diseño MockUp de Landing",
            descripcion: "Diseño de landing responsivo/adaptativo de hasta 5 secciones en Photoshop con MockUp Visual.",
            categoriaId: 7,
            category: "web",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Web.jpg?alt=media&token=ece610d9-a935-4d00-8a94-bc7980e1af6a',
            precio: 50
        },
        {
            id: "g4",
            nombre: "Diseño MockUp de Sitio",
            descripcion: "Diseño de sitio responsivo/adaptativo de hasta 5 secciones en Photoshop con MockUp Visual.",
            categoriaId: 7,
            category: "web",
            img: 'https://firebasestorage.googleapis.com/v0/b/cheindesign-f2b2a.appspot.com/o/Web.jpg?alt=media&token=ece610d9-a935-4d00-8a94-bc7980e1af6a',
            precio: 100
        },
    ];


export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(servicios)
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(servicio => servicio.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoriaId])

    return (
            <div className='itemlist'>
                <h5>Repaso sobre mis</h5>
                <h2>Estudios</h2>
                <div id='container__itemlistcontainer'>
                    <Title greeting={texto} />
                    <ItemList className="item-list" data={data} />
                </div>
            </div>
    )
}

export default ItemListContainer
