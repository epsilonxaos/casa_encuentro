export const generarId = (tamano: number = 5): string => {
	const caracteresPermitidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let idGenerado = "";
	for (let i = 0; i < tamano; i++) {
		const caracterAleatorio = caracteresPermitidos.charAt(Math.floor(Math.random() * caracteresPermitidos.length));
		idGenerado += caracterAleatorio;
	}
	return idGenerado;
}

export const hexToRgba = (hex: string = '#000', alpha: number = 1.0): string => {
	// Comprobamos si el valor de alpha está en el rango válido (0 a 1)
	if (alpha < 0 || alpha > 1) {
		throw new Error('El valor alpha debe estar entre 0 y 1.');
	}

	// Eliminamos el carácter "#" si está presente
	hex = hex.replace(/^#/, '');

	// Comprobamos si el valor HEX es válido
	if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) {
		throw new Error('El valor HEX proporcionado no es válido.');
	}

	// Expresamos el valor HEX en formato largo si es corto
	if (hex.length === 3) {
		hex = hex
			.split('')
			.map(function (s) {
				return s + s;
			})
			.join('');
	}

	// Convertimos el valor HEX a RGB
	const bigint = parseInt(hex, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	// Devolvemos el valor RGBA
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function slugify(text: string): string {
	return text
		.toLowerCase() // Convertimos el texto a minúsculas
		.replace(/\s+/g, '-') // Reemplazamos los espacios en blanco con guiones
		.replace(/[^\w-]+/g, '') // Eliminamos caracteres especiales
		.replace(/--+/g, '-'); // Reemplazamos múltiples guiones seguidos con uno solo
}