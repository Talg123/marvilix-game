<?php 
$name = $_POST['name'];
$score = $_POST['score'];
$graphx = $_POST['graphx'];
$graphy = $_POST['graphy'];
$graphx = implode(",",$graphx);
$graphy = implode(",",$graphy);
try {
    $dbh = new PDO('mysql:host=localhost;dbname=marv', "root", "");
	$sql = "INSERT INTO scores (Name, Score, Date, Graphx, Graphy) VALUES(? , ? , CURDATE(), ? , ?)";
	$res = $dbh->prepare($sql);
	$res->execute([$name, $score, $graphx, $graphy]);
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

