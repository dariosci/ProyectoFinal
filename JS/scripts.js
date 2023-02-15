let url = 'https://randomuser.me/api/?format=json'
let url2 = '../JSON/estudios.json'
let url3 = '../JSON/experiencia.json'
const paises = [["AD", "Andorra"], ["AE", "Emiratos Árabes Unidos"], ["AF", "Afganistán"], ["AG", "Antigua y Barbuda"], ["AI", "Anguilla"], ["AL", "Albania"], ["AM", "Armenia"], ["AN", "Antillas Holandea,s"], ["AO", "Angola"], ["AQ", "Antártida"], ["AR", "Argentn,a"], ["AS", "Samoa Amerc,ana"], ["AT", "Austria"], ["AU", "Australia"], ["AW", "Aruba"], ["AZ", "Azerbayá"], ["BA", "Bosnia-Herzegv,ina"], ["BB", "Barbados"], ["BD", "Bangladeh"], ["BE", "Bélgica"], ["BF", "Burkin ,Faso"], ["BG", "Bulgaria"], ["BH", "Bahrain"], ["BI", "Burundi"], ["BJ", "Benín"], ["BM", "Islas Bem,udas"], ["BN", "BruneiD,arussalam"], ["BO", "Bolivia"], ["BR", "Brasil"], ["BT", "Bahamas"], ["BS", "Bután"], ["BV", "Islas Bv,et"], ["BW", "Botswana"], ["BY", "Bielorrusia"], ["BZ", "Belice"], ["CA", "Canadá"], ["CC", "Isla d ,Cocos"], ["CD", "República Democrt,ica del Congo"], ["CF", "República Cn,troafricana"], ["CG", "Repúblc,a del Congo"], ["CH", "Suiza"], ["CI", "Costa e, marfil"], ["CK", "Islas Coo"], ["CL", "Chile"], ["CM", "Camerún"], ["CN", "China"], ["CO", "Colombia"], ["CR", "Costa Rica"], ["CS", "Checoslovaquia (antiguo país)"], ["CU", "Cuba"], ["CV", "Cabo Verde"], ["CX", "Islas Christmas"], ["CY", "Chipre"], ["CZ", "República Checa"], ["DE", "Alemania"], ["DJ", "Djibouti"], ["DK", "Dinamarca"], ["DM", "Dominica"], ["DO", "República Dominicana"], ["DZ", "Argelia"], ["EC", "Ecuador"], ["EE", "Estonia"], ["EG", "Egipto"], ["EH", "Sáhara Occidental"], ["ER", "Eritrea"], ["ES", "España"], ["ET", "Etiopía"], ["FI", "Finlandia"], ["FJ", "Fiji"], ["FK", "Islas Malvinas"], ["FM", "Micronesia"], ["FO", "Islas Feroe"], ["FR", "Francia"], ["GA", "Gabón"], ["GD", "Granada"], ["GE", "Georgia"], ["GF", "Guyana Francesa"], ["GG", "Guernsey"], ["GH", "Ghana"], ["GI", "Gibraltar"], ["GL", "Groenlandia"], ["GM", "Gambia"], ["GN", "Guinea"], ["GP", "Guadalupe"], ["GQ", "Guinea Ecuatorial"], ["GR", "Grecia"], ["GS", "Islas Georgias y Sandwich del Sur"], ["GT", "Guatemala"], ["GU", "Guam"], ["GW", "Guinea-Bissau"], ["GY", "Guayana"], ["HK", "Hong Kong"], ["HM", "Islas Heard y McDonald"], ["HN", "Honduras"], ["HR", "Croacia"], ["HT", "Haití"], ["HU", "Hungría"], ["ID", "Indonesia"], ["IE", "Irlanda"], ["IL", "Israel"], ["IM", "Isla de Man"], ["IN", "India"], ["IO", "Territorio británico del Océano Índico"], ["IQ", "Iraq"], ["IR", "Irán"], ["IS", "Islandia"], ["IT", "Italia"], ["JM", "Jamaica"], ["JE", "Jersey"], ["JO", "Jordania"], ["JP", "Japón"], ["KE", "Kenia"], ["KG", "Kyrgystán"], ["KH", "Camboya"], ["KI", "Kiribati"], ["KM", "Islas Comores"], ["KN", "San Kitts y Nevis"], ["KP", "Corea del Norte"], ["KR", "Corea del Sur"], ["KW", "Kuwait"], ["KY", "Islas Caimán"], ["KZ", "Kazajistán"], ["LA", "Laos"], ["LB", "Líbano"], ["LC", "Santa Lucía"], ["LI", "Liechtenstein"], ["LK", "Sri Lanka"], ["LR", "Liberia"], ["LS", "Lesoto"], ["LT", "Lituania"], ["LU", "Luxemburgo"], ["LV", "Letonia"], ["LY", "Libia"], ["MA", "Marruecos"], ["MC", "Mónaco"], ["MD", "Moldavia"], ["MG", "Madagascar"], ["MK", "Macedonia"], ["MH", "Islas Marshall"], ["ML", "Mali"], ["MM", "Birmania"], ["MN", "Mongolia"], ["MO", "Macao"], ["MP", "Islas Marianas"], ["MQ", "Martinica"], ["MR", "Mauritania"], ["MS", "Montserrat"], ["MT", "Malta"], ["MU", "Mauricio"], ["MV", "Maldivas"], ["MW", "Malawi"], ["MX", "México"], ["MY", "Malasia"], ["MZ", "Mozambique"], ["NA", "Namibia"], ["NC", "Nueva Caledonia"], ["NE", "Níger"], ["NF", "Islas Norfolk"], ["NG", "Nigeria"], ["NI", "Nicaragua"], ["NL", "Países Bajos"], ["NO", "Noruega"], ["NP", "Nepal"], ["NR", "Nauru"], ["NT", "Zona Neutral"], ["NU", "Niue"], ["NZ", "Nueva Zelanda"], ["OM", "Omán"], ["PA", "Panamá"], ["PE", "Perú"], ["PF", "Polinesia Francesa"], ["PG", "Papúa Nueva Guinea"], ["PH", "Filipinas"], ["PK", "Pakistán"], ["PL", "Polonia"], ["PM", "San Pedro y Miquelón"], ["PN", "Pitcairn"], ["PR", "Puerto Rico"], ["PS", "Territorios Palestinos"], ["PT", "Portugal"], ["PW", "Palau"], ["PY", "Paraguay"], ["QA", "Qatar"], ["RE", "Isla Reunión"], ["RO", "Rumanía"], ["RU", "Rusia"], ["RW", "Ruanda"], ["SA", "Arabia Saudí"], ["SB", "Islas Salomón"], ["SC", "Islas Seychelles"], ["SD", "Sudán"], ["SE", "Suecia"], ["SG", "Singapur"], ["SH", "Santa Helena"], ["SI", "Eslovenia"], ["SJ", "Islas Svalbard y Jan Mayens"], ["SK", "Eslovaquia"], ["SL", "Sierra Leona"], ["SM", "San Marino"], ["SN", "Senegal"], ["SO", "Somalia"], ["SR", "Surinam"], ["SU", "URSS"], ["ST", "Santo Tomé y Príncipe"], ["SV", "El Salvador"], ["SY", "Siria"], ["SZ", "Suazilandia"], ["TC", "Islas Turks y Caicos"], ["TD", "Chad"], ["TF", "Tierras Australes y Antárticas Francesas"], ["TG", "Togo"], ["TH", "Tailandia"], ["TJ", "Tayikistán"], ["TK", "Tokelau"], ["TM", "Turkmenistán"], ["TN", "Túnez"], ["TO", "Tonga"], ["TP", "Timor Oriental"], ["TR", "Turquía"], ["TT", "Trinidad y Tobago"], ["TV", "Tuvalu"], ["TW", "Taiwán"], ["TZ", "Tanzania"], ["UA", "Ucrania"], ["UG", "Uganda"], ["UK", "Reino Unido"], ["UM", "Islas Ultramarinas de Estados Unidos "], ["US", "Estados Unidos de América"], ["UY", "Uruguay"], ["UZ", "Uzbekistán"], ["VA", "Vaticano"], ["VC", "San Vicente y las Granadinas"], ["VE", "Venezuela"], ["VG", "Islas Vírgenes Británicas"], ["VI", "Islas Vírgenes Americanas"], ["VN", "Vietnam"], ["VU", "Vanuatu"], ["WF", "Islas Wallis y Futuna"], ["WS", "Samoa"], ["YE", "Yemen"], ["YT", "Mayotte"], ["YU", "Yugoslavia (antiguo país)"], ["ZA", "Sudáfrica"], ["ZM", "Zambia"], ["ZR", "Zaire (antiguo país)"], ["ZW", "Zimbabwe"]];

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

