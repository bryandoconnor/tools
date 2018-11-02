		<script src="countdown.js"></script>
		<script>
			var callbackfunction = function(){
				console.log('Done!');
			}
			countdown('10/31/2017 12:00:00 AM', ['days', 'hours', 'minutes','seconds'], callbackfunction);
		</script>