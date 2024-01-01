import { postsByCategory } from '$lib/server/posts';

export const load = async ({ params }) => {
    const { name } = params;
    const posts = postsByCategory(name);

    return { posts };
};