fetch(url2)
    .then((response) => response.json())
    .then(data2=> mostrarEstudios(data2))
    .catch(error => console.log(error)) 

    //Genero 5 numeros aleatorios para mostrar 5 cursos distintos
    var min = 0;
    var max = 3499;

    var x1 = Math.floor(Math.random() * (max - min + 1) + min);
    var x2 = Math.floor(Math.random() * (max - min + 1) + min);
    var x3 = Math.floor(Math.random() * (max - min + 1) + min);
    var x4 = Math.floor(Math.random() * (max - min + 1) + min);
    var x5 = Math.floor(Math.random() * (max - min + 1) + min);

const mostrarEstudios = (data2) => {

    //estudio 1
    document.getElementById('estudio1').innerHTML = `${data2[x1].course_name}`
    document.getElementById('nivel1').innerHTML = dificultad(`${data2[x1].course_level}`)
    document.getElementById('link1').href = `${data2[x1].course_link}`
    
    //estudio 2
    document.getElementById('estudio2').innerHTML = `${data2[x2].course_name}`
    document.getElementById('nivel2').innerHTML = dificultad(`${data2[x2].course_level}`)
    document.getElementById('link3').href = `${data2[x2].course_link}`

    //estudio 3
    document.getElementById('estudio3').innerHTML = `${data2[x3].course_name}`
    document.getElementById('nivel3').innerHTML = dificultad(`${data2[x3].course_level}`)
    document.getElementById('link3').href = `${data2[x3].course_link}`

    //estudio 4
    document.getElementById('estudio4').innerHTML = `${data2[x4].course_name}`
    document.getElementById('nivel4').innerHTML = dificultad(`${data2[x4].course_level}`)
    document.getElementById('link4').href = `${data2[x4].course_link}`

    //estudio 5
    document.getElementById('estudio5').innerHTML = `${data2[x5].course_name}`
    document.getElementById('nivel5').innerHTML = dificultad(`${data2[x5].course_level}`)
    document.getElementById('link5').href = `${data2[x5].course_link}`
}

