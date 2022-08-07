 <!DOCTYPE html>
 <html>
    <head>
        <meta charset="utf-8">
        <title>Gallery demo</title>
        <link href="style.css" rel="stylesheet">
        <script defer src="gallery.js"></script>

        <link href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
    </head>
    <body>
        <div class="gallery-container" data-gallery>
            <?php foreach (range(1, 20) as $idx):?>
                <?php $imgIdx = random_int(1, 4);?>
                <img src="images/<?=$imgIdx?>.jpg" alt="<?=$imgIdx?>.jpg" data-fancybox="gallery">
            <?php endforeach?>
        </div>
        <script>
            document.addEventListener('DOMContentLoaded', () => {
                new Gallery();
            });
        </script>
    </body>
 </html>