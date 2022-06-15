import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import $ from "jquery";
import grapesjsBlockBootstrap from "grapesjs-blocks-bootstrap4";
import grapesjsPluginExport from "grapesjs-plugin-export";
import grapesjsStyleBg from "grapesjs-style-bg";

import {
  addEditorCommand,
  deviceManager,
  layerManager,
  panels,
  scripts,
  selectorManager,
  storageSetting,
  styleManager,
  styles,
  toggleSidebar,
  traitManager,
} from "./geditor_utils";
import tailwindComponent from "../plugins/tailwind";
import swiperComponent from "../plugins/swiper";

const geditorConfig = (assets, pageId) => {
  $(".panel__devices").html("");
  $(".panel__basic-actions").html("");
  $(".panel__editor").html("");
  $("#blocks").html("");
  $("#styles-container").html("");
  $("#layers-container").html("");
  $("#trait-container").html("");

  // Content for Preview
  const navbar = $("#navbar");
  const mainContent = $("#main-content");
  const panelTopBar = $("#main-content > .navbar-light");

  const editor = grapesjs.init({
    container: "#editor",
    blockManager: {
      appendTo: "#blocks",
      blocks:[
        {
          id:'ayyan',
          label:"ayyan",
          media:`text`,
          content:`
          <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div class="flex-1 flex justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
            <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
          </div>
          <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p class="text-sm text-gray-700">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">10</span>
                of
                <span class="font-medium">97</span>
                results
              </p>
            </div>
            <div>
              <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span class="sr-only">Previous</span>
                  <!-- Heroicon name: solid/chevron-left -->
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span class="sr-only">Next</span>
                  <!-- Heroicon name: solid/chevron-right -->
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
          `,
          activate: true,
        },

      ]
    },
    styleManager: styleManager,
    layerManager: layerManager,
    // storageManager:StorageManager,
    traitManager: traitManager,
    selectorManager: selectorManager,
    panels: panels,
    deviceManager: deviceManager,
    assetManager: { assets: assets, upload: false },
    storageManager: storageSetting(pageId),
    canvas: {
      styles: styles,
      scripts: scripts,
    },
    plugins: [
      tailwindComponent,
      gjsBlockBasic,
      swiperComponent,
      grapesjsBlockBootstrap,
      grapesjsPluginExport,
      grapesjsStyleBg,
    ],
    pluginsOpts: {
      tailwindComponent: {},
      gjsBlockBasic: {},
      swiperComponent: {},
      grapesjsBlockBootstrap: {},
      grapesjsPluginExport: {},
      grapesjsStyleBg: {},
    },
  });

  addEditorCommand(editor);

  editor.on("run:preview", () => {
    console.log("It will trigger when we click on preview icon");
    // This will be used to hide border
    editor.stopCommand("sw-visibility");
    // This will hide the sidebar view
    navbar.removeClass("sidebar");
    // This will make the main-content to be full width
    mainContent.removeClass("main-content");

    // This will hide top panel where we have added the button
    panelTopBar.addClass("d-none");
  });
  editor.on("stop:preview", () => {
    // This event is reverse of the above event.
    console.log("It will trigger when we click on cancel preview icon");
    editor.runCommand("sw-visibility");
    navbar.addClass("sidebar");
    mainContent.addClass("main-content");
    panelTopBar.removeClass("d-none");
  });
  editor.on("component:selected", (component) => {
    console.log("component :>> ", component);
    toggleSidebar(!!component);
  });

  setTimeout(() => {
    let categories = editor.BlockManager.getCategories();
    categories.each((category) => category.set("open", false));
  }, 1000);
  return editor;
};

export default geditorConfig;
