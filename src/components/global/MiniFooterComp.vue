<template>
    <div class="footer">
        <ul class="footer_nav">
            <li class="foo_link">
                <a href="#" target="_blank">Informazioni</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Aiuto</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Stampa</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">API</a>
            </li>
            <li class="foo_link">
                <a href="#" target="_blank">Lavora con noi</a>
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
                <a href="#" target="_blank">Lingua</a>
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
        name: "MiniFooterComp"
    }
</script>

<style scoped>
.footer{
    position: relative;
    width: 100%;
    padding: 0 16px;
    margin-top: 40px;
}

.footer_nav{
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
}

.foo_link::after{
    color: rgb(115, 115, 115);
    content: '\00B7';
    margin: 0 .25em 0 .25em;
}

.foo_link:last-child::after{
    display: none;
}

.foo_link a{
    color: rgb(115, 115, 115);
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
}

.foo_link a:hover {
    text-decoration: underline;
}

.copyright{
    color: rgb(115, 115, 115);
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
}
</style>