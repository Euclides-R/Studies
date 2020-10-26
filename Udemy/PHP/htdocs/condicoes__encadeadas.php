<html>
    <head>
        <title></title>
        <meta charset="utf-8">

        <link rel="stylesheet" type="text/css" href="./css/main.css">
    </head>
    <body>

        <div class="tela__php">
            <h2> CONDIÇÕES ENCADEADAS </h2>

            <?php
                $valor_principal = 250.99;
                $valor_exemplo = 143.90;
                $string_true = 'Verdadeiro';
                $verdadeiro = true;
                $falso = false;
            ?>

            <p>
                <?php 
                    do {
                        if ($valor_exemplo < $valor_principal && $valor_exemplo > 100) {
                            echo "$string_true";
                            $valor_exemplo = $valor_exemplo + 139.99;
                        } if ($valor_exemplo > 250.90) {
                            $valor_exemplo = 0;
                        } else {
                            echo 'Fim do código';
                        }
                    } while ($valor_exemplo = 0);
                ?>
            </p>
        </div>
    </body>
</html>