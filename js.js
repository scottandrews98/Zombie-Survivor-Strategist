var score = 0;
var days = 7;
var randomNum = 0; 

var currentItems = [];

function gameStart(){
    // This creates a random number between 50 and 250 and assigns it to variable randomNum
    var randomNum = Math.floor((Math.random() * 200) + 50);
    
    // This then fetches a div id called target and then sets it to "Target" plus randomNum
    document.getElementById("target").innerHTML = "Target : "+ randomNum; 
}

function pickLocation(){
   
    // Will run if the number of days is equal to 0
    if(days==0){
        
        // Will run if the score is more than randomNum
        if(score > randomNum){
            alert("Congratulations You Have Survived");
            // Asks the user if they would like to restart
            var restart = prompt("Would You Like To Restart? Yes/No");
            
            // If restart is yes then the document will be reloaded 
            if(restart=="Yes"){
                location.reload();
            }else{
                alert("Hope To See You Soon");
            };
        
        // If score is less than or equal to randomNum    
        }else{
            alert("Unfortunatly You Have Been Killed");
            
            var restart = prompt("Would You Like To Restart? Yes/No");
            
            if(restart=="Yes"){
                location.reload();
            }else{
                alert("Hope To See You Soon");
            };
        };
    
    // If days is above 0 then will run    
    }else{
    
    // Deducts 1 from days     
    days--;         
    
    // Asks the user what location they want to visit     
    var userInput = prompt("Type Which Location You Would Like To Visit");     
    
    // A switch statement based on what the variable userInput is assigned     
    switch(userInput){
         
        // If a variable is equel to any of these then the functions within them will be run        
        case "Work Office":
            workOffice();
        break;   
            
        case "School":
            School();
        break;  
            
        case "Bank":
            Bank();
        break;  
            
        case "Hardware Shop":
            HardwareShop();
        break;  
            
        case "Hair Dressers":
            HairDressers();
        break;  
            
        case "Supermarket":
            Supermarket();
        break;  
            
        case "Church":
            Church();
        break;  
            
        case "Petrol Station":
            PertolStation();
        break;    
         
        // If the user has not typed in any of the variables correctly then default will be run    
        default: 
        // adds one back onto the days    
        days++;
        // Tells the user to type exactly how the words appear    
        alert("Please Type Items Exactly How They Appear");
        document.getElementById("daysLeft").innerHTML = days+" Days Left";  
        // Runs mainMenu function     
        mainMenu();    
    } 
    }
    
}

// Will set each of the elements in the html document to show an item that the user could pick 
function workOffice(){
    document.getElementById("one").innerHTML = "Fire Extinguisher"; 
    document.getElementById("two").innerHTML = "Stapler";
    document.getElementById("three").innerHTML = "Scissors";
    document.getElementById("four").innerHTML = "Sello Tape";
    document.getElementById("five").innerHTML = "Super Glue";
    document.getElementById("six").innerHTML = "Paper Clips";
    document.getElementById("seven").innerHTML = "Blu Tack";
    document.getElementById("eight").innerHTML = "Keyboard";
}

function School(){
    document.getElementById("one").innerHTML = "Chair"; 
    document.getElementById("two").innerHTML = "Pen";
    document.getElementById("three").innerHTML = "Pencil";
    document.getElementById("four").innerHTML = "1 Meter Ruler";
    document.getElementById("five").innerHTML = "A4 Paper";
    document.getElementById("six").innerHTML = "A3 Paper";
    document.getElementById("seven").innerHTML = "Pencil Crayons";
    document.getElementById("eight").innerHTML = "Felt Tip Pens";
}

function Bank(){
    document.getElementById("one").innerHTML = "Thick Glass"; 
    document.getElementById("two").innerHTML = "Locked Door";
    document.getElementById("three").innerHTML = "Motion Alarm";
    document.getElementById("four").innerHTML = "CCTV";
    document.getElementById("five").innerHTML = "Safe";
    document.getElementById("six").innerHTML = "Money";
    document.getElementById("seven").innerHTML = "Computer";
    document.getElementById("eight").innerHTML = "Desk";
}

