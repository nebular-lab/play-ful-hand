
module.exports = {
  prompt: ({ inquirer, _args }) => {
    const questions = [
      {
        type: "input",
        name: "dir",
        message:
          "component以下のディレクトリ ex: common",
      },
      {
        type: "input",
        name: "name",
        message:
          "コンポーネント名は何ですか？(What is the name of component?) ex: Button",
      },
      {
        type: "confirm",
        name: "have_props",
        message: "Propsは持ちますか？(Is it have props?)",
        choices: ["Yes", "No"],
        initial: "Yes",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { dir, name, have_props } = answers;
      const { join } = require("node:path");

      const path = join(`src/app/component/${dir}`, "/", name);
      const type_annotate = have_props ? `FC<${name}Props>` : "FC";
      const props = have_props ? "(props)" : "()";
      return { ...answers, path, type_annotate, props };
    });
  },
};