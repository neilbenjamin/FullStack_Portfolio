// Input side lengths

let side1 = 6;
let side2 = 4;
let side3 = 6;
let side4 = 4;

//Input corner degrees 

let corner1 = 91; //corner 1 && 3 will be equal
let corner2 = 89; // corner 2 && 4 will be equal


//if-else/if-else logic

if (side1 === side2 && side2 === side3 && side3 === side4 && corner1 === 90 && corner2 === 90)  
{console.log("This is a Square")} 
else if (side1 === side3 && side2 === side4 && corner1 === 90 && corner2 === 90)
    {console.log("This is a Rectangle")}
    else if (side1 === side2 && side2 === side3 && side3 === side4 && corner1 < 90 && corner2 > 90) 
    {console.log("This is a Rhombus")}
        else if (side1 === side2 && side2 === side3 && side3 === side4 && corner1 > 90 && corner2 < 90) 
          {console.log("This is a Rhombus")}
        else if (side1 === side3 && side2 === side4 && corner1 < 90 && corner2 > 90)
            {console.log("This is a Parallelogram")}
              else if (side1 === side3 && side2 === side4 && corner1 > 90 && corner2 < 90)
                {console.log("This is a Parallelogram")}
                  else {console.log("Please enter the correct values.")}

/*I haven't been able to get this to work correctly from a mathematical perspective to automatically work
out the remainer angles for the Rhombus and the Parallelogram, BUT, if the user enters the data as instructed 
in the task notes, teh correct answer still comes up so essentially the math is wrong but the logic is right, I think...?*/              




