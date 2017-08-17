import React from 'react';

class Profile extends React.Component {
  render () {
    return (
      <div className="column box profile">
        <div className="profileWrap">
          <img className="avatar" src="https://avatars3.githubusercontent.com/u/6791502?v=3&s=200"/>
          <div className="profileName">
          <h2 className="title is-4">Awesome Northcoder</h2>
          <h3 className="subtitle is-6">northcoder</h3>
          </div>
        </div>
        Northcoders News has all your latest updates.<br />
        <hr />
        <form>
          <div className="search">
            <div className="control">
              <input id="search" className="input" type="text" placeholder="Search" />
            </div>
          </div>
        </form>
        <hr />
      </div>
    );
  }
}

export default Profile;