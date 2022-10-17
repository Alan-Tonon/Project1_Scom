<?php
    header("Access-Control-Allow-Origin: *");
    
    $data = [
        [
            'imagem'=>"https://www.dndbeyond.com/avatars/thumbnails/6/342/420/618/636272680339895080.png",
            'conteudo'=> "A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his peoples elk herd."
        ],

        [
            'imagem'=>"https://www.dndbeyond.com/avatars/thumbnails/6/369/420/618/636272705936709430.png",
            'conteudo'=> "Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her song—knowledge of the people who constructed the monument and the mythic saga it depicts."
        ],

        [
            'imagem'=>"https://www.dndbeyond.com/avatars/thumbnails/6/371/420/618/636272706155064423.png",
            'conteudo'=> "Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions."
        ]
        ];

    die(json_encode($data));
?>