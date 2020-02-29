import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Input } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.warn(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // I can render any custom fallback UI
      return <h1>Something is wrong, I can feel it.</h1>;
    }
    return (
      <>
        <Layout>
          <Sider id="components-layout-demo-responsive" breakpoint="lg" collapsedWidth="0">
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <UserOutlined />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <VideoCameraOutlined />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <UploadOutlined />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <UserOutlined />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', textAlign: 'center' }}>
              <div style={{ padding: '16px' }}>
                <Search
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                  enterButton
                />
              </div>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>GQL Elasticsearch</Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = () => {
  return {
    // States called here.
  };
};

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired
};

const actions = {};

export default withRouter(connect(mapStateToProps, actions)(DefaultLayout));
