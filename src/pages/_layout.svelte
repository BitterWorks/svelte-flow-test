<script>
    import {isActive, url, page, metatags} from '@roxi/routify';
    import { NotificationDisplay } from '@beyonk/svelte-notifications';	
	let n;

    $: metatags.title = `Frutapp | ${$page.title}`;
    
</script>

<NotificationDisplay bind:this={n} />
<nav class="container-fluid">
    <ul>
    <li><strong id="navTitle">Frutapp</strong></li>
    </ul>
    <ul>
    <li><a class:secondary={!$isActive('./index')} href={$url('./index')}>Home</a></li>
    <li><a class:secondary={!$isActive('./about')} href={$url('./about')}>About</a></li>
    </ul>
</nav>

<slot>
</slot>