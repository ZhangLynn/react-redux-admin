
import {Component} from 'react';
import PropTypes from 'prop-types';
export default class Bundle extends Component {
	constructor(props) {
		super(props);
		
	}
	static propTypes = {
		load:PropTypes.func,
		children:PropTypes.func,
	}
	componentWillMount() {
		this.load(this.props);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps);
		}
	}

	load = (props) => {
		this.setState({
			mod:null
		});
		props.load((mod) => {
			this.setState({
				mod:mod.default?mod.default:mod
			});
		});
	}

	render() {
		return this.props.children(this.state.mod);
	}
}