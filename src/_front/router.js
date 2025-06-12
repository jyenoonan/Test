import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"e66fefdc-09f6-4e38-995d-c8e1cbda74bc","homePageId":"161bc631-1ff1-4098-9d3e-e677a9ca4c2d","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"51d93191-1182-4b3b-b1f3-c5fa270735a7","linkId":"51d93191-1182-4b3b-b1f3-c5fa270735a7","name":"Pop-up","folder":null,"paths":{"en":"combobox","default":"combobox"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"6b243241-8da1-4514-bdec-3b94210cb265","sectionTitle":"Content","linkId":"3afde260-aa4b-4dc8-90a3-5089e3b13901"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d9987fc2-1786-4d54-9e84-f61b77a1f7c2","linkId":"d9987fc2-1786-4d54-9e84-f61b77a1f7c2","name":"Chat","folder":null,"paths":{"en":"chat","default":"chat"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"ca49c337-38e1-4543-836c-fb4edbd56694","sectionTitle":"Content","linkId":"f47ad218-5a26-4fcc-ae87-15ea8404d69b"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b02bb73c-e839-4933-8399-37b08b2d47c1","linkId":"b02bb73c-e839-4933-8399-37b08b2d47c1","name":"Badge","folder":null,"paths":{"en":"badge","default":"badge"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"4a3d352d-3479-43e1-b4f3-a98de97b047a","sectionTitle":"Content","linkId":"de326c83-a391-418c-9a15-5d58d8ad9301"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a7cede1e-441e-4fdc-b327-5efcefb37c98","linkId":"a7cede1e-441e-4fdc-b327-5efcefb37c98","name":"Dropdown Menu","folder":null,"paths":{"en":"dropdown-menu","default":"dropdown-menu"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"68e893f4-3e44-4fb1-9c12-85b633fe125e","sectionTitle":"Content","linkId":"e6d6df3c-8958-493d-9c88-08451f019672"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"7d484533-ddb8-4d01-80f0-fdb2e157a9c0","linkId":"7d484533-ddb8-4d01-80f0-fdb2e157a9c0","name":"Accordion","folder":null,"paths":{"en":"accordion","default":"accordion"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"e7f4c0f2-b8cb-4817-a566-dd9f2fcb1561","sectionTitle":"Content","linkId":"e44b7eab-9290-41cb-8fd8-4b660a4bb547"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a27110ee-9b7a-4d06-a3cb-b910cdf80462","linkId":"a27110ee-9b7a-4d06-a3cb-b910cdf80462","name":"Card","folder":null,"paths":{"en":"card","default":"card"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"fb0d90f0-4219-4712-9163-77e14354778e","sectionTitle":"Content","linkId":"03af46e0-7cf0-4f17-8bf5-6388ce158f10"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4af056ef-b073-4cba-a150-0b5aa6f11b15","linkId":"4af056ef-b073-4cba-a150-0b5aa6f11b15","name":"Typography","folder":"Styles/","paths":{"en":"typography","default":"typography"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"6d64ea1a-2042-4437-9d67-1e9f8e71fd84","sectionTitle":"Content","linkId":"55f7110c-5ade-411e-bab8-e95bce4eea71"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"303c05a3-13af-4fba-848a-a680029dcff3","linkId":"303c05a3-13af-4fba-848a-a680029dcff3","name":"Button","folder":null,"paths":{"en":"button","default":"button"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"59d12c5f-fd61-4699-9b31-7fd1c89bf94f","sectionTitle":"Content","linkId":"6e654555-f221-49bc-a42e-9bd9adc90731"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b4056a64-4ff7-434a-a3c6-dc16eb65adb6","linkId":"b4056a64-4ff7-434a-a3c6-dc16eb65adb6","name":"Form Builder","folder":null,"paths":{"en":"form-builder","default":"form-builder"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"8ff15d42-e76e-46d1-a9c2-7c0d9db326ec","sectionTitle":"Content","linkId":"da6fb060-f853-4b09-aca1-0ad6c0304c2e"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e76952ca-0e76-4767-a565-4e90f1451635","linkId":"e76952ca-0e76-4767-a565-4e90f1451635","name":"Steps","folder":null,"paths":{"en":"steps","default":"steps"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"03537b7f-2289-4fc1-8ad2-b6ad25903fe5","sectionTitle":"Content","linkId":"fa48bb4a-dfe7-43b1-b276-24d2707eda44"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ca2aa6fd-f4e2-4081-b8b3-6baa02220666","linkId":"ca2aa6fd-f4e2-4081-b8b3-6baa02220666","name":"Tabs","folder":null,"paths":{"en":"tabs","default":"tabs"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"1d41d32c-d368-460b-bc66-96cc7b43bc13","sectionTitle":"Content","linkId":"a0f85dea-32db-44ee-8825-430ed93e7ea5"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"161bc631-1ff1-4098-9d3e-e677a9ca4c2d","linkId":"161bc631-1ff1-4098-9d3e-e677a9ca4c2d","name":"Introduction","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"2158a7e3-bff5-41d1-8ff7-4c890716413a","sectionTitle":"Content","linkId":"99d8f30b-98b4-4294-8eb4-4a8ba774b46d"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a2d6bb4a-7cdb-462a-af76-400204b97de2","linkId":"a2d6bb4a-7cdb-462a-af76-400204b97de2","name":"Counter","folder":null,"paths":{"en":"up-down-voting","default":"up-down-voting"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"dbb413bf-d531-4dfd-8357-81e10c3a2907","sectionTitle":"Content","linkId":"fd53450e-219b-474b-87a0-f5442f6b9898"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"38a4bba4-3750-4636-a1b6-c3994c9f235f","linkId":"38a4bba4-3750-4636-a1b6-c3994c9f235f","name":"Avatar","folder":null,"paths":{"en":"avatar","default":"avatar"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"4865b7c6-1e5d-401e-ae5c-e25d0565c8dd","sectionTitle":"Content","linkId":"5bf8a1b7-95c2-4008-b612-2752fdee5b22"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"aa5ed72c-7406-4555-8056-d40bb460f575","linkId":"aa5ed72c-7406-4555-8056-d40bb460f575","name":"Radio Group","folder":null,"paths":{"en":"radio-group","default":"radio-group"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"01ae7c48-1d99-420f-914f-201ee08243e5","sectionTitle":"Content","linkId":"9957bedd-f145-43de-b033-84270eaadce2"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"eefd7e06-d4e1-4050-9fe7-6a4acb13bfaa","linkId":"eefd7e06-d4e1-4050-9fe7-6a4acb13bfaa","name":"Colors","folder":"Styles/","paths":{"en":"colors","default":"colors"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"ede3b0d0-74f3-4906-ac23-61da5d033556","sectionTitle":"Content","linkId":"73674561-b651-4c52-a936-237b8f547621"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"7c94a739-1631-4c03-a7bb-9dfd8a3d1c2e","linkId":"7c94a739-1631-4c03-a7bb-9dfd8a3d1c2e","name":"Form Input","folder":null,"paths":{"en":"form-input","default":"form-input"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee3d599-f5bc-412d-83be-f3e036e06820","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"44e448ef-8f93-4ed7-aa0c-9632cfca3d30","sectionTitle":"Content","linkId":"5b395aba-9e78-44ba-9edc-edb8cc79fba1"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 25;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes( //TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
