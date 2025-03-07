/**
 * Utils function for Profile Block
 */

export const onSelectImage = image => {
	setAttributes({
		profileImgURL: image.url,
		profileImgID: image.id,
		profileImgALT: image.alt,
	})
};

export const onRemoveImage = image => {
	setAttributes({
		profileImgURL: image.url,
		profileImgID: image.id,
		profileImgALT: image.alt
	});
};


