<?php $title='Plugin'; include(__DIR__ . '/../mall/header.php'); ?>
<div id='Light'>
<h1>jQuery Plugin</h1>

<p>Valde att testa mig på en lightbox! Här är ett exempel man kan testa sig på! Först och främst är lightboxen väldigt lätt att använda och något som kan vara väldigt irriterande för den dagliga läsaren av en hemsida ifall en bild eller diagram är så liten att man inte kan utläsa vad den vill visa.</p>
<p>Här är en <a href="https://github.com/Skola/plugin.git">länk</a> till att clona lightboxen från github!
<br>
<img src='random1.jpg' title='light' class='Light' width="200"/>

<br><a href="http://www.student.bth.se/~dasv13/javascript/plugin/Light.js">Klicka här</a> för att få se koden.
<br><br><strong>HTML</strong><br>Ändra img tabben för att få det att passa din egen lightbox:
<pre>
&lt;img src='exempel.jpg' class='Light' /&gt;
</pre>
<br><br><strong>Titel</strong><br>För att ändra titel på delen eller för att skriva text vid bilden ändra då:
<pre>
&lt;title='light' /&gt;
</pre>
</p>

</div>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
