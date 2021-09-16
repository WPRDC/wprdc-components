import * as vega from 'vega';

const bar: vega.Spec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  description: 'A simple bar chart across one or more series.',
  padding: 5,
  autosize: { type: 'fit', resize: true },
  signals: [
    {
      name: 'tooltip',
      value: {},
      on: [
        { events: 'rect:mouseover', update: 'datum' },
        { events: 'rect:mouseout', update: '{}' },
      ],
    },
  ],
  data: [
    { name: 'table', values: [] },
    { name: 'labels', values: [] },
    { name: 'highlight', values: {} },
  ],
  scales: [
    {
      name: 'yscale',
      type: 'band',
      domain: { data: 'table', field: 'variable' },
      range: 'height',
      padding: 0.15,
      round: true,
    },
    {
      name: 'xscale',
      domain: { data: 'table', field: 'value' },
      nice: true,
      range: 'width',
    },
    {
      name: 'color',
      type: 'ordinal',
      domain: { data: 'table', field: 'timeLabel' },
      range: {
        scheme: ['#D0E9F2', '#96C6D9', '#3F89A6', '#204959', '#0B1F26'],
      },
    },
    {
      name: 'labelMap',
      type: 'ordinal',
      domain: { data: 'labels', field: 'var' },
      range: { data: 'labels', field: 'label' },
    },
  ],

  axes: [
    {
      orient: 'bottom',
      scale: 'xscale',
      labelFont: 'Helvetica Neue',
      labelFontSize: 12,
      labelColor: 'var(--spectrum-global-color-gray-800)',
      ticks: false,
      labelOverlap: true,
      labelPadding: 4,
      grid: true,
      domain: false,
    },
    {
      orient: 'left',
      scale: 'yscale',
      labelFont: 'Helvetica Neue',
      labelFontSize: 12,
      ticks: false,
      labelPadding: 4,
      encode: {
        labels: {
          interactive: true,
          update: {
            text: { scale: 'labelMap', field: 'value' },
          },
        },
      },
    },
  ],

  marks: [
    {
      type: 'group',

      from: {
        facet: {
          data: 'table',
          name: 'facet',
          groupby: 'variable',
        },
      },

      encode: {
        enter: {
          y: { scale: 'yscale', field: 'variable' },
        },
      },

      signals: [{ name: 'height', update: "bandwidth('yscale')" }],

      scales: [
        {
          name: 'pos',
          type: 'band',
          range: 'height',
          domain: { data: 'facet', field: 'timeLabel' },
        },
      ],

      marks: [
        {
          name: 'bars',
          from: { data: 'facet' },
          type: 'rect',
          encode: {
            enter: {
              tooltip: {
                signal:
                  "scale('labelMap', datum.variable) + ': ' + format(datum.value, '1,')",
              },
              y: { scale: 'pos', field: 'timeLabel' },
              height: { scale: 'pos', band: 1 },
              x: { scale: 'xscale', field: 'value' },
              x2: { scale: 'xscale', value: 0 },
              fill: { scale: 'color', field: 'timeLabel' },
              cornerRadiusBottomRight: { value: 2 },
              cornerRadiusTopRight: { value: 2 },
            },
          },
        },
      ],
    },
  ],
};

export default bar;
