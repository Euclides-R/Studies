<html>
<head>
	<title></title>
	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="./css/main.css">
</head>
<body>

	<div class="tela__php">

		<?php
            $text = implode('', file("texto.txt"));

            $exibir = $text;
            $codificada = md5($exibir);
            echo "Resultado: " . $codificada;
		?>
	</div>

</body>
</html>