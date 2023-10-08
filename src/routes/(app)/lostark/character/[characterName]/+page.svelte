<script>
    import {page} from "$app/stores";

    export let data;
    let {characters} = data;
    $: ({characters} = data);

    let urlCharacterName = decodeURI($page.url.pathname.split('/')[3]);
    $: urlCharacterName = decodeURI($page.url.pathname.split('/')[3]);

    const imageUrl = "/src/lib/assets/images/";
</script>


<div class="container flex flex-col items-center justify-center mx-auto">
    <div class="grid gap-3 p-3 sm:grid-cols-2">
        {#each characters as character}
            <div class="flex flex-row rounded-md w-[350px] mb-2 {urlCharacterName === character.CharacterName ? 'border-l-2 border-pink-300' : 'border-l-2 border-pink-100'}">
                <a href="/lostark/character/{character.CharacterName}"
                   class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                        <div class="relative block">
                            <img alt="{ character.CharacterClassName }"
                                 src="{imageUrl}{character.CharacterClassName}.png"
                                 class="mx-auto object-cover rounded-full h-10 w-10 "/>
                        </div>
                    </div>
                    <div class="flex-1 pl-1 md:mr-16">
                        <div class="font-medium dark:text-white">
                            { character.CharacterName }
                        </div>
                        <div class="text-sm text-gray-600 dark:text-gray-200">
                            { character.CharacterClassName } | { character.ItemAvgLevel.replace(",", "") }
                        </div>
                    </div>
                    <div class="text-xs text-gray-600 dark:text-gray-200">
                        { character.CharacterLevel }
                    </div>
                </a>
            </div>
        {/each}
    </div>
</div>
