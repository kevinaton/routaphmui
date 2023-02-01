// Cityies and about
import About from "../Views/About";
import Help from "../Views/Help"

const masterList = [
  {id:0, name:'About', component:About, path:'about'},
  {id:1, name:'Cities', submenu:[
    {name:'Cagayan de Oro City', path:'city/cagayandeorocity', mapSrc:'https://www.google.com/maps/d/u/2/embed?mid=1lAmOGo53GN77kvok61PmsqKsvnIELnI&ehbc=2E312F', id:2, },
    {name:'Cebu City', path:'city/cebucity', id:3},
  ]},
  {id:2, name:'Cagayan de Oro', submenu:[
    {
      name:'RD',
      path:'route/cagayandeoro/rd',
      mapSrc:'https://www.google.com/maps/d/u/2/embed?mid=1h-zF-uNY_CanJWZ7jp673H85E06a7IM&ehbc=2E312F',
      title:'RD Cugman to Cogon Market',
      locations:['Chali Beach', 'Cugman Elementary School', 'Ropbinsons Gusa', 'Capitol Universtity Medical Center', 'University of Science and Technology of Southern Philippines (USTP)', 'Limketkai Center', 'Lux Hotel', 'SM Downtown', 'Centrio Ayala Mall', 'Gaisano Mall', 'Gaisano City', 'Capitolyo Misamis Oriental', 'Cagayan de Oro Divisoria', 'Lourdes College', 'Cagayan de Oro City Hall', 'Xavier University College', 'Cogon Market']
    },
    {
      name:'RC',
      path:'route/cagayandeoro/rc',
      mapSrc:'https://www.google.com/maps/d/u/2/embed?mid=1b4ZPid_WyPunI1F5Jb93O_AbqSdU4l4&ehbc=2E312F',
      title:'RC Cugman to Cogon Market',
      locations:['Cugman Elementary School', 'Robinsons Gusa', 'Gusa Elementary School', 'Capitol Universtity Medical Center','University of Science and Technology of Southern Philippines (USTP)', 'Limketkai Center', 'Lux Hotel', 'SM Downtown', 'Centrio Ayala Mall', 'Gaisano Mall', 'Gaisano City', 'Capitolyo Misamis Oriental', 'Cagayan de Oro Divisoria', 'Lourdes College', 'Cagayan de Oro City Hall', 'Xavier University College', 'Cogon Market']
    },
    {
      name:'R1',
      path:'route/cagayandeoro/r1',
      mapSrc:'https://www.google.com/maps/d/u/2/embed?mid=1AL3iaTtEsIb5tgra9oGgQnWGHbdGRAU&ehbc=2E312F',
      title:'R1 Limketkai to Carmen',
      locations:[]
    },
    {
      name:'R2',
      path:'route/cagayandeoro/r2',
      mapSrc:'https://www.google.com/maps/d/u/2/embed?mid=1RMbHy5kFEisB6sIiylv56GwdEdTtvwo&ehbc=2E312F',
      title:'R2',
      locations:[]
    },
    
  ]},
  {id:3, name:'Cebu', submenu:[
    {
      name:'03B', 
      path:'route/cebu/03b', 
      mapSrc:'https://www.google.com/maps/d/u/2/embed?mid=17WFs8gvTCDMxae9xT0BbClFJlCpXe7s&ehbc=2E312F',
      title:'03B Route Mabolo to Carbon',
      locations:['Sindulan St', 'St Joseph Parish', 'The Persimmon', 'Hopodromo', 'Carreta Cemetery', 'University of San Carlos North Campus','Fooda Saversmart', 'Horizons 101', 'Mango Square Mall', 'Fuente Osmeña Circle', 'Crown Regency Suites', 'Abellana Sports Complex', 'Social Security System SSS', 'GV Tower Hotel', 'Metro Colon', 'University of san jose recoletos', 'Cebu City Hall', 'La Nueva', 'Metropolitan Cebu Water District', 'Dept of Foreign Affairs DFA', 'Cebu Technological University', 'National Statistics Office NSO', 'Cpils', 'Museo Sugbo', 'Carreta Cemetery', 'Hopodromo', 'The Persimmon', 'St Joseph Parish', 'Sindulan St']
    },
    {
      name:'03L', 
      path:'route/cebu/03l',
      mapSrc:'https://www.google.com/maps/d/u/2/embed?mid=1AaK5NM8Z75cElP0WsX32dsmgRXcRLNE&ehbc=2E312F',
      title:'03L Route Mabolo to Carbon',
      locations:["P Cabantan", "Waterfront Hotel", "San Carlos Seminar Complex", "PLDT", "Camelita Monastery", "St Joseph Parish", "The Persimmon", "Hopodromo", "Carreta Cemetery", "Imus Ave", "Museo Sugbo", "Cpils", "Tiburcio Padilla St", "Commission on Audit COA", "Cebu Technological University", "Vicente Gullas St", "Dionsio Jakosalem St", "Legaspi St", "Progreso St", "Carbon Public Market", "Cebu City Hall", "La Nueva", "Metropolitan Cebu Water District", "Department of Foreign Affairs DFA", "National Statistics Office NSO"],
    },
    {
      name:'03Q', 
      path:'route/cebu/03q',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1Y0aM-XBv-1lZTQPkq1C0kny1ohm8-XQ&ehbc=2E312F',
      title:'03Q Ayala to SM',
      locations:["Ayala Center Cebu", "Landers Superstore Cebu", "Juan Luna Ave", "SM City Cebu"]
    },
    {
      name:'04B', 
      path:'route/cebu/04b',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=12wdI_BwMWNsaKaEiDrjQVefcwrzv7jg&ehbc=2E312F',
      title:'04B Apas to Carbon',
      locations:["Stephenson St", "Salinas Drive", "Jy Square Mall", "Sudlon", "The Church of Christ of Latter Day Saints Temple", "Lahug Brgy Hall", "University of the Philippines", "Gorordo Ave", "Escario Central Mall", "Cebu Provincial Capitol", "Cebu Doctors University Hospital", "Fuente Osmeña Circle", "Robinsons Place", "Crown Regency Hotel", "Abellana Sports Complex", "University of San Carlos Main Campus", "Colonnade Supermarket", "Legazpi St", "Cebu Metropolitan Cathedral", "Sto Niño Brgy Hall", "Osmeña Blvd", "Metropolitan Cebu Water District", "La Nueva", "Cebu City Hall", "Carbon Public Market"]
    },
    {
      name:'04H', 
      path:'route/cebu/04h',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1dg0ZX3aBr0m_TWwI50zyxHK6RY9EaiI&ehbc=2E312F',
      title:'04H Plaza Housing to Carbon',
      locations:[]
    },
    {
      name:'04I', 
      path:'route/cebu/04i',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=19lkl5WG7v-vovCPF5U3OePE8mVVV-ck&ehbc=2E312F',
      title:'04I Busay Lahug to carbon',
      locations:[]
    },
    {
      name:'04L', 
      path:'route/cebu/04l',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1xuwJM9eVaULACUjAzvNjBVhcIEtdoFc&ehbc=2E312F',
      title:'04L Lahug to Ayala',
      locations:[]
    },
    {
      name:'04M', 
      path:'route/cebu/04m',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1xuwJM9eVaULACUjAzvNjBVhcIEtdoFc&ehbc=2E312F',
      title:'04M Lahug to Ayala',
      locations:[]
    },
    {
      name:'06B', 
      path:'route/cebu/06b',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1GGTHIJ2i_80ytGik12gxBpxAJgbHuU8&ehbc=2E312F',
      title:'06B Guadalupe to Colon',
      locations:[]
    },
    {
      name:'06C', 
      path:'route/cebu/06c',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1Dp2XL1mkK5CIVMI-RSU59EpiheycAPA&ehbc=2E312F',
      title:'06C Guadalupe to Colon',
      locations:[]
    },
    {
      name:'06G', 
      path:'route/cebu/06g',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1c6Mpw1RveN_o5kLMtL5JsqtW9ckciyo&ehbc=2E312F',
      title:'06G Guadalupe to Tabo-an',
      locations:[]
    },
    {
      name:'06H', 
      path:'route/cebu/06h',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1o0I1zxBkwkZ7pytjwfQ_Yz8WT3Jphxs&ehbc=2E312F',
      title:'06H Guadalupe to SM Cebu',
      locations:[]
    },
    {
      name:'07B', 
      path:'route/cebu/07b',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=12sBrzLTFwxTMC4PzIBkZYlytLqrhRPI&ehbc=2E312F',
      title:'07B Banawa to Carbon',
      locations:[]
    },
    {
      name:'08F', 
      path:'route/cebu/08f',
      mapSrc:'https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d15702.21155913857!2d123.88285787536259!3d10.2975629317825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x33a9996cf04797bb%3A0xb91b3e68c6622f48!2sSM%20City%20Cebu%2C%20Juan%20Luna%20Ave%20Ext%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.3114191!2d123.91781639999999!4m5!1s0x33a9996957a7a081%3A0xca5960c0a7287652!2sA.%20Soriano%20Ave%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.310769599999999!2d123.91428529999999!4m5!1s0x33a9996795ac9e63%3A0x116ca7a84f62a22e!2sG.%20Gaisano%20St%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.3042699!2d123.9089765!4m5!1s0x33a9995dc1d1fa11%3A0xe69f66827dc6405a!2sCLH%2C%20T.%20Padilla%20cor%20M.J.%20Cuenco%20Street%2C%206000%2C%20Cebu%20City!3m2!1d10.3020334!2d123.9066593!4m5!1s0x33a9995ec61f7425%3A0xe08de3200e7015e9!2s59%20Sikatuna%20St%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.2999765!2d123.90325589999999!4m5!1s0x33a99c424d0ac3cf%3A0xc5f06bc611f7ae25!2sL.%20Gabuya%20St%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.2816639!2d123.86545179999999!5e0!3m2!1sen!2sph!4v1674142780230!5m2!1sen!2sph',
      title:'Alumnos to SM',
      locations:[]
    },
    {
      name:'08G', 
      path:'route/cebu/08g',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1tQrMQXjM0vHi_XicG-xf12MMhu9bFmo&ehbc=2E312F',
      title:'08G Alumnos to Colon',
      locations:[]
    },
    {
      name:'09C', 
      path:'route/cebu/09c',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1mqLrDz2hhnfJ6KN0Q13kwL-01mLYffE&ehbc=2E312F',
      title:'09C Basak to Colon',
      locations:[]
    },
    {
      name:'09F', 
      path:'route/cebu/09f',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1tG2JOe7D6RJ7HAm5ymdN5idhnjWD2hw&ehbc=2E312F',
      title:'09F Baasak to Ibabao',
      locations:[]
    },
    {
      name:'09G', 
      path:'route/cebu/09g',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1EXiP10TrOyMBVVI5a2XtT03lk0ackGM&ehbc=2E312F',
      title:'09G Basak to Colon',
      locations:[]
    },
    {
      name:'10F', 
      path:'route/cebu/10f',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1PEsuvUrdG5aEsxVFjplcEGWcaEQiOrc&ehbc=2E312F',
      title:'10F Bulacao to Colon',
      locations:[]
    },
    {
      name:'10G', 
      path:'route/cebu/10g',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1_G0LYTzTU1WVqC2JPaeVEsmBZ04H2U4&ehbc=2E312F',
      title:'10G Pardo to Magallanes',
      locations:[]
    },
    {
      name:'10H', 
      path:'route/cebu/10h',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1R1IRVV3yF-PWayOwVq6YCX9EpOoORwY&ehbc=2E312F',
      title:'10H Bulacao to SM Cebu',
      locations:[]
    },
    {
      name:'10M', 
      path:'route/cebu/10m',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1dhRg-ZF7bX7Sp-L6i9OF2i-_hSXS7dg&ehbc=2E312F',
      title:'10M Bulacao to SM Cebu',
      locations:[]
    },
    {
      name:'11A', 
      path:'route/cebu/11a',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1jdJyFG4iPQApfiBEMAN1RmVO2GtzyjM&ehbc=2E312F',
      title:'Inayawan to Mambaling',
      locations:[]
    },
    {
      name:'12D', 
      path:'route/cebu/12d',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=10LYbIKdBQLLO7pB88btHDBgG74lnWDU&ehbc=2E312F',
      title:'12D Labangon to Colon',
      locations:[]
    },
    {
      name:'12G', 
      path:'route/cebu/12g',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1y_4_QAo9sRqLFiFktgKN_jrutdTCgsI&ehbc=2E312F',
      title:'12G Labangon to SM Cebu',
      locations:[]
    },
    {
      name:'12I', 
      path:'route/cebu/12i',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1XLC3N2tMfi11hGA0fIXKjjE9dZaXEEY&ehbc=2E312F',
      title:'12I Labangong to SM Cebu',
      locations:[]
    },
    {
      name:'12L', 
      path:'route/cebu/12l',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1KMpRZLBdHWKigHF3l6UbYUJpw8gyYn8&ehbc=2E312F',
      title:'12L Labangon to Ayala Jeep',
      locations:[]
    },
    {
      name:'13B', 
      path:'route/cebu/13b',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1rk-gJxJIOgCn3-MAFGLfmvSbIKosSWI&ehbc=2E312F',
      title:'12L Talamban to Carbon Market Cebu',
      locations:[]
    },
    {
      name:'13C', 
      path:'route/cebu/13c',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=16QC4T5piRMKQ6NiftHbnNTICPNt4H7Q&ehbc=2E312F',
      title:'13C Talamban to Colon',
      locations:[]
    },
    {
      name:'13H', 
      path:'route/cebu/13h',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=15KXdJikKbD80AvTbcIuS-rbk17HHfys&ehbc=2E312F',
      title:'13H Pit-os to Mandaue',
      locations:[]
    },
    {
      name:'14D', 
      path:'route/cebu/14d',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1-SD7yRj3njH3yPkccg8eiygQRwz14u4&ehbc=2E312F',
      title:'14D Ayala Cebu to Colon',
      locations:[]
    },
    {
      name:'17B', 
      path:'route/cebu/17b',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=17LmJkCkN0OEcoK2ALTnpaxCvRYiDs5w&ehbc=2E312F',
      title:'17B Apas to Carbon',
      locations:[]
    },
    {
      name:'17C', 
      path:'route/cebu/17c',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1pCCkAk1sdDyZYgoS-wQ4kY1v7hfRsCM&ehbc=2E312F',
      title:'17C Apas to Carbon',
      locations:[]
    },
    {
      name:'17D', 
      path:'route/cebu/17d',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1cyrrpI5JRMCpOsHzqMUtR-dtNopNZ8A&ehbc=2E312F',
      title:'17D Apas to Lahug',
      locations:[]
    },
    {
      name:'20A', 
      path:'route/cebu/20a',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1Hj8EjTJ3YFs5YjkSRyWkykC3FVXLpTQ&ehbc=2E312F',
      title:'20A Mandaue to Ayala',
      locations:[]
    },
    {
      name:'21A', 
      path:'route/cebu/21a',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=18TIlhXy8cGgyFvw3qalLTXpO2bRo6tA&ehbc=2E312F',
      title:'21A Mandaue to Cathedral',
      locations:[]
    },
    {
      name:'22A', 
      path:'route/cebu/22a',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1DjygImZ355JSOVRd68W7Tl2YwAhNoG4&ehbc=2E312F',
      title:'22A Mandaue to Cathedral',
      locations:[]
    },
    {
      name:'22D', 
      path:'route/cebu/22d',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1oQAFo6ugwmmFLxeK3gNEXQw8DsdWEvk&ehbc=2E312F',
      title:'22D Mandaue to Cathedral',
      locations:[]
    },
    {
      name:'22I', 
      path:'route/cebu/22i',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1LdXFc2Ujqrq4Qr_ubnrJ5xbHiWIZHs0&ehbc=2E312F',
      title:'22I Mandaue to Gaisano',
      locations:[]
    },
    {
      name:'23D', 
      path:'route/cebu/23d',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1OA_JG1ucipWy_hQMF9V0VYPiN2vDxTU&ehbc=2E312F',
      title:'23D Parkmall to Opon Lapu Lapu City',
      locations:[]
    },
    {
      name:'62B', 
      path:'route/cebu/62b',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1zNCE8PDgzjari8HYL8rdlukMFPceDG0&ehbc=2E312F',
      title:'62B Pit-os to Talamban Carbon',
      locations:[]
    },
    {
      name:'01C Cebu Jeep', 
      path:'route/cebu/01c',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1_Hyar_BlD7Ma8j1w7UThpmk-e17TDS8&ehbc=2E312F',
      title:'01C Private to Colon',
      locations:["University of San Carlos South Campus", "J Alcantara", "Leon Kilat St", "Metro Colon", "Colonnade Supermarket", "Gaisano Main", "University of Visayas", "Colon Obelisk", "Mabini St", "Zulueta St", "Mj Cuenca Ave", "Tiburcio", "Padilla St", "B Benedicto St", "General Maxilom Ave Ext", "Pier 4", "V Sotto St", "Cebu Technological University", "Vicente Gullas St", "Dionsio Jakosalem St", "Sancianko St", "University of Cebu", "Elizabeth Mall Emall"]
    },
    {
      name:'01K Cebu Jeep', 
      path:'route/cebu/01k',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=18ffuct0fvQ7ZVKX1P-O_lAkodrz9BWk&ehbc=2E312F',
      title:'01K Urgello to Parkmall',
      locations:[]
    },
    {
      name:'02B Cebu Jeep', 
      path:'route/cebu/02b',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1b-naqoKPZXofqdzclmF1mcTY4ozo_5k&ehbc=2E312F',
      title:'02B South Bus Terminal to Colon',
      locations:[]
    },
    {
      name:'03A Cebu Jeep', 
      path:'route/cebu/03a',
      mapSrc:'https://www.google.com/maps/d/embed?mid=1_Hyar_BlD7Ma8j1w7UThpmk-e17TDS8&ehbc=2E312F',
      title:'03A Mabolo to Carbon',
      locations:[]
    },
    {
      name:'MI-01A', 
      path:'route/cebu/mi-01a',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1ifYzkOZat9oeUCD5ksCL42Gb2xyBEkI&ehbc=2E312F',
      title:'MI-01A Mactan to Punta',
      locations:["Ompad St", "La Nueva Supermarket", "Super Metro Gaisano Lapu-Lapu", "Lapu Lapu City PUJ Terminal", "PLDT", "Gaisano Mactan", "Goldberry Suites and Hotel", "Mactan Marina Mall", "Savemore", "Ibo Elementary School", "EMD Carmelite School", "Mactan Shrine", "Mares Philippines", "Movenpick Hotel Mactan Island Cebu", "AITI Native Center", "Be Resorts Mactan", "Cebu Sea World", "Punta Engano Elementary and High School", "Amisa Residences"]
    },
    {
      name:'MI-02B', 
      path:'route/cebu/mi-02b',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1u9R5sD7uFMwttqGMNJpVjwdtakFRj1g&ehbc=2E312F',
      title:'MI-02B Parkmall to Maribago Mactan Cebu',
      locations:[]
    },
    {
      name:'MI-03A', 
      path:'route/cebu/mi-03a',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1mhtZCLhoE2e2j8U-kVYduObaPr_N784&ehbc=2E312F',
      title:'MI-03A Cordova to Lapu Lapu',
      locations:[]
    },
    {
      name:'MI-03B', 
      path:'route/cebu/mi-03b',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1hCr8AjjTnd8PbX5-OngLccXW9NwCOGg&ehbc=2E312F',
      title:'MI-03B Mactan to Cordova',
      locations:[]
    },
    {
      name:'MI-04A', 
      path:'route/cebu/mi-04a',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1-GtmjauCCM73aN6EfP-4_gT2tdwB7Ek&ehbc=2E312F',
      title:'MI-04A Mactan to Tamiya',
      locations:[]
    },
    {
      name:'MI-04B', 
      path:'route/cebu/mi-04b',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1BYjiKVDI7f_lzcAQBJzGzmQQ47MHwX0&ehbc=2E312F',
      title:'MI-04A Mactan to MEPZ2',
      locations:[]
    },
    {
      name:'MI-05A', 
      path:'route/cebu/mi-05a',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1ys8DS6OllhxC-6-qn_laZEQNuWazFDU&ehbc=2E312F',
      title:'MI-05A Mactan Airport to Opon Jeep',
      locations:[]
    },
    {
      name:'Route 23', 
      path:'route/cebu/route23',
      mapSrc:'https://www.google.com/maps/d/u/0/embed?mid=1ki7OipHVidhszQcd8HUi3Da-y0Kt8bE&ehbc=2E312F',
      title:'Route 23 Parkmall to Punta Engaño',
      locations:[]
    },

  ]},
  {id:4, name:'Help', component:Help, path:'help'},
]

export default masterList;