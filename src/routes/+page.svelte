<script>
	// export let name;
    import ProjectCards from '$lib/components/ProjectCards.svelte';
    import Posts from '$lib/components/Posts.svelte';
</script>

<!-- このファイルは変更を加えることはほぼ無い。ページ上部のコンポーネント。 -->
<div class="splashscreen">
    <div class="preloader">
        <span class="preloader__text">Loading</span>
    </div>
</div>
<!-- END SECTION: Splashscreen -->
<!-- SECTION: Navigation -->
<div id="top" class="navigation">
    <div class="navigation__wrapper wrapper--large">
        <nav class="navigation__container">
            <ul class="navigation__list">
                <li><a href="#home">Home</a></li>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <div class="navigation__burger">
            <span class="navigation__burger-el navigation__burger-el--top"></span>
            <span class="navigation__burger-el navigation__burger-el--middle"></span>
            <span class="navigation__burger-el navigation__burger-el--bottom"></span>
        </div>
    </div>
</div>
<header class="header" id="home">
    <div class="introduction">
        <h1 class="introduction__content">
            <span class="introduction__content-el introduction__content-el--name">Yuuki Okubo</span>
            <span class="introduction__content-el introduction__content-el--description">portfolio</span>
            <span class="introduction__content-el introduction__content-el--job">Web  developer</span>
        </h1>
        <svg class="introduction__arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 130 65" xml:space="preserve" enable-background="new 0 0 130 65"><g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)"><path d="M22.2 634c-50-35-40-47 293-349 174-157 323-285 333-285 24 0 635 552 647 585 8 23 6 30-14 46 -13 10-31 19-40 19s-57-37-107-83c-50-45-179-162-287-260l-197-179 -147 134c-319 289-433 388-446 388C50.2 650 34.2 643 22.2 634z"/></g></svg>
    </div>
</header>


<main>
	<ProjectCards></ProjectCards>
    <Posts></Posts>

	.<section id="contact" class="contact">
        <h2 class="contact__heading title">Contact Me</h2>
        <p>twitter(x)までご連絡ください。</p>
    </section>
    <style>
        p {
            color: #1DA1F2; /* Twitterのブルー */
            font-size: 1rem; /* 基本のフォントサイズ */
            text-align: center; /* 中央揃え */
            padding: 1rem 0; /* 上下のパディング */
            margin: 0; /* マージンをなくす */
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* フォントスタイル */
        }
    </style>
</main>

<footer class="footer">
	<div class="footer__wrapper wrapper--large">
		<p class="footer__copyright no-margin">&copy; 2024 yuuki okubo</p>
		<a class="footer__social-link" href="https://twitter.com/yuuki_okubo" target="_blank" rel="noopener noreferrer">
			<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
				<path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
			</svg>
		</a>
		<a class="footer__arrow" href="#top">
			<svg class="footer__arrow-el" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 130 65" xml:space="preserve" enable-background="new 0 0 130 65"><g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)"><path d="M315.4 365c-336-305-345-315-290-351 18-12 32-14 45-8 10 5 145 123 300 262l281 253 196-178c108-98 237-215 287-260 50-46 98-83 107-83s27 9 40 19c20 16 22 23 14 46 -12 33-623 585-647 585C638.4 650 489.4 522 315.4 365z"/></g></svg>
		</a>
	</div>
</footer>