<html>
    <head>
        <title>Curso da Udemy</title>
        <meta charset="utf-8">
    </head>

    <body>
       <?php
            //String
            $nome = 'Euclides Rodrigues Junior';
            //int
            $idade = 20;
            //float
            $peso = 70.5;
            //boolean
            $fumante_sn = false; //true = 1 e false = vazio

            //... lógica ...//
            $idade = '20 anos de idade';            
        ?>

        <h1>Ficha Cadastral</h1>
        <br>
        <p>Nome: <?php print $nome?></p>
        
        <br>
        <p>Idade: <?php print $idade?></p>
        
        <br>
        <p>Peso: <?php print $peso?></p>
        
        <br>
        <p>Fumante: <?php print $fumante_sn?></p>
    </body>
</html>