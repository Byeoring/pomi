<script>
    import pomi from "$lib/assets/images/pomi.png";
</script>
<header class="container">
    <nav>
        <ul>
            <li>
                <a href="/" class="contrast">
                    <img style="width: 75px; height: 70px;" src={pomi} alt="HOME"/>
                </a>
            </li>
        </ul>
        <ul>
            <li><a href="/lostark" class="secondary">LostArk</a></li>
            <li><a href="/maple" class="secondary">MapleStory</a></li>
            <li><a href="/community" class="secondary">Communities</a></li>
            <li><a href="/news" class="secondary">News</a></li>
        </ul>
        <ul>
            <li><a href="/login" class="secondary">Login</a></li>
        </ul>
    </nav>
    <hr/>
</header>

<slot />

<footer class="container">
    <hr/>
    <strong>Version 0.0.1</strong>
</footer>