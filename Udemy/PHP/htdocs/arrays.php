<html>
<head>
	<title></title>
	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="">
</head>
<body>

	<div class="tela__php">
		<?php
			$lista_coisas = [];
			
			$lista_coisas['frutas'] = array(1 => 'Banana',2 => 'Maçã',3 => 'Morango',4 => 'Uva');
			$lista_coisas['pessoas'] = array(1 => 'João', 2 => 'José', 3 => 'Maria');
			
			echo '<pre>';
			print_r($lista_coisas);
			echo '</pre>';
		?>
	</div>

</body>
</html>