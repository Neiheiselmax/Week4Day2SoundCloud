$('#search').submit(function(e){
	e.preventDefault();
	var name = $('#input').val();
	var url =`https://api.soundcloud.com/tracks/?q=${name}&client_id=03e4633e2d85874a921380e47cac705d`;
	$('.results').html('');
	$('.input').val('');

	$.ajax({url: url,
	success:function(response){
		console.log(response)
		response.forEach(function(song){
		console.log(song)
		$('.results').append( `
				<div class="row">
				<div class="divide col-md-2 data">
				<img class="art" src=${song.artwork_url}/>
				</div>
				<div class="col-md-9">
				<input type="image" data-id="${song.id}" src="/images/play.PNG" value="">
				<h3 id="name">${song.title}</h3>
				<h3 id="name">${song.tag_list}</h3>
				</div>
				</div>
				`);

 })
}})
})

$("body").on("click",'input',function(){
  let data = $(this).data('id');
	var string = `http://api.soundcloud.com/tracks/${data}/stream?client_id=03e4633e2d85874a921380e47cac705d`
$("audio").attr("src",string);

})

