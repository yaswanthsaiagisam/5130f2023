<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection details
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "user_information";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Process user information
    $currentLocation = $_POST["currentlocation"];
    $nativePlace = $_POST["nativeplace"];
    $dreamPlace = $_POST["dreamplace"];
    $familyLocation = $_POST["familylocation"];
    $mobile = $_POST["mobile"];

    // Process investments
    $mineInvestment = $_POST["mine"];
    $familyInvestment = $_POST["family"];
    $anyoneInvestment = $_POST["anyone"];


    $hob =$_POST["hobbies"];
    $soc = $_POST["socialmedia"];
    $cont = $_POST["conte"];

    $myresume=$_POST['resume'];


    
    // Insert data into the database
    $sql = "INSERT INTO user (mycurrentlocation, iamfrom, liketobein, myfamilyisfrom, contactno, mine, family, anyone, hobbies, socialmedia, conte, resume)
            VALUES ('$currentLocation', '$nativePlace', '$dreamPlace', '$familyLocation', '$mobile', '$mineInvestment', '$familyInvestment', '$anyoneInvestment', '$hob', '$soc', '$cont', '$myresume')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>