fetch(url3)
    .then((response) => response.json())
    .then(data3=> llenar_barras(data3))
    .catch(error => console.log(error)) 

    //Genero 5 numeros aleatorios para mostrar 5 cursos distintos
    var min2 = 0;
    var max2 = 37785;

    var y1 = Math.floor(Math.random() * (max2-min2+1)+min2);

    //Genero 5 numeros aleatorios para mostrar 5 experiencias distintas
    var min4= 0;
    var max4 = 37785;

    var w1 = Math.floor(Math.random() * (max4 - min4 + 1) + min4);
    var w2 = Math.floor(Math.random() * (max4 - min4 + 1) + min4);
    var w3 = Math.floor(Math.random() * (max4 - min4 + 1) + min4);
    var w4 = Math.floor(Math.random() * (max4 - min4 + 1) + min4);
    var w5 = Math.floor(Math.random() * (max4 - min4 + 1) + min4);
    
    //Genero 5 numeros aleatorios para mostrar 5 fechas
    var min3 = 2000;
    var max3 = 2022;

    var z1 = Math.floor(Math.random() * (max3 - min3 + 1) + min3);
    var z2 = Math.floor(Math.random() * (max3 - min3 + 1) + min3);
    var z3 = Math.floor(Math.random() * (max3 - min3 + 1) + min3);
    var z4 = Math.floor(Math.random() * (max3 - min3 + 1) + min3);
    var z5 = Math.floor(Math.random() * (max3 - min3 + 1) + min3);
    let fechas = [z1, z2, z3, z4, z5]
    fechas.sort();
    
    

const llenar_barras = (data3) => {

    //skill 1    
    document.getElementById('skill2').setAttribute('per', exp_porcen(`${data3[y1].valor2}`))
    document.getElementById('skill2').setAttribute('style', "max-width:" + exp_porcen(`${data3[y1].valor2}`))
    document.getElementById('skill2-name').innerHTML = comprobar_skill(`${data3[y1].skill2}`, 2)

    //skill 2
    document.getElementById('skill3').setAttribute('per', exp_porcen(`${data3[y1].valor3}`))
    document.getElementById('skill3').setAttribute('style', "max-width:" + exp_porcen(`${data3[y1].valor3}`))
    document.getElementById('skill3-name').innerHTML = comprobar_skill(`${data3[y1].skill3}`, 3)

    //skill 3
    document.getElementById('skill4').setAttribute('per', exp_porcen(`${data3[y1].valor4}`))
    document.getElementById('skill4').setAttribute('style', "max-width:" + exp_porcen(`${data3[y1].valor4}`))
    document.getElementById('skill4-name').innerHTML = comprobar_skill(`${data3[y1].skill4}`, 4)

    //Experiencias
    document.getElementById('fecha1').innerHTML = fechas[0];
    document.getElementById('puesto1').innerHTML = `${data3[w1].puesto}`
    document.getElementById('fecha2').innerHTML = fechas[1];
    document.getElementById('puesto2').innerHTML = `${data3[w2].puesto}`
    document.getElementById('fecha3').innerHTML = fechas[2];
    document.getElementById('puesto3').innerHTML = `${data3[w3].puesto}`
    document.getElementById('fecha4').innerHTML = fechas[3];
    document.getElementById('puesto4').innerHTML = `${data3[w4].puesto}`
    document.getElementById('fecha5').innerHTML = fechas[4];
    document.getElementById('puesto5').innerHTML = `${data3[w5].puesto}`
}


function sexo(sex) {
    if (sex == "female" )
        sex = "Mujer"
    else 
        sex = "Hombre"       
    return sex    
}

function nacional(sigla) {
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

function dificultad(nivel) {
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


function exp_porcen(valor) {
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

function comprobar_skill(skillNombre, skillcomp) {
    let skillid
    skillid = "skill" + skillcomp + "-main"
    if (skillNombre == "unknown")
        document.getElementById(skillid).remove();
    
    return skillNombre;
    //
}

function imprimirPagina() {
    window.print();
}


