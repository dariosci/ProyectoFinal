let url = 'https://randomuser.me/api/?format=json'
let url2 = 'https://raw.githubusercontent.com/dariosci/ProyectoFinal/main/JSON/estudios.json'
let url3 = 'https://raw.githubusercontent.com/dariosci/ProyectoFinal/main/JSON/experiencia.json'
const paises = [["AD", "Andorra"], ["AE", "Emiratos Árabes Unidos"], ["AF", "Afganistán"], ["AG", "Antigua y Barbuda"], ["AI", "Anguilla"], ["AL", "Albania"], ["AM", "Armenia"], ["AN", "Antillas Holandea,s"], ["AO", "Angola"], ["AQ", "Antártida"], ["AR", "Argentn,a"], ["AS", "Samoa Amerc,ana"], ["AT", "Austria"], ["AU", "Australia"], ["AW", "Aruba"], ["AZ", "Azerbayá"], ["BA", "Bosnia-Herzegv,ina"], ["BB", "Barbados"], ["BD", "Bangladeh"], ["BE", "Bélgica"], ["BF", "Burkin ,Faso"], ["BG", "Bulgaria"], ["BH", "Bahrain"], ["BI", "Burundi"], ["BJ", "Benín"], ["BM", "Islas Bem,udas"], ["BN", "BruneiD,arussalam"], ["BO", "Bolivia"], ["BR", "Brasil"], ["BT", "Bahamas"], ["BS", "Bután"], ["BV", "Islas Bv,et"], ["BW", "Botswana"], ["BY", "Bielorrusia"], ["BZ", "Belice"], ["CA", "Canadá"], ["CC", "Isla d ,Cocos"], ["CD", "República Democrt,ica del Congo"], ["CF", "República Cn,troafricana"], ["CG", "Repúblc,a del Congo"], ["CH", "Suiza"], ["CI", "Costa e, marfil"], ["CK", "Islas Coo"], ["CL", "Chile"], ["CM", "Camerún"], ["CN", "China"], ["CO", "Colombia"], ["CR", "Costa Rica"], ["CS", "Checoslovaquia (antiguo país)"], ["CU", "Cuba"], ["CV", "Cabo Verde"], ["CX", "Islas Christmas"], ["CY", "Chipre"], ["CZ", "República Checa"], ["DE", "Alemania"], ["DJ", "Djibouti"], ["DK", "Dinamarca"], ["DM", "Dominica"], ["DO", "República Dominicana"], ["DZ", "Argelia"], ["EC", "Ecuador"], ["EE", "Estonia"], ["EG", "Egipto"], ["EH", "Sáhara Occidental"], ["ER", "Eritrea"], ["ES", "España"], ["ET", "Etiopía"], ["FI", "Finlandia"], ["FJ", "Fiji"], ["FK", "Islas Malvinas"], ["FM", "Micronesia"], ["FO", "Islas Feroe"], ["FR", "Francia"], ["GA", "Gabón"], ["GD", "Granada"], ["GE", "Georgia"], ["GF", "Guyana Francesa"], ["GG", "Guernsey"], ["GH", "Ghana"], ["GI", "Gibraltar"], ["GL", "Groenlandia"], ["GM", "Gambia"], ["GN", "Guinea"], ["GP", "Guadalupe"], ["GQ", "Guinea Ecuatorial"], ["GR", "Grecia"], ["GS", "Islas Georgias y Sandwich del Sur"], ["GT", "Guatemala"], ["GU", "Guam"], ["GW", "Guinea-Bissau"], ["GY", "Guayana"], ["HK", "Hong Kong"], ["HM", "Islas Heard y McDonald"], ["HN", "Honduras"], ["HR", "Croacia"], ["HT", "Haití"], ["HU", "Hungría"], ["ID", "Indonesia"], ["IE", "Irlanda"], ["IL", "Israel"], ["IM", "Isla de Man"], ["IN", "India"], ["IO", "Territorio británico del Océano Índico"], ["IQ", "Iraq"], ["IR", "Irán"], ["IS", "Islandia"], ["IT", "Italia"], ["JM", "Jamaica"], ["JE", "Jersey"], ["JO", "Jordania"], ["JP", "Japón"], ["KE", "Kenia"], ["KG", "Kyrgystán"], ["KH", "Camboya"], ["KI", "Kiribati"], ["KM", "Islas Comores"], ["KN", "San Kitts y Nevis"], ["KP", "Corea del Norte"], ["KR", "Corea del Sur"], ["KW", "Kuwait"], ["KY", "Islas Caimán"], ["KZ", "Kazajistán"], ["LA", "Laos"], ["LB", "Líbano"], ["LC", "Santa Lucía"], ["LI", "Liechtenstein"], ["LK", "Sri Lanka"], ["LR", "Liberia"], ["LS", "Lesoto"], ["LT", "Lituania"], ["LU", "Luxemburgo"], ["LV", "Letonia"], ["LY", "Libia"], ["MA", "Marruecos"], ["MC", "Mónaco"], ["MD", "Moldavia"], ["MG", "Madagascar"], ["MK", "Macedonia"], ["MH", "Islas Marshall"], ["ML", "Mali"], ["MM", "Birmania"], ["MN", "Mongolia"], ["MO", "Macao"], ["MP", "Islas Marianas"], ["MQ", "Martinica"], ["MR", "Mauritania"], ["MS", "Montserrat"], ["MT", "Malta"], ["MU", "Mauricio"], ["MV", "Maldivas"], ["MW", "Malawi"], ["MX", "México"], ["MY", "Malasia"], ["MZ", "Mozambique"], ["NA", "Namibia"], ["NC", "Nueva Caledonia"], ["NE", "Níger"], ["NF", "Islas Norfolk"], ["NG", "Nigeria"], ["NI", "Nicaragua"], ["NL", "Países Bajos"], ["NO", "Noruega"], ["NP", "Nepal"], ["NR", "Nauru"], ["NT", "Zona Neutral"], ["NU", "Niue"], ["NZ", "Nueva Zelanda"], ["OM", "Omán"], ["PA", "Panamá"], ["PE", "Perú"], ["PF", "Polinesia Francesa"], ["PG", "Papúa Nueva Guinea"], ["PH", "Filipinas"], ["PK", "Pakistán"], ["PL", "Polonia"], ["PM", "San Pedro y Miquelón"], ["PN", "Pitcairn"], ["PR", "Puerto Rico"], ["PS", "Territorios Palestinos"], ["PT", "Portugal"], ["PW", "Palau"], ["PY", "Paraguay"], ["QA", "Qatar"], ["RE", "Isla Reunión"], ["RO", "Rumanía"], ["RU", "Rusia"], ["RW", "Ruanda"], ["SA", "Arabia Saudí"], ["SB", "Islas Salomón"], ["SC", "Islas Seychelles"], ["SD", "Sudán"], ["SE", "Suecia"], ["SG", "Singapur"], ["SH", "Santa Helena"], ["SI", "Eslovenia"], ["SJ", "Islas Svalbard y Jan Mayens"], ["SK", "Eslovaquia"], ["SL", "Sierra Leona"], ["SM", "San Marino"], ["SN", "Senegal"], ["SO", "Somalia"], ["SR", "Surinam"], ["SU", "URSS"], ["ST", "Santo Tomé y Príncipe"], ["SV", "El Salvador"], ["SY", "Siria"], ["SZ", "Suazilandia"], ["TC", "Islas Turks y Caicos"], ["TD", "Chad"], ["TF", "Tierras Australes y Antárticas Francesas"], ["TG", "Togo"], ["TH", "Tailandia"], ["TJ", "Tayikistán"], ["TK", "Tokelau"], ["TM", "Turkmenistán"], ["TN", "Túnez"], ["TO", "Tonga"], ["TP", "Timor Oriental"], ["TR", "Turquía"], ["TT", "Trinidad y Tobago"], ["TV", "Tuvalu"], ["TW", "Taiwán"], ["TZ", "Tanzania"], ["UA", "Ucrania"], ["UG", "Uganda"], ["UK", "Reino Unido"], ["UM", "Islas Ultramarinas de Estados Unidos "], ["US", "Estados Unidos de América"], ["UY", "Uruguay"], ["UZ", "Uzbekistán"], ["VA", "Vaticano"], ["VC", "San Vicente y las Granadinas"], ["VE", "Venezuela"], ["VG", "Islas Vírgenes Británicas"], ["VI", "Islas Vírgenes Americanas"], ["VN", "Vietnam"], ["VU", "Vanuatu"], ["WF", "Islas Wallis y Futuna"], ["WS", "Samoa"], ["YE", "Yemen"], ["YT", "Mayotte"], ["YU", "Yugoslavia (antiguo país)"], ["ZA", "Sudáfrica"], ["ZM", "Zambia"], ["ZR", "Zaire (antiguo país)"], ["ZW", "Zimbabwe"]];

