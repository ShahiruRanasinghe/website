document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the "Book Now" button
    document.getElementById('submitBTN').addEventListener('click', function () {
      // Retrieve values from form elements
      const roomType = document.querySelector('input[name="roomType"]:checked').value;
      const numRooms = document.getElementById('numRooms_hb').value;
      const numNights = document.getElementById('duration').value;
      const extras = document.querySelectorAll('input[name="extras"]:checked');
      const loyaltyPoints = document.getElementById('loyaltyPoints').value;
      const promoCode = document.getElementById('promoCode').value;
      const numChild = document.getElementById('no_child').value;
      const numAdult = document.getElementById('no_adults').value;
      
      //Calculating the cost of meals for children above 5 years
      let childCost =numChild * 5000;

      // Calculate base cost
      let baseCost = 0;
      switch (roomType) {
        case 'single':  
          baseCost = 25000;
          break;
        case 'double':
          baseCost = 35000;
          break;
        case 'triple':
          baseCost = 40000;
          break;
          
      }
  
      // Calculate cost with extra beds
      let totalCost = baseCost * numRooms * numNights* childCost;
  
      // Add cost for extra beds
      const numExtraBeds = document.querySelectorAll('input[name="extras"][value="extraBeds"]:checked').length;
      const extraBedCost = 8000 * numExtraBeds;
      totalCost += extraBedCost;
  
      // Display confirmation and update information
      
      document.getElementById('currentBooking').innerText = `Room Type:  ${roomType} \n Number of Rooms:  ${numRooms} \n Number of Nights:  ${numNights} \nExtra Beds: ${numExtraBeds}`;
      document.getElementById('costOfCurrentBooking').innerText = `Cost: LKR ${totalCost.toFixed(2)}`;
      document.getElementById('overallBooking').innerText = `Overall Booking: ${roomType}`;
      document.getElementById('overallCost').innerText = `Overall Cost: LKR ${totalCost.toFixed(2)}`;
  
      // Apply promo code discount if applicable
      if (promoCode === 'Promo123') {
        const discount = totalCost * 0.05;
        document.getElementById('overallCost').innerText = `Overall Cost (After Promo): LKR ${(totalCost - discount).toFixed(2)}`;
      }
  
    });
  
    //check loyalty points button in hotel booking****************************************************************************
    document.getElementById('checkLoyaltyPonints').addEventListener('click', function () {
      // Retrieve values from form elements
      
      const numRooms = document.getElementById('numRooms_hb').value;
      
      let Points = 0;
      if (numRooms >=3) {
          Points =numRooms* 20;
           
      }

      

      // document.querySelector('loyaltyDisplay').innerText=` ${Points}`;
      //alert(`The loyalty points balance is ${Points}`);
      document.getElementById('loyaltyDisplay').innerText=`${Points} points`;
      const loyalty_hotel = `the loyalty points balance is ${Points}`;
  
      let loyaltyhotel_serialized=JSON.stringify(loyalty_hotel);
      
      localStorage.setItem("loyalty",loyaltyhotel_serialized);
      console.log("The loyalty points balance is saved!");
  
  
  
    });
  
  
    //Add to favourites button in hotel booking********************************************************************************************************************
  
    document.getElementById('toFavourites').addEventListener('click', function () {
      // Retrieve values from form elements
      const roomType = document.querySelector('input[name="roomType"]:checked').value;
      const numRooms = document.getElementById('numRooms_hb').value;
      const numNights = document.getElementById('duration').value;
      const extras = document.querySelectorAll('input[name="extras"]:checked');
      const loyaltyPoints = document.getElementById('loyaltyPoints').value;
      const promoCode = document.getElementById('promoCode').value;
      const firstname= document.getElementById('firstName_hb').value;
      const lastname= document.getElementById('lastName_hb').value;
      const numChild= document.getElementById('no_child').value;
      const numAdult= document.getElementById('no_adults').value;
      
  
      // Calculate base cost
      let baseCost = 0;
      switch (roomType) {
        case 'single':
          baseCost = 25000;
          break;
        case 'double':
          baseCost = 35000;
          break;
        case 'triple':
          baseCost = 40000;
          break;
      }
  
      // Calculate cost with extra beds
      let totalCost = baseCost * numRooms * numNights;
  
      // Add cost for extra beds
      const numExtraBeds = document.querySelectorAll('input[name="extras"][value="extraBeds"]:checked').length;
      const extraBedCost = 8000 * numExtraBeds;
      totalCost += extraBedCost;
  
      // Display confirmation and update information
      document.getElementById('currentBooking').innerText = `Room Type:  ${roomType} \n Number of Rooms:  ${numRooms} \n Number of Nights:  ${numNights} \nExtra Beds: ${numExtraBeds}`;
      document.getElementById('costOfCurrentBooking').innerText = `Cost: LKR ${totalCost.toFixed(2)}`;
      document.getElementById('overallBooking').innerText = `Overall Booking: ${roomType}`;
      document.getElementById('overallCost').innerText = `Overall Cost: LKR ${totalCost.toFixed(2)}`;
  
      // Apply promo code discount if applicable
      if (promoCode === 'Promo123') {
        const discount = totalCost * 0.05;
        document.getElementById('overallCost').innerText = `Overall Cost (After Promo): LKR ${(totalCost - discount).toFixed(2)}`;
      }
      const lastMessage = `Thank you, ${firstname} ${lastname}, for booking ${roomType} for ${numChild} children and ${numAdult} adults for ${numNights} days!`;
  
      let lastMessage_serialized=JSON.stringify(lastMessage);
      
      localStorage.setItem("lastMessage",lastMessage_serialized);
      console.log(lastMessage_serialized);
  
  
  
    });
  
  
  });
  
  /*********ADVENTURE BOOKING******************************************************************************************************************/
  
  
  document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the "Book Now" button
    document.getElementById('bookNow').addEventListener('click', function () {
      // Retrieve values from form elements
      const adventureType = document.querySelector('input[name="adventureType"]:checked').value;
      const numChild_adven = document.getElementById('noChild_adven').value;
      const numAdult_adven = document.getElementById('noAdult_adven').value;
      const userName = document.getElementById('name_adven').value;
      const userMail = document.getElementById('email_adven').value;
      const numDays = document.getElementById('noDays_adven').value;
      
  
      // Calculate base cost
      let baseCost = 0;
      let adventureDetails = '';
  
      switch (adventureType) {
        case 'localAdult':
          baseCost = 5000;
          adventureDetails = 'Diving for Local Adults (1 hr) - 5000LKR';
          break;
        case 'localKids':
          baseCost = 2000;
          adventureDetails = 'Diving for Local Kids (above 5 years) - 2000LKR';
          break;
        case 'foreignAdult':
          baseCost = 10000;
          adventureDetails = 'Diving for Foreign Adults - 10000LKR';
          break;
        case 'foreignKid':
          baseCost = 5000;
          adventureDetails = 'Diving for Foreign Kids - 5000LKR';
          break;
      }
  
      // Calculate cost with extra beds
      let total = baseCost * numChild_adven * numAdult_adven* numDays;
  
      // Add cost for extra beds
      const guide = document.querySelectorAll('input[name="guide"][value="anGuide"]:checked').length;
      const aGuide = 1500 * guide;
      total += aGuide;
  
      // Display confirmation and update information
      document.getElementById('currentBookings_adven').innerText = `Name: ${userName}\nEmail: ${userMail}\nAdventure Type: ${adventureType}\nNumber of Children: ${numChild_adven}\nNumber of Adults: ${numAdult_adven}\nNumber of Days: ${numDays}`;
      document.getElementById('currentBookingsCost_adven').innerText = `Cost: LKR ${total.toFixed(2)}`;
      document.getElementById('overallBookings_adven').innerText = `Overall Booking: ${adventureType}`;
      document.getElementById('overallBookingsCost_adven').innerText = `Overall Cost: LKR ${total.toFixed(2)}`;
  
      
  
  
    });
  
    
    const bookAdvenButton =document.getElementById("bookAdventure");
      bookAdvenButton.addEventListener("click", bookAdventure);
      function bookAdventure(){
        const adventureType = document.querySelector('input[name="adventureType"]:checked').value;
        const numChild_adven = document.getElementById('noChild_adven').value;
        const numAdult_adven = document.getElementById('noAdult_adven').value;
        const userName = document.getElementById('name_adven').value;
        const userMail = document.getElementById('email_adven').value;
        const numDays = document.getElementById('noDays_adven').value;
        
    
        // Calculate base cost
        let baseCost = 0;
        let adventureDetails = '';
    
        switch (adventureType) {
          case 'localAdult':
            baseCost = 5000;
            adventureDetails = 'Diving for Local Adults (1 hr) - 5000LKR';
            break;
          case 'localKids':
            baseCost = 2000;
            adventureDetails = 'Diving for Local Kids (above 5 years) - 2000LKR';
            break;
          case 'foreignAdult':
            baseCost = 10000;
            adventureDetails = 'Diving for Foreign Adults - 10000LKR';
            break;
          case 'foreignKid':
            baseCost = 5000;
            adventureDetails = 'Diving for Foreign Kids - 5000LKR';
            break;
        }
    
        // Calculate cost with extra beds
        let total = baseCost * numChild_adven * numAdult_adven* numDays;
    
        // Add cost for extra beds
        const guide = document.querySelectorAll('input[name="guide"][value="anGuide"]:checked').length;
        const aGuide = 1500 * guide;
        total += aGuide;
    
        
      const thankYouMessage = `Thank you, ${userName}, for booking ${adventureDetails} for ${numChild_adven} children and ${numAdult_adven} adults for ${numDays} days!`;
  
      
      alert(thankYouMessage);
      }
  
      const favouritesButton =document.getElementById("addToFavourites");
      favouritesButton.addEventListener("click", addFavourites);
      function addFavourites(){
        const adventureType = document.querySelector('input[name="adventureType"]:checked').value;
        const numChild_adven = document.getElementById('noChild_adven').value;
        const numAdult_adven = document.getElementById('noAdult_adven').value;
        const userName = document.getElementById('name_adven').value;
        const userMail = document.getElementById('email_adven').value;
        const numDays = document.getElementById('noDays_adven').value;
        
    
        // Calculate base cost
        let baseCost = 0;
        let adventureDetails = '';
    
        switch (adventureType) {
          case 'localAdult':
            baseCost = 5000;
            adventureDetails = 'Diving for Local Adults (1 hr) - 5000LKR';
            break;
          case 'localKids':
            baseCost = 2000;
            adventureDetails = 'Diving for Local Kids (above 5 years) - 2000LKR';
            break;
          case 'foreignAdult':
            baseCost = 10000;
            adventureDetails = 'Diving for Foreign Adults - 10000LKR';
            break;
          case 'foreignKid':
            baseCost = 5000;
            adventureDetails = 'Diving for Foreign Kids - 5000LKR';
            break;
        }
    
        // Calculate cost with extra beds
        let total = baseCost * numChild_adven * numAdult_adven* numDays;
    
        // Add cost for extra beds
        const guide = document.querySelectorAll('input[name="guide"][value="anGuide"]:checked').length;
        const aGuide = 1500 * guide;
        total += aGuide;
    
        
      const thankYouMessage = `Thank you, ${userName}, for booking ${adventureDetails} for ${numChild_adven} children and ${numAdult_adven} adults for ${numDays} days!`;
  
      let thankyou_serialized=JSON.stringify(thankYouMessage);
  
      localStorage.setItem("thankYouMessage",thankyou_serialized);
      console.log(thankyou_serialized);
      
      
      }
  });