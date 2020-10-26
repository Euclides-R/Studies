<html>
<head>
	<title></title>
	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="./css/main.css">
</head>
<body>

	<div class="tela__php">

		<?php
            $texto = 'curso completo de PHP';

            //string to lower
            echo $texto . "<br><br>";
            echo strtolower($texto);
            echo '<br><br>';
            // string to upper
            echo strtoupper($texto);
            echo '<br><br>';
            //str ucfirst
            echo ucfirst($texto);
            echo '<br><br>';
            // strlen 
            echo strlen($texto);
            echo '<br><br>';
            //str_replace
            echo str_replace('PHP', 'JavaScript', $texto);
            echo '<br><br>';
            //substr
            echo substr($texto, 1, 4);
		?>
	</div>

</body>
</html>