//Trae datos de randomuser
fetch(url)
    .then((response) => response.json())
    .then(data=> mostrarDatos(data))
    .catch(error => console.log(error))

const mostrarDatos = (data) => {
    //console.log(data)
    let fecnac = new Date(`${data.results[0].dob.date}`)

    //Relleno con datos personales aleatorios
    document.getElementById('nombre').innerHTML = `${data.results[0].name.first}` + " " + `${data.results[0].name.last}`
    document.getElementById('fecnac').innerHTML = fecnac.toLocaleDateString()
    document.getElementById('nac').innerHTML = nacional(`${data.results[0].nat}`) + " (" + `${data.results[0].nat}` + ")"
    document.getElementById('foto').src = `${data.results[0].picture.large}`
    document.getElementById('edad').innerHTML = `${data.results[0].dob.age}`
    document.getElementById('sexo').innerHTML = sexo(`${data.results[0].gender}`)
    document.getElementById('direccion').innerHTML = `${data.results[0].location.street.name}` + " " +
        `${data.results[0].location.street.number}` + ", " + `${data.results[0].location.city}` + ", " +
        `${data.results[0].location.state}` + ", " + nacional(`${data.results[0].nat}`)
    document.getElementById('telefono').innerHTML = `${data.results[0].phone}`
    document.getElementById('email').innerHTML = `${data.results[0].email}`
}

