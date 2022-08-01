import React from 'react'
import { Layout } from "antd";

const { Sider } = Layout;
function AntSider({children}) {
	const [collapsed, setCollapsed] = React.useState(false);
	return (
		<Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
					{children}
					</ Sider>
	)
}

export default AntSider