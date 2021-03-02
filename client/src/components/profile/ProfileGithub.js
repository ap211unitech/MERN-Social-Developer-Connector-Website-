import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetGithubRepos } from '../../flux/actions/profile';

const ProfileGithub = ({ username, GetGithubRepos, repos }) => {
    useEffect(() => {
        GetGithubRepos(username);
    }, [GetGithubRepos, username]);

    return (
        <div className="profile-github">
            <h2 className="text-primary my-1">Github Repos</h2>
            {repos.slice(0, 5).map(repo => (
                <div key={repo.id} className="repo bg-white p-1 my-1">
                    <div>
                        <h4>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                            </a>
                        </h4>
                        <p>{repo.description}</p>
                    </div>
                    <div>
                        <ul>
                            <li className="badge badge-primary" style={{ width: '100px' }}>
                                Stars: {repo.stargazers_count}
                            </li>
                            <li className="badge badge-dark" style={{ width: '100px' }}>
                                Watchers: {repo.watchers_count}
                            </li>
                            <li className="badge badge-light" style={{ width: '100px' }}>Forks: {repo.forks_count}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

ProfileGithub.propTypes = {
    GetGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(mapStateToProps, { GetGithubRepos })(ProfileGithub);