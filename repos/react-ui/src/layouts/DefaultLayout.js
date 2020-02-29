import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;

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
    const {
      children,
    } = this.props;
    const {
      hasError,
    } = this.state;
    if (hasError) {
      // I can render any custom fallback UI
      return <h1>Something is wrong, I can feel it.</h1>;
    }
    return (
      <>
        <Layout>
          <Sider
            id="components-layout-demo-responsive"
            breakpoint="lg"
            collapsedWidth="0"
          >
            <div className="logo" />
            logo
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', textAlign: 'center' }}>
              search box
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {children}
              </div>
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
  children: PropTypes.object.isRequired,
};

const actions = {
};

export default withRouter(connect(
  mapStateToProps,
  actions,
)(DefaultLayout));
