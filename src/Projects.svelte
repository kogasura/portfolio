<script>
    let projects = [
        {
            title: "Strategik INC",
            description: "The awesome guys at Strategik INC were superb to work with because they knew their goals exactly.",
            imageUrl: "./img/work-strategik.jpg",
            altText: "Strategik INC",
            category: "Web Design"
        },
        {
            title: "Ēostre UI Kit",
            description: "Ēostre UI Kit is made following the latest design trends with focus on usability and fast workflow.",
            imageUrl: "./img/work-eostre.jpg",
            altText: "Ēostre UI Kit",
            category: "Web Design"
        },
        {
            title: "Go Outside",
            description: "Quick concept for a fictitious wildlife exploration app. Grab the PSD and start your own exploration.",
            imageUrl: "./img/work-go-outside.jpg",
            altText: "Go Outside App",
            category: "App Design"
        }
    ];
</script>

<section id="work" class="work">
    <h2 class="work__heading title">Latest Projects</h2>
    <div class="work__wrapper wrapper--large">
        <ul class="work__list">
            {#each projects as {title, description, imageUrl, altText, category}, index}
                <li class="work__list-el {index === 0 ? 'work__list-el--is-active' : ''}">
                    <div class="work__content">
                        <div class="work__content-blurb blurb blurb--framed">
                            <h3 class="blurb__heading">{title}<br>{category}</h3>
                            <p class="blurb__copy">{description}</p>
                        </div>
                        <a class="transform-link" href="#0">See full project</a>
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
