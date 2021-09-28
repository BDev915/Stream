import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    console.log(this.props.stream.title);
    return <div>Stream Edit</div>;
  }
}

const mapStateToProps = (reduxState, componentProps) => {
  return { stream: reduxState.streams[componentProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
