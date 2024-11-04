<script setup>

const dataList = [
  {
    displayText: 'NaN',
    input: NaN,
    type: 'NaN',
  },
  {
    displayText: '[1, 2, [3, 4], { a: 1, b: { c: 2 } }, null, undefined]',
    input: [1, 2, [3, 4], { a: 1, b: { c: 2 } }, null, undefined],
    type: 'array',
  },
  {
    displayText: 'null',
    input: null,
    type: 'null',
  },
  {
    displayText: 'undefined',
    input: undefined,
    type: 'undefined',
  },
  {
    displayText: '999',
    input: 999,
    type: 'number',
  },
  {
    displayText: 'foo',
    input: 'foo',
    type: 'string',
  },
  {
    displayText: 'true',
    input: true,
    type: 'boolean',
  },
  {
    displayText: '{ a: 1, b: { b1: 2 }, c: [1, 2, [3, 4], null, undefined]}',
    input: { a: 1, b: { b1: 2 }, c: [1, 2, [3, 4], null, undefined] },
    type: 'object',
  },
  {
    displayText: '10n',
    input: 10n,
    type: 'bigint',
  },
  {
    displayText: 'Symbol("foo")',
    input: Symbol('foo'),
    type: 'Symbol',
  },
  {
    displayText: 'function foo() { console.log(123)}',
    input: function foo() { console.log(123) },
    type: 'function',
  },
]
</script>


<template>
  <main id="🌀Main">
    <h1 id="🌀Main__H1">ESCSS-ESTest Error Demo (check console)</h1>
    <h2 id="🌀Main__H2">isVisible: true <a  href="https://demo-estest-log-not-visible.netlify.app">(for the false version link)</a>; Modify it in the `node_modules`.</h2>
    <section id="🌀Main__X">
      <p id="🌀Main__X__P">
        type TYPES = 'undefined' | 'null' | 'array' | 'object' | 'boolean' | 'NaN' | 'number' | 'bigint' | 'string' |
        'symbol' | 'function'
      </p>
      <p id="🌀Main__X__P2">declare function ESTest(input: any, type: TYPES, msg?: string): void</p>
    </section>

    <section id="🌀Main__X2">
      <div id="🌀Main__X2__X">
        <h2>
          ESTest()
        </h2>
        <Button @click="ESTest()" />
      </div>

      <div id="🌀Main__X2__X">
        <h2>
          ESTest(999, 'number', [1, 2, 3])
        </h2>
        <Button @click="ESTest(999, 'number', [1, 2, 3])" />
      </div>

      <div id="🌀Main__X2__X">
        <h2 id="🌀Main__X2__X__P">
          ESTest(999, 'string', 'escss-estest library, any feed back to ...')
        </h2>
        <Button @click="ESTest(999, 'string', 'escss-estest library, any feed back to ...')" />
      </div>

      <div id="🌀Main__X2__X" v-for="data in dataList">
        <template v-if="data.input === 999">
          <h2>
            ESTest({{ data.displayText }}, 'null')
          </h2>
          <Button @click="ESTest(data.input, 'null')" />
        </template>

        <template v-else>
          <h2 d="🌀Main__X2__P">
            ESTest({{ data.displayText }}, 'number')
          </h2>
          <Button @click="ESTest(data.input, 'number')" />
        </template>
      </div>
    </section>

  </main>
</template>

<style lang="scss">
@include utils_base-preflight-v4-modify;
body {
  @include bg-amber-100;
}
#🌀Main__H1{
  @include text-3xl;
}

#🌀Main__H2 {
  @include bg-green-400;
}

#🌀Main {
  width: min(100%, 600px);
  height: 100vh;
  margin-inline: auto;
  text-align: center;
  display: grid;
  place-content: center;
  @include space-y-1;
  @include utils_reset;
}

#🌀Main__X {
  @include bg-sky-400;
  @include utils_reset;
}


#🌀Main__X2 {
  @include divide-y-2;
  @include divide-orange-600;
  @include utils_reset;
}

#🌀Main__X2__X {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include py-2;
  @include px-4;
  @include bg-orange-400;
}
</style>