//Trae datos de cursos de JSON (estudios.json) y toma 5 cursos al azar con su respectivo link
fetch(url2)
    .then((response) => response.json())
    .then(data2=> mostrarEstudios(data2))
    .catch(error => console.log(error)) 

    //Genero 5 numeros aleatorios para mostrar 5 cursos distintos
    var min = 0;
    var max = 3499;
    var numerosEst = [];
    
    numerosEst = generar_5numeros(min, max, numerosEst)

    const mostrarEstudios = (data2) => {

    //estudio 1
    document.getElementById('estudio1').innerHTML = `${data2[numerosEst[0]].course_name}` //nombre del estudio/curso
    document.getElementById('nivel1').innerHTML = dificultad(`${data2[numerosEst[0]].course_level}`) //la funcion dificultad traduce el nivel al español
    document.getElementById('link1').href = comprobar_linkcurso(`${data2[numerosEst[0]].course_link}`, 1) //la funcion comprobar_linkcurso verifica que el link no esté vacio, si lo está elimina el icono de acceso directo al curso
    
    //estudio 2
    document.getElementById('estudio2').innerHTML = `${data2[numerosEst[1]].course_name}`
    document.getElementById('nivel2').innerHTML = dificultad(`${data2[numerosEst[1]].course_level}`)
    document.getElementById('link2').href = comprobar_linkcurso(`${data2[numerosEst[1]].course_link}`, 2)

    //estudio 3
    document.getElementById('estudio3').innerHTML = `${data2[numerosEst[2]].course_name}`
    document.getElementById('nivel3').innerHTML = dificultad(`${data2[numerosEst[2]].course_level}`)
    document.getElementById('link3').href = comprobar_linkcurso(`${data2[numerosEst[2]].course_link}`, 3)

    //estudio 4
    document.getElementById('estudio4').innerHTML = `${data2[numerosEst[3]].course_name}`
    document.getElementById('nivel4').innerHTML = dificultad(`${data2[numerosEst[3]].course_level}`)
    document.getElementById('link4').href = comprobar_linkcurso(`${data2[numerosEst[3]].course_link}`, 4)

    //estudio 5
    document.getElementById('estudio5').innerHTML = `${data2[numerosEst[4]].course_name}`
    document.getElementById('nivel5').innerHTML = dificultad(`${data2[numerosEst[4]].course_level}`)
    document.getElementById('link5').href = comprobar_linkcurso(`${data2[numerosEst[4]].course_link}`, 5)
}

//Trae las skills del json (experiencias.json)..
fetch(url3)
    .then((response) => response.json())
    .then(data3=> llenar_barras(data3))
    .catch(error => console.log(error)) 

    //Genero 1 numero aleatorio para selecionar una experiencia y tomar sus 3 skills respectivos
    var min2 = 0;
    var max2 = 37785;

    var y1 = Math.floor(Math.random() * (max2-min2+1)+min2);

    //Genero 5 numeros aleatorios para mostrar 5 experiencias distintas
    var min4= 0;
    var max4 = 37785;
    var numerosExp = [];
    numerosExp = generar_5numeros(min4, max4, numerosExp)
    
    //Genero 5 numeros aleatorios para mostrar 5 fechas aletorias ordenadas de menor a mayor
    var min3 = 2000;
    var max3 = 2022;
    var fechasExp = [];
    fechasExp = generar_5numeros(min3, max3, fechasExp) //llamo a la funcion para generar la lista con los años
    fechasExp.sort(); //ordeno la lista de menor a mayor
    
