// import type { Handle } from '@sveltejs/kit';
// import { sequence } from '@sveltejs/kit/hooks';

// export const preloadTheme: Handle = async ({ event, resolve }) => {
//     const theme = event.cookies.get('theme');
//     if (!theme) {
//         return await resolve(event);
//     }

//     const response = await resolve(event, {
//         transformPageChunk: ({ html }) => {
//             return html.replace(
//                 '/%theme%/g',
//                 `data-theme="${theme}"`
//             );
//         }
//     });
//     return response;
// }

// export const handle = sequence(preloadTheme);