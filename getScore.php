<?php 
try {
    $dbh = new PDO('mysql:host=localhost;dbname=marv', "root", "");
	$sql = "SELECT * FROM scores ORDER BY date DESC";
	$res = $dbh->query($sql);
    echo json_encode($res->fetchAll());
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

