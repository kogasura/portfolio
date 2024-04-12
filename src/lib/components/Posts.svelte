<script lang="ts">
    import { client } from '$lib/utils/microcms-client';
        type Post = {
        img: string;
        alt: string;
        title: string;
        excerpt: string;
        link: string;
    };
    let posts: Post[] = [];

    // 非同期関数を定義して、その中でawaitを使用します
    async function loadPosts() {
        const res = await client.get({
            endpoint: 'blogs',
        });

        posts = res.contents.map((item: any) => ({
                    img: item.eyecatch.url,
                    alt: "画像の説明", // この例では静的な文字列を使用していますが、適宜変更してください
                    title: item.title,
                    excerpt: truncateText(stripHtml(item.content), 100), // HTMLを除去し、100文字で切り詰める
                    // link: "/blog/" + item.id // 実際のリンクに置き換える必要があります
                }));
    }

    function stripHtml(html: string): string {
        return html.replace(/<[^>]*>?/gm, '');
    }

    function truncateText(text: string, length: number): string {
        return text.length > length ? text.substring(0, length) + "..." : text;
    }

    // コンポーネントのマウント時にloadPostsを呼び出します
    loadPosts();
</script>

<section id="blog" class="blog">
    <h2 class="blog__heading title">Blog Posts</h2>
    <div class="blog__wrapper wrapper--large">
        {#each posts as {img, alt, title, excerpt, link}}
        <article class="blog__post">
            <div class="blog__post-thumbnail">
                <img src={img} alt={alt}>
            </div>
            <div class="blog__post-excerpt">
                <h3>{title}</h3>
                <p>{excerpt}</p>
                <a class="transform-link" href={link}>Read full article</a>
            </div>
        </article>
        {/each}
    </div>
    <div class="blog__view-more">
        <a class="button blog__view-more--el" href="/">View More</a>
    </div>
</section>
