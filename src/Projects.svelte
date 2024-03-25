<script>
    let projects = [
        {
            title: "Memo2L",
            description: "リマインダー機能を兼ね備えたLINEと連携したメモアプリです。",
            imageUrl: "./img/memo2l.png",
            altText: "Memo2L",
            url: "https://memo2l.site/"
        },
        {
            title: "solota",
            description: "インターンのマッチングアプリ",
            imageUrl: "./img/solota.png",
            altText: "solota",
            url: "https://solota.jp/"
        },
        {
            title: "エクセルの動作が重いのを回避アプリ",
            description: "大量のデータを含むエクセルで、検索ができなくなってしまった。との要望から開発しました。",
            imageUrl: "./img/excel-app.png",
            altText: "エクセルアプリ",
        }
    ];
</script>

<section id="work" class="work">
    <h2 class="work__heading title">Latest Projects</h2>
    <div class="work__wrapper wrapper--large">
        <ul class="work__list">
            {#each projects as {title, description, imageUrl, altText, category, url}, index}
                <li class="work__list-el {index === 0 ? 'work__list-el--is-active' : ''}">
                    <div class="work__content">
                        <div class="work__content-blurb blurb blurb--framed">
                            <h3 class="blurb__heading">{title}</h3>
                            <p class="blurb__copy">{description}</p>
                        </div>
                        {#if url}
                            <a class="transform-link" href="{url}" target="_blank" rel="noopener noreferrer">See full project</a>
                        {/if}
                    </div>
                    <div class="work__visual">
                        <img src="{imageUrl}" alt="{altText}">
                    </div>
                </li>
            {/each}
        </ul>
        <ul class="work__navigation">
            {#each projects as _, index}
                <li class="work__navigation-el {index === 0 ? 'work__navigation-el--is-active' : ''}"></li>
            {/each}
        </ul>
    </div>
</section>
