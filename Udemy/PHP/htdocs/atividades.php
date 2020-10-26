<html>
    <head>
        <title></title>
        <meta charset="utf-8">

        <link rel="stylesheet" type="text/css" href="./css/main.css">
    </head>
    <body>

        <div class="tela__php">
            <h2> ATIVIDADE </h2>
            <p>
                <?php
                    $idade = 71;
                    $peso = 68;

                    if (($idade >= 16 && $idade <= 69)&& $peso >= 50) {
                        echo 'Atende aos requisitos';
                    } else {
                        echo 'Não atende aos requisitos';
                    }
                ?>
            </p>
        </div>
    </body>
</html>