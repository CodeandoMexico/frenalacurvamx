import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { Card, Button, Col, Row, Container, Dropdown } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'gatsby'
import './colabora.scss'
import { FiArrowRight } from 'react-icons/fi'
const heart = require('../../images/icons/heart.svg')

// eslint-disable-next-line no-unused-vars
const RenderCard = data => {
  const cate = data.data.fields.CATEGORIA
  const subcat =
    cate === 'Cuidados, ayuda y bienestar'
      ? data.data.fields.SUBCATEGORIA_CUIDADOS
      : cate === 'Educación a distancia y recursos educativos'
      ? data.data.fields.SUBCATEGORIA_EDUCACION
      : cate === 'Información Oficial'
      ? data.data.fields.SUBCATEGORIA_OFICIAL
      : cate === 'Información verificada'
      ? data.data.fields.SUBCATEGORIA_VERIFICADO
      : cate === 'Ocio y recreación durante la cuarentena'
      ? data.data.fields.SUBCATEGORIA_OCIO
      : data.data.fields.SUBCATEGORIA_OPORTUNIDADES
  return (
    <Container className="cardContainer">
      {data.data.fields.VERIFICADA === true ? (
        <Card style={{ width: '20rem', height: 'auto' }}>
          <Card.Img style={{ height: '272px', width: '272px' }} variant="top" src={data.data.fields.IMAGEN[0].url} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold' }}>{data.data.fields.TITULO}</Card.Title>
            <div className="catContainer">
              <div
                style={{
                  backgroundColor:
                    cate === 'Información verificada'
                      ? '#74BCEB'
                      : cate === 'Información Oficial'
                      ? '#5C92D2'
                      : cate === 'Cuidados, ayuda y bienestar'
                      ? '#CB82EB'
                      : cate === 'Ocio y recreación durante la cuarentena'
                      ? '#56B69C'
                      : cate === 'Oportunidades y recomendaciones laborales'
                      ? '#7ACA9C'
                      : '#ED794A',
                }}
                className="categories"
              >
                {data.data.fields.CATEGORIA}...
              </div>
              {cate === 'Cuidados, ayuda y bienestar' ? (
                <div className="subCategories">{data.data.fields.SUBCATEGORIA_CUIDADOS}...</div>
              ) : cate === 'Educación a distancia y recursos educativos' ? (
                <div className="subCategories">{data.data.fields.SUBCATEGORIA_EDUCACION}...</div>
              ) : cate === 'Información Oficial' ? (
                <div className="subCategories">{data.data.fields.SUBCATEGORIA_OFICIAL}...</div>
              ) : cate === 'Información verificada' ? (
                <div className="subCategories">{data.data.fields.SUBCATEGORIA_VERIFICADO}...</div>
              ) : cate === 'Ocio y recreación durante la cuarentena' ? (
                <div className="subCategories">{data.data.fields.SUBCATEGORIA_OCIO}...</div>
              ) : (
                <div className="subCategories">{data.data.fields.SUBCATEGORIA_OPORTUNIDADES}...</div>
              )}
            </div>
            <Card.Text className="description">{data.data.fields.DESCRIPCION}</Card.Text>
            <Link
              to="/colaboraDetails"
              state={{
                data: {
                  nombre: data.data.fields.TITULO,
                  descripcion: data.data.fields.DESCRIPCION,
                  categoria: data.data.fields.CATEGORIA,
                  subcategoria: subcat,
                  url: data.data.fields.IMAGEN[0].url,
                  autor: data.data.fields.AUTOR,
                  web: data.data.fields.URL,
                },
              }}
            >
              <div className="btnContainer">
                <img style={{ height: '30px', margin: 'auto', marginRight: '5px' }} src={heart} />
                <Button style={{ backgroundColor: '#FB4747', borderRadius: '60px' }} variant="primary">
                  <FiArrowRight style={{ margin: 'auto' }} size="1.5em" />
                </Button>
              </div>
            </Link>
          </Card.Body>
        </Card>
      ) : null}
    </Container>
  )
}

