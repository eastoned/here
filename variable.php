<DOCTYPE HTML>
<html>
	<head>
    	<style>
    		h1{
    			
    			color: #834b87;
    			background-color: white;
    			font-family:courier;
    			border: none;
    			font-size: 30px;
    			white-space: nowrap;
    		}
    		h2{
    			color: #834b87;
    			background-color: white;
    			font-family:courier;
    			border: none;
    			font-size: 15px;
    		}

    		p{
    			color: #834b87;
    			font-size: 30px;
    		}

    	</style>
	</head>
	<body>

		<h1>
		<?php
			$_myFile = "logins.txt";
			echo $_POST["info"];
			$_ourHandle = fopen($_myFile, 'r');
			echo fread($_ourHandle, filesize("logins.txt"));
			fclose($_ourHandle);
		?>
		</h1>

		<?php 
			$handle = fopen($_myFile, 'a');
			$entry = $_POST["info"];
			fwrite($handle, $entry);
			fclose($handle);
		?>		
			
	</body>
</html>
