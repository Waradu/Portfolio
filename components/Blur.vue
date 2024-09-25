<template>
  <div class="bottom-blur-container blur-container">
    <div style="position: relative; width: 100%; height: 100%; border-radius: 0px;">
      <div
        style="position: absolute; inset: 0px; z-index: 1; backdrop-filter: blur(0.0625px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 2; backdrop-filter: blur(0.125px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 3; backdrop-filter: blur(0.25px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 4; backdrop-filter: blur(0.5px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 5; backdrop-filter: blur(1px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 6; backdrop-filter: blur(2px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 7; backdrop-filter: blur(4px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 8; backdrop-filter: blur(8px); mask-image: linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%); border-radius: 0px; pointer-events: none;">
      </div>
    </div>
  </div>
  <div class="top-blur-container blur-container">
    <div style="position: relative; width: 100%; height: 100%; border-radius: 0px;">
      <div
        style="position: absolute; inset: 0px; z-index: 1; backdrop-filter: blur(0.0625px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 2; backdrop-filter: blur(0.125px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 3; backdrop-filter: blur(0.25px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 4; backdrop-filter: blur(0.5px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 5; backdrop-filter: blur(1px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 6; backdrop-filter: blur(2px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 7; backdrop-filter: blur(4px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%); border-radius: 0px; pointer-events: none;">
      </div>
      <div
        style="position: absolute; inset: 0px; z-index: 8; backdrop-filter: blur(8px); mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%); border-radius: 0px; pointer-events: none;">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.top-blur-container {
  flex: 0 0 auto;
  height: 60px;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
}

.bottom-blur-container {
  bottom: 0px;
  flex: 0 0 auto;
  height: 60px;
  left: 0;
  pointer-events: none;
  position: fixed;
  width: 100%;
  z-index: 1;
}
</style>