const Colabora = () => {
  // eslint-disable-next-line no-unused-vars
  const [dataFirst, setDataFirst] = useState([])
  const [dataSecond, setDataSecond] = useState([])
  const [dataThird, setDataThird] = useState([])
  const [dataFirstApi, setDataFirstApi] = useState([])
  const [dataSecondApi, setDataSecondApi] = useState([])
  const [dataThirdApi, setDataThirdApi] = useState([])
  const [offset, setOffSet] = useState('')
  const [counter, setCounter] = useState(0)
  const [screenSize, setScreenSize] = useState()
  const [columns, setColumns] = useState(3)
  const [catType, setCatType] = useState('')

  let offsetApi = ''
  if (offset !== '') {
    offsetApi = `?offset=${offset}`
  }
  useEffect(() => {
    setScreenSize(window.screen.width)
    if (screenSize < 700) {
      setColumns(1)
    }
    axios
      .get(`https://api.airtable.com/v0/appBZPSLZLvjUzJ8h/Imported table${offsetApi}`, {
        method: 'GET',
        mode: 'cors',
        headers: { Authorization: 'Bearer keyIffiTycyI9MNTa' },
      })
      .then(res => {
        if (counter === 0) {
          setDataFirst(res.data.records)
          setDataFirstApi(res.data.records)
          setCounter(counter + 1)
        }
        if (counter === 1) {
          setDataSecond(res.data.records)
          setDataSecondApi(res.data.records)
          setCounter(counter + 1)
        }
        if (counter === 2) {
          setDataThird(res.data.records)
          setDataThirdApi(res.data.records)
          setCounter(counter + 1)
        }
        setOffSet(res.data.offset)
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [offsetApi])
  // console.log("AIRTABLE",data)
  const FilterData = (filter, tipo) => {
    console.log(filter)
    let cat = filter
    const filterDataFirst = dataFirstApi.filter(element => {
      let datos
      if (tipo === 'CATEGORIA') {
        datos = element.fields.CATEGORIA
      }
      if (tipo === 'SUBCATEGORIA_CUIDADOS') {
        datos = element.fields.SUBCATEGORIA_CUIDADOS
      }
      if (tipo === 'SUBCATEGORIA_EDUCACION') {
        datos = element.fields.SUBCATEGORIA_EDUCACION
      }
      if (tipo === 'SUBCATEGORIA_OFICIAL') {
        datos = element.fields.SUBCATEGORIA_OFICIAL
      }
      if (tipo === 'SUBCATEGORIA_VERIFICADO') {
        datos = element.fields.SUBCATEGORIA_VERIFICADO
      }
      if (tipo === 'SUBCATEGORIA_OCIO') {
        datos = element.fields.SUBCATEGORIA_OCIO
      }
      if (tipo === 'SUBCATEGORIA_OPORTUNIDADES') {
        datos = element.fields.SUBCATEGORIA_OPORTUNIDADES
      }
      // if(tipo === 'CATEGORIA'){
      //   datos === element.fields.CATEGORIA;
      // }
      return datos === cat
    })
    const filterDataSecond = dataSecondApi.filter(element => {
      let datos
      if (tipo === 'CATEGORIA') {
        datos = element.fields.CATEGORIA
      }
      if (tipo === 'SUBCATEGORIA') {
        datos = element.fields.SUBCATEGORIA
      }
      if (tipo === 'SUBCATEGORIA_CUIDADOS') {
        datos = element.fields.SUBCATEGORIA_CUIDADOS
      }
      if (tipo === 'SUBCATEGORIA_EDUCACION') {
        datos = element.fields.SUBCATEGORIA_EDUCACION
      }
      if (tipo === 'SUBCATEGORIA_OFICIAL') {
        datos = element.fields.SUBCATEGORIA_OFICIAL
      }
      if (tipo === 'SUBCATEGORIA_VERIFICADO') {
        datos = element.fields.SUBCATEGORIA_VERIFICADO
      }
      if (tipo === 'SUBCATEGORIA_OCIO') {
        datos = element.fields.SUBCATEGORIA_OCIO
      }
      if (tipo === 'SUBCATEGORIA_OPORTUNIDADES') {
        datos = element.fields.SUBCATEGORIA_OPORTUNIDADES
      }
      return datos === cat
    })
    const filterDataThird = dataThirdApi.filter(element => {
      let datos
      if (tipo === 'CATEGORIA') {
        datos = element.fields.CATEGORIA
      }
      if (tipo === 'SUBCATEGORIA') {
        datos = element.fields.SUBCATEGORIA
      }
      if (tipo === 'SUBCATEGORIA_CUIDADOS') {
        datos = element.fields.SUBCATEGORIA_CUIDADOS
      }
      if (tipo === 'SUBCATEGORIA_EDUCACION') {
        datos = element.fields.SUBCATEGORIA_EDUCACION
      }
      if (tipo === 'SUBCATEGORIA_OFICIAL') {
        datos = element.fields.SUBCATEGORIA_OFICIAL
      }
      if (tipo === 'SUBCATEGORIA_VERIFICADO') {
        datos = element.fields.SUBCATEGORIA_VERIFICADO
      }
      if (tipo === 'SUBCATEGORIA_OCIO') {
        datos = element.fields.SUBCATEGORIA_OCIO
      }
      if (tipo === 'SUBCATEGORIA_OPORTUNIDADES') {
        datos = element.fields.SUBCATEGORIA_OPORTUNIDADES
      }
      return datos === cat
    })
    console.log('FILTRADO', filterDataFirst)
    setDataFirst(filterDataFirst)
    setDataSecond(filterDataSecond)
    setDataThird(filterDataThird)
    if (tipo === 'CATEGORIA') {
      setCatType(filter)
    }
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}>
        <h4 style={{ fontSize: '23px', paddingRight: '50px', fontWeight: 'bold' }}>Filtrar Por:</h4>
        <Dropdown style={{ paddingRight: '20px' }}>
          <Dropdown.Toggle style={{ backgroundColor: '#C4C4C4', color: 'black', border: 'none' }} id="dropdown-basic">
            [Categoría]
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => FilterData('Cuidados, ayuda y bienestar', 'CATEGORIA')}>
              Cuidados, ayuda y bienestar
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Educación a distancia y recursos educativos', 'CATEGORIA')}>
              Educación a distancia y recursos educativos
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Información Oficial', 'CATEGORIA')}>
              Información Oficial
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Ocio y recreación durante la cuarentena', 'CATEGORIA')}>
              Ocio y recreación durante la cuarentena
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Información verificada', 'CATEGORIA')}>
              Información verificada
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Oportunidades y recomendaciones laborales', 'CATEGORIA')}>
              Oportunidades y recomendaciones laborales
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle style={{ backgroundColor: '#C4C4C4', color: 'black', border: 'none' }} id="dropdown-basic">
            [Subcategoría]
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {catType === 'Cuidados, ayuda y bienestar' ? (
              <div>
                <Dropdown.Item onClick={() => FilterData('Donaciones', 'SUBCATEGORIA_CUIDADOS')}>
                  Donaciones
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => FilterData('Salud, bienestar físico y salud mental', 'SUBCATEGORIA_CUIDADOS')}
                >
                  Salud, bienestar físico y salud mental
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => FilterData('Alimentación y consumo responsable', 'SUBCATEGORIA_CUIDADOS')}
                >
                  Alimentación y consumo responsable
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => FilterData('Recursos para prevenir la violencia de género', 'SUBCATEGORIA_CUIDADOS')}
                >
                  Recursos para prevenir la violencia de género
                </Dropdown.Item>
                <Dropdown.Item onClick={() => FilterData('Movilidad ante la contingencia', 'SUBCATEGORIA_CUIDADOS')}>
                  Movilidad ante la contingencia
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => FilterData('Redes de apoyo para la salud mental', 'SUBCATEGORIA_CUIDADOS')}
                >
                  Redes de apoyo para la salud mental
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => FilterData('Ideas a desarrollar / Makers / Steam', 'SUBCATEGORIA_CUIDADOS')}
                >
                  Ideas a desarrollar / Makers / Steam
                </Dropdown.Item>
              </div>
            ) : null}

            {catType === 'Educación a distancia y recursos educativos' ? (
              <div>
                <Dropdown.Item onClick={() => FilterData('Educación a distancia', 'SUBCATEGORIA_EDUCACION')}>
                  Educación a distancia
                </Dropdown.Item>
                <Dropdown.Item onClick={() => FilterData('Recursos educativos', 'SUBCATEGORIA_EDUCACION')}>
                  Recursos educativos
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => FilterData('Ideas a desarrollar / Makers / Steam', 'SUBCATEGORIA_EDUCACION')}
                >
                  Ideas a desarrollar / Makers / Steam
                </Dropdown.Item>
              </div>
            ) : null}

            {catType === 'Información Oficial' ? (
              <div>
                <Dropdown.Item onClick={() => FilterData('Nacional', 'SUBCATEGORIA_OFICIAL')}>Nacional</Dropdown.Item>
                <Dropdown.Item onClick={() => FilterData('Por estados', 'SUBCATEGORIA_OFICIAL')}>
                  Por estados
                </Dropdown.Item>
                <Dropdown.Item onClick={() => FilterData('Programas Sociales', 'SUBCATEGORIA_OFICIAL')}>
                  Programas Sociales
                </Dropdown.Item>
              </div>
            ) : null}

            {catType === 'Información verificada' ? (
              <div>
                <Dropdown.Item onClick={() => FilterData('Noticias del Día', 'SUBCATEGORIA_VERIFICADO')}>
                  Noticias del Día
                </Dropdown.Item>
                <Dropdown.Item onClick={() => FilterData('COVID-19 para principiantes', 'SUBCATEGORIA_VERIFICADO')}>
                  COVID-19 para principiantes
                </Dropdown.Item>
              </div>
            ) : null}

            {catType === 'Ocio y recreación durante la cuarentena' ? (
              <div>
                <Dropdown.Item onClick={() => FilterData('Actividades para niñas y niños', 'SUBCATEGORIA_OCIO')}>
                  Actividades para niñas y niños
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => FilterData('Iniciativas y convocatorias artísticas/culturales', 'SUBCATEGORIA_OCIO')}
                >
                  Iniciativas y convocatorias culturales/artísticas
                </Dropdown.Item>
                <Dropdown.Item onClick={() => FilterData('Hazlo tú mismx / DIY', 'SUBCATEGORIA_OCIO')}>
                  Hazlo tú mismx / DIY
                </Dropdown.Item>
                <Dropdown.Item onClick={() => FilterData('Ideas a desarrollar / Makers / Steam', 'SUBCATEGORIA_OCIO')}>
                  Ideas a desarrollar / Makers / Steam
                </Dropdown.Item>
              </div>
            ) : null}

            {catType === 'Oportunidades y recomendaciones laborales' ? (
              <div>
                <Dropdown.Item onClick={() => FilterData('Bolsa de trabajo COVID-19', 'SUBCATEGORIA_OPORTUNIDADES')}>
                  Bolsa de trabajo COVID-19
                </Dropdown.Item>
                <Dropdown.Item onClick={() => FilterData('Consejos y asesoría laboral', 'SUBCATEGORIA_OPORTUNIDADES')}>
                  Consejos y asesoría laboral
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => FilterData('Trabajo en casa / Home Office', 'SUBCATEGORIA_OPORTUNIDADES')}
                >
                  Trabajo en casa / Home Office
                </Dropdown.Item>
                <Dropdown.Item onClick={() => FilterData('Redes de apoyo para negocios', 'SUBCATEGORIA_OPORTUNIDADES')}>
                  Redes de apoyo para negocios
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => FilterData('Grants, convocatorias y Hackatons Covid19', 'SUBCATEGORIA_OPORTUNIDADES')}
                >
                  Grants, convocatorias y Hackatons Covid19
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => FilterData('Ideas a desarrollar / Makers / Steam', 'SUBCATEGORIA_OPORTUNIDADES')}
                >
                  Ideas a desarrollar / Makers / Steam
                </Dropdown.Item>
              </div>
            ) : null}
            {/*         

            <Dropdown.Item onClick={() => FilterData('Educación a distancia', 'SUBCATEGORIA')}>
              Educación a distancia
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Recursos educativo', 'SUBCATEGORIA')}>
              Recursos educativo
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Por estados', 'SUBCATEGORIA')}>Por estados</Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Programas Sociales', 'SUBCATEGORIA')}>
              Programas Sociales
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Noticias del Día', 'SUBCATEGORIA')}>
              Noticias del Día
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('COVID-19 para principiantes', 'SUBCATEGORIA')}>
              COVID-19 para principiantes
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Actividades para niñas y niño', 'SUBCATEGORIA')}>
              Actividades para niñas y niño
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Películas/libros/series/reflexiones', 'SUBCATEGORIA')}>
              Películas/libros/series/reflexiones
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => FilterData('Iniciativas y convocatorias culturales/artísticas', 'SUBCATEGORIA')}
            >
              Iniciativas y convocatorias culturales/artísticas
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Hazlo tú mismx / DIY', 'SUBCATEGORIA')}>
              Hazlo tú mismx / DIY
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Bolsa de trabajo COVID-19', 'SUBCATEGORIA')}>
              Bolsa de trabajo COVID-19
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Consejos y asesoría laboral', 'SUBCATEGORIA')}>
              Consejos y asesoría laboral
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Trabajo en casa / Home Office', 'SUBCATEGORIA')}>
              Trabajo en casa / Home Office
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Redes de apoyo para negocios', 'SUBCATEGORIA')}>
              Redes de apoyo para negocios
            </Dropdown.Item>
            <Dropdown.Item onClick={() => FilterData('Grants, convocatorias y Hackatons Covid19', 'SUBCATEGORIA')}>
              Grants, convocatorias y Hackatons Covid19
            </Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Container>
        <div style={{ columns: columns }}>
          {dataFirst.map(element => {
            // element.fields.CATEGORIA === cat
            return <RenderCard key={element.id} data={element} />
          })}
        </div>
        <div style={{ columns: columns }}>
          {dataSecond.map(element => {
            return <RenderCard key={element.id} data={element} />
          })}
        </div>
        <div style={{ columns: columns }}>
          {dataThird.map(element => {
            return <RenderCard key={element.id} data={element} />
          })}
        </div>
      </Container>
    </div>
  )
}

export default Colabora
