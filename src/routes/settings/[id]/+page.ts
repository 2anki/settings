export const csr = true;

export const prerender = false;

export function load({ params }) {
	return {
		isGlobal: params.id === 'global'
	};
}
