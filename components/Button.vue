<template>
  <button id="🔥Button">Click me</button>
</template>

<style lang="scss">
#🔥Button {
  @include duration-500;
  @include py-2;
  @include px-3;
  @include bg-blue-500;
  @include text-white;
  @include text-sm;
  @include font-semibold;
  @include rounded-md;
  @include shadow-lg;
  @include shadow-blue-500(0.5);

  &:hover {
    @include bg-red-500;
  }

  &:focus {
    @include outline-none;
  }

  @include utils_reset;
}
</style>