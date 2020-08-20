/**
 * Container Generator
 */
module.exports = function(plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'Add a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What your component's name?",
        default: 'Button',
      },
      {
        type: 'input',
        name: 'briefDescription',
        message: 'Describe it in 1 or 2 sentences:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{name}}/index.ts',
        templateFile: './templates/components/Basic/index.ts.hbs',
        force: true,
      },
      {
        type: 'add',
        path: './src/components/{{name}}/{{name}}.tsx',
        templateFile: './templates/components/Basic/Basic.tsx.hbs',
        force: true,
      },
      {
        type: 'add',
        path: './src/components/{{name}}/types.ts',
        templateFile: './templates/components/Basic/types.ts.hbs',
        force: true,
      },
      {
        type: 'add',
        path: './src/components/{{name}}/{{name}}.stories.tsx',
        templateFile: './templates/components/Basic/Basic.stories.tsx.hbs',
        force: true,
      },
    ],
  });
};
