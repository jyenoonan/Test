import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"a89141ed-37fb-43ff-a688-46ecfe617e63":"#000000D9","24a6458a-2dd5-4dd1-bef4-bf53ca6948cd":"#00000040","0e7fbdd3-3f23-4108-936a-87827a71b955":"#00000073","6fa686a6-e70d-4d55-84af-96b8ec33c6b8":"#0000000F","1756f076-a4bd-4651-97e5-fcc1be0100d0":"#000000D9","c73bb194-2269-4dea-ae83-82ee521e2b92":"#00000040","ab252532-8b0d-4d4e-a2af-df772f4608a9":"#FFFFFF","f27983c0-75b2-40cf-8774-1693c7d99477":"#e1e3e5","58e5f20e-44d2-4d32-aaca-b14cc70a254e":"#c2c7ce","0ca5d7ce-5797-4d60-8b5c-31178c2b7573":"#a3acb9","35f22d74-3080-4067-8bd5-24216441fc9d":"#8692a1","175896dc-3038-429c-ab71-2f133864f342":"#6c7888","190d1efa-f6f5-4d66-bbe4-e5253428de95":"#545f6c","df7031b0-505e-41f9-a213-9859ce88457f":"#3f4750","5d3375a4-7806-4aa9-b3dd-49e836ad33d7":"#2a2f34","5253d8bd-5474-4759-9e2a-c62a795ecc76":"#151618","cab111e0-817c-444c-b609-5814c6a6c011":"#e2e2e2","e2f7a185-5105-42b2-9213-d5330c22e696":"#c7c7c7","3ef446f7-8bc7-443b-ba4a-3f875b9424c0":"#ababab","58a4a786-1f2e-45f5-8826-c484378c2dfb":"#919191","be86c6ed-43c7-4ad3-b190-d5a11749ff1d":"#777777","3d6dd895-15fe-4fbc-bd33-1a4b84a1bfb4":"#5e5e5e","24ef8001-10fd-4d9c-82dd-1960625c33ba":"#464646","f3ab3c2b-cdbc-4668-ac5c-5d44ce6979c8":"#2e2e2e","d1e68b03-b3bc-436e-99e0-a3fc3680d19e":"#161616","9e518d43-64cd-4759-9101-22195bd99869":"#f8f8f7","a1affbbf-4ee3-4ae8-8724-b5af817bca10":"#e5e2de","15cc75a7-6511-4920-9898-f4d4cb9e10c0":"#cdc5bc","2cbeb3fd-1bee-4cd8-9edd-da43b1ce2ef9":"#b5aa9c","8ded1ff1-4e3e-4421-912a-4a3e4ede9a45":"#9b8f7f","90be1f55-6ea8-42b5-a6bf-4f42f9fa1af5":"#817566","71cf24ac-48a0-4a0c-b3ac-195aeb63d33c":"#675c50","b58cebde-e6f2-4b28-8719-c3f2e03152ab":"#4c443b","652fd62b-5192-4955-9732-f65cd80c497b":"#322d27","ace393db-2b00-4a16-a383-5433de7deecd":"#181613","20697c4c-e0e7-4840-bb7d-ec4eb9097451":"#d1e4ff","72712dcf-cda0-4c42-999a-80365f5d8e6f":"#a2caff","67b2911e-ed77-4138-8767-05ae31e9b87e":"#6faeff","f5f3489c-862d-4bb7-9c9e-deb75fac15a8":"#3090ff","cbc30cd4-698a-498b-9b5e-416e5c697746":"#0075df","1c33f40e-82ae-450d-8813-65162805e9fd":"#005db1","0413cb65-bb5f-477d-b6f0-e54d3b8f2628":"#004585","3bdb9997-42e8-455c-ae50-6306621d3263":"#002e5b","71cecd97-2793-45dd-ad84-c4841b2258f6":"#001631","c3cf7cfa-dd22-49a3-9b16-284617663cd3":"#f5ddcf","da6de3ef-9ac7-4036-90e0-8a2ee8c6a80c":"#f6b791","df2488a8-a172-4fc1-b116-fbfe4cb4da0c":"#f68c47","015151aa-cdab-4390-a5a4-0df1bfb0ed38":"#de6c0b","ee734952-9e8b-4aaf-91d6-c61471371725":"#b95700","81c005e5-f0ab-4873-a4e0-1b035a128487":"#944403","6b2eb47a-3cac-4515-8f78-6e6c6b00556b":"#6f3207","c84bfeee-0e6b-41ce-869c-df1e0d7adbb9":"#49220a","88039a4a-e9f8-442c-abd4-c217c54b1584":"#231107","8fee00de-a679-46e0-80fe-77c1c0d7dfc7":"#faf8ed","679ce646-918f-49d9-834d-6b054dd032bb":"#f1e3a9","dff19782-497b-43e0-adaf-fb146ba8b69c":"#c8aa19","c6d24cc8-21c3-466f-8cbf-42f61b6afccf":"#8d7500","667e90f5-8aa5-41a9-88ae-109df74330eb":"#544406","833d57e4-2b97-4913-8a4f-91a19d4867af":"#382d07","8f7466c2-77ad-43d4-ada6-b0c245efba1b":"#f4faf3","f97bb36f-aeeb-4f17-86ec-e695882bf1d5":"#c6f0c5","bd6a343c-ec5a-4ff9-b7ac-3e6c195911cc":"#53c954","fa75e2c9-ed41-4344-b99b-f08e37bbf0bb":"#2aad2c","35fcf142-0e7e-41b8-b33f-e557fa7cf253":"#1e7118","1263f9d2-f3f1-4edb-9c18-1b94b21ba76b":"#1a3616","bac6b225-0e28-4189-a3ba-e49df02d7444":"#faf7f7","099cff16-a7e7-43e2-9a64-6c783a249cb3":"#f6efee","445668f9-f8d1-42de-85ba-7f9d3b32305d":"#f3b5b0","e718776a-94d0-4f0e-babd-1ea436ec658a":"#fa444d","051da00a-53df-4be5-a347-b2cd213bdf03":"#af1129","a92e4921-d778-48d3-adc0-36293642ddac":"#4f1a1c","96e8d945-b794-4355-8c00-92d873dd3178":"#e3c645","31bb7bf9-256e-4920-819a-958acff795e8":"#ab8f05","177efe47-615f-418d-9120-6923ede27e26":"#705c03","7b64bd40-5574-4314-ba36-9fdf9121c07f":"#1c1604","fefcd9af-f698-4dc8-a98d-f57d65c42280":"#e6f6e6","1f5ab7fb-54c5-478c-b7d2-259bc7732bf6":"#7ee27f","cf82860d-7389-467e-b0c7-0bceb96689e8":"#009100","4ab6bf17-6d89-44d3-9126-0556bc14b53e":"#23521d","77a4bab2-cb02-41f6-b93e-e67e845235eb":"#0d1a0a","31dba40f-3cbc-427b-9d65-47ab4d2d2041":"#f2dddb","51416342-c161-4e9a-883e-7c1603ef47d3":"#f78580","66ee654e-548f-4356-8c00-12f3543e4201":"#de0030","ffbc94e2-3cf6-4767-9dc9-139288d81d01":"#7e1a23","fe6b08b2-818c-4d37-afbc-432463f2943a":"#241010","9fb26702-3126-45f1-bb3d-e2011bad2d0b":"#f7f1d9","79d5bd39-eeda-42eb-b0cd-feadebd604ae":"#f2f0ef","c219adf1-8bb2-41f5-bbe3-a9c40c8b3416":"#f8f8f8","ae0d56de-13bf-4307-8b4c-ef1f9f83150f":"#f0f1f1","c61c9bb8-1e96-43aa-9781-5b8f03744a04":"#fbf7f4","8e6d6d5e-65aa-4560-966c-deccfad83d40":"#f8efe9","17b40767-5113-45b7-8f5b-8a471e08c1c4":"#f8f8f8","4a675e6e-59ac-4fd0-86f9-83d152a4de81":"#f1f1f1","4f6f257b-8f82-4590-bcaf-775fcd679e15":"#f4f8ff","55060c69-8758-4f0c-a47b-c1ffadfb1eef":"#e8f2ff"} : {"a89141ed-37fb-43ff-a688-46ecfe617e63":"#000000D9","24a6458a-2dd5-4dd1-bef4-bf53ca6948cd":"#00000040","0e7fbdd3-3f23-4108-936a-87827a71b955":"#00000073","6fa686a6-e70d-4d55-84af-96b8ec33c6b8":"#0000000F","1756f076-a4bd-4651-97e5-fcc1be0100d0":"#000000D9","c73bb194-2269-4dea-ae83-82ee521e2b92":"#00000040","ab252532-8b0d-4d4e-a2af-df772f4608a9":"#FFFFFF","f27983c0-75b2-40cf-8774-1693c7d99477":"#e1e3e5","58e5f20e-44d2-4d32-aaca-b14cc70a254e":"#c2c7ce","0ca5d7ce-5797-4d60-8b5c-31178c2b7573":"#a3acb9","35f22d74-3080-4067-8bd5-24216441fc9d":"#8692a1","175896dc-3038-429c-ab71-2f133864f342":"#6c7888","190d1efa-f6f5-4d66-bbe4-e5253428de95":"#545f6c","df7031b0-505e-41f9-a213-9859ce88457f":"#3f4750","5d3375a4-7806-4aa9-b3dd-49e836ad33d7":"#2a2f34","5253d8bd-5474-4759-9e2a-c62a795ecc76":"#151618","cab111e0-817c-444c-b609-5814c6a6c011":"#e2e2e2","e2f7a185-5105-42b2-9213-d5330c22e696":"#c7c7c7","3ef446f7-8bc7-443b-ba4a-3f875b9424c0":"#ababab","58a4a786-1f2e-45f5-8826-c484378c2dfb":"#919191","be86c6ed-43c7-4ad3-b190-d5a11749ff1d":"#777777","3d6dd895-15fe-4fbc-bd33-1a4b84a1bfb4":"#5e5e5e","24ef8001-10fd-4d9c-82dd-1960625c33ba":"#464646","f3ab3c2b-cdbc-4668-ac5c-5d44ce6979c8":"#2e2e2e","d1e68b03-b3bc-436e-99e0-a3fc3680d19e":"#161616","9e518d43-64cd-4759-9101-22195bd99869":"#f8f8f7","a1affbbf-4ee3-4ae8-8724-b5af817bca10":"#e5e2de","15cc75a7-6511-4920-9898-f4d4cb9e10c0":"#cdc5bc","2cbeb3fd-1bee-4cd8-9edd-da43b1ce2ef9":"#b5aa9c","8ded1ff1-4e3e-4421-912a-4a3e4ede9a45":"#9b8f7f","90be1f55-6ea8-42b5-a6bf-4f42f9fa1af5":"#817566","71cf24ac-48a0-4a0c-b3ac-195aeb63d33c":"#675c50","b58cebde-e6f2-4b28-8719-c3f2e03152ab":"#4c443b","652fd62b-5192-4955-9732-f65cd80c497b":"#322d27","ace393db-2b00-4a16-a383-5433de7deecd":"#181613","20697c4c-e0e7-4840-bb7d-ec4eb9097451":"#d1e4ff","72712dcf-cda0-4c42-999a-80365f5d8e6f":"#a2caff","67b2911e-ed77-4138-8767-05ae31e9b87e":"#6faeff","f5f3489c-862d-4bb7-9c9e-deb75fac15a8":"#3090ff","cbc30cd4-698a-498b-9b5e-416e5c697746":"#0075df","1c33f40e-82ae-450d-8813-65162805e9fd":"#005db1","0413cb65-bb5f-477d-b6f0-e54d3b8f2628":"#004585","3bdb9997-42e8-455c-ae50-6306621d3263":"#002e5b","71cecd97-2793-45dd-ad84-c4841b2258f6":"#001631","c3cf7cfa-dd22-49a3-9b16-284617663cd3":"#f5ddcf","da6de3ef-9ac7-4036-90e0-8a2ee8c6a80c":"#f6b791","df2488a8-a172-4fc1-b116-fbfe4cb4da0c":"#f68c47","015151aa-cdab-4390-a5a4-0df1bfb0ed38":"#de6c0b","ee734952-9e8b-4aaf-91d6-c61471371725":"#b95700","81c005e5-f0ab-4873-a4e0-1b035a128487":"#944403","6b2eb47a-3cac-4515-8f78-6e6c6b00556b":"#6f3207","c84bfeee-0e6b-41ce-869c-df1e0d7adbb9":"#49220a","88039a4a-e9f8-442c-abd4-c217c54b1584":"#231107","8fee00de-a679-46e0-80fe-77c1c0d7dfc7":"#faf8ed","679ce646-918f-49d9-834d-6b054dd032bb":"#f1e3a9","dff19782-497b-43e0-adaf-fb146ba8b69c":"#c8aa19","c6d24cc8-21c3-466f-8cbf-42f61b6afccf":"#8d7500","667e90f5-8aa5-41a9-88ae-109df74330eb":"#544406","833d57e4-2b97-4913-8a4f-91a19d4867af":"#382d07","8f7466c2-77ad-43d4-ada6-b0c245efba1b":"#f4faf3","f97bb36f-aeeb-4f17-86ec-e695882bf1d5":"#c6f0c5","bd6a343c-ec5a-4ff9-b7ac-3e6c195911cc":"#53c954","fa75e2c9-ed41-4344-b99b-f08e37bbf0bb":"#2aad2c","35fcf142-0e7e-41b8-b33f-e557fa7cf253":"#1e7118","1263f9d2-f3f1-4edb-9c18-1b94b21ba76b":"#1a3616","bac6b225-0e28-4189-a3ba-e49df02d7444":"#faf7f7","099cff16-a7e7-43e2-9a64-6c783a249cb3":"#f6efee","445668f9-f8d1-42de-85ba-7f9d3b32305d":"#f3b5b0","e718776a-94d0-4f0e-babd-1ea436ec658a":"#fa444d","051da00a-53df-4be5-a347-b2cd213bdf03":"#af1129","a92e4921-d778-48d3-adc0-36293642ddac":"#4f1a1c","96e8d945-b794-4355-8c00-92d873dd3178":"#e3c645","31bb7bf9-256e-4920-819a-958acff795e8":"#ab8f05","177efe47-615f-418d-9120-6923ede27e26":"#705c03","7b64bd40-5574-4314-ba36-9fdf9121c07f":"#1c1604","fefcd9af-f698-4dc8-a98d-f57d65c42280":"#e6f6e6","1f5ab7fb-54c5-478c-b7d2-259bc7732bf6":"#7ee27f","cf82860d-7389-467e-b0c7-0bceb96689e8":"#009100","4ab6bf17-6d89-44d3-9126-0556bc14b53e":"#23521d","77a4bab2-cb02-41f6-b93e-e67e845235eb":"#0d1a0a","31dba40f-3cbc-427b-9d65-47ab4d2d2041":"#f2dddb","51416342-c161-4e9a-883e-7c1603ef47d3":"#f78580","66ee654e-548f-4356-8c00-12f3543e4201":"#de0030","ffbc94e2-3cf6-4767-9dc9-139288d81d01":"#7e1a23","fe6b08b2-818c-4d37-afbc-432463f2943a":"#241010","9fb26702-3126-45f1-bb3d-e2011bad2d0b":"#f7f1d9","79d5bd39-eeda-42eb-b0cd-feadebd604ae":"#f2f0ef","c219adf1-8bb2-41f5-bbe3-a9c40c8b3416":"#f8f8f8","ae0d56de-13bf-4307-8b4c-ef1f9f83150f":"#f0f1f1","c61c9bb8-1e96-43aa-9781-5b8f03744a04":"#fbf7f4","8e6d6d5e-65aa-4560-966c-deccfad83d40":"#f8efe9","17b40767-5113-45b7-8f5b-8a471e08c1c4":"#f8f8f8","4a675e6e-59ac-4fd0-86f9-83d152a4de81":"#f1f1f1","4f6f257b-8f82-4590-bcaf-775fcd679e15":"#f4f8ff","55060c69-8758-4f0c-a47b-c1ffadfb1eef":"#e8f2ff"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"85b973e4-d3aa-488a-a51a-b46857eb5578":"4px","cbdf35a6-3cb7-40ff-9173-9d439a4ee44c":"8px","dde5df0d-aed6-478e-a8eb-6d366c8c0acd":"12px","b04f7b91-d654-4ec7-be88-2d9b35ba6706":"16px","5bf310de-20c3-4d8b-82c3-155524a54c73":"20px","c1649350-3da6-4278-82a8-7deab651eb7c":"24px","63b4483b-4615-4baa-a964-8bff8a9cda44":"2px","3d93797d-b77a-4e6b-a3fc-4e3f30db5a06":"4px","6421c117-56d7-4524-b06b-db34f7ef79b2":"8px","7e633198-c5f1-475e-9192-6aaf050dc742":"12px","190629ec-3bd7-48df-b0c9-87815b75a50c":"16px","2d53fb52-763b-4c4f-8634-2cd98b13736c":"20px","97ca0fa7-f469-4f54-9c9e-5a55b871a9d3":"32px","af03f47f-1dde-446b-ad48-182d04c04ad1":"40px","e280b05d-e7d3-474c-b3f4-c81cc00a363c":"2px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"01f46b21-33ae-45ef-ab9e-f94d63084094":"400 14px/22px var(--ww-default-font-family, sans-serif)","d5cd2cd7-b9bc-4574-a2ec-45360348dbc5":"500 38px/46px var(--ww-default-font-family, sans-serif)","97191bc9-2a3f-449c-8ca9-fa93d2644d15":"500 30px/40px var(--ww-default-font-family, sans-serif)","dc6f9dce-ecf2-4ee8-80dd-136f30ccf592":"500 24px/32px var(--ww-default-font-family, sans-serif)","83727d9d-90a6-40e1-a853-8f6159e382a5":"500 16px/24px var(--ww-default-font-family, sans-serif)","4f988de5-dc2c-4a28-a7a3-37ee150a0512":"600 14px/22px var(--ww-default-font-family, sans-serif)","727ecd44-56f8-46f0-a9fb-a2479d0816cc":"400 12px/20px var(--ww-default-font-family, sans-serif)","f92f9b1b-bc39-49c4-baef-de075d4b97d7":"600 16px/24px var(--ww-default-font-family, sans-serif)","10e3d5e8-cbe6-4b4d-89b6-d6ea3f749379":"600 12px/18px var(--ww-default-font-family, sans-serif)","5101998c-64ec-4c04-8c7e-a1ddde0f8623":"400 12px/18px var(--ww-default-font-family, sans-serif)","9a2b3920-3545-4ffe-844d-568a95852deb":"400 16px/22px var(--ww-default-font-family, sans-serif)","6ea7ad3c-3f0c-4090-8d87-401e9d9abadf":"400 12px/20px var(--ww-default-font-family, sans-serif)","2975dd0d-b142-4923-b416-2b8550192962":"500 20px/28px var(--ww-default-font-family, sans-serif)","945d955e-aa6b-4ab7-ac75-dd6c3a6845ef":"400 60px/60px var(--ww-default-font-family, sans-serif)","67e3231d-d625-439e-8bbf-d87c8c737d29":"400 48px/52px var(--ww-default-font-family, sans-serif)","188d5baa-af63-4276-948f-10b52e5da9fe":"400 36px/36px var(--ww-default-font-family, sans-serif)","13124ac7-3ba8-4067-8e32-9ccfd9ee9f5b":"400 24px/30px var(--ww-default-font-family, sans-serif)","e2bc33e5-0701-4efa-be4c-aa5765eb1cec":"400 18px/26px var(--ww-default-font-family, sans-serif)","55345b0e-6dd9-43ab-9b2b-00055d3a7128":"400 16px/24px var(--ww-default-font-family, sans-serif)","b953a925-3da0-4360-9d23-a8465aa0f6fc":"400 12px/16px var(--ww-default-font-family, sans-serif)","de667cd5-66dc-4366-9868-1143394b0369":"300 48px/52px var(--ww-default-font-family, sans-serif)","a482a247-9ee6-44e5-984d-d038cafb61bd":"300 24px/30px var(--ww-default-font-family, sans-serif)","c15aab10-21b1-48e5-89b0-7392d058efc1":"300 16px/24px var(--ww-default-font-family, sans-serif)","78510187-9f8c-4606-b51e-b4c3c97bf4b1":"300 12px/16px var(--ww-default-font-family, sans-serif)","616b6dd7-5df3-48d3-ae2a-805f6107c7fb":"500 60px/60px var(--ww-default-font-family, sans-serif)","3bfc6f1b-d1fb-443f-913b-43547e4828b2":"500 36px/36px var(--ww-default-font-family, sans-serif)","bc0cc592-d5b4-4220-bd21-ec55ca39a43e":"500 18px/26px var(--ww-default-font-family, sans-serif)","eecd919f-e992-429d-9cdd-0c60f2238e8a":"500 14px/20px var(--ww-default-font-family, sans-serif)","1452ac2c-fecb-4de4-be15-6a254766324e":"500 11px/16px var(--ww-default-font-family, sans-serif)","a2b6c782-437d-4b1b-92c5-e7415bb13dbb":"700 48px/52px var(--ww-default-font-family, sans-serif)","d987901d-fdc0-4c74-8e04-1d890250bc33":"700 24px/30px var(--ww-default-font-family, sans-serif)","ec203949-e1be-4113-ab8f-b76b8687d3e4":"700 16px/24px var(--ww-default-font-family, sans-serif)","5d31cb32-0ca1-4683-b195-8e36b94aa7ea":"700 12px/16px var(--ww-default-font-family, sans-serif)","a2aa98df-ed31-4a13-9b67-e17ab2068d0f":"400 14px/20px var(--ww-default-font-family, sans-serif)","a8d77408-3733-4efb-9bae-578aa6b47068":"400 11px/16px var(--ww-default-font-family, sans-serif)","da9758f1-2f04-4726-b170-06e5a991fc9f":"300 60px/60px var(--ww-default-font-family, sans-serif)","8a724c64-dddc-4967-871a-5ec0ec36feeb":"300 36px/36px var(--ww-default-font-family, sans-serif)","da40db23-bec0-4110-aa8a-1b3223e94a90":"300 18px/26px var(--ww-default-font-family, sans-serif)","dc69e5ff-123e-4c72-adf8-4b549c014385":"300 14px/20px var(--ww-default-font-family, sans-serif)","c9915584-0cbe-41fb-9883-4b1f0dbffe18":"300 11px/16px var(--ww-default-font-family, sans-serif)","ed62c494-675a-4caa-9d69-cb215eeeea9f":"500 48px/52px var(--ww-default-font-family, sans-serif)","2a348e4c-c25c-418d-84b9-d5ecd0861d7d":"500 24px/30px var(--ww-default-font-family, sans-serif)","287e8870-0b6f-4f6c-84dc-b7f62840448e":"500 16px/24px var(--ww-default-font-family, sans-serif)","b48aedd6-258e-4bd7-803b-ad5f8e705d14":"500 12px/16px var(--ww-default-font-family, sans-serif)","df79fb3b-a38d-47f4-a901-aba7b11b1c72":"700 60px/60px var(--ww-default-font-family, sans-serif)","71c6151c-8ac3-4254-a52e-221b6f9a1e36":"700 36px/40px var(--ww-default-font-family, sans-serif)","73b8fdb4-4a9b-4b3a-acde-62d8a35efae8":"700 18px/26px var(--ww-default-font-family, sans-serif)","a690481d-4914-4fb4-a074-a7505d8f2f68":"700 14px/20px var(--ww-default-font-family, sans-serif)","2e85f6c5-dd8d-4d9a-94c4-14d023793d9f":"700 11px/16px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes( //TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(process.env.VUE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
