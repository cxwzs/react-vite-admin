import { useState } from 'react'
import { Layout } from 'antd'
import Styles from './index.module.less'
import HeaderDraw from '@/components/Header'
import LeftMenu from '@/components/Menu'
import Log from '@/components/Logo'

const { Header, Footer, Sider, Content } = Layout

const PublicLayout = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Layout className={Styles.container}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Log />
                <LeftMenu />
            </Sider>
            <Layout>
                <Header>
                    <HeaderDraw />
                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default PublicLayout