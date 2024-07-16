import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { sayHello } from '$lib/functions/hello';

export const GET: RequestHandler = async () => {
	const obj = sayHello();
	return json(obj);
};

export const POST: RequestHandler = async ({ request }) => {
	const data: { name: string } = await request.json();

	return json({ msg: 'Hello, ' + data.name });
};
