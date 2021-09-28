import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    //console.log('stream :=>', stream);
    if (stream && stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
    return null;
  };
  renderList = () => {
    if (this.props.streams && this.props.streams.length > 0) {
      console.log('stream before map :=> ', this.props.streams);
      return this.props.streams.map((stream) => {
        if (stream) {
          return (
            <div className="item" key={stream.id}>
              {this.renderAdmin(stream)}
              <i className="large middle aligned icon camera"></i>
              <div className="content">
                {stream.title}
                <div className="description"> {stream.description}</div>
              </div>
            </div>
          );
        }
      });
    }
    return null;
  };

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className="ui button primary" to="streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <h2> Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (reduxState, componentProps) => {
  // convert object into the array before passing redux state into component as props
  return {
    streams: Object.values(reduxState.streams),
    currentUserId: reduxState.auth.userId,
    isSignedIn: reduxState.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
