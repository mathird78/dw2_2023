<?php
$servidor="localhost"; 
$usuario="dw2_ruizdiaz";
$password="dw2_ruizdiaz";
$base="dw2_ruizdiaz";
$conn=mysqli_connect($servidor,$usuario,$password,$base);
if($conn->connect_error)
{
    die("fallo la conexion");
}
echo "conectado";

?>