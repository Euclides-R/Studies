<html>
<head>
	<title></title>
	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="./css/main.css">
</head>
<body>

	<div class="tela__php">
		<?php
            // Data corrente 
            /*echo date('d/m/Y H:i');
            echo '<br>';
            echo date_default_timezone_get();
            date_default_timezone_set('America/Sao_Paulo');
            echo '<br><br>';
            echo date('d/m/Y H:i');
            echo '<br>';
            echo date_default_timezone_get();*/
            
            $data_inical = '2020-10-22';
            $data_final = '2020-12-22';

            // timestamp
            // js ->milisegundos / php -> segundos
            $time_inicial = strtotime($data_inical);
            $time_final = strtotime($data_final);

            //echo $data_inical . ' = ' . $time_inicial;

            $diferenca_times = abs($time_final - $time_inicial);
            $segundos_diarios = 24*60*60;
            
            echo $diferenca_dias = $diferenca_times / $segundos_diarios;
		?>
	</div>

</body>
</html>