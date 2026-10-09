const input=document.getElementById("temperature");
const unit=document.getElementById("unit");
const button=document.getElementById("convertBtn");
const message=document.getElementById("message");
const celsiusResult=document.getElementById("celsiusResult");
const fahrenheitResult=document.getElementById("fahrenheitResult");
const kelvinResult=document.getElementById("kelvinResult");

button.addEventListener("click",()=>{
  const value=parseFloat(input.value);
  message.textContent="";
  if(input.value.trim()==="" || Number.isNaN(value)){showError("Please enter a valid temperature.");return;}
  if(unit.value==="celsius" && value < -273.15){showError("Celsius cannot be below -273.15°C.");return;}
  if(unit.value==="fahrenheit" && value < -459.67){showError("Fahrenheit cannot be below -459.67°F.");return;}
  if(unit.value==="kelvin" && value < 0){showError("Kelvin cannot be below 0 K.");return;}

  let c,f,k;
  if(unit.value==="celsius"){c=value;f=(value*9/5)+32;k=value+273.15}
  else if(unit.value==="fahrenheit"){f=value;c=(value-32)*5/9;k=c+273.15}
  else{k=value;c=value-273.15;f=(c*9/5)+32}

  celsiusResult.textContent=`${c.toFixed(2)} °C`;
  fahrenheitResult.textContent=`${f.toFixed(2)} °F`;
  kelvinResult.textContent=`${k.toFixed(2)} K`;
});
function showError(text){message.textContent=text;celsiusResult.textContent="—";fahrenheitResult.textContent="—";kelvinResult.textContent="—";}