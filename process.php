<?php

require_once "db_config.php";

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    die("Invalid Request");
}

// Sanitize input
$fullname = trim(htmlspecialchars($_POST["fullname"]));
$studentid = trim(htmlspecialchars($_POST["studentid"]));
$building = trim(htmlspecialchars($_POST["building"]));
$email = trim(htmlspecialchars($_POST["email"]));
$category = trim(htmlspecialchars($_POST["category"] ?? ""));
$asset_tag = trim(htmlspecialchars($_POST["asset_tag"]));
$description = trim(htmlspecialchars($_POST["description"]));

// Validation
if (
    empty($fullname) ||
    empty($studentid) ||
    empty($building) ||
    empty($email) ||
    empty($category) ||
    empty($description)
) {
    die("Please fill in all required fields.");
}

// Prepared Statements.
$sql = "INSERT INTO fault_reports
(fullname, studentid, building, email, category, asset_tag, description)
VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "sssssss",
    $fullname,
    $studentid,
    $building,
    $email,
    $category,
    $asset_tag,
    $description
);

if ($stmt->execute()) {

    $ticketID = $stmt->insert_id;

} else {

    die("Error: " . $stmt->error);

}

$stmt->close();
$conn->close();

?>
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<title>Submission Successful</title>

<style>

body{
    font-family:Arial;
    background:#f2f2f2;
}

.container{
    width:500px;
    margin:80px auto;
    background:white;
    padding:30px;
    text-align:center;
    border-radius:10px;
}

.success{
    color:green;
}

a{
    text-decoration:none;
    background:#007BFF;
    color:white;
    padding:10px 20px;
    border-radius:5px;
}

</style>

</head>

<body>

<div class="container">

<h2 class="success">Fault Report Submitted Successfully</h2>

<p>Your report has been saved.</p>

<h3>Ticket ID:
<?php echo $ticketID; ?>
</h3>

<br>

<a href="index.html">Submit Another Report</a>

</div>

</body>

</html>
