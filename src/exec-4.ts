(() => {
  interface Config {
    color?: string;
    width: number;
    height: number;

    [propName: string]: any;
  }

  const createConfig = (config: Config): { color?: string, area: number } => {
    return {
      color: config.color,
      area: config.width * config.height,
    }
  }

  const myConfig = createConfig({
    color: 'RED',
    width: 20,
    height: 10,
  } as Config);

  const myConfig1 = createConfig(<Config> {
    color: 'BLUE',
    width: 40,
    height: 50,
  })

  console.log(myConfig);
  console.log(myConfig1);
})();