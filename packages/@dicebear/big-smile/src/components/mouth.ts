import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const mouth: ComponentGroup = {
  openedSmile: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M393.348 366.944c3.015 1.731 24.097-24.743 38.134-16.689 4.739 2.719 8.354 7.356 11.069 12.367 5.966 11.023 8.007 24.415 5.604 36.769-3.401 17.468-15.188 31.769-29.053 41.248-37.308 25.5-66.905 20.68-106.724 5.918-31.343-11.617-74.048-35.531-65.201-78.677 15.573-75.95 146.132-.958 146.171-.936Z" fill="#873C41"/>
  <path d="M285.336 362.088c10.139 6.294 22.484 6.943 33.556 4.433 2.118-.482 3.82 1.296 4.347 3.339 5.406 21.004 36.059 31.967 51.431 18.499 1.193-1.046 3.309-1.293 4.559-.108 8.296 7.871 21.589 10.006 31.351 4.682 13.784-7.52 13.717-28.647 9.962-43.36-12.149 3.711-24.903 18.686-27.195 17.366-.03-.019-80.177-46.04-122.373-29.438.895 10.2 5.579 19.135 14.362 24.587Z" fill="#fff"/>
  <path d="M400.293 443.788c-21.923-20.117-48.878-31.353-76.209-39.326-23.378-6.821-49.7-11.241-73.362-4.473 10.965 23.534 39.18 38.231 61.656 46.564 34.832 12.911 61.843 18.215 93.031 2.275-1.699-1.685-3.356-3.424-5.116-5.04Z" fill="#EE7E8B"/>
`,
  unimpressed: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M317 384a4 4 0 0 1 4-4h92a4 4 0 0 1 0 8h-92a4 4 0 0 1-4-4Z" fill="#592125"/>
`,
  gapSmile: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M393.348 366.944c3.015 1.731 24.097-24.743 38.134-16.689 4.739 2.719 8.354 7.356 11.069 12.367 5.966 11.023 8.007 24.415 5.604 36.769-3.401 17.468-15.188 31.769-29.053 41.248-37.308 25.5-66.905 20.68-106.724 5.918-31.343-11.617-74.048-35.531-65.201-78.677 15.573-75.95 146.132-.958 146.171-.936Z" fill="#873C41"/>
  <g fill="#fff">
    <path d="M318.892 366.521c-11.072 2.51-23.417 1.861-33.556-4.433-8.783-5.452-13.467-14.387-14.362-24.587 26.295-10.346 67.328 3.627 94.526 15.632L352.5 392c-12.847-2.11-25.973-9.366-29.261-22.14-.527-2.043-2.229-3.821-4.347-3.339ZM420.542 349.573C424.297 364.286 414.784 384.48 401 392c-13.936 8.746-31.337 6.972-37.5 1.803l11.17-36.467c11.36 5.401 18.668 9.597 18.677 9.603 2.292 1.319 15.046-13.655 27.195-17.366Z"/>
  </g>
  <path d="M400.293 443.788c-21.923-20.117-48.878-31.353-76.209-39.326-23.378-6.821-49.7-11.241-73.362-4.473 10.965 23.534 39.18 38.231 61.656 46.564 34.832 12.911 61.843 18.215 93.031 2.275-1.699-1.685-3.356-3.424-5.116-5.04Z" fill="#EE7E8B"/>
`,
  openSad: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M311.352 362.309c27.644-16.375 51.284-17.416 67.942-18.443 33.315-2.053 61.126 8.856 68.496 42.702 6.796 31.212-16.849 49.428-27.798 49.098-10.949-.33-13.245-12.311-39.311-12.898-26.066-.587-63.342 42.929-85.516 26.592-22.174-16.336-18.368-66.581 16.187-87.051Z" fill="#873C41"/>
  <mask id="mouthOpenSad-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="281" y="343" width="169" height="110">
    <path d="M311.392 362.279c27.68-16.349 51.351-17.389 68.03-18.415 33.359-2.052 61.205 8.837 68.583 42.624 6.803 31.159-16.874 49.345-27.837 49.016-10.963-.329-13.261-12.29-39.361-12.874-26.099-.585-63.426 42.858-85.628 26.551-22.202-16.307-18.388-66.466 16.213-86.902Z" fill="#873C41"/>
  </mask>
  <g mask="url(#mouthOpenSad-a)">
    <path d="M430.562 428.316c-26.128-16.77-55.844-23.513-85.364-26.834-25.25-2.841-53.099-2.689-76.218 8.49 15.472 22.237 11.901 47.503 36.494 52.06 38.113 7.06 102.027-7.496 131.246-29.447-2.047-1.429-4.06-2.922-6.158-4.269Z" fill="#EE7E8B"/>
    <path d="M299.12 376.93c12.241 2.281 24.49-1.761 34.306-8.393 1.876-1.27 4.204-.185 5.491 1.602 13.207 18.375 47.161 17.433 57.01-1.482.764-1.468 2.728-2.51 4.392-1.831 11.046 4.513 24.779 1.557 32.256-7.315 10.556-12.53 2.493-33.047-6.727-45.931-10.409 8.207-17.141 27.595-19.869 27.179-.037-.006-95.387-14.415-130.13 17.7 4.731 9.579 12.667 16.494 23.271 18.471Z" fill="#fff"/>
  </g>
`,
  teethSmile: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M385.305 380.359c9.354.259 18.323-2.416 26.048-10.444 4.042-4.197 8.141-6.507 13.94-2.917 13.885 8.598 17.154 30.077 13.422 44.479-4.098 15.803-16.442 28.544-30.667 36.853-38.279 22.36-67.64 17.328-106.811 3.035-30.833-11.248-72.517-33.921-61.951-72.943 13.085-48.315 69.477-25.118 101.296-12.084 13.51 5.539 29.618 13.602 44.723 14.021Z" fill="#fff"/>
  <mask id="mouthTeethSmile-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="237" y="349" width="204" height="115">
    <path d="M385.305 380.359c9.354.259 18.323-2.416 26.048-10.444 4.042-4.197 8.141-6.507 13.94-2.917 13.885 8.598 17.154 30.077 13.422 44.479-4.098 15.803-16.442 28.544-30.667 36.853-38.279 22.36-67.64 17.328-106.811 3.035-30.833-11.248-72.517-33.921-61.951-72.943 13.085-48.315 69.477-25.118 101.296-12.084 13.51 5.539 29.618 13.602 44.723 14.021Z" fill="#fff"/>
  </mask>
  <g mask="url(#mouthTeethSmile-a)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="m257.597 434.025 40.072-101.131 5.579 2.211-40.073 101.131-5.578-2.211Zm82.34 32.677 27.679-106.117 5.805 1.514-27.678 106.117-5.806-1.514Zm82.38-25.622-15.273-77.8 5.888-1.155 15.272 77.799-5.887 1.156Z" fill="#D1D3D4"/>
  </g>
`,
  awkwardSmile: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M351.722 357.794c35.705 2.283 57.778 0 64.899 0 29.986-4.491 42.802 48.435 5.16 76.206-11.238 8.291-16.781 7-40.781 7-24.024 0-49.993 8.95-64.5 4.863-41.122-11.585-48.343-41.355-44.653-57.739 4.992-22.164 15.153-34.467 79.875-30.33Z" fill="#fff"/>
  <mask id="mouthAwkwardSmile-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="271" y="357" width="174" height="90">
    <path d="M351.722 357.794c35.705 2.283 57.778 0 64.899 0 29.986-4.491 42.802 48.435 5.16 76.206-11.238 8.291-16.781 7-40.781 7-24.024 0-49.993 8.95-64.5 4.863-41.122-11.585-48.343-41.355-44.653-57.739 4.992-22.164 15.153-34.467 79.875-30.33Z" fill="#fff"/>
  </mask>
  <g mask="url(#mouthAwkwardSmile-a)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="m285.823 450.002 17.452-107.372 5.922.962-17.451 107.372-5.923-.962Zm77.403 14.257 4.276-109.584 5.996.234-4.277 109.584-5.995-.234Zm66.811-29.791-13.628-86.344 5.927-.935 13.627 86.343-5.926.936Z" fill="#D1D3D4"/>
  </g>
`,
  braces: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M393.348 366.944c3.015 1.731 24.097-24.743 38.134-16.689 4.739 2.719 8.354 7.356 11.069 12.367 5.966 11.023 8.007 24.415 5.604 36.769-3.401 17.468-15.188 31.769-29.053 41.248-37.308 25.5-66.905 20.68-106.724 5.918-31.343-11.617-74.048-35.531-65.201-78.677 15.573-75.95 146.131-.958 146.171-.936Z" fill="#873C41"/>
  <path d="M285.336 362.088c10.139 6.294 22.484 6.943 33.556 4.433 2.118-.482 3.82 1.296 4.347 3.339 5.406 21.004 36.059 31.967 51.431 18.499 1.193-1.046 3.309-1.293 4.559-.108 8.296 7.871 21.589 10.006 31.351 4.682 13.784-7.52 13.717-28.647 9.962-43.36-12.149 3.711-24.903 18.686-27.195 17.366-.03-.019-80.177-46.04-122.373-29.438.895 10.2 5.579 19.135 14.362 24.587Z" fill="#fff"/>
  <path d="M400.293 443.788c-21.923-20.117-48.878-31.353-76.209-39.326-23.378-6.821-49.7-11.241-73.362-4.473 10.965 23.534 39.18 38.231 61.655 46.564 34.833 12.911 61.844 18.215 93.032 2.275-1.699-1.685-3.356-3.424-5.116-5.04Z" fill="#EE7E8B"/>
  <mask id="mouthBraces-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="245" y="333" width="205" height="126">
    <path d="M393.348 366.944c3.015 1.731 24.097-24.743 38.134-16.689 4.739 2.719 8.354 7.356 11.069 12.367 5.966 11.023 8.007 24.415 5.604 36.769-3.401 17.468-15.188 31.769-29.053 41.248-37.308 25.5-66.905 20.68-106.724 5.918-31.344-11.617-74.049-35.531-65.201-78.677 15.573-75.95 146.131-.958 146.171-.936Z" fill="#873C41"/>
  </mask>
  <g mask="url(#mouthBraces-a)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M272.844 332.044a1.5 1.5 0 0 1 2.112-.2c2.284 1.891 6.653 4.45 11.565 7.084 4.421 2.371 9.169 4.742 13.005 6.658l1.145.572c15.445 7.723 39.245 15.91 51.669 20.184l2.149.74c14.464 4.987 32.248 10.41 51.467 10.418 2.765-.164 4.757-.406 6.887-1.006 2.156-.608 4.515-1.6 7.986-3.336a1.501 1.501 0 0 1 1.342 2.684c-3.529 1.764-6.087 2.855-8.514 3.539-2.442.689-4.69.947-7.569 1.116a1.293 1.293 0 0 1-.088.003c-19.765 0-37.964-5.573-52.489-10.582l-2.178-.75c-12.392-4.262-36.369-12.509-52.004-20.326l-1.146-.573c-3.831-1.914-8.617-4.305-13.079-6.697-4.88-2.616-9.511-5.307-12.06-7.416a1.5 1.5 0 0 1-.2-2.112Z" fill="#C4C4C4"/>
    <rect x="399.664" y="372" width="12" height="12" rx="2" transform="rotate(3.17 399.664 372)" fill="#A09E9E"/>
    <rect x="349.106" y="361" width="12" height="12" rx="2" transform="rotate(15 349.106 361)" fill="#A09E9E"/>
    <rect x="297.326" y="340" width="12" height="12" rx="2" transform="rotate(26.352 297.326 340)" fill="#A09E9E"/>
  </g>
`,
  kawaii: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M386.855 358.003a3.998 3.998 0 0 1 2.92 1.116c4.177 4.022 11.453 9.224 19.483 11.71 7.919 2.451 16.1 2.167 23.139-3.866a4 4 0 1 1 5.206 6.074c-9.761 8.367-21.08 8.416-30.711 5.434-7.751-2.4-14.709-6.822-19.63-10.889-36.527 37.664-82.45 26.485-101.226 15.903a4 4 0 0 1 3.928-6.97c17.423 9.821 60.594 20.081 94.06-17.187a3.997 3.997 0 0 1 2.831-1.325Z" fill="#592125"/>
`,
};