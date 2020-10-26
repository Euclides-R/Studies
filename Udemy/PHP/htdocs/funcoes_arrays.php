<html>
<head>
	<title></title>
	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="">
</head>
<body>

	<div class="tela__php">
        <h2>TELA DE DEBUG</h2>
		<?php
            /*$arrays = 'String';
            $retorno = is_array($arrays); // é um array ou não boolean
            if ($retorno) {
                echo 'Sim';
            } else {
                echo 'Não';
            }
            $array = [1 =>'a', 7 =>'b', 18 =>'c'];
            echo '<pre>';
                print_r($array);
            echo '</prev>';
            
            $chaves_array = array_keys($array); // obtem os valores do das chaves do vetor
            echo '<pre>';
                print_r($chaves_array);
            echo '</prev>';*
            $array = array('teclado', 'mouse', 'cabo_hdmi', 'gabinete', 'fonte_atx', 'notebook');
            echo '<pre>';
                print_r($array);
            echo '</prev>';

            sort($array); // ordena de forma alfabética com true ou false
            echo '<pre>';
                print_r($array);
            echo '</prev>';
            $array = array('teclado', 'mouse', 'cabo_hdmi', 'gabinete', 'fonte_atx', 'notebook');
            echo '<pre>';
                print_r($array);
            echo '</prev>';

            asort($array); // também ordena em ordem alfabética porém não altera seu índice do array
            echo '<pre>';
                print_r($array);
            echo '</prev>';

            $array1 = ['osx', 'windows'];
            $array2 = array('linux');
            $array3 = ['solaris'];

            $new_array = array_merge($array1, $array2, $array3); // "merge" / une os valores dos arrays
            echo '<pre>';
                print_r($new_array);
            echo '</prev>';
            
            $string = 'Euclides Rodrigues Junior';
            $array_retorno = explode(' ', $string); // explode usa um delimitador para unir os indices de um array para uma string
            echo '<pre>';
                echo $string , '<br>';
                print_r($array_retorno);
            echo '</prev>';*/

            $array = ['Euclides', 'Rodrigues', 'Junior'];
            $string = implode(' ', $array); // implode é ao contrário ele usa um delimitador para unir os indices do array para uma string
            echo '<pre>';
                print_r($array);
                echo '<br>';
                echo $string;
            echo '</prev>'
		?>
	</div>

</body>
</html>