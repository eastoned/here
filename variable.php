<DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="refresh" content=".1">
    	<style>
    		@font-face{
				font-family: fancy;
    			src: url(font.ttf);
			}

    		h1{
    			letter-spacing: 3px;
    			font-family: fancy;
    			color: #160d1c;
    			background-color: white;
    			border: none;
    			font-size: 70px;
    		}

    	</style>
	</head>
	<body>

		<?php 
			$_myFile = "logins.txt";
			
			$state = $_GET["info"];
			
			$date = $_GET["date"];

			$handle = fopen($_myFile, 'a');
			
			fwrite($handle, $state);
			fclose($handle);

			$entry = $date;
			$handle = fopen($_myFile, 'a');
			if($entry != 0){
				fwrite($handle, "<span style='color: #f5f2f7;'>");
				fwrite($handle, $entry);
				fwrite($handle, "</span>");
			}
			fclose($handle);
		?>

		<h1>
		<?php
			$_ourHandle = fopen($_myFile, 'r');
			echo fread($_ourHandle, filesize("logins.txt"));
			fclose($_ourHandle);
		?>
		</h1>
	</body>
</html>