function HardwareShop(){
    document.getElementById("one").innerHTML = "Screw Driver"; 
    document.getElementById("two").innerHTML = "Gorrila Tape";
    document.getElementById("three").innerHTML = "Motion Alarm";
    document.getElementById("four").innerHTML = "Till";
    document.getElementById("five").innerHTML = "Cupboard";
    document.getElementById("six").innerHTML = "Nails";
    document.getElementById("seven").innerHTML = "Hoe";
    document.getElementById("eight").innerHTML = "Screws";
}

function HairDressers(){
    document.getElementById("one").innerHTML = "Trimmer"; 
    document.getElementById("two").innerHTML = "Clippers";
    document.getElementById("three").innerHTML = "Hair Dryer";
    document.getElementById("four").innerHTML = "Broom";
    document.getElementById("five").innerHTML = "Hair Dye";
    document.getElementById("six").innerHTML = "Comb";
    document.getElementById("seven").innerHTML = "Booking Book";
    document.getElementById("eight").innerHTML = "Mirror";
}

function Supermarket(){
    document.getElementById("one").innerHTML = "Baked Beans"; 
    document.getElementById("two").innerHTML = "Bread";
    document.getElementById("three").innerHTML = "Butter";
    document.getElementById("four").innerHTML = "Cooking Oil";
    document.getElementById("five").innerHTML = "Coat";
    document.getElementById("six").innerHTML = "Oranges";
    document.getElementById("seven").innerHTML = "Apples";
    document.getElementById("eight").innerHTML = "Shirt";
}

function Church(){
    document.getElementById("one").innerHTML = "Bible"; 
    document.getElementById("two").innerHTML = "Candle";
    document.getElementById("three").innerHTML = "Prayer Mat";
    document.getElementById("four").innerHTML = "Cushion";
    document.getElementById("five").innerHTML = "Light";
    document.getElementById("six").innerHTML = "Jesus Statue";
    document.getElementById("seven").innerHTML = "Flower";
    document.getElementById("eight").innerHTML = "Holy Cross";
}

function PertolStation(){
    document.getElementById("one").innerHTML = "Gloves"; 
    document.getElementById("two").innerHTML = "News Paper";
    document.getElementById("three").innerHTML = "Oil";
    document.getElementById("four").innerHTML = "Petrol";
    document.getElementById("five").innerHTML = "Kitchen Roll";
    document.getElementById("six").innerHTML = "Bin";
    document.getElementById("seven").innerHTML = "Soft Drink";
    document.getElementById("eight").innerHTML = "Coffee";
}

