let request = new XMLHttpRequest();
request.open("GET", "DAY03_Q2.json");
request.send();

request.onload = function () {
  var result = JSON.parse(request.response);
  for (var i = 0; i < result.length; i++) {
    let res = result[i];
    console.log(`
    PERSONAL DETAILS:-

    Name        : ${res.profile.name}
    Father Name : ${res.profile.fn}
    Address     : ${res.profile.add}
    Phone       : ${res.profile.phone}
    E-Mail      : ${res.profile.mail}


    QUALIFICATION :-

    ${res.qual.year.y1}   ${res.deg.d1}  ${res.inst.in1}
    ${res.qual.year.y2}   ${res.deg.d2}  ${res.inst.in2}
    ${res.qual.year.y3}   ${res.deg.d3}  ${res.inst.in3}
    ${res.qual.year.y4}   ${res.deg.d4}  ${res.inst.in4}
    ${res.qual.year.y5}   ${res.deg.d5}  ${res.inst.in5}

    WORKING EXPERIENCE :-

    Company     : ${res.exp.c1} 
    Role        : ${res.exp.f1}
    Department  : ${res.exp.d1}

    Company     : ${res.exp.c2} 
    Role        : ${res.exp.f2}
    Department  : ${res.exp.d2}

    Company     : ${res.exp.c3} 
    Role        : ${res.exp.f3}
    Department  : ${res.exp.d3}

    Company     : ${res.exp.c4} 
    Role        : ${res.exp.f4}
    Department  : ${res.exp.d4}
    `);
  }
};
