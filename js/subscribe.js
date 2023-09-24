let submitButton = document.getElementById("submitButton");
  
submitButton.addEventListener("click", () => {
    
        event.preventDefault()
        let namaLengkap = document.getElementById("namaLengkap").value
        let alamatEmail = document.getElementById("alamatEmail").value
        let nomorTelp = document.getElementById("nomorTelp").value
        let skinCare = document.getElementById("skinCare")
        let bodyCare = document.getElementById("bodyCare")
        let confirmation = document.getElementById("confirmation")
    
        let errorText = document.getElementById("error")
    
      
        if(namaLengkap.length == 0){
            errorText.innerHTML = "Nama lengkap harus diisi!"
            
            errorText.style.display = "block"
    
            
            errorText.style.color = "black"
        } 
        else if(namaLengkap.length > 50){
            errorText.innerHTML = "Nama lengkap harus dibawah 50 karakter"
            errorText.style.display = "block"
    
           
            errorText.style.color = "black"
        }
        else if(alamatEmail.length == 0){
            errorText.innerHTML = "Alamat email harus diisi!"
           
            errorText.style.display = "block"
    
      
            errorText.style.color = "black"
        }
        else if(!alamatEmail.endsWith("@gmail.com")){
            errorText.innerHTML = "Alamat email harus diakhiri dengan @gmail.com!"
           
            errorText.style.display = "block"
    
      
            errorText.style.color = "black"
        }
        else if(alamatEmail.length > 50){
            errorText.innerHTML = "Alamat email harus dibawah 50 karakter!"
           
            errorText.style.display = "block"
    
      
            errorText.style.color = "black"
        }
        else if(nomorTelp.length == 0){
            errorText.innerHTML = "Nomor telepon harus diisi!"
           
            errorText.style.display = "block"
    
      
            errorText.style.color = "black"
        }
        else if(nomorTelp[0] != 0 || nomorTelp[1] != 8){
            errorText.innerHTML = "Nomor telepon harus sesuai format!"
           
            errorText.style.display = "block"
    
      
            errorText.style.color = "black"
        }
        
        else if(nomorTelp.length < 12 || nomorTelp.length > 12){
            errorText.innerHTML = "Nomor telepon harus 12 karakter!"
           
            errorText.style.display = "block"
    
      
            errorText.style.color = "black"
        }
        
        else if(!skinCare.checked && !bodyCare.checked){
            errorText.innerHTML = "Preferensi harus dipilih!"
           
            errorText.style.display = "block"
    
      
            errorText.style.color = "black"
            
        }

        else if(!confirmation.checked ){
            errorText.innerHTML = "Anda harus setuju untuk menerima surat kabar!"
           
            errorText.style.display = "block"
    
      
            errorText.style.color = "black"
        }
        else{
            

            alert("Data telah dimasukkan!")
        }

    
        let namaText = document.getElementById("nama")
        namaText.innerHTML = namaLengkap
    
        let emailText = document.getElementById("email")
        emailText.innerHTML = alamatEmail
    
        let telpText = document.getElementById("telp")
        telpText.innerHTML = nomorTelp

        if(skinCare.checked){
            skinCare.value = "skin care"
        }
        else if(bodyCare.checked){
            skinCare.value = "body care"
        } else {
            skinCare.value = ""
        }

        let skinText = document.getElementById("skin")
        skinText.innerHTML = skinCare.value

        if(confirmation.checked){
            confirmation.value = "Ya, saya setuju"
        } else {
            confirmation.value = ""
        }

        let confirmText = document.getElementById("confirm")
        confirmText.innerHTML = confirmation.value


})

    setTimeout(() => {
        console.log("executed")
        confirm("Apakah masih ingin memproses?")
    }, 500000)