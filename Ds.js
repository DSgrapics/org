          let center = document.getElementById('center');
          let message = document.getElementById('message');
          let menu = document.getElementById('menu');
         
         function fb(){
           message.style.display = "block";
           message.innerHTML =  " <b onclick='back()'>back</b> <h2>facebook</h2>we have two authors available press on anyone to contact but first try admin one if not available or online check the second one if both are not available please wait they will soon be online</p> <br><a href='https://www.facebook.com/profile.php?id=100085838598957&mibextid=b1r3HaZxQ2aOKKJt'>SADIQ ABUBAKAR [ADMIN 1]</a> <a href='https://www.facebook.com/profile.php?id=100021535087287&mibextid=b1r3HaZxQ2aOKKJt'>HADIZA ABUBAKAR [ADMIN2]</a> ";
           center.style.opacity = 0.3;
           message.style.height = "55%";
         
         }
         function back(){
            message.style.display = "none";
            center.style.opacity = "1";
       
         }
         function cal(){
           message.style.display = "block";
           message.innerHTML =  " <b onclick='back()'>back</b> <h2>Call</h2>we have two admins available press on anyone to contact but first try admin one if not available  check the second one if both are not available please wait they might be busy</p> <br><a href='tel:2349131458740' >SADIQ ABUBAKAR [ADMIN 1]</a> <a href='tel:2349036873318'>HADIZA ABUBAKAR [ADMIN2]</a> ";
           center.style.opacity = 0.3;
        message.style.height = "55%";
         
         }
         function wa(){
           message.style.display = "block";
           message.innerHTML =  " <b onclick='back()'>back</b> <h2>whasapp</h2>we have two admins available press on anyone to contact on whasapp but first try admin one if not available  check the second one if both are not available please wait they might be busy</p> <br><a href='https://wa.link/hcjr32' >SADIQ ABUBAKAR [ADMIN 1]</a> <a href='https://wa.link/6lllrm'>HADIZA ABUBAKAR [ADMIN2]</a> ";
           center.style.opacity = 0.3;
        message.style.height = "55%";
         
         }
         function men(){
             message.style.display = "block";
           message.innerHTML = "<b onclick='back()'>back</b> <h2> menu </h2> <a target='_blank' href='hire.html' > view post and Hire designer </a><br><br> <a href ='https://chat.whatsapp.com/FZucvgfttVCJIizWq482Cp' > join group to learn graphic </a><br><br>  <a target='blank' href='fags.html' > frequently asked questions </a><br><br>  <a onclick='fb()' > contact us on Facebook </a><br><br>  <a onclick='wa()' > contact us on whasapp </a><br><br>  <a href='tel:2349131458740' > contact developer </a><br><br>  <a onclick='cal()' > call us </a>";
           center.style.opacity = "0.3";
           message.style.height = "65%";
         
           }