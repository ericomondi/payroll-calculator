// var inp_basic_salary = document.getElementById("basic_salary");
// var inp_benefits = document.getElementById("benefits");
// var calc_gross_salary = document.getElementById("out_gross_salary");

function findgross_salary(basic_salary, benefits) {
  gross_salary = basic_salary + benefits;
  return gross_salary;
}
// let calc_gross = findgross_salary(
//   Number(prompt("Enter the basic salary")),
//   Number(prompt("Enter benefits"))
// );
function getgross() {
  document.getElementById("out_gross_salary").innerText = findgross_salary(
    Number(document.getElementById("basic_salary").value),
    Number(document.getElementById("benefits").value)
  );
}

function findnssf(calc_gross, nssf_rate = 0.06) {
  nssf_pay = gross_salary * nssf_rate;
  if (nssf_pay >= 0 && nssf_pay <= 18000) {
    nssf_pay = gross_salary * 0.06;
  } else {
    nssf_pay = 18000;
  }
  return nssf_pay;
}

function getnssf() {
  document.getElementById("out_nssf").innerText = findnssf(
    document.getElementById("out_gross_salary").value
  );
}

function findnhdf(calcGross, nhdfRate = 0.03) {
  let nhdf = gross_salary * nhdfRate;
  return nhdf;
}

function getnhdf() {
  document.getElementById("out_nhdf").innerText = findnhdf(
    document.getElementById("out_gross_salary").value
  );
}

// morning

function find_nssf_nhdf_total(nssf, nhdf) {
  let total = nssf + nhdf;
  return total;
}

function getnssf_nhdf_total() {
  document.getElementById("total_nssf_nhdf").innerText = find_nssf_nhdf_total(
    Number(document.getElementById("out_nssf").innerText),
    Number(document.getElementById("out_nhdf").innerText)
  );
}

function findtaxable_income(gross_salary, total_nssf_nhdf) {
  let taxableIncome = gross_salary - total_nssf_nhdf;
  return taxableIncome;
}

function gettaxable_income() {
  document.getElementById("taxable_income").innerText = findtaxable_income(
    document.getElementById("out_gross_salary").innerText,
    document.getElementById("total_nssf_nhdf").innerText
  );
}

function find_payee(taxable_income, personal_relief = 2400) {
  netpayee = 0;
  if (taxable_income <= 24000) {
    grosspayee = 24000 * 0.1;
    netpayee = grosspayee - personal_relief;
  } else if ((taxable_income <= 32, 333)) {
    grosspayee = (taxable_income - 24000) * 0.25 + 2400;
    netpayee = grosspayee - personal_relief;
  } else if (taxable_income <= 500000) {
    grosspayee = (taxable_income - 32333) * 0.3 + 4483.25;
    netpayee = grosspayee - personal_relief;
  } else if (taxable_income > 500000) {
    grosspayee = (taxable_income - 80000) * 0.35 + 4483.25;
    netpayee = grosspayee - personal_relief;
  } else {
    netpayee = 0;
  }
  return netpayee;
}

function getpayee() {
  document.getElementById("out_payee").innerText = find_payee(
    document.getElementById("taxable_income").innerText
  );
}

function findnhif(calcGross) {
  if (gross_salary === 0) {
    nhif = 500;
  } else if (gross_salary == 5999) {
    nhif = 150;
  } else if (gross_salary >= 6000 && gross_salary <= 7999) {
    nhif = 300;
  } else if (gross_salary >= 8000 && gross_salary <= 11999) {
    nhif = 400;
  } else if (gross_salary >= 12000 && gross_salary <= 14999) {
    nhif = 500;
  } else if (gross_salary >= 15000 && gross_salary <= 19999) {
    nhif = 600;
  } else if (gross_salary >= 20000 && gross_salary <= 24999) {
    nhif = 750;
  } else if (gross_salary >= 25000 && gross_salary <= 29999) {
    nhif = 850;
  } else if (gross_salary >= 30000 && gross_salary <= 34999) {
    nhif = 900;
  } else if (gross_salary >= 35000 && gross_salary <= 39999) {
    nhif = 950;
  } else if (gross_salary >= 40000 && gross_salary <= 44999) {
    nhif = 1000;
  } else if (gross_salary >= 50000 && gross_salary <= 59999) {
    nhif = 1200;
  } else if (gross_salary >= 60000 && gross_salary <= 69999) {
    nhif = 1300;
  } else if (gross_salary >= 70000 && gross_salary <= 79999) {
    nhif = 1400;
  } else if (gross_salary >= 80000 && gross_salary <= 89999) {
    nhif = 1500;
  } else if (gross_salary >= 90000 && gross_salary <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }

  return nhif;
}

function getnhif() {
  document.getElementById("out_nhif").innerText = findnhif(
    document.getElementById("out_gross_salary").value
  );
}

function findnet_salary(gross_salary, nhif, nhdf, nssf_pay, netPayee) {
  netSalary = gross_salary - (nhif + nhdf + nssf_pay + netPayee);

  return netSalary;
}

function getnet_salary() {
  document.getElementById("out_net_pay").innerText = findnet_salary(
    Number(document.getElementById("out_gross_salary").innerText),
    Number(document.getElementById("out_nhif").innerText),
    Number(document.getElementById("out_nhdf").innerText),
    Number(document.getElementById("out_nssf").innerText),
    Number(document.getElementById("out_payee").innerText)
  );
}

// let user_input = document.getElementById("input_form");
// user_input.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let basic_salary = document.getElementById("basic_salry");
//   let benefits = document.getElementById("benefits");

//   if (basic_salary.value.length < 0 || benefits.value.lenght < 0) {
//     document.getElementById("err_mes").innerText =
//     "Ensure all fields are eneterd";
//   } else {
//     document.getElementById("suc_mes").innerText =
//       "View the net salary below";
//   }
// });

function check_input() {
  if (
    document.getElementById("basic_salry").value.length < 0 ||
    document.getElementById("benefits").value.lenght < 0
  ) {
    document.getElementById("err_mes").innerText =
      "Ensure all fields are eneterd";
  } else {
    document.getElementById("suc_mes").innerText = "View the net salary below";
  }
}
