### Restaurant Reservation System - By Sharmila Kale
1. All .html files go directly under root
2. All script files go inside scripts folder
3. All .css files go inside styles folder
4. All videos go inside videos folder
5. All images go inside images folder

###Instructions for running the Restaurant Reservation system
1. welcome.html is the entry point to the application.
2. Open the welcome.html in browser. Following menu items will be shown.
    1. Home
    2. Reservations.
        1. Create Reservations
        2. Find Reservation
        3. Reservation List (only available to owner) 
            or if customer has created more than one reservation,
            they can see reservation list based on different
            parameters like phone, name, email etc. Can be implemented in future.
        
    1. About Us<br>
    2. Contact Us<br>
    3. Login<br>
    
    There are some menu items like Restaurant Profile and setting, seating map, edit seating map, seating table list
    , customer contact list etc. are not shown on the menu. This will be done once user authentication is done. For now, 
    you can access these directly from project or from reservationsList page.
     
3. Home page takes you to create reservation page.
4. The facebook icon currently takes you to the facebook page of my blog. We can put restaurant's facebook link there.
5. contactUs.html page has contact details and map of restaurant.
6. aboutUs.html page has a video showing video of delicious dishes.
7. In findReservation.html page, you can enter the reservation ID and it will take you to reservation details page.
8. In reservationDetails.html page. you can change the details or delete reservation.
9. reservationsList.html page shows list of all reservations to the owner. Edit/Delete option is provided.
   Planning to put column sorting and searching for the page.
   10. seatingMap.html shows the map of seating arrangement. This map can be created from editSeatingMap.html page. 
   This will be stored in db and retreived in JSON format which then will be used to recreate the map on screen.
   In editSeatingMap.html, you can select what table type, capacity and table number.Currently addition or deletion of table 
    rows is not yet implemented.
 11.contactList.html shows list of all customer contacts.
 12. seatingTableList.html shows list of all tables and it's details.

 
