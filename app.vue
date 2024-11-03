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
    input: { a: 1, b: { b1: 2 }, c: [1, 2, [3, 4], null, undefined]},
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
    input: function foo() { console.log(123)},
    type: 'function',
  },
]
</script>

<template>
  <h1>ESCSS-ESTest Error Demo🔥</h1>
  <div style="background: skyblue;">
    <p>
      type TYPES = 'undefined' | 'null' | 'array' | 'object' | 'boolean' | 'NaN' | 'number' | 'bigint' | 'string' |
      'symbol' | 'function'
    </p>
    <p>function ESTest(input: any, type: TYPES, msg?: string): void</p>
  </div>

  <div style="background: greenyellow;">
    <div>
      ESTest()
    </div>
    <button @click="ESTest()">See Error</button>
  </div>

  <div style="background: greenyellow;">
    <div>
      ESTest(999, 'number', [1, 2, 3])
    </div>
    <button @click="ESTest(999, 'number', [1, 2, 3])">See Error</button>
  </div>

  <div style="background: orange; margin: 15px 0;">
    <div>
      ESTest(NaN, 'number', 'my custom error message')
    </div>
    <button @click="ESTest(NaN, 'number', 'my custom error message')">See Error</button>
  </div>

  <div v-for="data in dataList" style="background: orange; margin: 15px 0;">
    <template v-if="data.input === 999">
      <div>
        ESTest({{ data.displayText }}, 'null')
      </div>
      <button @click="ESTest(data.input, 'null')">See Error</button>
    </template>

    <template v-else>
      <div>
        ESTest({{ data.displayText }}, 'number')
      </div>
      <button @click="ESTest(data.input, 'number')">See Error</button>
    </template>
  </div>
</template>
