function findgross_salary(basic_salary, benefits) {
  gross_salary = basic_salary + benefits;
  return gross_salary;
}

function getgross() {
  document.getElementById("out_gross_salary").innerText = findgross_salary(
    Number(document.getElementById("basic_salary").value),
    Number(document.getElementById("benefits").value)
  ).toFixed(2);
}

function findnssf(gross_salary, nssf_rate = 0.06) {
  nssf_pay = gross_salary * nssf_rate;
  if (gross_salary <= 18000) {
    nssf_pay = gross_salary * 0.06;
  } else {
    nssf_pay = 18000 * 0.06;
  }
  return nssf_pay;
}

function getnssf() {
  document.getElementById("out_nssf").innerText = findnssf(
    document.getElementById("out_gross_salary").value
  ).toFixed(2);
}

function findnhdf(gross_salary, nhdfRate = 0.03) {
  if (gross_salary <= 83334) {
    nhdf = gross * nhdf_rate;
  } else {
    nhdf = 2500;
  }
  return nhdf;
}

function getnhdf() {
  document.getElementById("out_nhdf").innerText = findnhdf(
    document.getElementById("out_gross_salary").value
  ).toFixed(2);
}

function find_nssf_nhdf_total(nssf, nhdf) {
  let total = nssf + nhdf;
  return total;
}

function getnssf_nhdf_total() {
  document.getElementById("total_nssf_nhdf").innerText = find_nssf_nhdf_total(
    Number(document.getElementById("out_nssf").innerText),
    Number(document.getElementById("out_nhdf").innerText)
  ).toFixed(2);
}

function findtaxable_income(gross_salary, total_nssf_nhdf) {
  let taxableIncome = gross_salary - total_nssf_nhdf;
  return taxableIncome;
}

function gettaxable_income() {
  document.getElementById("taxable_income").innerText = findtaxable_income(
    document.getElementById("out_gross_salary").innerText,
    document.getElementById("total_nssf_nhdf").innerText
  ).toFixed(2);
}

function find_payee(taxable_income, personal_relief = 2400) {
  netpayee = 0;
  if (taxable_income <= 24000) {
    grosspayee = 24000 * 0.1;
    netpayee = grosspayee - personal_relief;
  } else if (taxable_income <= 32333) {
    grosspayee = (taxable_income - 24000) * 0.25 + 2400;
    netpayee = grosspayee - personal_relief;
  } else if (taxable_income <= 500000) {
    grosspayee = (taxable_income - 32333) * 0.3 + 4483.25;
    netpayee = grosspayee - personal_relief;
  } else if (taxable_income <= 800000) {
    grosspayee = (taxable_income - 500000) * 0.325 + 144783.35 + 2400;
    netpayee = grosspayee - personal_relief;
  } else {
    grosspayee = (taxable_income - 800000) * 0.35 + 242283.35 + 2400;
    netpayee = grosspayee - personal_relief;
  }
  return netpayee;
}

function getpayee() {
  document.getElementById("out_payee").innerText = find_payee(
    document.getElementById("taxable_income").innerText
  ).toFixed(2);
}

function findnhif(calcGross) {
  if (gross_salary == 0) {
    nhif = 0;
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
  ).toFixed(2);
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
  ).toFixed(2);
}
function calculations() {
  findgross_salary();
  getgross();
  findnssf();
  getnssf();
  findnhdf();
  getnhdf();
  find_nssf_nhdf_total();
  getnssf_nhdf_total();
  findtaxable_income();
  gettaxable_income();
  find_payee();
  getpayee();
  findnhif();
  getnhif();
  findnet_salary();
  getnet_salary();
}
function check_input() {
  if (
    document.getElementById("basic_salary").value.length > 0 ||
    document.getElementById("benefits").value.length > 0
  ) {
    if (
      document.getElementById("basic_salary").value < 0 ||
      document.getElementById("benefits").value < 0
    ) {
      alert("Input can't be a negative no");
    } else {
      calculations();
    }
  } else {
    alert("Input can't be empty");
  }
}
