<html>
<head>
	<title></title>
	<meta charset="utf-8">

	<link rel="stylesheet" type="text/css" href="">
</head>
<body>

	<div class="tela__php">
        <?php
            $x = 0;

            while($x < 10) {
                $x++;
                echo $x, '<br>';

                // comando -> "continue" não executa nada após ele
            }
            echo 'fim do looping';
        ?>
	</div>

</body>
</html>