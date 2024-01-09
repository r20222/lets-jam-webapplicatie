<script>
    export let data
    export let text
</script>

<!-- was box-1 -->
<section class="trash-removed-total-box">
    <h2>{new Intl.NumberFormat().format(data.debris_extracted_total)} KG</h2>
    <p>{text.dashboard.trashRemoved.total}</p>
</section>

<!-- was box-2 -->
<section class="trash-removed-last-month">
    <h2>{new Intl.NumberFormat().format(data.debris_extracted_last_30d)} KG</h2>
    <p>{text.dashboard.trashRemoved.month}</p>
</section>

<style>
    section {
        border-radius: .5rem;
        padding: 1.5rem;
        background-color: var(--trashRemovedBackground);
        box-shadow: var(--boxShadow) 0px 0px 8px;
        transition: .2s;
        /* border: 20px solid var(--lightBlue) */
    }
    .trash-removed-total-box {
        grid-area: trash-removed-total-box;
    }

    .trash-removed-last-month {
        grid-area: trash-removed-last-month;
    }
</style>