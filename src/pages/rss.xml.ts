import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
    const posts = await getCollection("blog");

    return rss({
        site: context.site!,
        title: "Luis' blog",
        description: "i might use this blog one day",
        items: posts.map((post: any) => ({
            link: `/blog/${post.slug}`,
            title: post.data.title,
            pubDate: post.data.date,
            content: post.body,
        })),
        customData: "<language>en-us</language>",
        trailingSlash: false,
    })
}