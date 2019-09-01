/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import moment from 'moment';
import Header from '../../ui/Header'
import Sidebar from '../../ui/Sidebar'
import Footer from '../../ui/Footer'
import { fetchUserListRequest } from '../../../state/actions/userListActions'
import NoRecordFound from '../../ui/NoRecordFound'

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.fetchUserListRequest()
    }

    render() {
        console.log("User List props==>>>", this.props)
        return (
            <div>
                <main>
                    <Sidebar />
                    <div className='userList'>
                        <div className="row justify-content-center">
                            <div className="col-sm-4">
                                <h2 className="secondary-title yellow-text">
                                    Uset List
                                </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {!this.props.userListData.isLoading &&
                                this.props.userListData.userList &&
                                this.props.userListData.userList.length ? (
                                    <div className="col-sm-7">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="sm-case">
                                                        <div>First name</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-right">
                                                        <div>Last Name</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-right">
                                                        <div>Email</div>
                                                    </th>
                                                    <th scope="col" className="sm-case text-right">
                                                        <div>Status</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.userListData.userList.map((item, index) => {
                                                    return (
                                                        <tr key={`tablelist${index + 1}`}>
                                                            <td>{item.firstname}</td>
                                                            <td>{item.lastname}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.status}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div class="col-sm-4">
                                        <NoRecordFound
                                            isloading={
                                                this.props.userListData.isLoading
                                            }
                                            loadingSizeCLass="sm-loading-block"
                                        />
                                    </div>
                                )}
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-45 mt-5 pt-4">
                                {
                                    //     this.props.trends &&
                                    // this.props.trends.current &&
                                    // this.props.trends.current.data &&
                                    // Object.keys(this.props.trends.current.data)
                                    //     .length > 0
                                    //     ? (
                                    // <HorizontalBar
                                    //     data={this.threadData()}
                                    //     width={270}
                                    //     orientation="right"
                                    //     config={VERTICAL_BAR[0]}
                                    //     show="topThreatInEsoc"
                                    //     style={threadStyle}
                                    //     yAxisKey="name"
                                    //     barDataKey="threat"
                                    //     yAxisWidth={120}
                                    //     clickHandler={this.topThreadHandler}
                                    // />
                                    // ) : (
                                    // <NoRecordFound
                                    //     isloading={
                                    //         this.props.trends.isLoading
                                    //     }
                                    //     loadingSizeCLass="sm-loading-block"
                                    // />
                                    // )
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login.loginData,
        userListData: state.userList.userListData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserListRequest: data => dispatch(fetchUserListRequest(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
