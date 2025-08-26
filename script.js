const conversionType = document.getElementById("conversionType");
const fromLabel = document.getElementById("fromLabel");
const toLabel = document.getElementById("toLabel");
const fromValue = document.getElementById("fromValue");
const toValue = document.getElementById("toValue");
const convertBtn = document.getElementById("convertBtn");

// Update labels based on selection
function updateLabels() {
  const text = conversionType.options[conversionType.selectedIndex].text;
  const [from, to] = text.split(" → ");
  fromLabel.textContent = from + ":";
  toLabel.textContent = to + ":";
  fromValue.value = "";
  toValue.value = "";
}

// Conversion logic
function convert() {
  const val = parseFloat(fromValue.value);
  if (isNaN(val)) {
    toValue.value = "";
    return;
  }

  switch(conversionType.value) {
    case "kg-g": toValue.value = val * 1000; break;
    case "g-kg": toValue.value = val / 1000; break;
    case "m-cm": toValue.value = val * 100; break;
    case "cm-m": toValue.value = val / 100; break;
    case "km-m": toValue.value = val * 1000; break;
    case "m-km": toValue.value = val / 1000; break;
    case "inch-cm": toValue.value = val * 2.54; break;
    case "cm-inch": toValue.value = val / 2.54; break;
    case "ft-m": toValue.value = val * 0.3048; break;
    case "m-ft": toValue.value = val / 0.3048; break;
    case "mile-km": toValue.value = val * 1.60934; break;
    case "km-mile": toValue.value = val / 1.60934; break;
    case "kg-lb": toValue.value = val * 2.20462; break;
    case "lb-kg": toValue.value = val / 2.20462; break;
    case "oz-g": toValue.value = val * 28.3495; break;
    case "g-oz": toValue.value = val / 28.3495; break;
    case "l-ml": toValue.value = val * 1000; break;
    case "ml-l": toValue.value = val / 1000; break;
    case "l-gal": toValue.value = val / 3.78541; break;
    case "gal-l": toValue.value = val * 3.78541; break;
    case "c-f": toValue.value = (val * 9/5) + 32; break;
    case "f-c": toValue.value = (val - 32) * 5/9; break;
    case "c-k": toValue.value = val + 273.15; break;
    case "k-c": toValue.value = val - 273.15; break;
    case "mps-kph": toValue.value = val * 3.6; break;
    case "kph-mps": toValue.value = val / 3.6; break;
    case "mph-kph": toValue.value = val * 1.60934; break;
    case "kph-mph": toValue.value = val / 1.60934; break;
    case "s-min": toValue.value = val / 60; break;
    case "min-s": toValue.value = val * 60; break;
    case "hr-min": toValue.value = val * 60; break;
    case "min-hr": toValue.value = val / 60; break;
    case "hr-s": toValue.value = val * 3600; break;
    case "j-cal": toValue.value = val / 4.184; break;
    case "cal-j": toValue.value = val * 4.184; break;
    case "w-kw": toValue.value = val / 1000; break;
    case "kw-w": toValue.value = val * 1000; break;
    case "b-kb": toValue.value = val / 1024; break;
    case "kb-mb": toValue.value = val / 1024; break;
    case "mb-gb": toValue.value = val / 1024; break;
    case "gb-tb": toValue.value = val / 1024; break;
  }
}

// Event listeners
conversionType.addEventListener("change", updateLabels);
convertBtn.addEventListener("click", convert);

// Initialize
updateLabels();