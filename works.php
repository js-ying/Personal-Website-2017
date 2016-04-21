<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="一個因為楓之谷而喜歡上資訊的男孩">
    <meta name="author" content="光Guand">

    <title>Guand.me</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>


    <!-- Add mousewheel plugin (this is optional) -->
	<script src="fancybox/lib/jquery.mousewheel-3.0.6.pack.js"></script>
	<!-- Add fancyBox -->
	<link href="fancybox/source/jquery.fancybox.css" type="text/css" media="screen" rel="stylesheet">
	<script src="fancybox/source/jquery.fancybox.pack.js"></script>
	<link href="fancybox/source/helpers/jquery.fancybox-buttons.css" rel="stylesheet">
	<script src="fancybox/source/helpers/jquery.fancybox-buttons.js" type="text/css" media="screen"></script>
	<script src="fancybox/source/helpers/jquery.fancybox-media.js"></script>
	<link href="fancybox/source/helpers/jquery.fancybox-thumbs.css" type="text/css" media="screen" rel="stylesheet">
	<script src="fancybox/source/helpers/jquery.fancybox-thumbs.js"></script>
</head>
<body>

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" >
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="https://guand.me">Guand.me</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="https://guand.me">部落格</a>
                    </li>
                    <li>
                        <a href="https://guand.me">風的城市：新竹</a>
                    </li>
                    <li>
                        <a href="https://guand.me">作品集</a>
                    </li>
                    <li>
                        <a href="https://guand.me">與我聯絡</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>


    <div class="content_title">
        <h1>作品集</h1>
        <p>2013-2016 大學時期的海報設計一覽。</p>
		
        <div id="works_display">
	    	<h3 style="">Create For My Club</h3>
	    	<div class="row">
		<?php for ($pi=0; $pi < 6; $pi++){ ?>
			<a href="https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi<?php  echo $pi+1; ?>.jpg" class="img-thumbnail fancybox-thumb" rel="fancybox-thumb"><img src="img/works/pi<?php  echo $pi+1; ?>.jpg"></a>
		<?php }; ?>	
		<?php for ($ai=0; $ai < 13; $ai++){ ?>
			<a href="https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai<?php  echo $ai+1; ?>.jpg" class="img-thumbnail fancybox-thumb" rel="fancybox-thumb"><img src="img/works/ai<?php  echo $ai+1; ?>.jpg"></a>
		<?php }; ?>
			</div>
			<br>

			<h3>For Case</h3>
	    	<div class="row">
    	<?php for ($case=0; $case < 2; $case++){ ?>
    		<a href="https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case<?php  echo $case+1; ?>.jpg" class="img-thumbnail fancybox-thumb" rel="fancybox-thumb"><img src="img/works/case<?php  echo $case+1; ?>.jpg"></a>
    	<?php }; ?>	
			</div>
	    </div>  
	    <br>
	    <br>
	    <br>
	    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/tw/"><img alt="創用 CC 授權條款" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/3.0/tw/88x31.png" /></a><br />本<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/StillImage" rel="dct:type">著作</span>由<a xmlns:cc="http://creativecommons.org/ns#" href="https://guand.me" property="cc:attributionName" rel="cc:attributionURL">Guand</a>製作，以<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/tw/">創用CC 姓名標示-非商業性-相同方式分享 3.0 台灣 授權條款</a>釋出。
    </div>


    <!-- Script to Activate the Carousel -->
    <script>

    $(document).ready(function() {

		$(".fancybox-thumb").fancybox({
			prevEffect	: 'none',
			nextEffect	: 'none',
			helpers	: {
				title	: {
					type: 'outside'
				},
				thumbs	: {
					width	: 50,
					height	: 50
				}
			}
		});

	});


    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-48330157-3', 'auto');
    ga('send', 'pageview');

    </script>   

</body>

</html>
