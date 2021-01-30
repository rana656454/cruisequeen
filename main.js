//useful variable declare
const firstClassPlusId = document.getElementById("firstclass-plus")
const firstClassMinusId = document.getElementById("firstclass-minus")
const economyPlusId = document.getElementById("economy-plus")
const economyMinusId = document.getElementById("economy-minus")
const subTotalId = document.getElementById("subtotal")
const vatId = document.getElementById("vat")
const totalId = document.getElementById("total")
const firstClassBookingCount = document.getElementById("firstclassbooking-number")
const economyBookingCount = document.getElementById("economybooking-number")
const booknowbtn = document.getElementById("booknow-btn")
const firstClassPrice = 150
const economyPrice = 100
const reportId = document.getElementById("report")
const bookingFormId = document.getElementById("form")
const reportokBtn = document.getElementById("reportok-btn")

//reportok Button
reportokBtn.addEventListener("click", function(){
    bookingFormId.style.display="block"
    reportId.style.display="none"
    firstClassBookingCount.value=0
    economyBookingCount.value=0
    subTotalId.innerText=00
    vatId.innerText=00
    totalId.innerText=00
})

//plus-minus calculation
firstClassPlusId.addEventListener("click",function(){
 bookingProcess(firstClassBookingCount,true)
})

firstClassMinusId.addEventListener("click",function(){  
    const bookingNumber = parseInt(firstClassBookingCount.value)
    if(bookingNumber>0){
   bookingProcess(firstClassBookingCount,false)
  }
  else{
      alert ("Sir, Booking Number always positive")
  }

 })

 economyPlusId.addEventListener("click",function(){
    bookingProcess(economyBookingCount,true)
 })

 economyMinusId.addEventListener("click",function(){  
    const bookingNumber = parseInt(economyBookingCount.value)

  if(bookingNumber>0){
 bookingProcess(economyBookingCount,false)
  }
  else{
      alert ("Sir, Booking Number always positive")
  }
 })

// booking details processing
 function bookingProcess(bookingCount,isIncrement){
    const bookingNumber = parseInt(bookingCount.value)
    if(isIncrement==true){
    bookingCount.value=bookingNumber+1
    }
    else{
     bookingCount.value=bookingNumber+(-1)
    }
    subTotalId.innerText=getSubTotalTk()
    const vat = getSubTotalTk()*10/100
     vatId.innerText=vat
     totalId.innerText = vat+getSubTotalTk()
 }

// Calculate subTotalTk
function getSubTotalTk(){
    const firstClassBookingNumber = parseInt(firstClassBookingCount.value)
    const economyBookingNumber = parseInt(economyBookingCount.value)
  const subTotalTk = (firstClassBookingNumber*firstClassPrice)+(economyBookingNumber*economyPrice)
  return subTotalTk
}

//report Processing 
booknowbtn.addEventListener("click",function(){
    const totalTk = parseFloat(totalId.innerText)
    if(totalTk>0){
    const firsclassNumber = firstClassBookingCount.value
    const economyNumber = economyBookingCount.value
    bookingFormId.style.display="none"
    document.getElementById("firstclass-report").innerText=firsclassNumber
    document.getElementById("economy-report").innerText=economyNumber
    document.getElementById("totaltk-report").innerText=getSubTotalTk()*10/100+getSubTotalTk()
    reportId.style.display="block"
    }
    else{
        alert("Sir, please input your value then click book now")
    }
})




