//Variable to track average Score
let cashier=0
// variable to track total score
let c_tot=0
//variable to track # of rating
let c_num =0

//add event listeners for Cashier button
cashierScoreBtn1 = document.getElementById("cashier-1")
cashierScoreBtn1.addEventListener("click", function(e) 
{
  c_tot=c_tot+1
  c_num=c_num+1
  cashier= c_tot/c_num
})

cashierScoreBtn2 = document.getElementById("cashier-2")
cashierScoreBtn2.addEventListener("click", function(e) 
{
  c_tot=c_tot+2
  c_num=c_num+1
  cashier= c_tot/c_num
 })

 cashierScoreBtn3 = document.getElementById("cashier-3")
 cashierScoreBtn3.addEventListener("click", function(e) 
 {
  c_tot=c_tot+3
  c_num=c_num+1
  cashier= c_tot/c_num
 }
 )

 cashierScoreBtn4 = document.getElementById("cashier-4")
cashierScoreBtn4.addEventListener("click", function(e) {
  c_tot=c_tot+4
  c_num=c_num+1
  cashier= c_tot/c_num
}
)

// this will display the ratings
let ratingshow= document.getElementById('showratings')
let ratingtots= document.getElementById('ratings')
ratingshow.addEventListener('click', function(){
    if(ratingtots.style.display=="none")
    {    
        ratingtots.style.display="inline"
        let cashavg=document.getElementById('cash-avg')
        cashavg.textContent= cashier        
        
        let cashtot=document.getElementById('cash-tot')
        cashtot.textContent= c_tot

        let cashnum=document.getElementById('cash-num')
        cashnum.textContent= c_num
      
    }else
    {
        
        ratingtots.style.display="none"
    }
}
)