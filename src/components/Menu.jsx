import React from 'react';
import {
  UserOutlined,
  MailOutlined,
	TeamOutlined,
	PlayCircleOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const AntMenu = React.memo(() => {
	const items = [
		getItem(<Link to="/main">Моя страница</Link>, "1", <UserOutlined />),
		getItem(<Link to="/messenges">Мои сообщения</Link>, "2", <MailOutlined />),
		getItem(<Link to="/groups">Мои группы</Link>, "3", <TeamOutlined />),
		getItem(<Link to="/music">Музыка</Link>, "4", <PlayCircleOutlined />),
	];

	function getItem(label, key, icon, children) {
		return {
			key,
			icon,
			children,
			label,
		};
	}
	
	return (
		<Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />			
	)
})

export default AntMenu