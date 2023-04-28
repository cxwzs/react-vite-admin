import { Avatar, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Styles from './index.module.less'
import type { MenuProps } from 'antd'
const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                退出登录
            </a>
        ),
    }
]

const Header = () => {
    return (
        <div className={Styles.user}>
            <Dropdown menu={{ items }}>
                <div className={Styles.userinfo}>
                    <div className={Styles.usename}>管理员</div>
                    <Avatar style={{ backgroundColor: '#f56a00' }} size={48} icon={<UserOutlined />} />
                </div>
            </Dropdown>
        </div>
    )
}

export default Header