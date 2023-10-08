<script>
    import "../../app.css";
    import pomi from "$lib/assets/images/pomi.png";
    import lostarkIcon from "$lib/assets/images/lostarkIcon.png";
    import mapleIcon from "$lib/assets/images/mapleIcon.png";
    import communityIcon from "$lib/assets/images/communityIcon.png";
    import newsIcon from "$lib/assets/images/newsIcon.png";
    import { page } from "$app/stores";
    import { goto } from '$app/navigation';

    /**
     * @type {string}
     */
    let characterName = "";

    /**
     * @param event {KeyboardEvent}
     */
    function searchCharacter(event) {
        if(event.key === 'Enter'){
            goto('/lostark/character/' + characterName);
            characterName = "";
        }
    }
</script>
<main class="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
    <div class="flex items-start justify-between">
        <!-- 사이드바 영역(Nav bar) -->
        <div class="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-72">
            <div class="h-full bg-white rounded-2xl dark:bg-gray-700">
                <div class="flex items-center justify-center pt-6">
                    <a href="/"><img style="width: 75px; height: 70px;" src={pomi} alt="HOME"/></a>
                </div>
                <nav class="mt-6">
                    <div>
                        <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 transition-colors duration-200
                            {$page.url.pathname.indexOf('/lostark') === 0 ? 'border-r-4 border-pink-300 bg-gradient-to-r from-white to-pink-100' : ''}
                            dark:text-gray-200 hover:text-pink-300" href="/lostark">
                            <span class="text-left">
                                <img width="25" height="25" src={lostarkIcon} alt="LostArk"/>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                LostArk
                            </span>
                        </a>
                        <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 transition-colors duration-200
                            {$page.url.pathname.indexOf('/maple') === 0 ? 'border-r-4 border-pink-300 bg-gradient-to-r from-white to-pink-100' : ''}
                            dark:text-gray-200 hover:text-pink-300" href="/maple">
                            <span class="text-left">
                                <img width="25" height="25" src={mapleIcon} alt="MapleStroy"/>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                MapleStory
                            </span>
                        </a>
                        <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 transition-colors duration-200
                            {$page.url.pathname.indexOf('/community') === 0 ? 'border-r-4 border-pink-300 bg-gradient-to-r from-white to-pink-100' : ''}
                            dark:text-gray-200 hover:text-pink-300" href="/community">
                            <span class="text-left">
                                <img width="25" height="25" src={communityIcon} alt="community"/>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                Communities
                            </span>
                        </a>
                        <a class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200
                            {$page.url.pathname.indexOf('/news') === 0 ? 'border-r-4 border-pink-300 bg-gradient-to-r from-white to-pink-100' : ''}
                            dark:text-gray-200 hover:text-pink-300" href="/news">
                            <span class="text-left">
                                <img width="25" height="25" src={newsIcon} alt="news"/>
                            </span>
                            <span class="mx-4 text-sm font-normal">
                                News
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <!-- 사이드바 영역(Nav bar) 끝 -->
        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <!-- 상단 검색바 영역(header bar) -->
            <header class="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
                <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div class="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                        <div class="container relative left-0 z-50 flex w-3/4 h-auto">
                            <div class="relative flex items-center w-full h-full group">
                                <div class="absolute z-50 items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                    <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                                <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                    </path>
                                </svg>
                                <!-- 검색바 input -->
                                <input bind:value={characterName} on:keyup={(e) => searchCharacter(e)} type="search" name="search" class="block w-96 py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-200 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="캐릭터 검색"/>
                                <!-- 검색바 input 끝 -->
                            </div>
                        </div>
                        <div class="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                            <a href="/login" class="relative block">
                                LOGIN
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <!-- 상단 검색바 영역(header bar) 끝 -->
            <slot />
        </div>
    </div>
</main>
