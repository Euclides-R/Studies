<html>
<head>
	<title></title>
	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="">
</head>
<body>

	<div class="tela__php">
		<?php
            /*in_array() -> true ou false para a existência do que está sendo procurado
            //array_search() -> retorna o índice do valor pesquisado , caso ele exista

            $lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva'];

            echo '<pre>';
			print_r($lista_frutas);
			echo '</pre>';

            //$existe = in_array('abacate ', $lista_frutas);
            // echo array_search('Banana', $lista_frutas);

            if($existe) {
                echo 'Sim';
            } else {
                echo 'Não';
            }*/

            $lista_coisas = [];
			
			$lista_coisas['frutas'] = array(1 => 'Banana',2 => 'Maçã',3 => 'Morango',4 => 'Uva');
			$lista_coisas['pessoas'] = array(1 => 'João', 2 => 'José', 3 => 'Maria');
			
			echo '<pre>';
			print_r($lista_coisas);
            echo '</pre>';
            
            $existe  = in_array('Uva', $lista_coisas['frutas']);
            if($existe) {
                echo 'Sim';
            } else {
                echo 'Não';
            }
		?>
	</div>

</body>
</html>