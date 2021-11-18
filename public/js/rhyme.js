		$(document).ready(function(){

			var nurseryRhymeTemplate = Handlebars.compile(
				$('#nurseryRhymeTemplate').html());

			var $nurseryRhyme = $('#nurseryRhyme');

			$('#btnNurseryRhyme').on('click', function(evt){
				evt.preventDefault();
				$nurseryRhyme.html(nurseryRhymeTemplate({
					animal: 'basilisk',
					bodyPart: 'tail',
					adjective: 'sharp',
					noun: 'a needle'
				}));
			});

			$('#btnNurseryRhymeAjax').on('click', function(evt){
				evt.preventDefault();
				$.ajax('/data/rhyme', {
					success: function(data){
						$nurseryRhyme.html(nurseryRhymeTemplate(data))
					}
				});
			});

		});

