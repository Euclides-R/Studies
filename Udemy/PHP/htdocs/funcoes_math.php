<html>
<head>
	<title></title>
	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="./css/main.css">
</head>
<body>

	<div class="tela__php">

		<?php
            $number = 15.69;
            //Arredonda o valor para cima
            echo ceil($number);
            echo '<br><br>';
            //Arredonda o valor para baixo
            echo floor($number);
            echo '<br><br>';
            //Arredonda o valor com base nas casas decimais
            echo round($number);
            echo '<br><br>';
            //Gera um númeor aleatório;
            $inteiro = rand(1, 100);
            echo $inteiro;
            echo '<br><br>';
            //Retorna Raiz quadrada
            echo sqrt($number);
            echo '<br><br>';
		?>
	</div>

</body>
</html>