import React from 'react';
import { Layout } from "antd";
import css from "../styles/header.module.css";

const { Header } = Layout;
const AntHeader = React.memo(() => {
	return (
		<Header className={css.header}>
        <div className={css.header_menu}>
          <div className="underline-offset-1">ЛОГО</div>
          <div>Какой нибудь поиск</div>
          <div>Профиль</div>
        </div>
    </Header>
	)
})

export default AntHeader