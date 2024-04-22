interface IClassname {
  [key: string]: boolean;
}

const className = (classes: IClassname) => Object.entries(classes)
  .filter(([, value]) => value)
  .map(([key]) => key)
  .join(' ');

export default className;
