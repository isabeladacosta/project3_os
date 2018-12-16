window.onload = function() { 

    $(document).ready(function(){
        $("#DL1").click(function(){
          $("#DL2").toggle();
          $("#DL3").removeClass("fa-chevron-up").addClass("fa-chevron-down");
         });
        });

        $(document).ready(function(){
            $("#J1").click(function(){
              $("#J2").toggle();
              $("#J3").removeClass("fa-chevron-up").addClass("fa-chevron-down");
             });
            });
    
            $(document).ready(function(){
                $("#P1").click(function(){
                  $("#P2").toggle();
                  $("#P3").toggle();
                  $("#P4").removeClass("fa-chevron-up").addClass("fa-chevron-down");
                 });
                });

                $(document).ready(function(){
                    $("#CDL1").click(function(){
                      $("#CDL3").toggle();
                      $("#CDL2").removeClass("fa-chevron-up").addClass("fa-chevron-down");
                     });
                    });

                    

     
    /* form */
     let form = document.getElementsByClassName("form-modal-1")

     let cardsDashboard = document.getElementById("cardsDashboard")
    
     /* steps */
     let Step1 = document.getElementById("Step1")
     let Step2 = document.getElementById("Step2")

     /* buttons */
     let btnNext = document.getElementById("btnNext")
     let btnSave = document.getElementById("btnSave")
     let btnVerified = document.getElementById("btnVerified")
     let btnAll = document.getElementById("btnAll")
     let btnProgress = document.getElementById("btnProgress")
     let btnDenied = document.getElementById("btnDenied")
     let menuPage = document.getElementById("menuPage")
     let menuBlock = document.getElementById("menuBlock")

     /* progress bar */
     let barStep = document.getElementById("barStep")

     let count = 0

     viewDonateStep(count)

     btnNext.addEventListener("click", function(event){
        count += 1
        viewDonateStep(count)
        event.preventDefault()
    })
     
        /* items visible */
        function viewDonateStep(count) {
            if (count == 0) {
                Step1.style.display = "block"
                Step2.style.display = "none"               
                btnNext.style.display = "block"
                btnSave.style.display = "none"
            }
            else if (count == 1) {
                Step1.style.display = "none"
                Step2.style.display = "block"
                btnNext.style.display = "block"
                btnNext.style.display = "none"
                btnSave.style.display = "block"
                form.style.marginTop = "10px"
                barStep.src = "https://i.imgur.com/TpnpFjQ.png"
            }
            else if (count == 2) {
                donateStep1.style.display = "none"
                donateStep2.style.display = "none"
                donateStep3.style.display = "block"
                btnNext.style.display = "none"
                btnPrevious.style.display = "block"
                btnSubmit.style.display = "block"
            }
        }


        /* block view */
        menuBlock.addEventListener("click", function(event){ 
            let cardsB = ""
            cardsB += `<div class="row">

            <div class="col-md-6">
                <div class="card shadow">
                <img class="card-img-top" src="https://i.imgur.com/ioNuqGz.png" alt="Card image cap" height="200px" width="160px">
                <h5 class="card-header">
                    <div class="row">
                    <strong>Passport</strong>
                    </div>
                    <div class="card-uses-box">25 uses</div>
                        <center>
                            <div class="bar"><h6 class="ver-status">verified</h6></div>
                        </center>
                        <br>
                </h5>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card shadow">
                <img class="card-img-top" src="https://i.imgur.com/WUDH5Da.png" alt="Card image cap" height="200px" width="160px">
                <h5 class="card-header" style="border-bottom: 8px solid #F7D55C;">
                    <div class="row">
                    <strong>Driver License GER</strong>
                    </div>
                    <div class="card-uses-box">25 uses</div>
                        <center>
                            <div class="bar" style="border: 5px solid #F7D55C;
                            background-color: #F7D55C;"><h6 class="ver-status">in Progress</h6></div>
                        </center>
                        <br>
                    </h5>
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col-md-6">
            <div class="card shadow">
                <img class="card-img-top" src="https://i.imgur.com/HzT0NlT.png"
                        alt="Card image cap" height="200px" width="160px">
                <h5 class="card-header" style="border-bottom: 8px solid #FF7474;">
                    <div class="row">
                    <strong>Journalist ID</strong>
                    </div>
                    <div class="card-uses-box">25 uses</div>
                        <center>
                            <div class="bar" style="border: 5px solid #FF7474;
                            background-color: #FF7474;"><h6 class="ver-status">not verified</h6></div>
                        </center>
                        <br>
                    </h5>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card shadow">
                <img class="card-img-top" src="https://i.imgur.com/KCYNuU5.png"
                        alt="Card image cap" height="200px" width="160px">
                <h5 class="card-header">
                <div class="row">
                <strong>Math PHD</strong>
                </div>
                <div class="card-uses-box">25 uses</div>
                        <center>
                            <div class="bar"><h6 class="ver-status">verified</h6></div>
                        </center>
                        <br>
                    </h5>
                </div>
            </div>

        </div>`


            cardsDashboard.innerHTML = cardsB

            event.preventDefault()
        })

        /* page view */
        menuPage.addEventListener("click", function(event){ 

            let cardsH = ""
            cardsH += `
            <div class="row">
                        <div class="cards-horizontal flex-container-3 shadow" style="border-bottom: 8px solid #FF7474;">
                                <div style="flex-grow: 1"><img src="https://image.flaticon.com/icons/svg/179/179483.svg" height="70px" width="70px"></div>
                                <div style="flex-grow:8;flex-direction:column;">
                                <h5><strong>Journalist ID</strong>       <light style="font-size:15px;padding-left:20px;color:gray">uploaded on 25/03/2018</light></h5>
                                <p>PressID-Jennifer-Lawrance.pdf</p></div>
                                <div style="flex-grow: 1"><button class="btn1"><i class="fas fa-chevron-down" style="margin-right:-30px;height: 20px;width:20px;"></i></button></div>
                                <div class="bar-horizontal" style="background-color:#FF6565; border: 5px solid #FF6565;"><center><h6 class="ver-status">not verified</h6></center></div>
                        </div>
                </div>

                <div class="row">
                        <div class="cards-horizontal flex-container-3 shadow">
                                <div style="flex-grow: 1"><img src="https://image.flaticon.com/icons/svg/1277/1277372.svg" height="70px" width="70px"></div>
                                <div style="flex-grow:8;flex-direction:column;">
                                <h5><strong>Passport Picture</strong>       <light style="font-size:15px;padding-left:20px;color:gray">uploaded on 25/03/2018</light></h5>
                                <p>PressID-Jennifer-Lawrance.pdf</p></div>
                                <div style="flex-grow: 1"><button class="btn1"><i class="fas fa-chevron-down" style="margin-right:-30px;height: 20px;width:20px;"></i></button></div>
                                <div class="bar-horizontal" ><center><h6 class="ver-status">verified</h6></center></div>
                        </div>
                </div>

                <div class="row">
                        <div class="cards-horizontal  shadow" style="border-bottom: 8px solid #F7D55C;">
                            <div class="flex-container-3">
                                <div style="flex-grow: 1"><img src="https://image.flaticon.com/icons/svg/179/179483.svg" height="70px" width="70px"></div>
                                <div style="flex-grow:8;flex-direction:column;">
                                <h5><strong>Driver License</strong>       <light style="font-size:15px;padding-left:20px;color:gray">uploaded on 25/03/2018</light></h5>
                                <p>DriverLicense-Jennifer-Lawrance-scan.pdf</p></div>
                                <div style="flex-grow: 1"><button class="btn1" id="CDL1"><i class="fas fa-chevron-up" style="margin-right:-30px;height: 20px;width:20px;" id="CDL2"></i></button></div>
                                <div class="bar-horizontal" style="background-color:#F7D55C; border: 5px solid #F7D55C;"><center><h6 class="ver-status">not verified</h6></center></div>
                            </div>
                            <div id="CDL3">
                            <div class="bar-line"></div>
                            <p style="color:black">You uploaded all necessary documents</p>
                            <p style="color:black">This document is being validated</p>
                            <p style="color:black">This document was verified</p>
                            <p style="color:lightgrey">All documents were verified</p>
                        </div>
                        </div>
                        
                </div>
            `

            cardsDashboard.innerHTML = cardsH

            $(document).ready(function(){
                $("#CDL1").click(function(){
                  $("#CDL3").toggle();
                  $("#CDL2").removeClass("fa-chevron-up").addClass("fa-chevron-down");
                 });
                });

            event.preventDefault()

        }) 

        /* all option */
        btnAll.addEventListener("click", function(event){
            let AllCards = ""
            AllCards += `<div class="row">

            <div class="col-md-6">
                <div class="card shadow">
                <img class="card-img-top" src="https://i.imgur.com/ioNuqGz.png" alt="Card image cap" height="200px" width="160px">
                <h5 class="card-header">
                    <div class="row">
                    <strong>Passport</strong>
                    </div>
                    <div class="card-uses-box">25 uses</div>
                        <center>
                            <div class="bar"><h6 class="ver-status">verified</h6></div>
                        </center>
                        <br>
                </h5>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card shadow">
                <img class="card-img-top" src="https://i.imgur.com/WUDH5Da.png" alt="Card image cap" height="200px" width="160px">
                <h5 class="card-header" style="border-bottom: 8px solid #F7D55C;">
                    <div class="row">
                    <strong>Driver License GER</strong>
                    </div>
                    <div class="card-uses-box">25 uses</div>
                        <center>
                            <div class="bar" style="border: 5px solid #F7D55C;
                            background-color: #F7D55C;"><h6 class="ver-status">in Progress</h6></div>
                        </center>
                        <br>
                    </h5>
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col-md-6">
            <div class="card shadow">
                <img class="card-img-top" src="https://i.imgur.com/HzT0NlT.png"
                        alt="Card image cap" height="200px" width="160px">
                <h5 class="card-header" style="border-bottom: 8px solid #FF7474;">
                    <div class="row">
                    <strong>Journalist ID</strong>
                    </div>
                    <div class="card-uses-box">25 uses</div>
                        <center>
                            <div class="bar" style="border: 5px solid #FF7474;
                            background-color: #FF7474;"><h6 class="ver-status">not verified</h6></div>
                        </center>
                        <br>
                    </h5>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card shadow">
                <img class="card-img-top" src="https://i.imgur.com/KCYNuU5.png"
                        alt="Card image cap" height="200px" width="160px">
                <h5 class="card-header">
                <div class="row">
                <strong>Math PHD</strong>
                </div>
                <div class="card-uses-box">25 uses</div>
                        <center>
                            <div class="bar"><h6 class="ver-status">verified</h6></div>
                        </center>
                        <br>
                    </h5>
                </div>
            </div>

        </div> `

        cardsDashboard.innerHTML = AllCards

            event.preventDefault()


        }) 


        /* verified option */
        btnVerified.addEventListener("click", function(event){
            let verifiedCards = ""
            verifiedCards += `<div class="row">
            <div class="col-md-6">
            <div class="card shadow">
            <img class="card-img-top" src="https://i.imgur.com/ioNuqGz.png" alt="Card image cap" height="200px" width="160px">
            <h5 class="card-header">
                <div class="row">
                <strong>Passport</strong>
                </div>
                <div class="card-uses-box">25 uses</div>
                    <center>
                        <div class="bar"><h6 class="ver-status">verified</h6></div>
                    </center>
                    <br>
            </h5>
            </div>
        </div>
        <div class="col-md-6">
        <div class="card shadow">
        <img class="card-img-top" src="https://i.imgur.com/KCYNuU5.png"
                alt="Card image cap" height="200px" width="160px">
        <h5 class="card-header">
        <div class="row">
        <strong>Math PHD</strong>
        </div>
        <div class="card-uses-box">25 uses</div>
                <center>
                    <div class="bar"><h6 class="ver-status">verified</h6></div>
                </center>
                <br>
            </h5>
        </div>
    </div>                          
            </div>`

            cardsDashboard.innerHTML = verifiedCards

            event.preventDefault()
        }) 

         /* in progress option */
         btnProgress.addEventListener("click", function(event){
            let progressCards = ""
            progressCards += `<div class="row">
            <div class="col-md-6">
                        <div class="card shadow">
                        <img class="card-img-top" src="https://i.imgur.com/WUDH5Da.png" alt="Card image cap" height="200px" width="160px">
                        <h5 class="card-header" style="border-bottom: 8px solid #F7D55C;">
                            <div class="row">
                            <strong>Driver License GER</strong>
                            </div>
                            <div class="card-uses-box">25 uses</div>
                                <center>
                                    <div class="bar" style="border: 5px solid #F7D55C;
                                    background-color: #F7D55C;"><h6 class="ver-status">in Progress</h6></div>
                                </center>
                                <br>
                            </h5>
                        </div>
                    </div>
            </div>
            `

            cardsDashboard.innerHTML = progressCards

            event.preventDefault()


        }) 


         /* denied option */
         btnDenied.addEventListener("click", function(event){
            let deniedCards = ""
            deniedCards += `<div class="row">
            <div class="col-md-6">
                    <div class="card shadow">
                        <img class="card-img-top" src="https://i.imgur.com/HzT0NlT.png"
                                alt="Card image cap" height="200px" width="160px">
                        <h5 class="card-header" style="border-bottom: 8px solid #FF7474;">
                            <div class="row">
                            <strong>Journalist ID</strong>
                            </div>
                            <div class="card-uses-box">25 uses</div>
                                <center>
                                    <div class="bar" style="border: 5px solid #FF7474;
                                    background-color: #FF7474;"><h6 class="ver-status">not verified</h6></div>
                                </center>
                                <br>
                            </h5>
                        </div>
                    </div>
            </div>
            `

            cardsDashboard.innerHTML = deniedCards

            event.preventDefault()


        }) 

}
