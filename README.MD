Most `codesandbox` template does not support decorator

SyntaxError


  / src / index.js: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (9:3):

7 |
  8 | class Main extends React.Component {
> 9 |   @observable internalState = false;
     |   ^
  10 | constructor(props) {
  11 | super(props);
  12 | this.internalState = false;


  'decorators - legacy' is supported in typescript template. Not for javascript pageYOffset