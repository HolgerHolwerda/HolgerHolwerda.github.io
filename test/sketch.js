function setup() {
  createCanvas(500, 400);

}

function draw() {
  background(220);

  let date = new Date();

  // tidsintervaller for lektioner:
  // 8 - 845
  // 850 - 935
  // 955 - 1040
  // 1045 - 1130
  // 1155 - 1240
  // 1245 - 1330
  // 1340 - 1425
  // 1430 - 1515
  // 1520 - 1605

  let today = 5 //date.getDay()
  let hour = 11 //date.getHours()
  let minut = 50 //date.getMinutes()


  let timeStart = [8, 8, 9, 10, 11, 12, 13, 14, 15]
  //let timeSlut = [8, 9, 10, 11, 12, 13, 14, 15, 16]
  let minutStart = [0, 50, 55, 45, 55, 45, 40, 30, 20]
  let minutSlut = [45, 35, 40, 30, 40, 30, 25, 15, 5]
  let fag = []


  if (today == 1) {
    let dag = 'Mandag'
    let fag = ['Engelsk', 'Matematik', 'Matematik', 'Dansk', 'Kemi', 'Kemi', 'Idéhistorie', 'Idéhistorie', '']
    for (let i = 0; i <= fag.length; i++) {
      if (hour == timeStart[i]) {
        if (minut <= minutStart[i] && minut >= minutSlut[i] || minut >= minutStart[i] && minut <= minutSlut[i]) {
          let aktueltFag = fag[i]
          text('Næste fag: ' + aktueltFag + ' starter ' + timeStart[i] + ':' + minutStart[i], 100, 100)
        }
      }
    }
  } else if (today == 2) {
    let dag = 'Tirsdag'
    let fag = ['', '', 'Dank', 'Engelsk', 'Engelsk', 'Kemi', 'Kemi', 'Fysik', 'Fysik']
    for (let i = 0; i <= fag.length; i++) {
      if (hour == timeStart[i]) {
        if (minut <= minutStart[i] && minut >= minutSlut[i] || minut >= minutStart[i] && minut <= minutSlut[i]) {
          let aktueltFag = fag[i]
          text('Næste fag: ' + aktueltFag + ' starter ' + timeStart[i] + ':' + minutStart[i], 100, 100)
        }
      }
    }
  } else if (today == 3) {
    let day = 'Onsdag'
    let fag = ['Dansk', 'Dansk', 'Studietime', 'Studietime', 'Teknologi', 'Teknologi', 'Matematik', 'Matematik', '']
    for (let i = 0; i <= fag.length; i++) {
      if (hour == timeStart[i]) {
        if (minut <= minutStart[i] && minut >= minutSlut[i] || minut >= minutStart[i] && minut <= minutSlut[i]) {
          let aktueltFag = fag[i]
          text('Næste fag: ' + aktueltFag + ' starter ' + timeStart[i] + ':' + minutStart[i], 100, 100)
        }
      }
    }
  } else if (today == 4) {
    let day = 'Torsdag'
    let fag = ['Design', 'Design', 'Design', 'Engelsk', 'Engelsk', 'Programering', 'Programering', 'Programering', '']
    for (let i = 0; i <= fag.length; i++) {
      if (hour == timeStart[i]) {
        if (minut <= minutStart[i] && minut >= minutSlut[i] || minut >= minutStart[i] && minut <= minutSlut[i]) {
          let aktueltFag = fag[i]
          text('Næste fag: ' + aktueltFag + ' starter ' + timeStart[i] + ':' + minutStart[i], 100, 100)
        }
      }
    }
  } else if (today == 5) {
    let day = 'Fredag'
    let fag = ['Matematik', 'Matematik', 'Idëhistorie', 'Fysik', 'Fysik', 'Teknologi', 'Teknologi', '', '']
    for (let i = 0; i <= fag.length; i++) {
      if (hour == timeStart[i]) {
        if (minut <= minutStart[i] && minut >= minutSlut[i] || minut >= minutStart[i] && minut <= minutSlut[i]) {
          let aktueltFag = fag[i]
          text('Næste fag: ' + aktueltFag + ' starter ' + timeStart[i] + ':' + minutStart[i], 100, 100)
        }
      }
    }
  }
}
