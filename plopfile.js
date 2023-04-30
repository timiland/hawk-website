module.exports = (plop) => {
  plop.setGenerator('Create a new component', {
    description: 'Create a component with Story.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter component name:',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Please choose component type:',
        choices: ['Atoms', 'Molecules', 'Organisms'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{lowerCase type}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
    ],
  });
};