// Will run every time the pick weapon button is pressed
function pickWeapon(){

    // Asks which weapon the user would like in a prompt box
    var weaponSelection = prompt("Enter Which Weapon You Want ");
    
    // Will run a switch statment based on what the user inputted to the variable weaponSelection
    switch(weaponSelection){
            
        //Work Office    
            
        case "Fire Extinguisher":
            // Will add 40 to the variable of score  
            score = score + 40;
            // Will add the name of the item to the array currentItems
            currentItems.push("Fire Extinguisher");
            // Will set text at the bottom of the webpage to say what the user has done
            document.getElementById("text").innerHTML = "You have traveled to the Work Office and pick a Fire Extinguisher"; 
        break;   
            
        case "Stapler":
            score = score + 20;
            currentItems.push("Stapler");
            document.getElementById("text").innerHTML = "You have traveled to the Work Office and pick a Stapler"; 
        break;  
            
        case "Scissors":
            score = score + 25;
            currentItems.push("Scissors");
            document.getElementById("text").innerHTML = "You have traveled to the Work Office and pick Scissors"; 
        break;  
            
        case "Sello Tape":
            score = score + 15;
            currentItems.push("Sello Tape");
            document.getElementById("text").innerHTML = "You have traveled to the Work Office and pick Sello Tape"; 
        break;  
            
        case "Super Glue":
            score = score + 18;
            currentItems.push("Super Glue");
            document.getElementById("text").innerHTML = "You have traveled to the Work Office and pick Super Glue"; 
        break;  
            
        case "Paper Clips":
            score = score + 6;
            currentItems.push("Paper Clips");
            document.getElementById("text").innerHTML = "You have traveled to the Work Office and pick Paper Clips"; 
        break;  
            
        case "Blu Tack":
            score = score + 10;
            currentItems.push("Blu Tack");
            document.getElementById("text").innerHTML = "You have traveled to the Work Office and pick Blu Tack"; 
        break;  
            
        case "Keyboard":
            score = score + 25;
            currentItems.push("Keyboard");
            document.getElementById("text").innerHTML = "You have traveled to the Work Office and pick a Keyboard"; 
        break; 
            
        //School
        
        case "Chair":
            score = score + 50;
            currentItems.push("Chair");
            document.getElementById("text").innerHTML = "You have traveled to the school and pick a Chair";
        break;   
            
        case "Pen":
            score = score + 20;
            currentItems.push("Pen");
            document.getElementById("text").innerHTML = "You have traveled to the school and pick a Pen";
        break;  
            
        case "Pencil":
            score = score + 25;
            currentItems.push("Pencil");
            document.getElementById("text").innerHTML = "You have traveled to the school and pick a Pencil";
        break;  
            
        case "1 Meter Ruler":
            score = score + 15;
            currentItems.push("1 Meter Ruler");
            document.getElementById("text").innerHTML = "You have traveled to the school and pick a 1 Meter Ruler";
        break;  
            
        case "A4 Paper":
            score = score + 18;
            currentItems.push("A4 Paper");
            document.getElementById("text").innerHTML = "You have traveled to the school and pick A4 Paper";
        break;  
            
        case "A3 Paper":
            score = score + 6;
            currentItems.push("A3 Paper");
            document.getElementById("text").innerHTML = "You have traveled to the school and pick A3 Paper";
        break;  
            
        case "Pencil Crayons":
            score = score + 10;
            currentItems.push("Pencil Crayons");
            document.getElementById("text").innerHTML = "You have traveled to the school and pick Pencil Crayons";
        break;  
            
        case "Felt Tip Pens":
            score = score + 15;
            currentItems.push("Felt Tip Pens");
            document.getElementById("text").innerHTML = "You have traveled to the school and pick Felt Tip Pens";
        break;    
            
        //Bank    
            
        case "Thick Glass":
            score = score + 40;
            currentItems.push("Thick Glass");
            document.getElementById("text").innerHTML = "You have traveled to the bank and pick Thick Glass";
        break;   
            
        case "Locked Door":
            score = score + 70;
            currentItems.push("Locked Door");
            document.getElementById("text").innerHTML = "You have traveled to the bank and pick a Locked Door";
        break;  
            
        case "Motion Alarm":
            score = score + 35;
            currentItems.push("Motion Alarm");
            document.getElementById("text").innerHTML = "You have traveled to the bank and pick Motion Alarm";
        break;  
            
        case "CCTV":
            score = score + 28;
            currentItems.push("CCTV");
            document.getElementById("text").innerHTML = "You have traveled to the bank and pick CCTV";
        break;  
            
        case "Safe":
            score = score + 25;
            currentItems.push("Safe");
            document.getElementById("text").innerHTML = "You have traveled to the bank and pick a Safe";
        break;  
            
        case "Money":
            score = score + 2;
            currentItems.push("Money");
            document.getElementById("text").innerHTML = "You have traveled to the bank and pick Money";
        break;  
            
        case "Computer":
            score = score + 14;
            currentItems.push("Computer");
            document.getElementById("text").innerHTML = "You have traveled to the bank and pick a Computer";
        break;  
            
        case "Desk":
            score = score + 30;
            currentItems.push("Desk");
            document.getElementById("text").innerHTML = "You have traveled to the bank and pick a Desk";
        break;    
            
        //Hardware Shop
            
        case "Screw Driver":
            score = score + 40;
            currentItems.push("Screw Driver");
            document.getElementById("text").innerHTML = "You have traveled to the Hardware Shop and pick a Screw Driver "; 
        break;   
            
        case "Stapler":
            score = score + 35;
            currentItems.push("Stapler");
            document.getElementById("text").innerHTML = "You have traveled to the Hardware Shop and pick St"; 
        break;  
            
        case "Motion Alarm":
            score = score + 25;
            currentItems.push("Motion Alarm");
            document.getElementById("text").innerHTML = "You have traveled to the Hardware Shop and pick a Motion Alarm "; 
        break;  
            
        case "Till":
            score = score + 10;
            currentItems.push("Till");
            document.getElementById("text").innerHTML = "You have traveled to the Hardware Shop and pick a Till"; 
        break;  
            
        case "Cupboard":
            score = score + 18;
            currentItems.push("Cupboard");
            document.getElementById("text").innerHTML = "You have traveled to the Hardware Shop and pick a Cupboard "; 
        break;  
            
        case "Nails":
            score = score + 30;
            currentItems.push("Nails");
            document.getElementById("text").innerHTML = "You have traveled to the Hardware Shop and pick Nails "; 
        break;  
            
        case "Hoe":
            score = score + 10;
            currentItems.push("Hoe");
            document.getElementById("text").innerHTML = "You have traveled to the Hardware Shop and pick a Hoe ";  
        break;  
            
        case "Keyboard":
            score = score + 20;
            currentItems.push("Screws");
            document.getElementById("text").innerHTML = "You have traveled to the Hardware Shop and pick Screws "; 
        break;        
            
        //Hair Dressers  
            
        case "Trimmer":
            score = score + 18;
            currentItems.push("Trimmer");
            document.getElementById("text").innerHTML = "You have traveled to the hair dressers and pick a trimmer"; 
        break;   
            
        case "Clippers":
            score = score + 20;
            currentItems.push("Clippers");
            document.getElementById("text").innerHTML = "You have traveled to the hair dressers and picked Clippers";  
        break;  
            
        case "Hair Dryer":
            score = score + 15;
            currentItems.push("Hair Dryer");
            document.getElementById("text").innerHTML = "You have traveled to the hair dressers and pick a Hair Dryer"; 
        break;  
            
        case "Broom":
            score = score + 16;
            currentItems.push("Broom");
            document.getElementById("text").innerHTML = "You have traveled to the hair dressers and pick a Broom"; 
        break;  
            
        case "Hair Dye":
            score = score + 8;
            currentItems.push("Hair Dye");
            document.getElementById("text").innerHTML = "You have traveled to the hair dressers and pick Hair Dye"; 
        break;  
            
        case "Comb":
            score = score + 6;
            currentItems.push("Comb");
            document.getElementById("text").innerHTML = "You have traveled to the school and pick a Comb"; 
        break;  
            
        case "Booking Book":
            score = score + 6;
            currentItems.push("Booking Book");
            document.getElementById("text").innerHTML = "You have traveled to the hair dressers and pick a Booking Book";  
        break;  
            
        case "Mirror":
            score = score + 12;
            currentItems.push("Mirror");
            document.getElementById("text").innerHTML = "You have traveled to the hair dressers and pick a Mirror"; 
        break;     
            
            
        // Supermarket
            
        case "Baked Beans":
            score = score + 6;
            currentItems.push("Baked Beans");
            document.getElementById("text").innerHTML = "You have traveled to the supermarket and pick Baked Beans"; 
        break;   
            
        case "Bread":
            score = score + 8;
            currentItems.push("Bread");
            document.getElementById("text").innerHTML = "You have traveled to the supermarket and pick Bread";  
        break;  
            
        case "Butter":
            score = score + 3;
            currentItems.push("Butter");
            document.getElementById("text").innerHTML = "You have traveled to the supermarket and pick Butter";  
        break;  
            
        case "Cooking Oil":
            score = score + 5;
            currentItems.push("Cooking Oil");
            document.getElementById("text").innerHTML = "You have traveled to the supermarket and pick Cooking Oil";  
        break;  
            
        case "Coat":
            score = score + 18;
            currentItems.push("Coat");
            document.getElementById("text").innerHTML = "You have traveled to the supermarket and pick a Coat"; 
        break;  
            
        case "Oranges":
            score = score + 6;
            currentItems.push("Oranges");
            document.getElementById("text").innerHTML = "You have traveled to the supermarket and pick Oranges"; 
        break;  
            
        case "Apples":
            score = score + 6;
            currentItems.push("Apples");
            document.getElementById("text").innerHTML = "You have traveled to the supermarket and pick Apples";   
        break;  
            
        case "Shirt":
            score = score + 12;
            currentItems.push("Shirt");
            document.getElementById("text").innerHTML = "You have traveled to the supermarket and pick a Shirt"; 
        break;         
                
        // Church
            
        case "Bible":
            score = score + 10;
            currentItems.push("Bible");
            document.getElementById("text").innerHTML = "You have traveled to the church and pick up a Bible"; 
        break;      
        
        case "Candle":
            score = score + 15;
            currentItems.push("Candle");
            document.getElementById("text").innerHTML = "You have traveled to the church and pick up a Candle"; 
        break;   
            
        case "Prayer Mat":
            score = score + 18;
            currentItems.push("Prayer Mat");
            document.getElementById("text").innerHTML = "You have traveled to the church and pick up a Prayer Mat"; 
        break;   
            
        case "Cushion":
            score = score + 8;
            currentItems.push("Cushion");
            document.getElementById("text").innerHTML = "You have traveled to the church and pick up a Cushion"; 
        break;   
            
        case "Light":
            score = score + 24;
            currentItems.push("Light");
            document.getElementById("text").innerHTML = "You have traveled to the church and pick up a Light"; 
        break;   
            
        case "Jesus Statue":
            score = score + 3;
            currentItems.push("Jesus Statue");
            document.getElementById("text").innerHTML = "You have traveled to the church and pick up a Jesus Statue"; 
        break;   
            
        case "Flower":
            score = score + 5;
            currentItems.push("Flower");
            document.getElementById("text").innerHTML = "You have traveled to the church and pick up a Flower"; 
        break;   
            
        case "Holy Cross":
            score = score + 12;
            currentItems.push("Holy Cross");
            document.getElementById("text").innerHTML = "You have traveled to the church and pick up a Holy Cross"; 
        break;       
            
        // Petrol Station     
                
        case "Gloves":
            score = score + 12;
            currentItems.push("Gloves");
            document.getElementById("text").innerHTML = "You have traveled to the petrol station and pick up Gloves"; 
        break; 
            
        case "News Paper":
            score = score + 18;
            currentItems.push("News Paper");
            document.getElementById("text").innerHTML = "You have traveled to the petrol station and pick up a News Paper"; 
        break; 
            
        case "Oil":
            score = score + 26;
            currentItems.push("Oil");
            document.getElementById("text").innerHTML = "You have traveled to the petrol station and pick up Oil"; 
        break; 
            
        case "Petrol":
            score = score + 20;
            currentItems.push("Petrol");
            document.getElementById("text").innerHTML = "You have traveled to the petrol station and pick up Petrol"; 
        break; 
            
        case "Kitchen Roll":
            score = score + 10;
            currentItems.push("Kitchen Roll");
            document.getElementById("text").innerHTML = "You have traveled to the petrol station and pick up Kitchen Roll"; 
        break; 
            
        case "Bin":
            score = score + 14;
            currentItems.push("Bin");
            document.getElementById("text").innerHTML = "You have traveled to the petrol station and pick up a Bin"; 
        break; 
            
        case "Soft Drink":
            score = score + 4;
            currentItems.push("Soft Drink");
            document.getElementById("text").innerHTML = "You have traveled to the petrol station and pick up a Soft Drink"; 
        break;    
            
        case "Coffee":
            score = score + 5;
            currentItems.push("Coffee");
            document.getElementById("text").innerHTML = "You have traveled to the petrol station and pick up a Coffee"; 
        break;     
         
        // If the user has not typed in any of the variables correctly then default will be run        
        default:  
            // adds one back onto the days 
            days++;
            // Tells the user to type exactly how the words appear 
            alert("Please Type Items Exactly How They Appear");
            // Tells the user to type exactly how the words appear 
            document.getElementById("daysLeft").innerHTML = days+" Days Left";           
    } 
    
    // Updates html element with the changed days variable    
    document.getElementById("daysLeft").innerHTML = days+" Days Left"; 
    
    // Will show all the current itesm in the currentItems array 
    document.getElementById("items").innerHTML = currentItems;
    // Will show the current value of the variable score
    document.getElementById("score").innerHTML = "Score : "+ score; 
    // Will run the mainMenu function
    mainMenu();
}

// Will set all the elements in the main html document to the locations that can be selected
function mainMenu(){
    document.getElementById("one").innerHTML = "Work Office"; 
    document.getElementById("two").innerHTML = "School";
    document.getElementById("three").innerHTML = "Bank";
    document.getElementById("four").innerHTML = "Hardware Shop";
    document.getElementById("five").innerHTML = "Hair Dressers";
    document.getElementById("six").innerHTML = "Supermarket";
    document.getElementById("seven").innerHTML = "Church";
    document.getElementById("eight").innerHTML = "Petrol Station";   
}
   
// Will run the function gameStart
gameStart();