// Start of program - DO NOT DELETE
/*
  This project covers lessons #001 to #018
  of "Learn JavaScript in Arabic 2021"
*/

// TODO #1: Use console.log with %c styling

console.log("%c Card Generator Task", "font-size: 25px;");
// TODO #2: Use console.table to show lesson info

const lessonsInfo = [
    { id: "#001", topic: "Setup & Tools" },
    { id: "#005", topic: "Code placement" },
    { id: "#006", topic: "Comments & bad practices" },
    { id: "#007", topic: "Output methods" },
    { id: "#008", topic: "Console methods + %c styling" },
    { id: "#009", topic: "ECMAScript & typeof" },
    { id: "#011", topic: "Variables & var/let/const" },
    { id: "#014", topic: "Strings & escapes" },
    { id: "#018", topic: "Arithmetic operators" },
  ];
  console.table(lessonsInfo);
// TODO #3: Use console.warn and console.error

  console.warn("READ THE DOCUMENTATION");
// TODO #4: Declare variables with let and const (fullName, birthYear, city)

    let fullName = "Jad Mohammed";   
    let birthYear = 2007;        
    let city = "Mansoura";

  
// TODO #5: Avoid var — explain why in a comment

// it make problems like hoisting --> make unsuspected values 
// it's a global-scoped and not block-scoped


// TODO #6: Show invalid variable names (commented)
    // let full-name = "Jad Mohammed";
    // let full-name = Jad Mohammed;
    // let 1name = "Jad Mohammed";
    // let var = 5;
    
// TODO #7: Use typeof to log data types

    console.log("typeof fullName ->", typeof fullName); // string
    console.log("typeof birthYear ->", typeof birthYear); // number
    console.log("typeof city ->", typeof city); // string
    console.log("typeof lessonsInfo ->", typeof lessonsInfo); // object (array)

// TODO #8: Create a string with \n and \t
    const escapedString = "first line\n one\t two\t three";
    console.log("escapedString preview:\n" + escapedString);

// TODO #9: Build a card using + (concatenation)
    function buildCardConcat(name, age, cityName, salary) {
        var card = "<div id='card'>";
        card += "<h3>Company Card</h3>";
        card += "<p>Name : " + name + "</p>";
        card += "<p>Age : " + age + "</p>";
        card += "<p>City : " + cityName + "</p>";
        card += "<p>Salary : $" + salary + "</p>";
        card += "</div>";
        return card;
    }
// TODO #10: Build the same card using template literals
    function buildCardTemplate(name, age, cityName, salary, bonus, tax, net, monthly, raise5) {
        return `
        <div id="card" aria-live="polite">
        <div id="card-elements">
            <h3>Company Card</h3>
            <p><strong>Name :</strong> ${name}</p>
            <p><strong>Age :</strong> ${age}</p>
            <p><strong>City :</strong> ${cityName}</p>
            <p><strong>Main Salary :</strong> $${salary.toFixed(2)}</p>
            <p class="muted">Bonus : $${bonus.toFixed(2)} • Tax : $${tax.toFixed(2)}</p>
            <p><strong>Year Profit:</strong> $${net.toFixed(2)}</p>
            <p><strong>Month Profit:</strong> $${monthly.toFixed(2)}</p>
            <p class="muted">After add 5% : $${raise5.toFixed(2)}</p>
        </div>    
        </div>
        `;
    }
// TODO #11: Calculate: salary, bonus, tax, net, monthly, 5% raise
    function calculatePayroll(salary) {
        const bonusRate = 0.10;    
        const taxRate = 0.20;      
        const bonus = salary * bonusRate;
        const gross = salary + bonus;
        const tax = gross * taxRate;
        const net = gross - tax;   
        const monthly = net / 12;
        const raise5 = salary * 1.05;
        return { salary, bonus, tax, net, monthly, raise5 };
    }

// TODO #12: Write function generateCard() that:
//    - Gets #output
    function randomSalary(min = 2000, max = 10000) {
    // random integer between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
     // - Calculates age
     const currentYear = new Date().getFullYear();
     const age = currentYear - birthYear;

     // - Generates random salary
     const salary = randomSalary(2500, 12000);

     // - Performs payroll calculations
     const payroll = calculatePayroll(salary);

     // - Builds card with template literals
     const cardHtml = buildCardTemplate(fullName, age, city, payroll.salary, payroll.bonus, payroll.tax, payroll.net, payroll.monthly, payroll.raise5);

     // - Updates DOM
     output.innerHTML = cardHtml;

     // - Logs to console with table
     console.table({
       Name: fullName,
       Age: age,
       City: city,
       Salary: `$${payroll.salary.toFixed(2)}`,
       Bonus: `$${payroll.bonus.toFixed(2)}`,
       Tax: `$${payroll.tax.toFixed(2)}`,
       NetAnnual: `$${payroll.net.toFixed(2)}`,
       NetMonthly: `$${payroll.monthly.toFixed(2)}`,
       "After 5% Raise": `$${payroll.raise5.toFixed(2)}`
     });
    // small debug messages
           if (payroll.salary < 3000) {
            console.warn("salary is lower than the default  ");
          }
          if (payroll.tax > payroll.gross) {
            
            console.error("error : tax is higher than salary");
          }
    
          function generateCard() {
            
            const output = document.getElementById("output");
          
            
            const currentYear = new Date().getFullYear();
            const age = currentYear - birthYear;
          
            
            const salary = randomSalary(2500, 12000);
          
            
            const payroll = calculatePayroll(salary);
          
            
            const cardHtml = buildCardTemplate(
              fullName,
              age,
              city,
              payroll.salary,
              payroll.bonus,
              payroll.tax,
              payroll.net,
              payroll.monthly,
              payroll.raise5
            );
          
           
            output.innerHTML = cardHtml;
          
            
            console.table({
              Name: fullName,
              Age: age,
              City: city,
              Salary: `$${payroll.salary.toFixed(2)}`,
              Bonus: `$${payroll.bonus.toFixed(2)}`,
              Tax: `$${payroll.tax.toFixed(2)}`,
              NetAnnual: `$${payroll.net.toFixed(2)}`,
              NetMonthly: `$${payroll.monthly.toFixed(2)}`,
              "After 5% Raise": `$${payroll.raise5.toFixed(2)}`
            });
          }
          
    

// TODO #13: Call generateCard() on page load

// TODO #14: Add onclick to button to regenerate card