const llenar_barras = (data3) => { 

    //Lleno Experiencias
    document.getElementById('fecha1').innerHTML = fechasExp[0];
    document.getElementById('puesto1').innerHTML = `${data3[numerosExp[0]].puesto}`
    document.getElementById('fecha2').innerHTML = fechasExp[1];
    document.getElementById('puesto2').innerHTML = `${data3[numerosExp[1]].puesto}`
    document.getElementById('fecha3').innerHTML = fechasExp[2];
    document.getElementById('puesto3').innerHTML = `${data3[numerosExp[2]].puesto}`
    document.getElementById('fecha4').innerHTML = fechasExp[3];
    document.getElementById('puesto4').innerHTML = `${data3[numerosExp[3]].puesto}`
    document.getElementById('fecha5').innerHTML = fechasExp[4];
    document.getElementById('puesto5').innerHTML = `${data3[numerosExp[4]].puesto}`

    //Lleno las barras con las Skills
    //skill 1    
    document.getElementById('skill2').setAttribute('per', exp_porcen(`${data3[y1].valor2}`)) //porcentaje
    document.getElementById('skill2').setAttribute('style', "max-width:" + exp_porcen(`${data3[y1].valor2}`)) //tamano de la barra
    document.getElementById('skill2-name').innerHTML = comprobar_skill(`${data3[y1].skill2}`, 2) //compruebo si está vacia la skill y elimino la barra si está vacia

    //skill 2
    document.getElementById('skill3').setAttribute('per', exp_porcen(`${data3[y1].valor3}`))
    document.getElementById('skill3').setAttribute('style', "max-width:" + exp_porcen(`${data3[y1].valor3}`))
    document.getElementById('skill3-name').innerHTML = comprobar_skill(`${data3[y1].skill3}`, 3)

    //skill 3
    document.getElementById('skill4').setAttribute('per', exp_porcen(`${data3[y1].valor4}`))
    document.getElementById('skill4').setAttribute('style', "max-width:" + exp_porcen(`${data3[y1].valor4}`))
    document.getElementById('skill4-name').innerHTML = comprobar_skill(`${data3[y1].skill4}`, 4)


}

function generar_5numeros(min, max, numeroslista){ //Funcion para generar 5 numeros aleatorios tomando el min y max requerido y devuelve una lista con los mismos 
    var x1 = Math.floor(Math.random() * (max - min + 1) + min);
    var x2 = Math.floor(Math.random() * (max - min + 1) + min);
    var x3 = Math.floor(Math.random() * (max - min + 1) + min);
    var x4 = Math.floor(Math.random() * (max - min + 1) + min);
    var x5 = Math.floor(Math.random() * (max - min + 1) + min);
    numeroslista = [x1, x2, x3, x4, x5]

    return numeroslista;

}

function sexo(sex) { //traducion del sexo al expañol
    if (sex == "female" )
        sex = "Mujer"
    else 
        sex = "Hombre"       
    return sex    
}

function nacional(sigla) { //traducion de la nacionalidad
    let pais = ""
    let final = paises.length

    for (var i = 0; i < final; i++) {        
        if (paises[i][0] == sigla) {
            pais = paises[i][1]
            i = final
        } else {
            pais="N/D"
        }
    }
    return pais;
}

function dificultad(nivel) { //traduccion del nivel del curso
    if (nivel == "All Levels")
        nivel = "Todos"
    else if (nivel == "Beginner")
        nivel = "Principiante"
    else if (nivel == "Intermediate")
        nivel = "Intermedio"
    else if (nivel == "Expert")
        nivel = "Avanzado"
    return nivel
}


function exp_porcen(valor) { //establecer el porcentaje de la barra segun el skill
    if (valor == 1)
        valor = "20%"
    else if (valor == 2)
        valor = "40%"
    else if (valor == 3)
        valor = "60%"
    else if (valor == 4)
        valor = "80%"
    else if (valor == 5)
        valor = "100%"
    return valor
}

function comprobar_linkcurso(linkcurso, num) { //comprobat si el link del curso está vacio. si es verdadero elimina el acceso directo
    let linkid
    linkid = "link-icono" + num
    if (linkcurso == "")
        document.getElementById(linkid).remove();
    
    return linkcurso;
    //
}

function comprobar_skill(skillNombre, skillcomp) { //comprobat si el skiil está vacio. si es verdadero elimina skill
    let skillid
    skillid = "skill" + skillcomp + "-main"
    if (skillNombre == "unknown")
        document.getElementById(skillid).remove();
    
    return skillNombre;
    //
}

function imprimirPagina() { //imprimir curriculum
    window.print();
}


