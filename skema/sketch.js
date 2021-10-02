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

  let today = 3 //date.getDay()
  let hour = 14 //date.getHours()
  let minut = 50 //date.getMinutes()


  let timeStart = [7, 8, 9, 10, 11, 12, 13, 14, 15]
  let timeSlut = [8, 9, 10, 11, 12, 13, 14, 15, 16]
  let minutStart = [0, 50, 55, 45, 55, 45, 40, 30, 20]
  let minutSlut = [45, 95, 100, 90, 100, 90, 85, 75, 65]
  // let minutSlut = [45, 35, 40, 30, 40, 30, 25, 15, 5]
  let fag = []
  let f = 'Fri'


  if (today == 1) {
    day = 'Mandag'
    fag = ['Engelsk', 'Matematik', 'Matematik', 'Dansk', 'Kemi', 'Kemi', 'Idéhistorie', 'Idéhistorie', f]
    // for (let i = 0; i <= fag.length; i++) {
    //   if (hour >= timeStart[i] && hour <= timeSlut[i]) {
    //     if (minut <= minutStart[i] && minut +45 >= minutSlut[i] || minut >= minutStart[i] && minut +45 <= minutSlut[i]) {
    //       let aktueltFag = fag[i]
    //       text('Næste fag: ' + aktueltFag + ' starter ' + timeStart[i] + ':' + minutStart[i], 100, 100)
    //     } else{text('Næste fag, ' + fag[i++] + ', starter ' + timeStart[i] + ':' + minutStart[i],150,120)}
    //   } else{text('Ingen kommende fag', 100,150+10*i)}
    // }
  } else if (today == 2) {
    day = 'Tirsdag'
    fag = [f, f, 'Dank', 'Engelsk', 'Engelsk', 'Kemi', 'Kemi', 'Fysik', 'Fysik']
    // for (let i = 0; i <= fag.length; i++) {
    //   if (hour == timeStart[i]) {
    //     if (minut <= minutStart[i] && minut >= minutSlut[i] || minut >= minutStart[i] && minut <= minutSlut[i]) {
    //       let aktueltFag = fag[i]
    //       text('Næste fag: ' + aktueltFag + ' starter ' + timeStart[i] + ':' + minutStart[i], 100, 100)
    //     }
    //   }
    // }
  } else if (today == 3) {
    day = 'Onsdag'
    fag = ['Dansk', 'Dansk', 'Studietime', 'Studietime', 'Teknologi', 'Teknologi', 'Matematik', 'Matematik', f]
    // for (let i = 0; i <= fag.length; i++) {
    //   if (hour == timeStart[i]) {
    //     if (minut <= minutStart[i] && minut >= minutSlut[i] || minut >= minutStart[i] && minut <= minutSlut[i]) {
    //       let aktueltFag = fag[i]
    //       text('Næste fag: ' + aktueltFag + ' starter ' + timeStart[i] + ':' + minutStart[i], 100, 100)
    //     }
    //   }
    // }
  } else if (today == 4) {
    day = 'Torsdag'
    fag = ['Design', 'Design', 'Design', 'Engelsk', 'Engelsk', 'Programering', 'Programering', 'Programering', f]
    // for (let i = 0; i <= fag.length; i++) {
    //   if (hour == timeStart[i]) {
    //     if (minut <= minutStart[i] && minut >= minutSlut[i] || minut >= minutStart[i] && minut <= minutSlut[i]) {
    //       let aktueltFag = fag[i]
    //       text('Næste fag: ' + aktueltFag + ' starter ' + timeStart[i] + ':' + minutStart[i], 100, 100)
    //     }
    //   }
    // }
  } else if (today == 5) {
    day = 'Fredag'
    fag = ['Matematik', 'Matematik', 'Idéhistorie', 'Fysik', 'Fysik', 'Teknologi', 'Teknologi', f, f]
    // for (let i = 0; i <= fag.length; i++) {
    //   if (hour == timeStart[i]) {
    //     if (minut <= minutStart[i] && minut >= minutSlut[i] || minut >= minutStart[i] && minut <= minutSlut[i]) {
    //       let aktueltFag = fag[i]
    //       text('Næste fag: ' + aktueltFag + ' starter ' + timeStart[i] + ':' + minutStart[i], 100, 100)
    //     }
    //   }
    // }
  
  }
  
    if(today <= 5 && today >= 1 && hour < 15){
    let n = 15
    text('Skema for ' + day, 100, 100-1.5*n)
    text('08:00-08:45 ' + fag[0],100,100)
    text('08:50-09:35 ' + fag[1],100,100+n)
    text('09:55-10:40 ' + fag[2],100,100+2*n)
    text('10:45-11:30 ' + fag[3],100,100+3*n)
    text('11:55-12:40 ' + fag[4],100,100+4*n)
    text('12:45-13:30 ' + fag[5],100,100+5*n)
    text('13:40-14:25 ' + fag[6],100,100+6*n)
    text('14:30-15:15 ' + fag[7],100,100+7*n)
    text('15:20-16:05 ' + fag[8],100,100+8*n)
    } else{text('Weekend',100,100)}
} 


 // let todayName = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag']   
    //   document.getElementById("dag").innerHTML = todayName[today-1];
    
    //   if (today == 1) {
  //     day = 'Mandag'
  //     fag = ['Design', 'Design', 'Design', 'Idéhistorie', 'Dansk', f, 'Teknologi', 'Teknologi', 'Teknologi']
  //   } else if (today == 2) {
  //     day = 'Tirsdag'
  //     fag = ['Matematik', 'Matematik', 'Matematik', 'Idéhistorie', 'Idéhistorie', f, f, f, f]
  //   } else if (today == 3) {
  //     day = 'Onsdag'
  //     fag = ['Dansk', 'Dansk', 'Studietime', 'Studietime', 'Teknikfag', 'Teknikfag', 'Teknikfag', 'Teknikfag', f]
  //   } else if (today == 4) {
  //     day = 'Torsdag'
  //     fag = ['Teknologi', 'Teknologi', 'Teknologi', 'Design', 'Design', 'Matematik', 'Matematik', 'Matematik', f]
  //   } else if (today == 5) {
    //     day = 'Fredag'
  //     fag = ['Teknikfag', 'Teknikfag', 'Teknikfag', 'Teknikfag', 'Teknikfag', f, f, f, f]
  //   } else {
  //     day = 'Weekend'
  //     fag = [f, f, f, f, f, f, f, f, f]
  //   }
  
  // document.getElementById("fag0").innerHTML = fag[0];
    // document.getElementById("fag1").innerHTML = fag[1];
    // document.getElementById("fag2").innerHTML = fag[2];
    // document.getElementById("fag3").innerHTML = fag[3];
    // document.getElementById("fag4").innerHTML = fag[4];
    // document.getElementById("fag5").innerHTML = fag[5];
    // document.getElementById("fag6").innerHTML = fag[6];
    // document.getElementById("fag7").innerHTML = fag[7];
    // document.getElementById("fag8").innerHTML = fag[8];

// genvejen beder om en dag og ellers viser den bare den aktuella
