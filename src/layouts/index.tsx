import { useState } from 'react'
import { Layout } from 'antd'
import Styles from './index.module.less'
import HeaderDraw from '@/components/Header'
import LeftMenu from '@/components/Menu'
import Logo from '@/components/Logo'

const { Header, Footer, Sider, Content } = Layout

const PublicLayout = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Layout className={Styles.container}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Logo />
                <LeftMenu collapsed={collapsed} />
            </Sider>
            <Layout>
                <Header>
                    <HeaderDraw />
                </Header>
                <Content>Content</Content>
                {/* <Footer>Footer</Footer> */}
            </Layout>
        </Layout>
    )
}

export default PublicLayout