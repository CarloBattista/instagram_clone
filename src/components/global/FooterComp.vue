<template>
    <div class="footer">
        <ul class="footer_nav">
            <li class="foo_link">
                <a href="#" target="_blank">Meta</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Informazioni</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Blog</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Lavora con noi</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Aiuto</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">API</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Privacy</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Condizioni</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Luoghi</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Instagram Lite</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Threads</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Caricamento dei contatti e non-utenti</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Meta Verified</a>
            </li>
        </ul>
        <div class="footer_copy">
            <p class="copyright">&copy; 2024 instagram from meta</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComp"
}
</script>

<style scoped>
.footer {
    position: relative;
    left: 244px;
    width: calc(100% - 244px);
    padding: 0 16px;
    margin-top: 40px;
}

.footer_nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.foo_link{
    margin: 0 8px 12px;
}

.foo_link a {
    color: rgb(168, 168, 168);
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
}

.foo_link a:hover {
    text-decoration: underline;
}

.footer_copy{
    width: 100%;
    margin: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.copyright {
    color: rgb(168, 168, 168);
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
}

/* Media Query's */
@media only screen and (max-width: 1260px) {
    .footer {
        left: 72px;
        width: calc(100% - 72px);
    }
}

@media only screen and (max-width: 767px) {
    .footer {
        display: none;
    }
}
</style>