(function( $ ) {

	$.fn.SmartPlaceholders = function( options ) {

		var settings = $.extend({

			placeholderClass		: 'smart-placeholder',
			fieldWrapperClass		: 'smart-placeholder-wrapper',
			populatedClass			: 'populated',
			focusedClass				: 'focused'

		});
		
		return this.each(function() {

			var element = $(this),
					placeholderText = element.attr('placeholder'),
					template = '<span class="' + settings.placeholderClass + '">' + placeholderText + '</span>';

			element.wrap('<div class="' + settings.fieldWrapperClass + '"></div>');

			element.before( template );

			element.on('keydown', function(){
				element.parent( '.' + settings.fieldWrapperClass ).addClass( settings.populatedClass );
			});

			element.on('focus', function(){
				element.parent( '.' + settings.fieldWrapperClass ).addClass( settings.focusedClass );

				if( element.val() ){
					element.parent( '.' + settings.fieldWrapperClass ).addClass( settings.populatedClass );
				} else {
					element.parent( '.' + settings.fieldWrapperClass ).removeClass( settings.populatedClass );
				}

			});

			element.on('blur', function(){
				element.parent( '.' + settings.fieldWrapperClass ).removeClass( settings.focusedClass );

				if( element.val() ){
					element.parent( '.' + settings.fieldWrapperClass ).addClass( settings.populatedClass );
				} else {
					element.parent( '.' + settings.fieldWrapperClass ).removeClass( settings.populatedClass );
				}

			});

		});

	};

}( jQuery ));