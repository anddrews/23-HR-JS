import styles from './Text.module.css';
import Logo from '../../assets/react.svg';

export const Text = ({text, secondText}) => {
  return (
    <div className={styles.text}>
      <Logo />

        <h2 className={styles.textHeader}>{secondText ||'User input is:'}</h2>
        <p>{text}</p>
    </div>
  );
}

export class TextClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello world!',
      value: 5
    };
  }
  handleClick = () => {
    this.setState({text: 'Hello world!'});
  };
  render() {
    this.setState((old) => ({tmp: old.text + 'Hello world!'}), () => {})
    const {text, secondText} = this.props;
    return (
      <div className={styles.text}>
        <img src={logo} />
        <button onClick={this.props.increment(1)}>Click me</button>
        <h2 className={styles.textHeader}>{secondText ||'User input is:'}</h2>
        <p>{this.props.count}</p>
      </div>
    );
  }
}
const Div = styled('div')`background-color: red;`;


export const WrappedText = connect(
  state => ({count: state.counter.count}),
   (dispatch) => ({increment: (v) => dispatch({type: 'INCREMENT', payload: v})}))
   (TextClass);

   ({action, payload}) => {
    switch (action) {
      case 'INCREMENT':
        return {count: state.count + payload};
      case 'DECREMENT':
        return {count: state.count - payload};
      default:
        return state;
    }
   }